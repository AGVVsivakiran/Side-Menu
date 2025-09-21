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

sidebarToggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
});