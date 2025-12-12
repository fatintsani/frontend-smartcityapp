function loadLayout(id, file) {
    fetch(file)
        .then(res => res.text())
        .then(html => document.getElementById(id).innerHTML = html);
}

// Load layout
loadLayout("header", "../layouts/header.html");
loadLayout("sidebar", "../layouts/sidebar.html");
loadLayout("bottom-nav", "../layouts/bottom-nav.html");

// Highlight sidebar & bottom nav
const current = document.body.getAttribute("data-page");

document.querySelectorAll(".side-link").forEach(link => {
    if (link.dataset.page === current) {
        link.classList.add("active-side");
    }
});

document.querySelectorAll(".bottom-link").forEach(link => {
    if (link.dataset.page === current) {
        link.classList.add("active-bottom");
    }
});
