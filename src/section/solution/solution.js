const tabButton = document.querySelectorAll(".tab__button");
const content = document.querySelectorAll(".tab__content");

document.addEventListener("DOMContentLoaded", (e) => {
  tabButton.forEach((e) => {
    e.addEventListener("click", (e) => {
      if (e.currentTarget.classList.contains("tab__button")) {
        e.currentTarget.classList.add("tab__button--active");
        const path = e.currentTarget.dataset.tabPath;
        tabHandler(path);
      }
    });
  });
});

function tabHandler(path) {
  tabButton.forEach((e) => {
    e.classList.remove("tab__button--active");
  });
  content.forEach((e) => {
    e.classList.remove("tab__content--active");
  });

  const contentItem = document
    .querySelector(`[data-tab-target="${path}"]`)
    .classList.add("tab__content--active");
  const button = document
    .querySelector(`[data-tab-path="${path}"]`)
    .classList.add("tab__button--active");
}
