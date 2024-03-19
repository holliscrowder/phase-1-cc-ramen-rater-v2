// index.js

// Callbacks
const handleClick = (ramen) => {
  // Add code
  // add ramen info to detail area
  const ramenDetailImg = document.querySelector(".detail-image");
  ramenDetailImg.src = ramen.image;

  const ramenDetailName = document.querySelector("#ramen-detail .name");
  ramenDetailName.textContent = ramen.name;

  const ramenDetailRestaurant = document.querySelector(
    "#ramen-detail .restaurant"
  );
  ramenDetailRestaurant.textContent = ramen.restaurant;

  const ramenDetailRating = document.querySelector("#rating-display");
  ramenDetailRating.textContent = ramen.rating;

  const ramenDetailComment = document.querySelector("#comment-display");
  ramenDetailComment.textContent = ramen.comment;
};

const addSubmitListener = () => {
  // Add code
  const ramenForm = document.querySelector("#new-ramen");
  ramenForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const newRamen = {
      name: event.target.name.value,
      restaurant: event.target.restaurant.value,
      image: event.target.image.value,
      rating: event.target.rating.value,
      comment: event.target.comment.value,
    };
    addRamen(newRamen);
    event.target.reset();
  });
};

const displayRamens = () => {
  // Add code
  // GET ramen info to display ramen images in ramen menu
  const fetchRamen = async () => {
    const response = await fetch("http://localhost:3000/ramens");
    const ramens = await response.json();

    for (const ramen of ramens) {
      addRamen(ramen);
    }
  };
  fetchRamen();
};

const addRamen = (ramen) => {
  const ramenMenu = document.querySelector("#ramen-menu");
  const ramenImg = document.createElement("img");
  ramenImg.src = ramen.image;
  ramenImg.alt = `${ramen.name} photo`;
  ramenImg.className = "ramen-menu";

  ramenImg.addEventListener("click", () => {
    handleClick(ramen);
  });

  // only add ramen image to ramen menu
  ramenMenu.append(ramenImg);
};

const main = () => {
  document.addEventListener("DOMContentLoaded", () => {
    // Invoke displayRamens here
    displayRamens();
    // Invoke addSubmitListener here
    addSubmitListener();
  });
};

main();

// Export functions for testing
export { displayRamens, addSubmitListener, handleClick, main };
