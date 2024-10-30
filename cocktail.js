const setUpCards = () => {
    let wrapperRef = $('.wrapper');
    drinks.forEach((drink) => {
        let cardMarkup = `
            <div class="card">
                <img src="./images/${drink.image}" alt="${drink.name}">
                <div class="info">
                    <h3>${drink.name}</h3>
                    <p class="details">${drink.ingredients}</p>
                </div>
            </div>`;
        wrapperRef.append(cardMarkup);
    });
};
const showDrinkDetails = () => {
    setUpCards();

    $(".card").on("mouseover", function () {
        let index = $(".card").index(this);
        $(this).find(".details").text(drinks[index].recipe);
    });

$(".card").on("click", function () {
    let index = $(".card").index(this);
    $(this).find(".details").text(`Calories: ${drinks[index].calories}`);
});

$(".card").on("mouseout", function () {
    let index = $(".card").index(this);
    $(this).find(".details").text(drinks[index].ingredients);
});

};

$(document).ready(showDrinkDetails);

