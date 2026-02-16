document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll('.product-deil a[data-toggle="tab"]');
  const sections = document.querySelectorAll(".main-product");

  tabs.forEach(tab => {
    tab.addEventListener("click", function (e) {
      e.preventDefault();

      tabs.forEach(t => t.classList.remove("active"));
      this.classList.add("active");

      const id = this.getAttribute("href").replace("#", "");

      sections.forEach(sec => sec.classList.remove("show"));

      const activeSection = document.getElementById(id);
      if (activeSection) activeSection.classList.add("show");
    });
  });
});
