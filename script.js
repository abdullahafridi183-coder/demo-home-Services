/* UNIVERSAL HOME-SERVICE DEMO — JAVASCRIPT
   Change businessData below to customize the demo for a new client.
*/
const CONFIG = {
  googleAppsScriptUrl: "PASTE_YOUR_APPS_SCRIPT_EXEC_URL_HERE"
};

const businessData = {
  demoMode: true,
  name: "YOUR SERVICES",
  shortName: "YOUR SERVICES",
  initials: "YS",
  category: "Home Services",
  primaryService: "Home Service",
  tagline: "Reliable Service. Done Right.",
  heroEyebrow: "Trusted Local Service",
  heroTitle: "Reliable Service. Done Right.",
  description: "Professional local service, transparent communication and dependable workmanship for homeowners and businesses.",
  aboutDescription: "A polished introduction for your business goes here. Replace this with verified information about the company, team, service approach and the customers you serve.",
  phone: "+1 000 000 0000",
  whatsapp: "10000000000",
  email: "business@example.com",
  address: "Business Address, Your City",
  city: "Your City",
  state: "Your State",
  country: "United States",
  serviceArea: "Your City & Surrounding Areas",
  hours: "Mon–Sat · 8:00 AM–6:00 PM",
  rating: "4.9",
  reviewCount: "250+",
  experience: "[X]+",
  websiteSlug: "your-services",
  mapsLink: "https://maps.google.com/?q=Your+City",
  heroImage: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=85",
  aboutImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85",
  announcement: "Professional service when you need it.",
  colors: { accent: "#c9ff3f", accentDark: "#8ebf00" },
  services: [
    { name: "Emergency Service", description: "Fast help for urgent service requests.", icon: "⚡" },
    { name: "Repairs & Maintenance", description: "Reliable solutions for ongoing home-service needs.", icon: "⌁" },
    { name: "Installation", description: "Professional installation with clear communication.", icon: "＋" },
    { name: "Inspection", description: "Understand the issue before deciding on the next step.", icon: "⌕" },
    { name: "Replacement", description: "Practical replacement options for eligible jobs.", icon: "↻" },
    { name: "Preventive Service", description: "Keep your systems and property running smoothly.", icon: "✓" }
  ],
  benefits: [
    { title: "Fast Response", text: "Make it easy for customers to reach the business when they need service.", icon: "↗" },
    { title: "Professional Service", text: "Present a clear, polished service experience from first contact to completion.", icon: "✦" },
    { title: "Transparent Pricing", text: "Use verified pricing information and clear expectations before work begins.", icon: "◇" },
    { title: "Experienced Team", text: "Add verified experience and credentials here when provided by the client.", icon: "◎" },
    { title: "Local Service", text: "Highlight the cities and areas the business actually serves.", icon: "⌖" },
    { title: "Customer Focused", text: "Make communication, convenience and follow-up part of the experience.", icon: "♡" }
  ],
  serviceAreas: ["Your City", "Nearby Area", "Your County", "Surrounding Area"],
  gallery: [
    { src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=85", label: "Service Work" },
    { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=85", label: "Project Detail" },
    { src: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=85", label: "Professional Team" },
    { src: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=85", label: "On-Site Service" },
    { src: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=900&q=85", label: "Quality Work" }
  ],
  reviews: [
    { name: "Customer Name", rating: 5, text: "Demo review placeholder — replace with a verified customer review before publishing." },
    { name: "Customer Name", rating: 5, text: "Demo review placeholder — replace with a verified customer review before publishing." },
    { name: "Customer Name", rating: 5, text: "Demo review placeholder — replace with a verified customer review before publishing." }
  ],
  socialLinks: { facebook: "", instagram: "" }
};

const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];

function telHref(phone) { return `tel:${String(phone).replace(/[^\d+]/g, "")}`; }
function waHref(number, message = "Hello, I would like to get a quote for your services.") {
  const clean = String(number).replace(/\D/g, "");
  return `https://wa.me/${clean}?text=${encodeURIComponent(message)}`;
}
function initials(name){ return String(name).split(/\s+/).filter(Boolean).slice(0,2).map(x=>x[0]).join("").toUpperCase() || "HS"; }
function setText(id, value){ const el = document.getElementById(id); if(el) el.textContent = value ?? ""; }
function safeUrl(url){ return url && /^https?:\/\//i.test(url) ? url : "#"; }

function applyData(){
  document.documentElement.style.setProperty("--accent", businessData.colors.accent);
  document.documentElement.style.setProperty("--accent-dark", businessData.colors.accentDark);

  setText("brandName", businessData.shortName || businessData.name);
  setText("footerBrandName", businessData.shortName || businessData.name);
  setText("copyrightName", businessData.name);
  setText("brandMark", businessData.initials || initials(businessData.name));
  setText("footerBrandMark", businessData.initials || initials(businessData.name));
  setText("announcementMessage", businessData.announcement);
  setText("heroEyebrow", businessData.heroEyebrow);
  $("#heroTitle").innerHTML = `${escapeHtml(businessData.heroTitle).replace(/\.\s?Done Right\.?/i, ".<br><em>Done Right.</em>")}`;
  setText("heroDescription", businessData.description);
  setText("ratingValue", businessData.rating);
  setText("reviewCount", `${businessData.reviewCount} reviews`);
  setText("floatingRating", `${businessData.rating} / 5`);
  setText("floatingArea", businessData.city);
  setText("experienceValue", businessData.experience);
  setText("aboutArea", `Serving ${businessData.serviceArea}`);
  setText("aboutDescription", businessData.aboutDescription);
  setText("reviewRatingLarge", businessData.rating);
  setText("reviewCountLarge", `${businessData.reviewCount} reviews`);
  setText("areasIntro", `We proudly serve ${businessData.serviceArea}. Update this section with verified locations for each client.`);
  setText("mapCity", businessData.city);
  setText("contactDescription", "Reach out by phone, WhatsApp or email. Replace the demo details with verified client information before publishing.");
  setText("quotePhoneText", businessData.phone);
  setText("quoteEmailText", businessData.email);
  setText("footerDescription", businessData.description);
  setText("year", new Date().getFullYear());

  $("#heroImage").src = businessData.heroImage;
  $("#aboutImage").src = businessData.aboutImage;
  $("#heroCall").href = telHref(businessData.phone);
  $("#heroWhatsapp").href = waHref(businessData.whatsapp);
  $("#floatingWhatsapp").href = waHref(businessData.whatsapp);
  $("#mobileCall").href = telHref(businessData.phone);
  $("#mobileWhatsapp").href = waHref(businessData.whatsapp);
  $("#quotePhone").href = telHref(businessData.phone);
  $("#quoteEmail").href = `mailto:${businessData.email}`;
  $("#contactWhatsapp").href = waHref(businessData.whatsapp);
  $("#mapsButton").href = safeUrl(businessData.mapsLink);
  $("#demoBadge").style.display = businessData.demoMode ? "block" : "none";

  document.title = `${businessData.name} | ${businessData.category}`;
  const meta = document.querySelector('meta[name="description"]');
  if(meta) meta.content = businessData.description;

  renderTrust();
  renderServices();
  renderBenefits();
  renderGallery();
  renderReviews();
  renderAreas();
  renderContact();
  renderFooter();
}

function renderTrust(){
  const items = [
    ["★", businessData.rating, `${businessData.reviewCount} reviews`],
    ["✓", "Professional", "Service focused"],
    ["⌖", businessData.city, "Local service"],
    ["↗", "Fast Contact", "Call or WhatsApp"]
  ];
  $("#trustGrid").innerHTML = items.map(([i,t,s]) => `<div class="trust-box"><span class="trust-icon">${i}</span><div><strong>${escapeHtml(t)}</strong><small>${escapeHtml(s)}</small></div></div>`).join("");
}

function renderServices(){
  $("#serviceGrid").innerHTML = businessData.services.map((s,i) => `
    <article class="service-card reveal">
      <span class="service-number">${String(i+1).padStart(2,"0")}</span>
      <div class="service-icon">${escapeHtml(s.icon || "✦")}</div>
      <h3>${escapeHtml(s.name)}</h3><p>${escapeHtml(s.description)}</p>
    </article>`).join("");
  $("#serviceSelect").innerHTML = `<option value="">Select a service</option>` + businessData.services.map(s => `<option value="${escapeHtml(s.name)}">${escapeHtml(s.name)}</option>`).join("");
}

function renderBenefits(){
  $("#benefitGrid").innerHTML = businessData.benefits.map(b => `
    <article class="benefit-card reveal">
      <div class="benefit-icon">${escapeHtml(b.icon || "✦")}</div>
      <h3>${escapeHtml(b.title)}</h3><p>${escapeHtml(b.text)}</p>
    </article>`).join("");
}

function renderGallery(){
  $("#galleryGrid").innerHTML = businessData.gallery.map((g,i) => `
    <div class="gallery-item reveal" data-src="${escapeAttr(g.src)}" data-label="${escapeAttr(g.label)}">
      <img src="${escapeAttr(g.src)}" alt="${escapeAttr(g.label)}" loading="lazy">
      <span class="gallery-label">${escapeHtml(g.label)}</span>
    </div>`).join("");
  $$(".gallery-item").forEach(el => el.addEventListener("click", () => openLightbox(el.dataset.src, el.dataset.label)));
}

function renderReviews(){
  $("#reviewGrid").innerHTML = businessData.reviews.map(r => `
    <article class="review-card reveal">
      <div class="stars">${"★".repeat(Math.max(0,Math.min(5,Number(r.rating)||0)))}</div>
      <p>“${escapeHtml(r.text)}”</p>
      <div class="review-author"><span class="avatar">${escapeHtml(initials(r.name))}</span><div><strong>${escapeHtml(r.name)}</strong><small>Demo review</small></div></div>
    </article>`).join("");
}

function renderAreas(){
  $("#areaList").innerHTML = businessData.serviceAreas.map(a => `<span class="area-chip">${escapeHtml(a)}</span>`).join("");
}

function renderContact(){
  const links = [
    ["☎","Phone",businessData.phone,telHref(businessData.phone)],
    ["✉","Email",businessData.email,`mailto:${businessData.email}`],
    ["⌖","Address",businessData.address,safeUrl(businessData.mapsLink)],
    ["◷","Hours",businessData.hours,"#"]
  ];
  $("#contactDetails").innerHTML = links.map(([icon,label,value,href]) => `<a class="contact-line" href="${escapeAttr(href)}"><span>${icon}</span><div><small>${label}</small><strong>${escapeHtml(value)}</strong></div></a>`).join("");
}

function renderFooter(){
  $("#footerServices").innerHTML = businessData.services.slice(0,5).map(s => `<a href="#services">${escapeHtml(s.name)}</a>`).join("");
  $("#footerContact").innerHTML = `<a href="${telHref(businessData.phone)}">${escapeHtml(businessData.phone)}</a><a href="mailto:${escapeAttr(businessData.email)}">${escapeHtml(businessData.email)}</a><a href="${safeUrl(businessData.mapsLink)}" target="_blank" rel="noopener">${escapeHtml(businessData.city)}</a>`;
}

function escapeHtml(value){ return String(value ?? "").replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c])); }
function escapeAttr(value){ return escapeHtml(value); }

function setupMenu(){
  const toggle = $("#menuToggle"), links = $("#navLinks");
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
  $$("#navLinks a").forEach(a => a.addEventListener("click", () => links.classList.remove("open")));
}

function setupScroll(){
  const header = $("#siteHeader");
  window.addEventListener("scroll", () => header.classList.toggle("scrolled", window.scrollY > 20), {passive:true});
  const observer = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add("visible"); observer.unobserve(e.target); } }), {threshold:.12});
  $$(".reveal").forEach(el => observer.observe(el));
}

