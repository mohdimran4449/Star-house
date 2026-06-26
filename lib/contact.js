const DEFAULT_FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

function getFormspreeEndpoint() {
  return process.env.FORMSPREE_ENDPOINT || DEFAULT_FORMSPREE_ENDPOINT;
}

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8"
  });
  res.end(JSON.stringify(payload));
}

function parseJsonBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";

    req.on("data", chunk => {
      body += chunk;

      if (body.length > 1_000_000) {
        reject(new Error("Request body is too large"));
        req.destroy();
      }
    });

    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        reject(new Error("Invalid JSON body"));
      }
    });

    req.on("error", reject);
  });
}

function cleanValue(value) {
  return typeof value === "string" ? value.trim() : "";
}

function buildFormPayload(input) {
  const payload = {
    fullName: cleanValue(input.fullName),
    companyName: cleanValue(input.companyName),
    email: cleanValue(input.email),
    country: cleanValue(input.country),
    phone: cleanValue(input.phone),
    product: cleanValue(input.product),
    message: cleanValue(input.message),
    _subject: cleanValue(input._subject) || "New Enquiry From STAR HOUSE Website"
  };

  if (!payload.fullName || !payload.email) {
    const error = new Error("Full name and email are required");
    error.statusCode = 400;
    throw error;
  }

  return payload;
}

async function forwardToFormspree(payload) {
  const endpoint = getFormspreeEndpoint();

  if (endpoint === DEFAULT_FORMSPREE_ENDPOINT) {
    const error = new Error("Formspree endpoint is not configured");
    error.statusCode = 500;
    throw error;
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  const result = await response.json().catch(() => ({}));

  if (!response.ok) {
    const error = new Error(result.error || result.message || "Formspree request failed");
    error.statusCode = response.status;
    throw error;
  }

  return result;
}

async function handleContactRequest(req, res) {
  if (req.method !== "POST") {
    sendJson(res, 405, {
      ok: false,
      error: "Method not allowed"
    });
    return;
  }

  try {
    const body = await parseJsonBody(req);
    const payload = buildFormPayload(body);

    await forwardToFormspree(payload);

    sendJson(res, 200, {
      ok: true
    });
  } catch (error) {
    const statusCode = error.statusCode || 500;

    console.error("Contact form failed:", error);

    sendJson(res, statusCode, {
      ok: false,
      error: statusCode >= 500 ? "Unable to send enquiry" : error.message
    });
  }
}

module.exports = {
  buildFormPayload,
  handleContactRequest
};
