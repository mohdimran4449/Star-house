const products = [
  {
    slug: "equestrian",
    title: "Equestrian Equipment",
    icon: "♞",
    homeImage: "/images/products/Equestrian_home_page.jpg",
    heroImage: "/images/Equestrian.jpeg",
    summary: "Bridles, halters, reins, girths, browbands, saddle accessories and stable essentials.",
    description: "Premium equestrian leather equipment manufactured with durable hides, reliable hardware and refined finishing for brands, wholesalers and riding communities.",
    buyerTitle: "Equestrian leatherwork made for serious riding brands.",
    buyerCopy: "Our equestrian range is built around strength, fit, and finish. We support buyers with consistent construction, neat stitching, dependable hardware, and product development across everyday stable essentials and premium riding equipment.",
    highlights: ["Strong leather selection for daily riding use", "Clean edge finishing and reinforced stress points", "Hardware, color, logo and packaging customization"],
    items: [
      ["Bridle", "/images/products/Bridle_.jpg"],
      ["Rugs", "/images/products/Rugs.jpeg"],
      ["Girth", "/images/products/Girth_.jpg"],
      ["Breast Plate", "/images/products/BreastPlate_.jpeg"],
      ["Halter", "/images/products/Halter_.webp"],
      ["Saddle Pad", "/images/products/SaddlePad_.avif"],
      ["Horse Boot", "/images/products/HorseBoot_.jpg"]
    ]
  },
  {
    slug: "leather-belts",
    title: "Leather Belts",
    icon: "▭",
    homeImage: "/images/LeatherBelt/LeatherBeltHome.webp",
    heroImage: "/images/LeatherBelts.jpeg",
    summary: "Formal belts, casual belts, fashion belts and custom belt programs.",
    description: "Full-grain and finished leather belts designed for fashion labels and distributors with consistent sizing, finishing and hardware quality.",
    buyerTitle: "Leather belts with dependable sizing, finish, and retail appeal.",
    buyerCopy: "From classic formal belts to fashion-led seasonal styles, we develop belt programs that feel refined in hand and consistent across production. Buyers can specify leather, buckle, stitching, width, color, embossing and packing details.",
    highlights: ["Formal, casual and fashion belt development", "Consistent sizing, punching and edge finishing", "Custom buckle, keeper, logo and packaging options"],
    items: [
      ["Belt 1", "/images/LeatherBelt/Belt1.jpeg"],
      ["Belt 2", "/images/LeatherBelt/Belt2.jpeg"],
      ["Belt 3", "/images/LeatherBelt/Belt3.jpeg"],
      ["Belt 4", "/images/LeatherBelt/Belt4.jpeg"],
      ["Belt 5", "/images/LeatherBelt/Belt5.jpeg"],
      ["Belt 6", "/images/LeatherBelt/Belt6.jpeg"],
      ["Belt 7", "/images/LeatherBelt/Belt7.jpeg"],
      ["Belt 8", "/images/LeatherBelt/Belt8.jpeg"]
    ]
  },
  {
    slug: "dog-collar",
    title: "Dog Accessories",
    icon: "⌁",
    homeImage: "/images/DogCollar/DogCollarHome.jpeg",
    heroImage: "/images/DogCollor.jpeg",
    summary: "Leather collars, leads, personalized collars, harness-inspired sets and custom accessories.",
    description: "Comfortable and robust leather dog accessories made with clean edge finishing, reinforced stitching and brand-ready packaging options.",
    buyerTitle: "Pet accessories that balance comfort, strength, and style.",
    buyerCopy: "Our dog accessory range is designed for brands that need products to look polished and hold up in daily use. We focus on smooth edges, reliable fittings, comfortable proportions, and flexible detailing for private label collections.",
    highlights: ["Collars, leads and coordinated accessory sets", "Smooth edges and reinforced stitching for comfort", "Size, color, hardware and personalization options"],
    items: [
      ["Dog Collar 1", "/images/DogCollar/DogCollar1.jpeg"],
      ["Dog Collar 2", "/images/DogCollar/DogCollar2.jpeg"],
      ["Dog Collar 3", "/images/DogCollar/DogCollar3.jpeg"],
      ["Dog Collar 4", "/images/DogCollar/DogCollar4.jpeg"],
      ["Dog Collar 5", "/images/DogCollar/DogCollar5.jpeg"]
    ]
  },
  {
    slug: "key-chains",
    title: "Key Chains",
    icon: "◇",
    homeImage: "/images/KeyChains/KeyChainsHome.jpeg",
    heroImage: "/images/KeyChains.jpeg",
    summary: "Leather key rings, fobs, logo-stamped accessories and gift-ready small leather goods.",
    description: "Compact leather accessories that combine practical utility with refined details for gifting, retail and brand merchandising.",
    buyerTitle: "Small leather goods with high perceived value.",
    buyerCopy: "Key chains and leather fobs are compact products, but details matter. We create clean, giftable accessories with careful cutting, logo placement, hardware matching, and finishing suitable for retail, corporate gifting and brand merchandising.",
    highlights: ["Logo-stamped, debossed and stitched styles", "Metal fitting and leather color coordination", "Compact gifting and merchandising programs"],
    items: [
      ["Key Chain 1", "/images/KeyChains/KeyChain1.jpeg"],
      ["Key Chain 2", "/images/KeyChains/KeyChain2.jpeg"],
      ["Key Chain 3", "/images/KeyChains/KeyChain3.jpeg"],
      ["Key Chain 4", "/images/KeyChains/KeyChain4.jpeg"],
      ["Key Chain 5", "/images/KeyChains/KeyChain5.jpeg"],
      ["Key Chain 6", "/images/KeyChains/KeyChain6.jpeg"]
    ]
  },
  {
    slug: "leather",
    title: "Leather Goods",
    icon: "▣",
    homeImage: "/images/Leather/LeatherHome.jpeg",
    heroImage: "/images/Leather.jpeg",
    summary: "Wallets, holders, travel accessories, leather blanks and custom small leather goods.",
    description: "A flexible leather goods range for global brands, including custom material, construction, finishing, logo and packaging development.",
    buyerTitle: "Leather goods developed around your brand requirements.",
    buyerCopy: "We support buyers looking for wallets, holders, travel accessories, leather blanks and custom small goods. Each program can be shaped around material feel, construction method, logo treatment, stitching, finish and presentation.",
    highlights: ["Wallets, holders, travel pieces and custom goods", "Material, construction and finish development", "Logo, lining, color and presentation customization"],
    items: [
      ["Leather 1", "/images/Leather/Leather1.jpg"],
      ["Leather 2", "/images/Leather/Leather2.jpeg"],
      ["Leather 3", "/images/Leather/Leather3.jpeg"],
      ["Leather 4", "/images/Leather/Leather4.jpeg"],
      ["Leather 5", "/images/Leather/Leather5.jpeg"],
      ["Leather 6", "/images/Leather/Leather6.jpeg"]
    ]
  }
];

