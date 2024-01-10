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
