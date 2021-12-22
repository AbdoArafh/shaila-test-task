const accordionTogglers = document.querySelectorAll(".toggle-accordion");
accordionTogglers.forEach(el => el.addEventListener("click", showAccordion));

function showAccordion(event) {
    const target = event.target.dataset.target;
    found = false;
    accordionTogglers.forEach(tog => tog.classList.remove("chosen"));
    document.querySelectorAll(".show-item").forEach(el => {
        el.classList.remove("show-item");
        if (el.id == target.split("#")[1]) {
            found = true;
        }
    });
    if (!found) {
        event.target.classList.add("chosen");
        document.querySelector(target)
            .classList.add("show-item");
    }
}