function openLightbox(src, alt){
  $("#lightboxImage").src = src; $("#lightboxImage").alt = alt || "";
  $("#lightbox").classList.add("open"); $("#lightbox").setAttribute("aria-hidden","false");
}
function closeLightbox(){
  $("#lightbox").classList.remove("open"); $("#lightbox").setAttribute("aria-hidden","true"); $("#lightboxImage").src = "";
}
function setupLightbox(){
  $("#lightboxClose").addEventListener("click", closeLightbox);
  $("#lightbox").addEventListener("click", e => { if(e.target.id === "lightbox") closeLightbox(); });
  document.addEventListener("keydown", e => { if(e.key === "Escape") closeLightbox(); });
}

function setupForm(){
  const form = $("#quoteForm"), status = $("#formStatus"), button = form.querySelector("button[type=submit]");
  form.addEventListener("submit", async e => {
    e.preventDefault();
    status.className = "form-status";
    status.textContent = "";
    if(!form.checkValidity()){ form.reportValidity(); return; }

    if(CONFIG.googleAppsScriptUrl.includes("PASTE_YOUR")){
      status.className = "form-status show error";
      status.textContent = "Demo mode: connect your Google Apps Script /exec URL in script.js before using live submissions.";
      return;
    }

    if(button.classList.contains("loading")) return;
    button.classList.add("loading"); button.disabled = true;

    const data = new FormData(form);
    const payload = {
      formType:"Quote Request",
      name:data.get("name")?.trim(),
      email:data.get("email")?.trim(),
      phone:data.get("phone")?.trim(),
      service:data.get("service"),
      preferredDate:data.get("preferredDate"),
      preferredTime:data.get("preferredTime"),
      address:data.get("address")?.trim(),
      message:data.get("message")?.trim(),
      businessName:businessData.name
    };

    try{
      const response = await fetch(CONFIG.googleAppsScriptUrl, {
        method:"POST",
        headers:{"Content-Type":"text/plain;charset=utf-8"},
        body:JSON.stringify(payload)
      });
      const result = await response.json();
      if(!result.success) throw new Error(result.message || "Submission failed.");
      status.className = "form-status show success";
      status.textContent = "Your request has been submitted successfully.";
      form.reset();
    }catch(err){
      status.className = "form-status show error";
      status.textContent = err.message || "Something went wrong. Please call or WhatsApp the business directly.";
    }finally{
      button.classList.remove("loading"); button.disabled = false;
    }
  });
}

function injectSchema(){
  const schema = {
    "@context":"https://schema.org",
    "@type":"LocalBusiness",
    "name":businessData.name,
    "description":businessData.description,
    "telephone":businessData.phone,
    "email":businessData.email,
    "address":{
      "@type":"PostalAddress",
      "streetAddress":businessData.address,
      "addressLocality":businessData.city,
      "addressRegion":businessData.state,
      "addressCountry":businessData.country
    },
    "areaServed":businessData.serviceAreas.map(a=>({"@type":"Place","name":a})),
    "url":location.href
  };
  const script=document.createElement("script"); script.type="application/ld+json"; script.textContent=JSON.stringify(schema); document.head.appendChild(script);
}

document.addEventListener("DOMContentLoaded", () => {
  applyData(); setupMenu(); setupScroll(); setupLightbox(); setupForm(); injectSchema();
});
