const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Làm phần ẩn hiện
$$(".js-toggle").forEach((button) => {
    const target = button.getAttribute("toggle-target");

    if (!target) {
        document.body.innerText = `Cần thêm toggle-target cho ${button.outerHTML}`;
    }

    button.onclick = (e) => {
        e.preventDefault();

        let isHidden = $(target).classList.contains("hide");

        if (isHidden) {
            $(target).classList.remove("hide");
            $(target).classList.add("show");
        } else {
            $(target).classList.remove("show");
            $(target).classList.add("hide");
        }
    };
});

// Làm phần lướt của Special
const arrowLeft = $(".arrow-left");
const arrowRight = $(".arrow-right");
const dotsElement = $(".special__dot");
let totalClick = 0;

if (totalClick === 0) {
    arrowLeft.classList.add("hide");
    arrowLeft.classList.remove("show");

    arrowRight.classList.add("show");
    arrowRight.classList.remove("hide");
}

arrowRight.onclick = () => {
    totalClick++;
    if (totalClick < 0) totalClick = 0;
    if (totalClick > 2) totalClick = 2;

    if (totalClick === 0) {
        arrowLeft.classList.add("hide");
        arrowLeft.classList.remove("show");
    }

    if (totalClick === 2) {
        arrowRight.classList.add("hide");
        arrowRight.classList.remove("show");
    }

    if (totalClick === 1) {
        arrowLeft.classList.add("show");
        arrowLeft.classList.remove("hide");

        arrowRight.classList.add("show");
        arrowRight.classList.remove("hide");
    }

    $$(".special-item").forEach((item) => {
        const translateNum = 100 * totalClick;
        item.style.translate = `calc(-${translateNum}% - ${30 * totalClick}px)`;
    });

    const dots = dotsElement.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
        dot.classList.remove("active");

        dots[totalClick].classList.add("active");
    });
};

arrowLeft.onclick = () => {
    totalClick--;
    if (totalClick < 0) totalClick = 0;
    if (totalClick > 2) totalClick = 2;

    if (totalClick === 0) {
        arrowLeft.classList.add("hide");
        arrowLeft.classList.remove("show");
    }

    if (totalClick === 2) {
        arrowRight.classList.add("hide");
        arrowRight.classList.remove("show");
    }

    if (totalClick === 1) {
        arrowLeft.classList.add("show");
        arrowLeft.classList.remove("hide");

        arrowRight.classList.add("show");
        arrowRight.classList.remove("hide");
    }

    $$(".special-item").forEach((item) => {
        const translateNum = 100 * totalClick;
        item.style.translate = `calc(-${translateNum}% - ${30 * totalClick}px)`;
    });

    const dots = dotsElement.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
        dot.classList.remove("active");

        dots[totalClick].classList.add("active");
    });
};