const processSteps = [
  ["Premium Leather Selection", "/images/Leather.jpeg"],
  ["Pattern & Precision Cutting", "/images/CreativeWorker.png"],
  ["Machine Stitching", "/images/ProductionMachine.png"],
  ["Hardware Assembly", "/images/gallery/BreastPlate.jpg"],
  ["Finished Goods Inspection", "/images/LeatherBelt/Belt3.jpeg"],
  ["Packaging & Dispatch", "/images/KeyChains.jpeg"]
];

const partnerItems = [
  ["♢", "Experienced Manufacturer", "Since 1985, delivering excellence and consistency to global markets."],
  ["◎", "Export Expertise", "We understand international standards, documentation and export requirements."],
  ["□", "Flexible Production", "Low MOQ to bulk orders with scalable production support."],
  ["✺", "Premium Quality", "Reliable hardware, fine leather and strict quality control at every step."],
  ["♙", "Long Term Partnership", "Transparent communication and dependable delivery for growing brands."]
];

const app = document.getElementById("app");

if (!app) {
  throw new Error('Missing <main id="app"></main> element.');
}

const CONTACT_ENDPOINT = "/api/contact";

let routeLock = false;

function productPath(product) {
  return `/${product.slug}`;
}

function resetScroll() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "auto"
  });
}

function beginTransition() {
  if (routeLock) return false;
  routeLock = true;
  document.body.classList.add("is-routing");
  app.classList.add("is-leaving");
  app.classList.remove("is-entered", "is-entering");
  return true;
}

function finishTransition() {
  requestAnimationFrame(() => {
    app.classList.remove("is-leaving");
    resetScroll();

    requestAnimationFrame(() => {
      app.classList.add("is-entering");
      requestAnimationFrame(() => {
        app.classList.remove("is-entering");
        app.classList.add("is-entered");
        document.body.classList.remove("is-routing");
        routeLock = false;
      });
    });
  });
}

