/* ==========================================================================
   Mama Homestay Papar - skrip laman utama
   --------------------------------------------------------------------------
   Semua teks dipaparkan datang daripada i18n.js (window.I18N). Fail ini
   hanya mengendalikan data pakej, pengiraan harga dan borang tempahan.
   UBAH SENARAI PAKEJ DI BAWAH (CONFIG.rooms) untuk menukar nama, harga
   dan ciri. Kad pakej, dropdown borang dan mesej WhatsApp dikemas kini
   secara automatik.
   ========================================================================== */

const CONFIG = {
  // Format antarabangsa, digit sahaja. 011-4302 2004 -> 601143022004
  whatsappNumber: "601143022004",
  phoneDisplay: "011-4302 2004",
  email: "mamahomestay24@gmail.com",

  currency: "RM",

  // Dua pakej Mama Homestay Papar. Nama dan harga datang daripada tuan rumah.
  // Senarai "features" adalah CONTOH sehingga disahkan. Tambah "capacity"
  // (bilangan tetamu maksimum) bila disahkan; ia akan dipaparkan automatik.
  rooms: [
    {
      id: "fullhouse",
      name: { ms: "Full House", en: "Full House" },
      price: 350,
      featured: false,
      badge: null,
      features: {
        ms: ["Seluruh rumah untuk kumpulan anda", "Penghawa dingin", "Dapur boleh guna", "Wi-Fi percuma", "Parkir percuma"],
        en: ["The whole house for your group", "Air conditioning", "Usable kitchen", "Free Wi-Fi", "Free parking"],
      },
    },
    {
      id: "ruangtamu",
      name: { ms: "Additional Ruang Tamu", en: "Additional Living Room" },
      price: 750,
      featured: false,
      badge: null,
      features: {
        ms: ["Pakej ruang tamu tambahan", "Butiran pakej akan dikemas kini"],
        en: ["Additional living room package", "Package details to be updated"],
      },
    },
  ],
};

/* -------------------------------------------------------------------------- */

const $ = (selector) => document.querySelector(selector);
const t = (key, vars) => (window.I18N ? window.I18N.t(key, vars) : key);

function formatPrice(value) {
  return `${CONFIG.currency}${value}`;
}

