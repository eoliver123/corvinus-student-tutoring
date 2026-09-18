document.getElementById("year").textContent = new Date().getFullYear();

const navToggle = document.getElementById("nav-toggle");
const mainNav = document.getElementById("main-nav");

navToggle.addEventListener("click", () => {
  mainNav.classList.toggle("open");
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => mainNav.classList.remove("open"));
});


const revealTargets = document.querySelectorAll(".reveal");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (revealTargets.length && !prefersReducedMotion && "IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  revealTargets.forEach((target) => revealObserver.observe(target));
} else {
  revealTargets.forEach((target) => target.classList.add("in-view"));
}

/* ---------- Language toggle (HU / EN) ---------- */

const translations = {
  "nav.about": { hu: "Rólunk", en: "About" },
  "nav.classes": { hu: "Órák", en: "Classes" },
  "nav.booking": { hu: "Foglalás", en: "Booking" },
  "nav.faq": { hu: "GYIK", en: "FAQ" },
  "cta.bookClass": { hu: "Foglalj Órát", en: "Book a Class" },
  "cta.learnMore": { hu: "Tudj meg többet", en: "Learn more" },

  "hero.eyebrow": { hu: "Budapesti Corvinus Egyetem · Diákszervezet", en: "Corvinus University of Budapest · Student Organization" },
  "hero.subtitle": { hu: "Ingyenes, kiscsoportos korrepetálás felsőbb éves diákoktól — hogy magabiztosan vágj neki a legnehezebb tárgyaknak.", en: "Free, small-group tutoring from upper-year students — so you can tackle your toughest courses with confidence." },

  "about.eyebrow": { hu: "Rólunk", en: "About us" },
  "about.heading": { hu: "Miért jött létre a Corvinus Student Tutoring?", en: "Why was Corvinus Student Tutoring founded?" },
  "about.p1": { hu: "Elegünk lett abból, hogy a minőségi felkészülés csak drága magántanároktól elérhető. Úgy gondoltuk, ennek nem kell így lennie — hiszen a legjobb magyarázatot gyakran attól a diáktársunktól kapjuk, aki egy évvel korábban ugyanazon a vizsgán ment keresztül.", en: "We got tired of quality exam prep being available only from expensive private tutors. We figured it didn't have to be that way — after all, the best explanations often come from a fellow student who went through the very same exam just a year before." },
  "about.p2": {
    hu: "Ezért indítottuk el ezt a szervezetet: felsőbb éves Corvinus-os hallgatók tartanak <strong>teljesen ingyenes</strong>, kiscsoportos órákat alsóbb éveseknek — főleg gólyáknak — a legnehezebb, legtöbbet bukott tárgyakból. Célunk, hogy mindenki hozzáférjen minőségi, érthető oktatáshoz, anyagi helyzettől függetlenül.",
    en: "That's why we started this organization: upper-year Corvinus students hold <strong>completely free</strong>, small-group classes for underclassmen — especially freshmen — in the toughest, most-failed subjects. Our goal is for everyone to have access to quality, understandable education, regardless of financial background."
  },

  "feature.free.title": { hu: "Ingyenes", en: "Free" },
  "feature.free.desc": { hu: "Minden óránk díjmentes, csak regisztráció szükséges hozzá.", en: "All our classes are free of charge — registration is all it takes." },
  "feature.peer.title": { hu: "Diáktól diáknak", en: "By students, for students" },
  "feature.peer.desc": { hu: "Oktatóink maguk is nemrég ültek ugyanazon a vizsgán.", en: "Our tutors sat the very same exam not long ago." },
  "feature.small.title": { hu: "Kiscsoportos", en: "Small groups" },
  "feature.small.desc": { hu: "Maximum 15 fő egy órán, személyesen a Corvinuson.", en: "Max 15 students per class, in person at Corvinus." },

  "how.eyebrow": { hu: "Hogyan működik", en: "How it works" },
  "how.heading": { hu: "Három egyszerű lépés", en: "Three simple steps" },
  "step1.title": { hu: "Válaszd ki a tárgyat", en: "Pick your subject" },
  "step1.desc": { hu: "Nézd meg az elérhető tárgyakat, nyelveket és időpontokat lent.", en: "Browse the available subjects, languages, and time slots below." },
  "step2.title": { hu: "Foglald le a helyed", en: "Reserve your spot" },
  "step2.desc": { hu: "Regisztrálj pár kattintással a foglalási rendszerünkben — ingyenes.", en: "Register in a few clicks through our booking system — it's free." },
  "step3.title": { hu: "Tanulj és sikerülj", en: "Learn and succeed" },
  "step3.desc": { hu: "Vegyél részt az órán kiscsoportban, és készülj magabiztosan a vizsgára.", en: "Join the small-group class and prepare for your exam with confidence." },

  "gallery.eyebrow": { hu: "Közösség", en: "Community" },
  "gallery.heading": { hu: "Pillanatképek", en: "Snapshots" },
  "gallery.alt.team": { hu: "A Corvinus Student Tutoring csapata", en: "The Corvinus Student Tutoring team" },
  "gallery.alt.class": { hu: "Óra közben egy korrepetáláson", en: "During one of our tutoring sessions" },
  "gallery.alt.sport": { hu: "A csapat sportolás közben", en: "The team playing sports together" },
  "gallery.alt.bridge": { hu: "A csapat a Szabadság hídnál", en: "The team at Liberty Bridge" },

  "stats.students": { hu: "Segített Diák", en: "Students Helped" },
  "stats.classes": { hu: "Megtartott Óra", en: "Classes Held" },
  "stats.tutors": { hu: "Szakértő Oktató", en: "Expert Tutors" },
  "stats.rating": { hu: "Átlagos Értékelés", en: "Average Rating" },

  "subjects.eyebrow": { hu: "Elérhető tárgyak", en: "Available subjects" },
  "subjects.heading": { hu: "Órák, amikre most jelentkezhetsz", en: "Classes you can join right now" },
  "subj.math": { hu: "Matematika", en: "Math" },
  "subj.macro": { hu: "Makroökonómia", en: "Macroeconomics" },
  "subj.micro": { hu: "Mikroökonómia", en: "Microeconomics" },
  "subj.data": { hu: "Adatelemzés 1", en: "Data Analysis 1" },
  "subj.lang": { hu: "Nyelv: Magyar / Angol", en: "Language: Hungarian / English" },
  "subj.schedule": { hu: "Heti 2 alkalom · 1 óra", en: "2x per week · 1 hour" },
  "subj.location": { hu: "Max. 15 fő · Corvinus terem", en: "Max 15 students · Corvinus classroom" },

  "booking.eyebrow": { hu: "Foglalás", en: "Booking" },
  "booking.heading": { hu: "Foglald le a helyed egy órán", en: "Reserve your spot in a class" },
  "booking.intro": { hu: "Az időpontfoglalás Microsoft Bookings rendszeren keresztül történik. Válaszd ki a tárgyat, a neked megfelelő időpontot, és foglalj helyet — mindössze pár kattintás.", en: "Booking happens through Microsoft Bookings. Pick your subject, choose a time that works for you, and reserve your spot — just a few clicks." },
  "booking.fallbackText": { hu: "Nem jelenik meg a foglaló doboz, vagy inkább külön lapon nyitnád meg?", en: "Booking box not showing, or would you rather open it in a new tab?" },
  "booking.fallbackLink": { hu: "Foglalás megnyitása külön lapon", en: "Open booking in a new tab" },

  "faq.eyebrow": { hu: "Gyakori kérdések", en: "Frequently asked questions" },
  "faq.heading": { hu: "GYIK", en: "FAQ" },
  "faq1.q": { hu: "Tényleg teljesen ingyenes?", en: "Is it really completely free?" },
  "faq1.a": { hu: "Igen. Minden korrepetálásunk díjmentes — csak előzetes regisztráció szükséges, hogy tudjuk a létszámot tervezni.", en: "Yes. All our tutoring sessions are free — you just need to register in advance so we can plan group sizes." },
  "faq2.q": { hu: "Ki jelentkezhet az órákra?", en: "Who can sign up for the classes?" },
  "faq2.a": { hu: "Bármely Corvinus hallgató, elsősorban alsóbb éveseket és gólyákat várunk, akiknek segítségre van szükségük a meghirdetett tárgyakból.", en: "Any Corvinus student — we especially welcome underclassmen and freshmen who need help with the listed subjects." },
  "faq3.q": { hu: "Hogyan tudok regisztrálni egy órára?", en: "How do I register for a class?" },
  "faq3.a": { hu: 'A "Foglalás" szekcióban található Microsoft Bookings felületen válaszd ki a tárgyat és az időpontot, majd add meg az adataidat a foglaláshoz.', en: 'In the "Booking" section, use the Microsoft Bookings widget to pick your subject and time slot, then enter your details to complete the booking.' },
  "faq4.q": { hu: "Van minimum vagy maximum létszám?", en: "Is there a minimum or maximum group size?" },
  "faq4.a": { hu: "Az órák kiscsoportosak, maximum 15 fővel indulnak, hogy mindenki kapjon elég figyelmet.", en: "Classes are small-group, capped at 15 students, so everyone gets enough attention." },
  "faq5.q": { hu: "Mi történik, ha egy óra elmarad?", en: "What happens if a class is cancelled?" },
  "faq5.a": { hu: "Ha egy óra elmaradna, minden regisztrált diákot előre értesítünk, és igyekszünk pótidőpontot biztosítani.", en: "If a class needs to be cancelled, we notify every registered student in advance and try to offer a makeup session." },
  "faq6.q": { hu: "Szeretnék én is oktatni, hogyan jelentkezhetek?", en: "I'd like to tutor too — how do I apply?" },
  "faq6.a": { hu: "Örülünk az érdeklődésnek! Írj nekünk a lenti elérhetőségeken, és elküldjük a jelentkezési részleteket.", en: "We'd love to hear from you! Reach out using the contact details below and we'll send you the application details." },

  "footer.tagline": { hu: "Diákszervezet a Budapesti Corvinus Egyetemen", en: "A student organization at Corvinus University of Budapest" },
  "footer.contact": {
    hu: 'Kapcsolat: <a href="mailto:info@corvinustutoring.hu">info@corvinustutoring.hu</a>',
    en: 'Contact: <a href="mailto:info@corvinustutoring.hu">info@corvinustutoring.hu</a>'
  }
};

