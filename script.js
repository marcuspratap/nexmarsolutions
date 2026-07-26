"use strict";

const header = document.getElementById("site-header");
const revealElements = document.querySelectorAll(".reveal");
const yearElement = document.getElementById("current-year");

function updateHeader() {
    if (!header) {
        return;
    }

    header.classList.toggle("scrolled", window.scrollY > 24);
}

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            });
        },
        {
            threshold: 0.14
        }
    );

    revealElements.forEach((element, index) => {
        element.style.transitionDelay =
            `${Math.min(index * 60, 240)}ms`;

        observer.observe(element);
    });
} else {
    revealElements.forEach((element) => {
        element.classList.add("visible");
    });
}

window.addEventListener("scroll", updateHeader, {
    passive: true
});

updateHeader();
