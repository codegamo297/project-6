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
const dots = dotsElement.querySelectorAll(".dot");
let totalClick = 0;

checkClick(totalClick);

function checkClick(total, lengthList) {
    total = Math.min(Math.max(total, 0), lengthList);
    if (!lengthList) total = 0;

    arrowLeft.classList.toggle("hide", total === 0);
    arrowLeft.classList.toggle("show", total !== 0);

    arrowRight.classList.toggle("hide", total === lengthList);
    arrowRight.classList.toggle("show", total !== lengthList);

    return total;
}

arrowRight.onclick = () => {
    totalClick++;
    totalClick = checkClick(totalClick, $$(".special-item").length - 1);

    $$(".special-item").forEach((item) => {
        const translateCss = `calc(-${100 * totalClick}%
            - ${30 * totalClick}px)`;
        item.style.translate = translateCss;
    });

    dots.forEach((dot) => {
        dot.classList.remove("active");
        dots[totalClick].classList.add("active");
    });
};

arrowLeft.onclick = () => {
    totalClick--;
    totalClick = checkClick(totalClick, $$(".special-item").length - 1);

    $$(".special-item").forEach((item) => {
        const translateCss = `calc(-${100 * totalClick}%
            - ${30 * totalClick}px)`;
        item.style.translate = translateCss;
    });

    dots.forEach((dot) => {
        dot.classList.remove("active");
        dots[totalClick].classList.add("active");
    });
};

// Làm phần About: play video
const playVideo = $(".video-play__btn");
const btnVideo = $(".video__btn");
const video = $(".video__main");

playVideo.onclick = () => {
    video.play();
    video.setAttribute("controls", "true");
    playVideo.style.display = "none";
    btnVideo.style.display = "none";
};

video.addEventListener("mousemove", function (event) {
    var rect = video.getBoundingClientRect();
    var mouseX = event.clientX - rect.left;
    var mouseY = event.clientY - rect.top;

    if (
        mouseX >= 0 &&
        mouseX <= rect.width &&
        mouseY >= 0 &&
        mouseY <= rect.height
    ) {
        // console.log("Con trỏ đi qua phần tử.");
        // Thực hiện các hành động khác khi con trỏ đi qua phần tử.
    }
});
