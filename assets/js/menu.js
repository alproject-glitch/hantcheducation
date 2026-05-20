document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('menuToggle');
    if (!btn) return;

    btn.addEventListener('click', function () {
        btn.classList.toggle('active');
        btn.setAttribute('aria-expanded', String(btn.classList.contains('active')));
    });

    // Close mobile menu when a nav link is clicked
    document.querySelectorAll('.nav-menu a').forEach(function (link) {
        link.addEventListener('click', function () {
            if (btn.classList.contains('active')) {
                btn.classList.remove('active');
                btn.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Ensure menu is closed when resizing to desktop
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768 && btn.classList.contains('active')) {
            btn.classList.remove('active');
            btn.setAttribute('aria-expanded', 'false');
        }
    });
});
