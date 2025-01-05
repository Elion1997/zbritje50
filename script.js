const deals = [
  {
    id: 1,
    title: "Sony WH-1000XM4 Wireless Headphones",
    currentPrice: "€249.99",
    originalPrice: "€379.99",
    description:
      "Premium noise cancelling headphones with exceptional sound quality. Free shipping available.",
    merchant: "Amazon",
    posted: "2 hours ago",
    votes: 127,
    comments: 45,
    discount: "-34%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    title: 'Samsung 4K Smart TV 55"',
    currentPrice: "€599.99",
    originalPrice: "€899.99",
    description:
      "Latest model with QLED technology. In-store pickup available.",
    merchant: "MediaMarkt",
    posted: "5 hours ago",
    votes: 89,
    comments: 23,
    discount: "-33%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    title: "Apple AirPods Pro (2nd Generation)",
    currentPrice: "€229.99",
    originalPrice: "€279.99",
    description:
      "Active noise cancellation for immersive sound. 24-hour battery life with charging case.",
    merchant: "Apple Store",
    posted: "1 hour ago",
    votes: 156,
    comments: 32,
    discount: "-18%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 4,
    title: "Sony WH-1000XM4 Wireless Headphones",
    currentPrice: "€249.99",
    originalPrice: "€379.99",
    description:
      "Premium noise cancelling headphones with exceptional sound quality. Free shipping available.",
    merchant: "Amazon",
    posted: "2 hours ago",
    votes: 127,
    comments: 45,
    discount: "-34%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 5,
    title: 'Samsung 4K Smart TV 55"',
    currentPrice: "€599.99",
    originalPrice: "€899.99",
    description:
      "Latest model with QLED technology. In-store pickup available.",
    merchant: "MediaMarkt",
    posted: "5 hours ago",
    votes: 89,
    comments: 23,
    discount: "-33%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 6,
    title: "Apple AirPods Pro (2nd Generation)",
    currentPrice: "€229.99",
    originalPrice: "€279.99",
    description:
      "Active noise cancellation for immersive sound. 24-hour battery life with charging case.",
    merchant: "Apple Store",
    posted: "1 hour ago",
    votes: 156,
    comments: 32,
    discount: "-18%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 7,
    title: "Sony WH-1000XM4 Wireless Headphones",
    currentPrice: "€249.99",
    originalPrice: "€379.99",
    description:
      "Premium noise cancelling headphones with exceptional sound quality. Free shipping available.",
    merchant: "Amazon",
    posted: "2 hours ago",
    votes: 127,
    comments: 45,
    discount: "-34%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 8,
    title: 'Samsung 4K Smart TV 55"',
    currentPrice: "€599.99",
    originalPrice: "€899.99",
    description:
      "Latest model with QLED technology. In-store pickup available.",
    merchant: "MediaMarkt",
    posted: "5 hours ago",
    votes: 89,
    comments: 23,
    discount: "-33%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 9,
    title: "Apple AirPods Pro (2nd Generation)",
    currentPrice: "€229.99",
    originalPrice: "€279.99",
    description:
      "Active noise cancellation for immersive sound. 24-hour battery life with charging case.",
    merchant: "Apple Store",
    posted: "1 hour ago",
    votes: 156,
    comments: 32,
    discount: "-18%",
    image: "https://via.placeholder.com/300x200",
  },
];

// Function to create a deal card
function createDealCard(deal) {
  return `
        <div class="deal-card">
            <div class="deal-image">
                <img src="${deal.image}" alt="${deal.title}">
            </div>
            <div class="deal-content">
                <div class="deal-header">
                    <h2 class="deal-title">${deal.title}</h2>
                    <div class="deal-merchant">${deal.merchant}</div>
                    <div class="price-container">
                        <span class="current-price">${deal.currentPrice}</span>
                        <span class="original-price">${deal.originalPrice}</span>
                        <span class="discount-badge">${deal.discount}</span>
                    </div>
                </div>
                <p class="deal-description">${deal.description}</p>
                <div class="deal-footer">
                    <div class="vote-section">
                        <button class="vote-button" onclick="handleVote(${deal.id})">👍</button>
                        <span class="vote-count">${deal.votes}</span>
                    </div>
                    <div class="deal-meta">
                        <span>${deal.posted}</span>
                        <a href="#" onclick="handleComments(${deal.id})">${deal.comments} Comments</a>
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
