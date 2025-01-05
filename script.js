const deals = [
  {
    id: 1,
    title: "Sony WH-1000XM4 Wireless Headphones",
    currentPrice: "€249.99",
    originalPrice: "€379.99",
    merchant: "Amazon",
    posted: "2 hours ago",
    discount: "-34%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    title: 'Samsung 4K Smart TV 55"',
    currentPrice: "€599.99",
    originalPrice: "€899.99",
    merchant: "MediaMarkt",
    posted: "5 hours ago",
    discount: "-33%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    title: "Apple AirPods Pro (2nd Generation)",
    currentPrice: "€229.99",
    originalPrice: "€279.99",
    merchant: "Apple Store",
    posted: "1 hour ago",
    discount: "-18%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 4,
    title: "Nintendo Switch OLED Model",
    currentPrice: "€299.99",
    originalPrice: "€349.99",
    merchant: "MediaMarkt",
    posted: "3 hours ago",
    discount: "-14%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 5,
    title: "Dyson V15 Detect Absolute",
    currentPrice: "€549.99",
    originalPrice: "€799.99",
    merchant: "Saturn",
    posted: "6 hours ago",
    discount: "-31%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 6,
    title: 'MacBook Air M2 13" 256GB',
    currentPrice: "€1099.99",
    originalPrice: "€1299.99",
    merchant: "Amazon",
    posted: "1 hour ago",
    discount: "-15%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 7,
    title: "Philips Hue Starter Kit (3 Bulbs)",
    currentPrice: "€89.99",
    originalPrice: "€149.99",
    merchant: "Expert",
    posted: "4 hours ago",
    discount: "-40%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 8,
    title: "Samsung Galaxy S23 Ultra 256GB",
    currentPrice: "€949.99",
    originalPrice: "€1199.99",
    merchant: "Samsung Store",
    posted: "2 hours ago",
    discount: "-21%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 9,
    title: 'LG OLED C3 65" 4K TV',
    currentPrice: "€1799.99",
    originalPrice: "€2499.99",
    merchant: "MediaMarkt",
    posted: "5 hours ago",
    discount: "-28%",
    image: "https://via.placeholder.com/300x200",
  },
];

// Function to create a deal card
function createDealCard(deal) {
  return `
        <div class="deal-card">
            <div class="deal-image">
                <img src="${deal.image}" alt="${deal.title}">
                <div class="deal-merchant">${deal.merchant}</div>
            </div>
            <div class="deal-content">
                <div class="deal-header">
                    <h2 class="deal-title">${deal.title}</h2>
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
function renderDeals() {
  const dealsContainer = document.getElementById("dealsContainer");
  dealsContainer.innerHTML = deals.map((deal) => createDealCard(deal)).join("");
}

// Handle voting
function handleVote(dealId) {
  const deal = deals.find((d) => d.id === dealId);
  if (deal) {
    deal.votes++;
    renderDeals();
  }
}

// Handle comments
function handleComments(dealId) {
  alert(`Opening comments for deal ${dealId}`);
}

// Show add deal form
function showAddDealForm() {
  alert("Add deal form will be implemented here");
  // Implement your form logic here
}

// Initial render
document.addEventListener("DOMContentLoaded", renderDeals);
