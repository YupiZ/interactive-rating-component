const submitBtn = document.querySelector("#submit");
const thankYouElement = document.querySelector("#thankYouElement");
const rating = document.querySelectorAll("#rating > span");
const ratingValues = [...rating].map((span) => parseInt(span.innerText));
const ratingResult = document.querySelector("#ratingResult");

let selectedIndex = null;

rating.forEach((span, index) => {
	span.addEventListener("click", () => {
		rating.forEach((s) => s.classList.remove("selectedRating"));
		span.classList.add("selectedRating");
		selectedIndex = index;
	});
});
submitBtn.addEventListener("click", () => {
	console.log(selectedIndex);
	if (selectedIndex !== null) {
		thankYouElement.classList.remove("hidden");
		ratingResult.innerText = ratingValues[selectedIndex];
	} else {
		alert("Please select your Rating!");
	}
});
