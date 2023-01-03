(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");
    const wrapper = document.querySelector("body");

    menuBtnRef.addEventListener("click", () => {
        const expanded =
            menuBtnRef.getAttribute("aria-expanded") === "true" || false;

        menuBtnRef.classList.toggle("is-open");
        menuBtnRef.setAttribute("aria-expanded", !expanded);

        mobileMenuRef.classList.toggle("is-open");
        wrapper.classList.toggle("lock");
    });
    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
        if (!e.matches) return;
        menuBtnRef.classList.add('is-open');
        mobileMenuRef.classList.remove('is-open');
        wrapper.classList.remove("lock");
        menuBtnRef.setAttribute('aria-expanded', false);
    });
})();
 