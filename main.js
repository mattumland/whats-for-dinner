var cookButton = document.querySelector(".lets-cook");
var potImage = document.querySelector(".menu-box-image");
var addButton = document.querySelector(".add-recipe");

cookButton.addEventListener('click', function() {
  var foodType = document.querySelector(`input[type="radio"]:checked`);
  if ((foodType) === null) {
    return;
  }
  potImage.classList.toggle("hidden");
  var foodList = grabArray(foodType.value);
  if (foodList === 'meal') {
    var mealText = buildFullMeal();
  }
  else {
    var mealText = buildOneDish(foodList);
  }
  insertFoodText(mealText);
});

function grabArray(foodType) {
  if (foodType === 'side') {
    return side;
  }
  if (foodType === 'main') {
    return mains;
  }
  if (foodType === 'dessert') {
    return desserts;
  }
  if (foodType === 'meal') {
    return 'meal';
  }
};

function buildFullMeal() {
  var sideMeal = side[getRandomIndex(side)];
  var mainMeal = mains[getRandomIndex(mains)];
  var dessertMeal = desserts[getRandomIndex(desserts)];
  return `<h4 class="food-idea-display">${mainMeal} with a side of ${sideMeal} and ${dessertMeal} for dessert!</h4>`;
}

function buildOneDish(foodType) {
  var foodName = foodType[getRandomIndex(foodType)];
  return `<h4 class="food-idea-display">${foodName}!</h4>`;
};

function insertFoodText(foodText) {
  var mealMessage = `<h3 class="food-idea-display">You should make:</h3> ${foodText}`
  var messageLocation = document.querySelector("#messageLocation");
  messageLocation.innerHTML = mealMessage;
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
