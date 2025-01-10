const deals = [
  {
    id: 1,
    title: "Sony WH-1000XM4 Wireless Headphones",
    currentPrice: "€249.99",
    originalPrice: "€379.99",
    merchant: "Amazon",
    discount: "-34%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    title: 'Samsung 4K Smart TV 55"',
    currentPrice: "€599.99",
    originalPrice: "€899.99",
    merchant: "MediaMarkt",
    discount: "-33%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    title: "Apple AirPods Pro (2nd Generation)",
    currentPrice: "€229.99",
    originalPrice: "€279.99",
    merchant: "Apple Store",
    discount: "-18%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 4,
    title: "Nintendo Switch OLED Model",
    currentPrice: "€299.99",
    originalPrice: "€349.99",
    merchant: "MediaMarkt",
    discount: "-14%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 5,
    title: "Dyson V15 Detect Absolute",
    currentPrice: "€549.99",
    originalPrice: "€799.99",
    merchant: "Saturn",
    discount: "-31%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 6,
    title: 'MacBook Air M2 13" 256GB',
    currentPrice: "€1099.99",
    originalPrice: "€1299.99",
    merchant: "Amazon",
    discount: "-15%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 7,
    title: "Philips Hue Starter Kit (3 Bulbs)",
    currentPrice: "€89.99",
    originalPrice: "€149.99",
    merchant: "Expert",
    discount: "-40%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 8,
    title: "Samsung Galaxy S23 Ultra 256GB",
    currentPrice: "€949.99",
    originalPrice: "€1199.99",
    merchant: "Samsung Store",
    discount: "-21%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 9,
    title: 'LG OLED C3 65" 4K TV',
    currentPrice: "€1799.99",
    originalPrice: "€2499.99",
    merchant: "MediaMarkt",
    discount: "-28%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 10,
    title: "iPad Pro 12.9\" (2024) 256GB",
    currentPrice: "€1099.99",
    originalPrice: "€1249.99",
    merchant: "Apple Store",
    discount: "-12%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 11,
    title: "Bose QuietComfort Ultra Headphones",
    currentPrice: "€329.99",
    originalPrice: "€449.99",
    merchant: "Saturn",
    discount: "-27%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 12,
    title: "Dell XPS 15 (2024) i9 32GB RAM",
    currentPrice: "€1899.99",
    originalPrice: "€2299.99",
    merchant: "Dell Store",
    discount: "-17%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 13,
    title: "Google Pixel 8 Pro 256GB",
    currentPrice: "€899.99",
    originalPrice: "€1099.99",
    merchant: "MediaMarkt",
    discount: "-18%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 14,
    title: "Sony PlayStation 5 Digital Edition",
    currentPrice: "€399.99",
    originalPrice: "€449.99",
    merchant: "GameStop",
    discount: "-11%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 15,
    title: "Canon EOS R6 Mark II Body",
    currentPrice: "€2299.99",
    originalPrice: "€2699.99",
    merchant: "Camera Store",
    discount: "-15%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 16,
    title: "Microsoft Surface Laptop 5",
    currentPrice: "€999.99",
    originalPrice: "€1299.99",
    merchant: "Microsoft Store",
    discount: "-23%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 17,
    title: "Samsung Galaxy Watch 6 Pro",
    currentPrice: "€329.99",
    originalPrice: "€449.99",
    merchant: "Samsung Store",
    discount: "-27%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 18,
    title: "Sonos Arc Soundbar",
    currentPrice: "€799.99",
    originalPrice: "€999.99",
    merchant: "Expert",
    discount: "-20%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 19,
    title: "DJI Mini 3 Pro Drone",
    currentPrice: "€699.99",
    originalPrice: "€849.99",
    merchant: "Amazon",
    discount: "-18%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 20,
    title: "Razer Blade 18 Gaming Laptop",
    currentPrice: "€2499.99",
    originalPrice: "€2999.99",
    merchant: "MediaMarkt",
    discount: "-17%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 21,
    title: "GoPro HERO12 Black",
    currentPrice: "€379.99",
    originalPrice: "€449.99",
    merchant: "Saturn",
    discount: "-16%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 22,
    title: "Fitbit Sense 2",
    currentPrice: "€249.99",
    originalPrice: "€299.99",
    merchant: "Amazon",
    discount: "-17%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 23,
    title: 'Samsung Neo QLED 75" 8K TV',
    currentPrice: "€2999.99",
    originalPrice: "€3999.99",
    merchant: "Samsung Store",
    discount: "-25%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 24,
    title: "Nikon Z8 Mirrorless Camera",
    currentPrice: "€3499.99",
    originalPrice: "€3999.99",
    merchant: "Camera Store",
    discount: "-13%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 25,
    title: "Logitech MX Master 3S Mouse",
    currentPrice: "€89.99",
    originalPrice: "€129.99",
    merchant: "MediaMarkt",
    discount: "-31%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 26,
    title: "ASUS ROG Swift 27\" Gaming Monitor",
    currentPrice: "€699.99",
    originalPrice: "€899.99",
    merchant: "Expert",
    discount: "-22%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 27,
    title: "Apple Watch Ultra 2",
    currentPrice: "€749.99",
    originalPrice: "€899.99",
    merchant: "Apple Store",
    discount: "-17%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 28,
    title: "Rode VideoMic Pro+",
    currentPrice: "€249.99",
    originalPrice: "€299.99",
    merchant: "Amazon",
    discount: "-17%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 29,
    title: "NVIDIA GeForce RTX 4080",
    currentPrice: "€999.99",
    originalPrice: "€1199.99",
    merchant: "Saturn",
    discount: "-17%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 30,
    title: "Elgato Stream Deck XL",
    currentPrice: "€199.99",
    originalPrice: "€249.99",
    merchant: "MediaMarkt",
    discount: "-20%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 31,
    title: "Anker 737 Power Bank",
    currentPrice: "€129.99",
    originalPrice: "€169.99",
    merchant: "Amazon",
    discount: "-24%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 32,
    title: "OnePlus 12 256GB",
    currentPrice: "€799.99",
    originalPrice: "€899.99",
    merchant: "OnePlus Store",
    discount: "-11%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 33,
    title: "Meta Quest 3 256GB",
    currentPrice: "€549.99",
    originalPrice: "€649.99",
    merchant: "MediaMarkt",
    discount: "-15%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 34,
    title: "Crucial P5 Plus 2TB NVMe SSD",
    currentPrice: "€149.99",
    originalPrice: "€199.99",
    merchant: "Expert",
    discount: "-25%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 35,
    title: "Jabra Elite 10 TWS Earbuds",
    currentPrice: "€199.99",
    originalPrice: "€249.99",
    merchant: "Saturn",
    discount: "-20%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 36,
    title: "LG UltraGear 34\" Gaming Monitor",
    currentPrice: "€799.99",
    originalPrice: "€999.99",
    merchant: "MediaMarkt",
    discount: "-20%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 37,
    title: "Shure SM7B Microphone",
    currentPrice: "€349.99",
    originalPrice: "€399.99",
    merchant: "Amazon",
    discount: "-13%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 38,
    title: "ASUS ZenBook Pro 16X",
    currentPrice: "€1999.99",
    originalPrice: "€2499.99",
    merchant: "ASUS Store",
    discount: "-20%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 39,
    title: "Ring Video Doorbell Pro 2",
    currentPrice: "€199.99",
    originalPrice: "€249.99",
    merchant: "Amazon",
    discount: "-20%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 40,
    title: "Corsair K100 RGB Keyboard",
    currentPrice: "€199.99",
    originalPrice: "€249.99",
    merchant: "MediaMarkt",
    discount: "-20%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 41,
    title: "Nanoleaf Shapes Starter Kit",
    currentPrice: "€179.99",
    originalPrice: "€199.99",
    merchant: "Saturn",
    discount: "-10%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 42,
    title: "Sony A7 IV Mirrorless Camera",
    currentPrice: "€2299.99",
    originalPrice: "€2699.99",
    merchant: "Camera Store",
    discount: "-15%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 43,
    title: "Beats Studio Pro",
    currentPrice: "€299.99",
    originalPrice: "€399.99",
    merchant: "Apple Store",
    discount: "-25%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 44,
    title: "Ecobee Smart Thermostat",
    currentPrice: "€199.99",
    originalPrice: "€249.99",
    merchant: "Amazon",
    discount: "-20%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 45,
    title: "Steam Deck OLED 1TB",
    currentPrice: "€599.99",
    originalPrice: "€699.99",
    merchant: "Steam Store",
    discount: "-14%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 46,
    title: "Keychron Q1 Pro Keyboard",
    currentPrice: "€179.99",
    originalPrice: "€199.99",
    merchant: "Expert",
    discount: "-10%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 47,
    title: "Nothing Phone (2) 256GB",
    currentPrice: "€649.99",
    originalPrice: "€749.99",
    merchant: "MediaMarkt",
    discount: "-13%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 48,
    title: "Synology DS920+ NAS",
    currentPrice: "€499.99",
    originalPrice: "€599.99",
    merchant: "Expert",
    discount: "-17%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 49,
    title: "Samsung Odyssey G9 49\" Monitor",
    currentPrice: "€1299.99",
    originalPrice: "€1599.99",
    merchant: "Samsung Store",
    discount: "-19%",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 50,
    title: "Dyson Purifier Hot+Cool HP07",
    currentPrice: "€549.99",
    originalPrice: "€699.99",
    merchant: "MediaMarkt",
    discount: "-21%",
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
