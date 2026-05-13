// TODO:
// 正式なCodePocketのApp Store URLが確定したら、APP_STORE_URLを差し替える。
const APP_STORE_URL = "https://apps.apple.com/jp/search?term=CodePocket";

const appStoreButtons = document.querySelectorAll("[data-app-store]");
const floatingCta = document.querySelector(".floating-cta");
const faqItems = document.querySelectorAll(".faq-item");

appStoreButtons.forEach((button) => {
  button.addEventListener("click", () => {
    window.location.href = APP_STORE_URL;
  });
});

faqItems.forEach((item) => {
  const button = item.querySelector("button");
  if (!button) return;

  button.addEventListener("click", () => {
    const isOpen = item.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(isOpen));
  });
});

const updateFloatingCta = () => {
  if (!floatingCta) return;
  floatingCta.classList.toggle("is-visible", window.scrollY > 480);
};

updateFloatingCta();
window.addEventListener("scroll", updateFloatingCta, { passive: true });
