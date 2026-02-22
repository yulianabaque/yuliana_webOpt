const cards = document.querySelectorAll(".card-animate");

if (cards.length > 0) {
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("show");
        }, index * 300);
    });
}