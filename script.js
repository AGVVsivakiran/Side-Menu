// Select all menu links
const menuLinks = document.querySelectorAll('.menu-link');

menuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // prevent page reload since <a href="">

    // Remove active class from all links
    menuLinks.forEach(l => l.classList.remove('active'));

    // Add active class to the clicked link
    link.classList.add('active');
  });
});


// sidebar collapse
const sidebar = document.querySelector(".sidebar");
const sidebarToggleBtn = document.querySelector(".sidebar-toggle");
const themeToggleBtn = document.querySelector(".theme-toggle");
const themeIcon = themeToggleBtn.querySelector(".theme-icon");
const searchForm = document.querySelector(".search-form");

const updateThemeIcon = () => {
  const isDark = document.body.classList.contains("dark-theme");
  themeIcon.textContent = sidebar.classList.contains("collapsed") ? (isDark ? "light_mode" : "dark_mode") : "dark_mode";
}

const savedTheme = localStorage.getItem("theme");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const shouldUseDarkTheme = savedTheme === "dark" || (!savedTheme && systemPrefersDark);
document.body.classList.toggle("dark-theme", shouldUseDarkTheme);
updateThemeIcon();

sidebarToggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
    updateThemeIcon();
});

searchForm.addEventListener("click", () => {
if(sidebar.classList.contains("collapsed")){
  sidebar.classList.remove("collapsed");
  searchForm.querySelector("input").focus();
}
});

themeToggleBtn.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-theme");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  updateThemeIcon();
});