const pageTitles = {
  hu: "Corvinus Student Tutoring | Ingyenes korrepetálás",
  en: "Corvinus Student Tutoring | Free Tutoring"
};

const menuLabels = {
  hu: "Menü megnyitása",
  en: "Open menu"
};

const langToggle = document.getElementById("lang-toggle");
const LANG_STORAGE_KEY = "cst-lang";

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  document.title = pageTitles[lang];
  navToggle.setAttribute("aria-label", menuLabels[lang]);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[key]) el.textContent = translations[key][lang];
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (translations[key]) el.innerHTML = translations[key][lang];
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const key = el.getAttribute("data-i18n-alt");
    if (translations[key]) el.alt = translations[key][lang];
  });

  const nextLang = lang === "hu" ? "en" : "hu";
  langToggle.textContent = nextLang.toUpperCase();
  langToggle.setAttribute(
    "aria-label",
    lang === "hu" ? "Switch to English" : "Váltás magyar nyelvre"
  );

  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch (e) {
    /* localStorage unavailable in this context — ignore */
  }
}

let currentLang = "hu";
try {
  const savedLang = localStorage.getItem(LANG_STORAGE_KEY);
  if (savedLang === "hu" || savedLang === "en") currentLang = savedLang;
} catch (e) {
  /* localStorage unavailable in this context — ignore */
}

applyLanguage(currentLang);

langToggle.addEventListener("click", () => {
  currentLang = currentLang === "hu" ? "en" : "hu";
  applyLanguage(currentLang);
});
