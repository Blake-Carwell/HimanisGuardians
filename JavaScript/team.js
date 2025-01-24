document.addEventListener("DOMContentLoaded", () => {
    const teamButtons = document.querySelectorAll(".team-member button");

    teamButtons.forEach(button => {
        button.addEventListener("click", () => {
            button.classList.toggle("active");
        });
    });
});
