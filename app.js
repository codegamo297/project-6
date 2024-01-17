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

        const isHidden = $(target).classList.contains("hide");

        $(target).classList.toggle("hide", !isHidden);
        $(target).classList.toggle("show", isHidden);
    };
});

// Làm phần lướt item
function jsArrow() {
    let totalClick = 0;

    $$(".js-move").forEach((button) => {
        const target = button.getAttribute("target-move");
        const direction = button.getAttribute("direction-arrow");
        const section = button.getAttribute("section");
        const targetDot = button.getAttribute("target-dot");

        if (!target) {
            document.body.innerText = `Cần thêm target-move cho: ${button.outerHTML}`;
        }
        if (!direction) {
            document.body.innerText = `Cần thêm direction-arrow cho: ${button.outerHTML}`;
        }
        if (!section) {
            document.body.innerText = `Cần thêm section cho: ${button.outerHTML}`;
        }
        if (!targetDot) {
            document.body.innerText = `Cần thêm target-dot cho: ${button.outerHTML}`;
        }

        function checkClick(btn, oppositeBtn, total, lengthList) {
            total = Math.min(Math.max(total, 0), lengthList);

            btn.classList.toggle("hide", total === 0);
            btn.classList.toggle("show", total !== 0);
            oppositeBtn.classList.toggle("hide", total === lengthList);
            oppositeBtn.classList.toggle("show", total !== lengthList);

            return total;
        }

        button.onclick = (e) => {
            e.preventDefault();
            const oppositeDirection = direction === "left" ? "right" : "left";
            const oppositeArrow = document.querySelector(
                `.${String(
                    section
                )}__arrow[direction-arrow=${oppositeDirection}]`
            );
            const dots = document
                .querySelector(targetDot)
                .querySelectorAll(".dot");

            if (direction === "left") {
                totalClick--;
                totalClick = checkClick(
                    button,
                    oppositeArrow,
                    totalClick,
                    $$(target).length - 1
                );

                dots.forEach((dot) => {
                    dot.classList.remove("active");
                    dots[totalClick].classList.add("active");
                });
            }

            if (direction === "right") {
                totalClick++;
                totalClick = checkClick(
                    oppositeArrow,
                    button,
                    totalClick,
                    $$(target).length - 1
                );

                dots.forEach((dot) => {
                    dot.classList.remove("active");
                    dots[totalClick].classList.add("active");
                });
            }

            $$(target).forEach((item) => {
                const translateCss = `calc(-${100 * totalClick}%
                - ${30 * totalClick}px)`;
                item.style.translate = translateCss;
            });
        };
    });
}
jsArrow();

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
