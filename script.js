// Function to create a deal card
function createDealCard(deal) {
  return `
        <div class="deal-card">
            <div class="deal-image">
                <a href="${deal.link}" target="blank">
                  <img src="${deal.image}" alt="${deal.title}">
                </a>
                <div class="deal-merchant">${deal.merchant}</div>
            </div>
            <div class="deal-content">
                <div class="deal-header">
                <a href="${deal.link}" target="blank">
                  <h2 class="deal-title">${deal.title}</h2>
                </a>
                    <div class="price-container">
                        <span class="current-price">${deal.currentPrice}</span>
                        <span class="original-price">${deal.originalPrice}</span>
                        <span class="discount-badge">${deal.discount}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Function to render all deals
function renderDeals(deals) {
  const dealsContainer = document.getElementById("dealsContainer");
  dealsContainer.innerHTML = deals.map((deal) => createDealCard(deal)).join("");
}

// Fetch deals from JSON file
let deals = [];
fetch("/deals.json")
  .then((response) => response.json())
  .then((data) => {
    deals = data;
    renderDeals(deals); // Initial render
  })
  .catch((error) => console.error("Error fetching deals:", error));

// Toggle light-dark-mode
const toggleButton = document.getElementById("theme-toggle");
const logoImg = document.querySelector(".logo");

toggleButton.innerHTML = '<i class="fa-solid fa-moon fa-2xl theme-icon"></i>';

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleButton.innerHTML = `<i class="fa-solid fa-sun fa-2xl theme-icon" style="color: #fff;"></i>`; // light mode icon
    logoImg.src = "images/dark-mode-logo.svg";
  } else {
    toggleButton.innerHTML =
      '<i class="fa-solid fa-moon fa-2xl theme-icon"></i>'; // dark mode icon
    logoImg.src = "images/light-mode-logo.svg";
  }
});

// Filter deals
function filteredDealsArr(category) {
  if (category === "all-items") {
    return deals;
  }
  return deals.filter((deal) => deal.category === category);
}

// Function to render filtered deals
function renderFilteredDeals(category) {
  const dealsContainer = document.getElementById("dealsContainer");
  const filteredDeals = filteredDealsArr(category);
  dealsContainer.innerHTML = filteredDeals
    .map((deal) => createDealCard(deal))
    .join("");
}

// Get filter buttons
const filterBtns = {
  allItemsBtn: document.querySelector(".all-items"),
  elDevicesBtn: document.querySelector(".electronic-devices"),
  clothesBtn: document.querySelector(".clothes"),
  footwearBtn: document.querySelector(".footwear"),
  furnitureBtn: document.querySelector(".furniture"),
  otherBtn: document.querySelector(".other"),
};

// Add event listeners to all buttons
for (const btnKey in filterBtns) {
  const btn = filterBtns[btnKey];

  btn.addEventListener("click", () => {
    const categoryClass = btn.classList[1];
    renderFilteredDeals(categoryClass);

    for (const key in filterBtns) {
      filterBtns[key].classList.remove("active");
    }
    btn.classList.add("active");

    // Close the filter container on small screens after selection
    if (window.innerWidth <= 700) {
      document.querySelector(".filter-buttons").classList.remove("visible");
    }
  });
}

// Search for deals
function searchDeals() {
  const searchInput = document.querySelector(".searchbox input");
  const searchTerm = searchInput.value.toLowerCase();
  const searchResults = deals.filter(
    (deal) =>
      deal.title.toLowerCase().includes(searchTerm) ||
      deal.merchant.toLowerCase().includes(searchTerm)
  );
  const dealsContainer = document.getElementById("dealsContainer");
  dealsContainer.innerHTML = searchResults
    .map((deal) => createDealCard(deal))
    .join("");
}

document.querySelector(".search-icon").addEventListener("click", function () {
  searchDeals();
});

document
  .querySelector(".searchbox input")
  .addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      searchDeals();
    }
  });

// Footer Interactivity
document.addEventListener("DOMContentLoaded", () => {
  const categoryLinks = document.querySelectorAll(
    ".footer-link[data-category]"
  );
  categoryLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const category = link.getAttribute("data-category");
      renderFilteredDeals(category);

      for (const key in filterBtns) {
        filterBtns[key].classList.remove("active");
      }
      document.querySelector(`.filter-btn.${category}`).classList.add("active");
    });
  });
});

// Filter Container Toggle
document.addEventListener("DOMContentLoaded", () => {
  const filterContainer = document.getElementById("filterContainer");
  const filterIcon = document.getElementById("filterIcon");
  const closeIcon = document.getElementById("closeIcon");
  const filterButtons = document.querySelector(".filter-buttons");

  // Toggle filter container
  filterIcon.addEventListener("click", () => {
    filterButtons.classList.add("visible");
  });

  closeIcon.addEventListener("click", () => {
    filterButtons.classList.remove("visible");
  });

  // Close filter container when clicking outside
  document.addEventListener("click", (e) => {
    if (!filterContainer.contains(e.target) && window.innerWidth <= 700) {
      filterButtons.classList.remove("visible");
    }
  });
});
