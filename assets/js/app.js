let slidePosition = 0;
const slides = document.getElementsByClassName("carousel_item");

const totalSlides = slides.length;

document
	.getElementById("carousel_button--next")
	.addEventListener("click", function () {
		moveToNextSlide();
	});

document
	.getElementById("carousel_button--prev")
	.addEventListener("click", function () {
		moveToPrevSlide();
	});

function updateSlidePosition() {
	for (let slide of slides) {
		slide.classList.remove("carousel_item--visible");
		slide.classList.add("carousel_item--hidden");
	}

	slides[slidePosition].classList.add("carousel_item--visible");
}

setInterval(moveToNextSlide, 5000);

function moveToNextSlide() {
	if (slidePosition === totalSlides - 1) {
		slidePosition = 0;
	} else {
		slidePosition++;
	}

	updateSlidePosition();
}

function moveToPrevSlide() {
	if (slidePosition === 0) {
		slidePosition = totalSlides - 1;
	} else {
		slidePosition--;
	}

	updateSlidePosition();
}

// Products Tab Functionality
//tab nav for dog foods
let tabNavContainer = document.getElementById("merrick-dog-tab-nav");
let allNavItem = tabNavContainer.querySelectorAll("li");
// for setting active nav and show respective products
const tabNavActive = (targetNav, showProducts) => {
	for (let i = 0; i < allNavItem.length; i++) {
		allNavItem[i].classList.remove("li-active");
	}
	targetNav.classList.add("li-active");
	//call function for showing targeted product div
	productsContainerShow(showProducts);
	console.log(showProducts);
};
// showing respective products
// select all the products containers
const dogProductContainers = document.querySelectorAll(".merrick_dog_products");
//declare the function
const productsContainerShow = (targetedContainer) => {
	for (let i = 0; i < dogProductContainers.length; i++) {
		dogProductContainers[i].classList.remove("show");
		console.log(dogProductContainers[i]);
	}
	//now select the targeted products containers
	const targetContainer = document.getElementById(targetedContainer);
	console.log(targetContainer);
	//now add class name to view ui
	targetContainer.classList.add("show");
};
console.log(dogProductContainers);
