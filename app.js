
/* ==================================================
   PROPERTY CONFIGURATION
   فقط این قسمت را برای معرفی ملک جدید تغییر دهید
================================================== */

const PROPERTY = {

  // عنوان و معرفی
  title: "آپارتمان دوخوابه در لاهیجان",
  subtitle: "خوش‌نقشه، نورگیر و دارای امکانات کامل",
  price: "۵ میلیارد تومان",
  address: "لاهیجان، خیابان شهدا",

  // تصویر اصلی
  heroImage: "assets/main.PNG",

  // مشخصات ملک
  facts: [
    { label: "متراژ", value: "۱۲۰ متر" },
    { label: "تعداد خواب", value: "۲" },
    { label: "طبقه", value: "دوم" },
    { label: "سال ساخت", value: "۱۴۰۲" },
    { label: "پارکینگ", value: "دارد" },
    { label: "آسانسور", value: "دارد" },
    { label: "انباری", value: "دارد" }
  ],

  // تصاویر گالری
  gallery: [
    { src: "assets/liv.png", label: "سالن پذیرایی" },
    { src: "assets/ktc.png", label: "آشپزخانه" },
    { src: "assets/bed.png", label: "اتاق خواب" },
    { src: "assets/bld.png", label: "نمای ساختمان" }
  ],

  // فایل ویدیویی
  video: "assets/tour.mp4",

  // توضیحات ملک
  description:
    "آپارتمانی خوش‌نقشه با نورگیری عالی، " +
    "دسترسی مناسب به امکانات شهری و کیفیت ساخت مطلوب. " +
    "مناسب سکونت و سرمایه‌گذاری.",

  // امکانات
  features: [
    "کابینت MDF",
    "پنجره دوجداره",
    "کف سرامیک",
    "سیستم گرمایشی پکیج",
    "نورگیری مناسب",
    "دسترسی به امکانات شهری"
  ],

// موقعیت دقیق ملک
mapLocation: "37.1985,50.0021",

// لینک باز کردن Google Maps
mapLink: "https://maps.google.com/?q=" & mapLocation,


  // اطلاعات مشاور
  agencyName: "املاک بام شیز",
  agentName: "علی احمدی",
  phone: "09358890988",
  whatsapp: "989358890988"

};


/* ==================================================
   RENDER ENGINE
   از این قسمت به بعد نیاز به تغییر نیست
================================================== */

const $ = id => document.getElementById(id);


/* ---------- Basic information ---------- */

document.title = PROPERTY.title;

function setText(id, value) {
  const element = $(id);
  if (element) element.textContent = value || "";
}

setText("agencyName", PROPERTY.agencyName);
setText("propertyTitle", PROPERTY.title);
setText("propertySubtitle", PROPERTY.subtitle);
setText("propertyPrice", PROPERTY.price);
setText("propertyAddress", PROPERTY.address);
setText("propertyDescription", PROPERTY.description);
setText("agentName", PROPERTY.agentName);
setText("footerAgency", PROPERTY.agencyName);


/* ---------- Main image ---------- */

const heroImageElement = $("heroImage");

if (heroImageElement) {
  heroImageElement.src = PROPERTY.heroImage;
  heroImageElement.alt = PROPERTY.title;
}


/* ---------- Phone ---------- */

const phoneNumber = PROPERTY.phone.replace(/[^\d+]/g, "");

["headerCall", "heroCall", "contactCall"].forEach(id => {

  const element = $(id);

  if (element) {
    element.href = phoneNumber
      ? `tel:${phoneNumber}`
      : "#contact";
  }

});


/* ---------- WhatsApp ---------- */

const whatsappNumber = PROPERTY.whatsapp.replace(/\D/g, "");

const whatsappElement = $("whatsappLink");

if (whatsappElement) {

  whatsappElement.href = whatsappNumber
    ? `https://wa.me/${whatsappNumber}`
    : "#contact";

}


/* ---------- Property facts ---------- */

const factsGrid = $("factsGrid");

if (factsGrid) {

  factsGrid.innerHTML = "";

  PROPERTY.facts.forEach(item => {

    const div = document.createElement("div");

    div.className = "fact";

    const label = document.createElement("span");
    label.className = "fact-label";
    label.textContent = item.label;

    const value = document.createElement("span");
    value.className = "fact-value";
    value.textContent = item.value;

    div.append(label, value);

    factsGrid.appendChild(div);

  });

}


/* ---------- Gallery ---------- */

const galleryGrid = $("galleryGrid");

if (galleryGrid) {

  galleryGrid.innerHTML = "";

  PROPERTY.gallery.forEach(item => {

    const figure = document.createElement("figure");
    figure.className = "gallery-item";

    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.label;
    img.loading = "lazy";

    const caption = document.createElement("figcaption");
    caption.textContent = item.label;

    figure.append(img, caption);

    galleryGrid.appendChild(figure);

  });

}


/* ---------- Video ---------- */

const videoSection = $("videoSection");
const videoFrame = $("videoFrame");

if (videoSection && videoFrame) {

  videoFrame.innerHTML = "";

  if (PROPERTY.video) {

    const video = document.createElement("video");

    video.src = PROPERTY.video;
    video.controls = true;
    video.playsInline = true;
    video.preload = "metadata";

    videoFrame.appendChild(video);

  } else {

    videoSection.hidden = true;

  }

}


/* ---------- Features ---------- */

const featuresList = $("featuresList");

if (featuresList) {

  featuresList.innerHTML = "";

  PROPERTY.features.forEach(feature => {

    const li = document.createElement("li");
    li.textContent = feature;

    featuresList.appendChild(li);

  });

}


/* ---------- Map ---------- */

const mapWrap = $("mapWrap");
const mapLink = $("mapLink");

if (mapWrap && mapLink) {

  if (PROPERTY.mapLink) {

    mapLink.href = PROPERTY.mapLink;
    mapLink.target = "_blank";
    mapLink.rel = "noopener noreferrer";

  } else {

    mapWrap.hidden = true;

  }

}
