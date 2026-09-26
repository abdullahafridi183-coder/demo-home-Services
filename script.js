/* =========================================================
   UNIVERSAL HOME-SERVICE DEMO
   Edit businessData + CONFIG only for a new client.
   ========================================================= */

const businessData = {
  demoMode: true,
  name: "Your Services",
  shortName: "Your Services",
  category: "Home Services",
  primaryService: "Home Service",
  tagline: "Reliable Service. Done Right.",
  announcement: "Fast • Reliable • Local Service",
  emergencyMessage: "",
  description: "Professional local service, transparent communication and dependable workmanship for homeowners and businesses.",
  phone: "+1 000 000 0000",
  whatsapp: "+10000000000",
  email: "business@example.com",
  address: "[Verified business address]",
  city: "[City]",
  state: "[State]",
  country: "[Country]",
  serviceArea: "[City] & Surrounding Areas",
  hours: "[Verified business hours]",
  rating: "",
  reviewCount: "",
  experience: "[X]+",
  licenseInsurance: "[Verify]",
  heroTitle: "Reliable Service When You Need It Most",
  heroDescription: "Professional local service, transparent communication and dependable workmanship for homeowners and businesses.",
  aboutTitle: "Dependable local service, without the runaround.",
  aboutDescription: "Replace this demo text with the business's verified story, service approach and customer focus. Do not publish unverified claims.",
  servicesIntro: "From routine maintenance to urgent repairs, choose the service you need and request a quote.",
  whyIntro: "Clear communication, practical solutions and a straightforward path from first contact to completed work.",
  areaDescription: "Update this section with the verified cities, neighborhoods, counties or regions the business serves.",
  googleMapsUrl: "",
  canonicalUrl: "",
  logoText: "YS",
  colors: {
    dark: "#0b1220",
    accent: "#f4b942"
  },
  images: {
    hero: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=85",
    about: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      { src: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1200&q=85", alt: "Service work", label: "Service Work" },
      { src: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=85", alt: "Professional technician", label: "Professional Service" },
      { src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=85", alt: "Technical work", label: "Technical Work" }
    ]
  },
  services: [
    { name: "Service & Repair", icon: "✦", description: "Professional help for common home-service needs." },
    { name: "Emergency Service", icon: "!", description: "Use this card only when emergency service is actually offered." },
    { name: "Installation", icon: "＋", description: "Installation services tailored to the customer's needs." },
    { name: "Maintenance", icon: "↻", description: "Routine maintenance and preventative service." },
    { name: "Inspection", icon: "⌕", description: "Inspection and assessment where offered." },
    { name: "Replacement", icon: "↗", description: "Replacement solutions using verified business offerings." }
  ],
  benefits: [
    { title: "Fast Response", text: "Edit this claim to match the verified response service." },
    { title: "Professional Service", text: "Clear, respectful and customer-focused service." },
    { title: "Transparent Pricing", text: "Use only if the business's pricing process supports this claim." },
    { title: "Experienced Team", text: "Replace with verified experience or team information." },
    { title: "Local Service", text: "Serving the verified areas listed on this page." },
    { title: "Customer Focused", text: "A simple process designed around clear communication." }
  ],
  serviceAreas: ["[City]", "[Nearby Area]", "[County/Region]"],
  reviews: [
    { name: "Demo Customer", rating: 5, text: "Demo review placeholder — replace with a verified customer review before publishing.", demo: true },
    { name: "Verified Customer", rating: 5, text: "Verified review placeholder — add the actual review text and customer name only with permission.", demo: true },
    { name: "Customer Name", rating: 5, text: "Another editable review placeholder.", demo: true }
  ],
  socialLinks: {
    facebook: "",
    instagram: "",
    linkedin: ""
  }
};

const CONFIG = {
  googleAppsScriptUrl: "PASTE_YOUR_APPS_SCRIPT_EXEC_URL_HERE",
  requestTimeoutMs: 20000
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function cleanPhone(value = "") {
  return String(value).replace(/[^\d+]/g, "");
}
function waNumber(value = "") {
  return String(value).replace(/\D/g, "");
}
function whatsappUrl(message = "Hello, I would like to get a quote for your services.") {
  const number = waNumber(businessData.whatsapp || businessData.phone);
  return number ? `https://wa.me/${number}?text=${encodeURIComponent(message)}` : "#";
}
function setText(id, value, fallback = "—") {
  const el = document.getElementById(id);
  if (el) el.textContent = value || fallback;
}
function setLink(id, href, text = null) {
  const el = document.getElementById(id);
  if (!el) return;
  el.href = href || "#";
  if (text !== null) el.textContent = text;
}
function initials(name) {
  const words = String(name || "YS").trim().split(/\s+/).filter(Boolean);
  return words.length === 1 ? words[0].slice(0, 2).toUpperCase() : words.slice(0, 2).map(w => w[0]).join("").toUpperCase();
}
function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;" }[c]));
}

function applyTheme() {
  document.documentElement.style.setProperty("--dark", businessData.colors?.dark || "#0b1220");
  document.documentElement.style.setProperty("--accent", businessData.colors?.accent || "#f4b942");
}

function populateIdentity() {
  const name = businessData.name;
  const short = businessData.shortName || name;
  const category = businessData.category;
  const initialsText = businessData.logoText || initials(short);

  document.title = `${name} | ${category}`;
  document.querySelector('meta[name="description"]').content = businessData.description || "";
  document.querySelector('meta[property="og:title"]').content = `${name} | ${category}`;
  document.querySelector('meta[property="og:description"]').content = businessData.description || "";
  document.querySelector('meta[property="og:image"]').content = businessData.images?.hero || "";
  document.querySelector('link[rel="canonical"]').href = businessData.canonicalUrl || location.href.split("#")[0];

  setText("navBusinessName", short);
  setText("navCategory", category);
  setText("footerBusinessName", short);
  setText("footerCategory", category);
  setText("copyrightName", name);
  setText("footerDescription", businessData.description);
  setText("heroEyebrow", businessData.category);
  setText("heroTitle", businessData.heroTitle);
  setText("heroDescription", businessData.heroDescription);
  setText("servicesIntro", businessData.servicesIntro);
  setText("whyIntro", businessData.whyIntro);
  setText("aboutTitle", businessData.aboutTitle);
  setText("aboutDescription", businessData.aboutDescription);
  setText("aboutExperience", businessData.experience);
  setText("heroExperience", businessData.experience);
  setText("heroLicense", businessData.licenseInsurance);
  setText("heroRating", businessData.rating);
  setText("floatRating", businessData.rating || "—");
  setText("heroReviewCount", businessData.reviewCount ? `${businessData.reviewCount} reviews` : "Add verified reviews");
  setText("floatArea", businessData.serviceArea);
  setText("areaHeadline", businessData.city || businessData.serviceArea);
  setText("areaDescription", businessData.areaDescription);
  setText("mapCity", businessData.serviceArea);
  setText("mapAddress", businessData.address);
  setText("contactPhoneText", businessData.phone);
  setText("contactEmailText", businessData.email);
  setText("contactAddress", businessData.address);
  setText("contactHours", businessData.hours);
  setText("footerPhone", businessData.phone);
  setText("footerEmail", businessData.email);
  setText("footerHours", businessData.hours);
  setText("year", new Date().getFullYear());
  setText("announcement", businessData.emergencyMessage || businessData.announcement);

  ["brandMark","footerBrandMark"].forEach(id => setText(id, initialsText));

  $("#heroImage").src = businessData.images?.hero || "";
  $("#aboutImage").src = businessData.images?.about || "";

  const tel = cleanPhone(businessData.phone);
  const mail = businessData.email ? `mailto:${businessData.email}` : "#";
  setLink("heroCall", tel ? `tel:${tel}` : "#");
  setLink("quotePhone", tel ? `tel:${tel}` : "#", `Call ${businessData.phone || ""}`);
  setLink("contactPhone", tel ? `tel:${tel}` : "#");
  setLink("contactEmail", mail);
  setLink("footerPhone", tel ? `tel:${tel}` : "#");
  setLink("footerEmail", mail);
  setLink("heroWhatsApp", whatsappUrl());
  setLink("quoteWhatsApp", whatsappUrl());
  setLink("contactWhatsApp", whatsappUrl());
  setLink("floatingWhatsApp", whatsappUrl());
  setLink("mobileCall", tel ? `tel:${tel}` : "#");
  setLink("mobileWhatsApp", whatsappUrl());
  setLink("mapsButton", businessData.googleMapsUrl || "#");

  const social = Object.entries(businessData.socialLinks || {}).filter(([,url]) => url);
  $("#socialLinks").innerHTML = social.length
    ? social.map(([name,url]) => `<a href="${escapeHTML(url)}" target="_blank" rel="noopener">${escapeHTML(name)}</a>`).join(" · ")
    : "Available on request";

  if (businessData.demoMode) $("#demoBadge").hidden = false;
}

function renderTrust() {
  const items = [
    ["★", businessData.rating || "Add", businessData.reviewCount ? `${businessData.reviewCount} reviews` : "Verified reviews"],
    ["✓", businessData.licenseInsurance || "Verify", "License / insurance"],
    ["⚡", "Fast", "Response option"],
    ["⌖", "Local", businessData.serviceArea || "Service area"],
    ["◆", "Focused", "Customer experience"]
  ];
  $("#trustGrid").innerHTML = items.map(([icon,title,sub]) => `
    <div class="trust-item"><span class="trust-item-icon">${escapeHTML(icon)}</span>
      <span><strong>${escapeHTML(title)}</strong><span>${escapeHTML(sub)}</span></span>
    </div>`).join("");
}

function renderServices() {
  const services = businessData.services || [];
  $("#servicesGrid").innerHTML = services.map((s,i) => `
    <article class="service-card reveal">
      <span class="service-number">${String(i+1).padStart(2,"0")}</span>
      <div class="service-icon">${escapeHTML(s.icon || "✦")}</div>
      <h3>${escapeHTML(s.name)}</h3>
      <p>${escapeHTML(s.description)}</p>
    </article>`).join("");
  $("#serviceSelect").innerHTML = `<option value="">Choose a service</option>` +
    services.map(s => `<option value="${escapeHTML(s.name)}">${escapeHTML(s.name)}</option>`).join("");
  $("#footerServices").innerHTML = services.slice(0,6).map(s => `<a href="#quote">${escapeHTML(s.name)}</a>`).join("");
}

function renderBenefits() {
  $("#benefitGrid").innerHTML = (businessData.benefits || []).map(b => `
    <article class="benefit reveal"><strong>${escapeHTML(b.title)}</strong><p>${escapeHTML(b.text)}</p></article>
  `).join("");
}

function renderFacts() {
  $("#aboutFacts").innerHTML = [
    businessData.serviceArea ? `Service area: ${businessData.serviceArea}` : "",
    businessData.category || "",
    businessData.hours ? `Hours: ${businessData.hours}` : ""
  ].filter(Boolean).map(x => `<span class="fact">${escapeHTML(x)}</span>`).join("");
}

function renderGallery() {
  $("#galleryGrid").innerHTML = (businessData.images?.gallery || []).map((item,i) => `
    <button class="gallery-item reveal" type="button" data-src="${escapeHTML(item.src)}" data-alt="${escapeHTML(item.alt || "")}" aria-label="Open ${escapeHTML(item.label || "image")}">
      <img src="${escapeHTML(item.src)}" alt="${escapeHTML(item.alt || "")}" loading="lazy">
      <span class="gallery-overlay">${escapeHTML(item.label || "Service")}</span>
    </button>`).join("");
}

function renderProcess() {
  const steps = [
    ["01","Contact Us","Call, message on WhatsApp or send the quote request form."],
    ["02","Get Your Quote","The business reviews the request and confirms the next steps."],
    ["03","We Complete the Job","Service is scheduled and completed according to the agreed scope."]
  ];
  $("#processGrid").innerHTML = steps.map(s => `<article class="process reveal"><span class="process-number">${s[0]}</span><h3>${s[1]}</h3><p>${s[2]}</p></article>`).join("");
}

function renderReviews() {
  const reviews = businessData.reviews || [];
  $("#reviewsGrid").innerHTML = reviews.map(r => `
    <article class="review reveal">
      <div class="review-stars">${"★".repeat(Math.max(0, Math.min(5, Number(r.rating) || 0)))}</div>
      <p>“${escapeHTML(r.text)}”</p>
      <div class="review-author">${escapeHTML(r.name)}</div>
      ${r.demo ? `<div class="review-note">Demo placeholder — replace before publishing.</div>` : ""}
    </article>`).join("");
}

function renderAreas() {
  const areas = businessData.serviceAreas || [];
  $("#areaList").innerHTML = areas.map(a => `<span class="area-pill">${escapeHTML(a)}</span>`).join("");
  $("#footerAreas").innerHTML = areas.slice(0,8).map(a => `<a href="#areas">${escapeHTML(a)}</a>`).join("");
}

function setupSchema() {
  const data = {
    "@context":"https://schema.org",
    "@type":"LocalBusiness",
    "name": businessData.name,
    "description": businessData.description,
    "url": businessData.canonicalUrl || undefined,
    "telephone": businessData.phone || undefined,
    "email": businessData.email || undefined,
    "address": (businessData.address && !businessData.address.startsWith("[")) ? {
      "@type":"PostalAddress",
      "streetAddress": businessData.address,
      "addressLocality": businessData.city || undefined,
      "addressRegion": businessData.state || undefined,
      "addressCountry": businessData.country || undefined
    } : undefined
  };
  Object.keys(data).forEach(k => data[k] === undefined && delete data[k]);
  if (data.address) Object.keys(data.address).forEach(k => data.address[k] === undefined && delete data.address[k]);
  $("#localBusinessSchema").textContent = JSON.stringify(data);
}

function setupMobileNav() {
  const toggle = $("#navToggle"), nav = $("#primaryNav");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  $$("#primaryNav a").forEach(a => a.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded","false");
  }));
}

