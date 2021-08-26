const projects = [{
        number: 1,
        name: "expanding-cards",
        imgLink: "1-expanding-cards.png",
    },
    {
        number: 2,
        name: "progress-steps",
        imgLink: "2-progress-steps.png",
    },
    {
        number: 3,
        name: "rotating-navigation-animation",
        imgLink: "3-rotating-navigation-animation.png",
    },
    {
        number: 4,
        name: "hidden-search-widget",
        imgLink: "4-hidden-search-widget.png",
    },
    {
        number: 5,
        name: "blurry-loading",
        imgLink: "5-blurry-loading.png",
    },
    {
        number: 6,
        name: "scroll-animation",
        imgLink: "6-scroll-animation.png",
    },
    {
        number: 7,
        name: "split-landing-page",
        imgLink: "7-split-landing-page.png",
    },
    {
        number: 8,
        name: "form-wave",
        imgLink: "8-form-wave.png"
    },
    {
        number: 9,
        name: "sound-board",
        imgLink: "9-sound-board.png"
    },
    {
        number: 10,
        name: "dad-jokes",
        imgLink: "10-dad-jokes.png"
    },
    {
        number: 11,
        name: "event-keycodes",
        imgLink: "11-event-keycodes.png",
    },
    {
        number: 12,
        name: "faq-collapse",
        imgLink: "12-faq-collapse.png"
    },
    {
        number: 13,
        name: "random-choice-picker",
        imgLink: "13-random-choice-picker.png",
    },
    {
        number: 14,
        name: "animated-navigation",
        imgLink: "14-animated-navigation.png",
    },
    {
        number: 15,
        name: "incrementing-counter",
        imgLink: "15-incrementing-counter.png",
    },
    {
        number: 16,
        name: "drink-water",
        imgLink: "16-drink-water.png"
    },
    {
        number: 17,
        name: "movie-app",
        imgLink: "17-movie-app.png"
    },
    {
        number: 18,
        name: "background-slider",
        imgLink: "18-background-slider.png",
    },
    {
        number: 19,
        name: "theme-clock",
        imgLink: "19-theme-clock.png"
    },
    {
        number: 20,
        name: "button-ripple-effect",
        imgLink: "20-button-ripple-effect.png",
    },
    {
        number: 21,
        name: "drag-n-drop",
        imgLink: "21-drag-n-drop.png"
    },
    {
        number: 22,
        name: "drawing-app",
        imgLink: "22-drawing-app.png"
    },
    {
        number: 23,
        name: "kinetic-loader",
        imgLink: "23-kinetic-loader.png",
    },
    {
        number: 24,
        name: "content-placeholder",
        imgLink: "24-content-placeholder.png",
    },
    {
        number: 25,
        name: "sticky-navbar",
        imgLink: "25-sticky-navbar.png",
    },
    {
        number: 26,
        name: "double-vertical-slider",
        imgLink: "26-double-vertical-slider.png",
    },
    {
        number: 27,
        name: "toast-notification",
        imgLink: "27-toast-notification.png",
    },
    {
        number: 28,
        name: "github-profiles",
        imgLink: "28-github-profiles.png",
    },
    {
        number: 29,
        name: "double-click-heart",
        imgLink: "29-double-click-heart.png",
    },
    {
        number: 30,
        name: "auto-text-effect",
        imgLink: "30-auto-text-effect.png",
    },
    {
        number: 31,
        name: "password-generator",
        imgLink: "31-password-generator.png",
    },
    {
        number: 32,
        name: "good-cheap-fast",
        imgLink: "32-good-cheap-fast.png",
    },
    {
        number: 33,
        name: "notes-app",
        imgLink: "33-notes-app.png"
    },
    {
        number: 34,
        name: "animated-countdown",
        imgLink: "34-animated-countdown.png",
    },
    {
        number: 35,
        name: "image-carousel",
        imgLink: "35-image-carousel.png",
    },
    {
        number: 36,
        name: "hoverboard",
        imgLink: "36-hoverboard.png"
    },
    {
        number: 37,
        name: "pokedex",
        imgLink: "37-pokedex.png"
    },
    {
        number: 38,
        name: "mobile-tab-navigation",
        imgLink: "38-mobile-tab-navigation.png",
    },
    {
        number: 39,
        name: "password-strength-background",
        imgLink: "39-password-strength-background.png",
    },
    {
        number: 40,
        name: "3d-background-boxes",
        imgLink: "40-3d-background-boxes.png",
    },
    {
        number: 41,
        name: "verify-account-ui",
        imgLink: "41-verify-account-ui.png",
    },
    {
        number: 42,
        name: "live-user-filter",
        imgLink: "42-live-user-filter.png",
    },
    {
        number: 43,
        name: "feedback-ui-design",
        imgLink: "43-feedback-ui-design.png",
    },
    {
        number: 44,
        name: "custom-range-slider",
        imgLink: "44-custom-range-slider.png",
    },
    {
        number: 45,
        name: "netflix-mobile-navigation",
        imgLink: "45-netflix-mobile-navigation.png",
    },
    {
        number: 46,
        name: "quiz-app",
        imgLink: "46-quiz-app.png"
    },
    {
        number: 47,
        name: "testimonial-box-switcher",
        imgLink: "47-testimonial-box-switcher.png",
    },
    {
        number: 48,
        name: "random-image-feed",
        imgLink: "48-random-image-feed.png",
    },
    {
        number: 49,
        name: "todo-list",
        imgLink: "49-todo-list.png"
    },
    {
        number: 50,
        name: "insect-catch-game",
        imgLink: "50-insect-catch-game.png",
    },
];

const projectsEl = document.getElementById("projects");

projects.forEach((project) => {
    projectEl = document.createElement("div");

    projectEl.innerHTML = `
        <span class="day">Day ${project.number}</span>
        <img src="img/projects-img/${project.imgLink}" alt="${project.name}" />
        <div class="content">
            <h4>${formateProjectName(project.name)}</h4>
            <a
                href="https://duyquang25.github.io/50Days_50Projects/Project${project.number}/index.html"
                target="_blank"
                class="btn btn-primary"
                >Live Demo</a
            >
        </div>
    `;

    projectsEl.appendChild(projectEl);
});

function formateProjectName(name) {
    return name
        .split("-")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ");
}