function waLink(text) {
  const base = `https://wa.me/${CONFIG.whatsappNumber}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

/* ---------- Pakej ---------- */

function setHTML(el, value) {
  if (/[<&]/.test(value)) el.innerHTML = value;
  else el.textContent = value;
}

// Pilih teks mengikut bahasa semasa. Terima rentetan biasa atau { ms, en }.
function L(value) {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    const lang = (window.I18N && window.I18N.lang) || "ms";
    return value[lang] !== undefined ? value[lang] : value.ms;
  }
  return value;
}

function renderRooms() {
  const list = $("#room-list");
  const select = $("#room");
  if (!list || !select) return;

  const previous = select.value; // kekalkan pilihan pengguna bila bahasa ditukar
  list.textContent = "";
  select.textContent = "";

  CONFIG.rooms.forEach((room) => {
    const roomName = L(room.name);
    const card = document.createElement("article");
    card.className = "card room" + (room.featured ? " featured" : "");

    if (room.badge) {
      const badge = document.createElement("span");
      badge.className = "room-badge";
      badge.textContent = L(room.badge);
      card.appendChild(badge);
    }

    const title = document.createElement("h3");
    title.textContent = roomName;
    card.appendChild(title);

    // Kapasiti hanya dipaparkan jika disahkan (room.capacity ditetapkan).
    if (room.capacity) {
      const cap = document.createElement("p");
      cap.className = "room-cap";
      cap.textContent = t("capacityText", { n: room.capacity });
      card.appendChild(cap);
    }

    const price = document.createElement("p");
    price.className = "room-price";
    const amount = document.createElement("span");
    amount.className = "amount";
    amount.textContent = formatPrice(room.price);
    const per = document.createElement("span");
    per.className = "per";
    per.textContent = ` / ${t("perNight")}`;
    price.append(amount, per);
    card.appendChild(price);

    const ul = document.createElement("ul");
    ul.className = "room-features";
    L(room.features).forEach((f) => {
      const li = document.createElement("li");
      setHTML(li, f);
      ul.appendChild(li);
    });
    card.appendChild(ul);

    const btn = document.createElement("a");
    btn.className = "btn " + (room.featured ? "btn-primary" : "btn-outline");
    btn.href = "#book";
    btn.textContent = t("pkgBtn", { name: roomName });
    btn.addEventListener("click", () => {
      select.value = room.id;
      updateEstimate();
    });
    card.appendChild(btn);

    list.appendChild(card);
  });

  const placeholder = new Option(t("roomPlaceholder"), "", true, true);
  placeholder.disabled = true;
  select.add(placeholder);
  CONFIG.rooms.forEach((room) => {
    select.add(new Option(`${L(room.name)} - ${formatPrice(room.price)}/${t("perNight")}`, room.id));
  });
  if (previous) select.value = previous;
}

/* ---------- Tarikh ---------- */

function toISODate(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function parseISODate(value) {
  const [y, m, d] = value.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function formatDate(value) {
  const locale = (window.I18N && t("dateLocale")) || "ms-MY";
  return parseISODate(value).toLocaleDateString(locale, {
    weekday: "short", day: "numeric", month: "short", year: "numeric",
  });
}

function nightsBetween(a, b) {
  const ms = parseISODate(b) - parseISODate(a);
  return Math.round(ms / 86400000);
}

function setupDates() {
  const checkin = $("#checkin");
  const checkout = $("#checkout");
  if (!checkin || !checkout) return;
  const today = new Date();
  checkin.min = toISODate(today);

  const syncCheckoutMin = () => {
    if (!checkin.value) {
      checkout.min = toISODate(new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1));
      return;
    }
    const next = parseISODate(checkin.value);
    next.setDate(next.getDate() + 1);
    checkout.min = toISODate(next);
    if (checkout.value && checkout.value < checkout.min) checkout.value = "";
  };
  syncCheckoutMin();
  checkin.addEventListener("change", syncCheckoutMin);
}

/* ---------- Anggaran harga ---------- */

function updateEstimate() {
  const out = $("#estimate");
  if (!out) return;
  const roomId = $("#room").value;
  const checkin = $("#checkin").value;
  const checkout = $("#checkout").value;
  const room = CONFIG.rooms.find((r) => r.id === roomId);
  if (!room || !checkin || !checkout) {
    out.textContent = "";
    return;
  }
  const nights = nightsBetween(checkin, checkout);
  if (nights < 1) {
    out.textContent = "";
    return;
  }
  out.textContent = t("estimate", {
    n: nights,
    price: formatPrice(room.price),
    total: formatPrice(nights * room.price),
  });
}

/* ---------- Pengesahan borang ---------- */

function setError(fieldId, message) {
  const input = $("#" + fieldId);
  const err = $("#" + fieldId + "-error");
  if (err) err.textContent = message;
  if (input) input.setAttribute("aria-invalid", message ? "true" : "false");
  return !message;
}

function readForm() {
  const f = $("#book-form");
  const roomId = f.room.value;
  return {
    checkin: f.checkin.value,
    checkout: f.checkout.value,
    roomId,
    room: CONFIG.rooms.find((r) => r.id === roomId) || null,
    guests: parseInt(f.guests.value, 10),
    name: f.name.value,
    phone: f.phone.value,
    notes: f.notes.value,
  };
}

function validate(v) {
  let ok = true;
  let firstBad = null;
  const check = (id, message) => {
    const valid = setError(id, message);
    if (!valid && !firstBad) firstBad = id;
    ok = ok && valid;
  };

  const todayISO = toISODate(new Date());
  check("checkin", !v.checkin ? t("errCheckinMissing") : v.checkin < todayISO ? t("errCheckinPast") : "");
  check("checkout", !v.checkout ? t("errCheckoutMissing") : v.checkin && v.checkout <= v.checkin ? t("errCheckoutOrder") : "");
  check("room", !v.roomId ? t("errRoom") : "");
  check("guests", !Number.isInteger(v.guests) || v.guests < 1 ? t("errGuests") : "");
  check("name", v.name.trim().length < 2 ? t("errName") : "");

  const digits = v.phone.replace(/[^\d]/g, "");
  check("phone", digits.length < 9 || digits.length > 15 ? t("errPhone") : "");

  if (firstBad) $("#" + firstBad).focus();
  return ok;
}

/* ---------- Hantar permintaan ---------- */

function buildMessage(v) {
  const nights = nightsBetween(v.checkin, v.checkout);
  const lines = [
    t("waIntro"),
    "",
    `${t("waPackage")}: ${L(v.room.name)} (${formatPrice(v.room.price)}/${t("perNight")})`,
    `${t("waCheckin")}: ${formatDate(v.checkin)}`,
    `${t("waCheckout")}: ${formatDate(v.checkout)}`,
    `${t("waNights")}: ${nights}`,
    `${t("waGuests")}: ${v.guests}`,
    `${t("waEstimate")}: ${formatPrice(nights * v.room.price)}`,
    `${t("waName")}: ${v.name.trim()}`,
    `${t("waPhone")}: ${v.phone.trim()}`,
  ];
  if (v.notes.trim()) lines.push(`${t("waNotes")}: ${v.notes.trim()}`);
  return lines.join("\n");
}

/* --------------------------------------------------------------------------
   PAYMENT HOOK (untuk kemudian)
   --------------------------------------------------------------------------
   Sekarang permintaan dihantar ke WhatsApp dan bayaran dikutip secara manual.
   Bila sedia untuk deposit dalam talian, letakkan panggilan gateway di sini
   SEBELUM membuka WhatsApp. Gateway sebenar memerlukan pelayan kecil atau
   fungsi serverless supaya kunci API rahsia tidak terdedah. Jangan letak kunci
   rahsia dalam fail ini.
   -------------------------------------------------------------------------- */
function handleBooking(v) {
  window.open(waLink(buildMessage(v)), "_blank", "noopener");
}

function setupForm() {
  const form = $("#book-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const v = readForm();
    if (!validate(v)) return;
    handleBooking(v);
  });

  ["checkin", "checkout", "room", "guests", "name", "phone"].forEach((id) => {
    $("#" + id).addEventListener("input", () => {
      setError(id, "");
      updateEstimate();
    });
  });
}

/* ---------- Pautan WhatsApp & footer ---------- */

function waTextFor(el) {
  const lang = (window.I18N && window.I18N.lang) || "ms";
  return el.dataset["waText" + (lang === "en" ? "En" : "Ms")] || el.dataset.waText || "";
}

function setupContactLinks() {
  document.querySelectorAll("[data-wa]").forEach((el) => {
    el.href = waLink(waTextFor(el));
    el.target = "_blank";
    el.rel = "noopener";
  });
  const footerWa = $("#footer-wa");
  if (footerWa) footerWa.textContent = CONFIG.phoneDisplay;
  const footerEmail = $("#footer-email");
  if (footerEmail) {
    footerEmail.href = `mailto:${CONFIG.email}`;
    footerEmail.textContent = CONFIG.email;
  }
  const year = $("#year");
  if (year) year.textContent = new Date().getFullYear();
}

function refreshDynamicText() {
  renderRooms();
  updateEstimate();
  setupContactLinks();
}

document.addEventListener("DOMContentLoaded", () => {
  renderRooms();
  setupDates();
  setupForm();
  setupContactLinks();
});

// Bila bahasa ditukar (lihat i18n.js), kad pakej dan pautan WhatsApp perlu
// dijana semula supaya mengikut bahasa baharu.
document.addEventListener("langchange", refreshDynamicText);