function setupScrollEffects() {
  const header = $("#siteHeader");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add("is-visible"); });
  }, { threshold:.12 });
  $$(".reveal").forEach(el => observer.observe(el));
  window.addEventListener("scroll", () => header.classList.toggle("scrolled", window.scrollY > 20), {passive:true});
}

function setupLightbox() {
  const box = $("#lightbox"), image = $("#lightboxImage");
  $$("#galleryGrid .gallery-item").forEach(btn => btn.addEventListener("click", () => {
    image.src = btn.dataset.src;
    image.alt = btn.dataset.alt;
    box.hidden = false;
  }));
  const close = () => { box.hidden = true; image.src = ""; };
  $("#lightboxClose").addEventListener("click", close);
  box.addEventListener("click", e => { if (e.target === box) close(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function submitLead(form) {
  const status = $("#formStatus"), button = $("#submitButton");
  if (!CONFIG.googleAppsScriptUrl || CONFIG.googleAppsScriptUrl.includes("PASTE_YOUR")) {
    status.className = "form-status error";
    status.textContent = "Backend not connected yet. Add your Apps Script /exec URL in script.js.";
    return;
  }
  if (!form.reportValidity()) return;

  const data = Object.fromEntries(new FormData(form).entries());
  if (!isValidEmail(data.email)) {
    status.className = "form-status error";
    status.textContent = "Please enter a valid email address.";
    return;
  }
  data.businessName = businessData.name;
  data.timestamp = new Date().toISOString();

  button.disabled = true;
  button.style.opacity = ".65";
  status.className = "form-status loading";
  status.textContent = "Submitting your request…";

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), CONFIG.requestTimeoutMs);

  try {
    const response = await fetch(CONFIG.googleAppsScriptUrl, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(data),
      signal: controller.signal
    });
    const result = await response.json().catch(() => ({success:false,message:"Invalid server response."}));
    if (!response.ok || !result.success) throw new Error(result.message || "Submission failed.");
    status.className = "form-status success";
    status.textContent = "Your request has been submitted successfully.";
    form.reset();
  } catch (error) {
    status.className = "form-status error";
    status.textContent = error.name === "AbortError"
      ? "The request timed out. Please call or WhatsApp the business."
      : (error.message || "Something went wrong. Please try again.");
  } finally {
    clearTimeout(timeout);
    button.disabled = false;
    button.style.opacity = "";
  }
}

function setupForm() {
  const form = $("#quoteForm");
  form.addEventListener("submit", e => { e.preventDefault(); submitLead(form); });
}

function init() {
  applyTheme();
  populateIdentity();
  renderTrust();
  renderServices();
  renderBenefits();
  renderFacts();
  renderGallery();
  renderProcess();
  renderReviews();
  renderAreas();
  setupSchema();
  setupMobileNav();
  setupScrollEffects();
  setupLightbox();
  setupForm();
}
document.addEventListener("DOMContentLoaded", init);