function renderHome() {
  app.innerHTML = `
    <section class="hero" id="home">
      <div class="hero-content">
        <span class="eyebrow">Manufacturer & Exporter Since 1985</span>
        <h1>Crafting Premium Leather Goods <span>For Global Brands</span></h1>
        <p>We manufacture and export high quality equestrian products, leather accessories and pet accessories for wholesalers, importers and leading brands across Europe and worldwide.</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#products">Explore Products →</a>
          <a class="btn btn-ghost" href="#catalog">Request Catalog ⇩</a>
        </div>
      </div>
    </section>

    <section class="stats" aria-label="Company highlights">
      <div class="stats-grid">
        ${[
          ["▣", "1985", "Established"],
          ["◎", "30+", "Years Experience"],
          ["▤", "40+", "Countries Exported"],
          ["◇", "Custom", "Design Development"],
          ["✺", "Quality", "Controlled Production"]
        ].map(([icon, value, label]) => `
          <div class="stat"><span class="stat-icon">${icon}</span><strong>${value}</strong><span>${label}</span></div>
        `).join("")}
      </div>
    </section>

    <section class="section" id="products">
      <div class="section-header">
        <span class="eyebrow">Our Product Range</span>
        <h2>Premium Leather. Endless Possibilities.</h2>
      </div>
      <div class="product-grid">
        ${products.map(product => `
          <article class="product-card">
            <img src="${product.homeImage}" alt="${product.title}">
            <div class="product-body">
              <span class="product-icon">${product.icon}</span>
              <h3>${product.title}</h3>
              <p>${product.summary}</p>
              <a class="text-link" href="${productPath(product)}">View Products →</a>
            </div>
          </article>
        `).join("")}
      </div>
    </section>

    <section class="section process" id="manufacturing">
      <div class="process-inner">
        <div class="split-copy">
          <span class="eyebrow">From Leather Hide To</span>
          <h2>Finished Product</h2>
          <p>Every piece we create is the result of traditional craftsmanship, modern technology and strict quality control.</p>
          <a class="btn btn-ghost" href="/social-responsibility">Social Responsibility →</a>
        </div>
        <div class="steps">
          ${processSteps.map(([title, image]) => `
            <article class="step">
              <div class="step-image">
                <img src="${image}" alt="${title}">
              </div>
              <h3>${title}</h3>
            </article>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="section dark-band">
      <div class="section-header">
        <span class="eyebrow">Why Partner With Star House</span>
        <h2>Your Reliable Manufacturing Partner</h2>
      </div>
      <div class="partner-grid">
        ${partnerItems.map(([icon, title, copy]) => `
          <article class="partner-item">
            <div class="stat-icon">${icon}</div>
            <h3>${title}</h3>
            <p>${copy}</p>
          </article>
        `).join("")}
      </div>
    </section>

    <section class="section factory" id="about">
      <div class="factory-inner">
        <div class="factory-copy">
          <span class="eyebrow">Our Factory</span>
          <h2>Built on Craftsmanship. Focused on Quality.</h2>
          <p>Our modern production facility is equipped with skilled artisans and advanced machinery to produce world-class leather goods.</p>
          <a class="btn btn-ghost" href="/social-responsibility">Our Responsibility →</a>
        </div>
        <div class="factory-mosaic">
          <img src="/images/Factory.png" alt="Star House factory floor">
          <img src="/images/ProductionMachine.png" alt="Leather production machinery">
          <img src="/images/CreativeWorker.png" alt="Artisan working on leather">
          <img src="/images/About.png" alt="Leather workshop details">
          <img src="/images/gallery/Girth.jpg" alt="Leather equipment detail">
        </div>
      </div>
    </section>

    <section class="catalog-strip" id="catalog">
      <div class="catalog-inner">
        <div class="catalog-cover">
          <div class="catalog-book">
            <img src="/PHOTO-2025-05-13-16-20-20.jpg" alt="STAR HOUSE">
            <span>Product Catalog 2026</span>
          </div>
        </div>
        <div class="catalog-copy">
          <span class="eyebrow">Catalog Provided On Quotation</span>
          <h2>Request product details for your buying requirement.</h2>
          <p>Share the category, quantity, material preference and destination market. Our team will respond with the right product information and quotation support.</p>
          <a class="btn btn-primary" href="/contact">Request Catalog & Quotation →</a>
        </div>
      </div>
    </section>
  `;
}

function renderCollection(product) {
  app.innerHTML = `
    <section class="page-hero" style="--hero-image: url('${product.heroImage}')">
      <div class="page-hero-inner">
        <span class="eyebrow">Star House Product Range</span>
        <h1>${product.title}</h1>
        <p>${product.description}</p>
        <a class="btn btn-primary" href="/contact">Request Quotation →</a>
      </div>
    </section>

    <section class="section collection">
      <div class="product-detail">
        <div>
          <span class="eyebrow">For Buyers & Private Labels</span>
          <h2>${product.buyerTitle}</h2>
          <p>${product.buyerCopy}</p>
        </div>
        <div class="product-highlights">
          ${product.highlights.map(item => `<span>${item}</span>`).join("")}
        </div>
      </div>

      <div class="section-header gallery-header">
        <span class="eyebrow">Product Gallery</span>
        <h2>Styles and finishes we can develop for your range.</h2>
      </div>

      <div class="collection-grid">
        ${product.items.map(([name, image]) => `
          <article class="collection-card">
            <img src="${image}" alt="${name}">
          </article>
        `).join("")}
      </div>

      <div class="quality-note">
        <span class="eyebrow">Quotation Support</span>
        <h2>Share your target quantity, finish, logo and packing requirements.</h2>
        <p>Our team will help you review suitable materials, construction details and pricing for your buying program.</p>
        <a class="btn btn-primary" href="/contact">Send Product Enquiry →</a>
      </div>
    </section>
  `;
}

function renderSocialResponsibilityPage() {
  app.innerHTML = `
    <section class="page-hero" style="--hero-image: url('/images/Factory.png')">
      <div class="page-hero-inner">
        <span class="eyebrow">Social Responsibility</span>
        <h1>Responsible leather manufacturing starts with people.</h1>
        <p>STAR HOUSE believes good products should come from a workplace that respects skill, safety, community and long-term relationships.</p>
      </div>
    </section>

    <section class="section responsibility-section">
      <div class="responsibility-intro">
        <div>
          <span class="eyebrow">Our Commitment</span>
          <h2>We build responsibly, one workshop decision at a time.</h2>
        </div>
        <p>As a family-led leather goods manufacturer, our responsibility is practical: create steady work, maintain a respectful environment, reduce waste where possible, and support buyers who care about reliable production values.</p>
      </div>

      <div class="responsibility-grid">
        <article class="responsibility-card">
          <span>01</span>
          <h3>Worker Dignity</h3>
          <p>We value trained hands and disciplined craft. Our focus is on respectful supervision, skill development and a workplace where people can take pride in their work.</p>
        </article>
        <article class="responsibility-card">
          <span>02</span>
          <h3>Safer Production Habits</h3>
          <p>Clear work areas, practical equipment handling and quality checkpoints help create a more organized production floor for the team and for every buyer program.</p>
        </article>
        <article class="responsibility-card">
          <span>03</span>
          <h3>Material Respect</h3>
          <p>Leather is a valuable natural material. We plan cutting, reuse suitable offcuts and encourage thoughtful product development to reduce avoidable waste.</p>
        </article>
        <article class="responsibility-card">
          <span>04</span>
          <h3>Community Mindset</h3>
          <p>Our business grows from Kanpur's leather craft ecosystem. We aim to contribute through stable relationships with workers, suppliers and long-term customers.</p>
        </article>
      </div>

      <div class="responsibility-band">
        <div>
          <span class="eyebrow">For Buyers</span>
          <h2>Partner with a manufacturer that treats responsibility as everyday practice.</h2>
          <p>Tell us what your brand values most: material choices, finishing standards, packaging approach or production transparency. We will help you align the product plan accordingly.</p>
        </div>
        <a class="btn btn-primary" href="/contact">Discuss Your Program →</a>
      </div>

      <div class="factory-mosaic responsibility-mosaic">
        <img src="/images/CreativeWorker.png" alt="Leather artisan at work">
        <img src="/images/ProductionMachine.png" alt="Production equipment">
        <img src="/images/About.png" alt="Workshop details">
        <img src="/images/Leather.jpeg" alt="Leather material">
        <img src="/images/Factory.png" alt="Factory floor">
      </div>
    </section>
  `;
}

function renderContactPage() {
  app.innerHTML = `
    <section class="page-hero" style="--hero-image: url('/images/Home.png')">
      <div class="page-hero-inner">
        <span class="eyebrow">Contact STAR HOUSE</span>
        <h1>Start Your Leather Goods Enquiry</h1>
        <p>Share your product requirement, target quantity and market. Our team will help shape the right buying plan.</p>
      </div>
    </section>

    <section class="section contact-section">
      <div class="contact-layout">
        <div class="contact-panel">
          <span class="eyebrow">Buyer Support</span>
          <h2>Tell us what you want to produce.</h2>
          <p>For faster response, include product category, quantity, material preference, logo or packaging needs, and destination country.</p>
          <div class="contact-list">
            <div>
              <strong>Address</strong>
              <span>Plot No. 57-64 Near Durga Mandir, Wajidpur, Jajmau, Kanpur, U.P. INDIA 208010</span>
            </div>
            <div>
              <strong>Phone</strong>
              <a href="tel:+919695100777">+91 9695100777</a>
              <a href="tel:+919559700777">+91 9559700777</a>
              <a href="tel:+919793700777">+91 9793700777</a>
            </div>
            <div>
              <strong>Email</strong>
              <a href="mailto:info@star-house.in">info@star-house.in</a>
            </div>
          </div>
        </div>

        <div class="contact-form-card">
          <form class="contact-form">
          <input
    type="hidden"
    name="_subject"
    value="New Enquiry From STAR HOUSE Website"
  >
  <div class="form-row">
    <input name="fullName" aria-label="Full Name" placeholder="Full Name" required>
    <input name="companyName" aria-label="Company Name" placeholder="Company Name">
  </div>

  <div class="form-row">
    <input name="email" type="email" aria-label="Email Address" placeholder="Email Address" required>
    <input name="country" aria-label="Country" placeholder="Country">
  </div>

  <div class="form-row">
    <input name="phone" aria-label="Phone Number" placeholder="Phone Number">
    <select name="product" aria-label="Interested Products">
      <option value="">Interested Products</option>
      ${products.map(product => `<option>${product.title}</option>`).join("")}
    </select>
  </div>

  <textarea name="message" aria-label="Requirement Details" placeholder="Tell us about your quantity, materials, finishing, logo or packaging requirements"></textarea>

  <button class="btn btn-primary" type="submit">Send Enquiry →</button>
  <small>We respect your privacy. Your information will not be shared.</small>
</form>
        </div>
      </div>
    </section>
  `;
}

function renderCurrentRoute() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  const product = products.find(item => `/${item.slug}` === path);

  if (path === "/") {
    renderHome();
  } else if (product) {
    renderCollection(product);
  } else if (path === "/social-responsibility" || path === "/manufacturing") {
    if (path === "/manufacturing") history.replaceState({}, "", "/social-responsibility");
    renderSocialResponsibilityPage();
  } else if (path === "/catalog") {
    history.replaceState({}, "", "/contact");
    renderContactPage();
  } else if (path === "/contact") {
    renderContactPage();
  } else {
    renderHome();
  }

  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) {
      setTimeout(() => target.scrollIntoView({ behavior: "smooth", block: "start" }), 60);
      return;
    }
  }

  app.classList.add("is-entered");
}

function navigateTo(url) {
  if (!beginTransition()) return;

  setTimeout(() => {
    history.pushState({}, "", `${url.pathname}${url.hash}`);
    renderCurrentRoute();
    finishTransition();
  }, 120);
}

function setupChrome() {
  const header = document.querySelector("[data-header]");
  const navToggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");
  const year = document.querySelector("[data-year]");

  if (year) year.textContent = new Date().getFullYear();

  const setHeaderState = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 20);
  };

  navToggle?.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";

    navToggle.setAttribute("aria-expanded", String(!isOpen));
    document.body.classList.toggle("nav-open", !isOpen);
    header?.classList.toggle("is-menu-open", !isOpen);
  });

  nav?.addEventListener("click", event => {
    const link = event.target.closest("a");

    if (!link) return;

    navToggle?.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
    header?.classList.remove("is-menu-open");
  });

  window.addEventListener("scroll", setHeaderState, {
    passive: true
  });

  setHeaderState();
}

window.addEventListener("popstate", () => {
  if (!beginTransition()) return;

  setTimeout(() => {
    renderCurrentRoute();
    finishTransition();
  }, 120);
});

document.addEventListener("click", event => {
  const link = event.target.closest("a[href^='/']");
  if (!link || link.target || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

  const url = new URL(link.href);
  if (url.origin !== window.location.origin) return;

  event.preventDefault();
  navigateTo(url);
});

setupChrome();
document.addEventListener("submit", async event => {
  const form = event.target;

  if (!form.matches(".contact-form")) return;

  event.preventDefault();

  const submitButton = form.querySelector("button[type='submit']");

  if (!submitButton) return;

  const originalText = submitButton.textContent;

  submitButton.disabled = true;
  submitButton.textContent = "Sending...";

  try {
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    const response = await fetch(CONTACT_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(
        result.error ||
        result.message ||
        "Failed to send enquiry"
      );
    }

    alert("Thank you. Your enquiry has been sent successfully.");

    form.reset();
  } catch (error) {
    console.error("Form submission failed:", error);

    alert(
      "Sorry, your enquiry could not be sent. Please try again later."
    );
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = originalText;
  }
});
renderCurrentRoute();
