const deals = [
  {
    id: 1,
    title: `Monitor AOC 25G3ZM/BK, 24.5", 1920 x 1080 (FullHD), 240Hz, i zi/ kuq`,
    currentPrice: "€169.50",
    originalPrice: "€309.50",
    merchant: "Gjirafa50",
    discount: "-45%",
    image: "images/deals/image1.jpg",
    category: "electronic-devices",
    link: "https://gjirafa50.com/monitor-aoc-25g3zmbk-245-1920-x-1080-fullhd-i-zi-kuq?utm_source=rec-product&utm_medium=homepage&utm_campaign=homepage-featured-products",
  },
  {
    id: 2,
    title: "Mulli kafeje Sage the Smart Grinder 165 W, i zi",
    currentPrice: "€300.00",
    originalPrice: "€450.00",
    merchant: "Foleja",
    discount: "-33%",
    image: "images/deals/image2.jpg",
    category: "Kitchen Appliance",
    link: "https://www.foleja.com/ACN-300121733/Mulli-kafeje-Sage-the-Smart-Grinder-165-W-i-zi",
  },
  {
    id: 3,
    title: "REEBOK ROYAL BB4500 HI2",
    currentPrice: "€49.00",
    originalPrice: "€70.00",
    merchant: "Dardania Sport",
    discount: "-30%",
    image: "images/deals/image3.jpg",
    category: "footwear",
    link: "https://www.dardaniasport.com/product/reebok-royal-bb4500-hi2-6/",
  },
  {
    id: 4,
    title: "Burmashinë 350W",
    currentPrice: "€13.90",
    originalPrice: "€€32.50 ",
    merchant: "75Mall",
    discount: "-57%",
    image: "images/deals/image4.webp",
    category: "Tools",
    link: "https://www.75mall.com/kopsht-and-vegla-te-punes-al/paisje-elektrike-and-bateri-al/burmashine-350w/",
  },
  {
    id: 5,
    title: "Starter Baterie 16800mah Lithium 12v To 8l",
    currentPrice: "€139.20",
    originalPrice: "€174.00",
    merchant: "Lisi-M",
    discount: "-20%",
    image: "images/deals/image5.jpg",
    category: "Car Accessories",
    link: "https://lisi-m.com/produkt/starter-baterie-16800mah-lithium-12v-to-8l-obsl400-osram/",
  },
  {
    id: 6,
    title: "Tavolinë elektrike SENSE7 Nojo, 120cm x 60cm,e zezë/ druri",
    currentPrice: "€119.50",
    originalPrice: "€233.50",
    merchant: "Gjirafa50",
    discount: "-49%",
    image: "images/deals/image6.jpg",
    category: "furniture",
    link: "https://gjirafa50.com/tavoline-elektrike-sense7-nojo-120cm-x-60cm-druri-e-zeze?utm_source=rec-product&utm_medium=homepage&utm_campaign=homepage-featured-products",
  },
  {
    id: 7,
    title: "Tavolinë SENSE7 Nomad Basic, 140cm x 60cm, e zezë",
    currentPrice: "€99.50",
    originalPrice: "€179.50",
    merchant: "Gjirafa50",
    discount: "-45%",
    image: "images/deals/image7.jpg",
    category: "furniture",
    link: "https://gjirafa50.com/tavoline-sense7-nomad-basic-140cm-x-60cm-e-zeze-3?utm_source=rec-product&utm_medium=homepage&utm_campaign=homepage-featured-products",
  },
  {
    id: 8,
    title: "Karrige SENSE7 Spellcaster FUKU, material+lëkurë, e zezë",
    currentPrice: "€159.50",
    originalPrice: "€269.50 ",
    merchant: "Gjirafa50",
    discount: "-41%",
    image: "images/deals/image8.jpg",
    category: "furniture",
    link: "https://gjirafa50.com/karrige-sense7-spellcaster-fuku-pu-e-zeze?utm_source=rec-product&utm_medium=homepage&utm_campaign=homepage-featured-products",
  },
  {
    id: 9,
    title: `Televizor Philips 65PUS7409/12, LED, 65", 4K UHD, i zi`,
    currentPrice: "€479.50",
    originalPrice: "€849.50",
    merchant: "Gjirafa50",
    discount: "-44%",
    image: "images/deals/image9.jpg",
    category: "electronic-devices",
    link: "https://gjirafa50.com/televizor-philips-65pus740912-led-65-4k-uhd-i-zi?utm_source=def-product&utm_medium=homepage&utm_campaign=homepage-featured-products",
  },
  {
    id: 10,
    title: "Kuti çelësash Yale YKB/200/BB2, Metal, E zezë",
    currentPrice: "€22.00",
    originalPrice: "€33.00",
    merchant: "Foleja",
    discount: "-33%",
    image: "images/deals/image10.webp",
    category: "other",
    link: "https://www.foleja.com/ACN-300247454/Kuti-celesash-Yale-YKB-200-BB2-Metal-E-zeze",
  },
  {
    id: 11,
    title: "Kamerë sigurie IP Imou Cue 2, 1920 x 1080 pixels, e bardhë",
    currentPrice: "€23.00",
    originalPrice: "€33.00",
    merchant: "Foleja",
    discount: "-30%",
    image: "images/deals/image11.jpg",
    category: "electronic-devices",
    link: "https://www.foleja.com/YLL-200007300/Kamere-sigurie-IP-Imou-Cue-2-1920-x-1080-pixels-e-bardhe",
  },
  {
    id: 12,
    title: "DAME 9",
    currentPrice: "€84.00",
    originalPrice: "€120.00",
    merchant: "Dardania Sport",
    discount: "-36%",
    image: "images/deals/image12.jpg",
    category: "footwear",
    link: "https://www.dardaniasport.com/product/dame-9/",
  },
  {
    id: 13,
    title: "TERREX AX4 MID BETA C.RDY",
    currentPrice: "€105.00",
    originalPrice: "€150.00",
    merchant: "Dardania Sport",
    discount: "-30%",
    image: "images/deals/image13.jpg",
    category: "footwear",
    link: "https://www.dardaniasport.com/product/terrex-ax4-mid-beta-c-rdy-4/",
  },
  {
    id: 14,
    title: "Maus Logitech G Pro X Superlight, i bardhë",
    currentPrice: "€119.50",
    originalPrice: "€179.50 ",
    merchant: "Gjirafa50",
    discount: "-33%",
    image: "images/deals/image14.jpg",
    category: "electronic-devices",
    link: "https://gjirafa50.com/maus-logitech-g-pro-x-superlight-i-bardhe-3?utm_source=def-product&utm_medium=homepage&utm_campaign=homepage-featured-products",
  },
  {
    id: 15,
    title: "Burmashinë ED1100",
    currentPrice: "€59.90",
    originalPrice: "€79.90",
    merchant: "75Mall",
    discount: "-25%",
    image: "images/deals/image15.webp",
    category: "Tools",
    link: "https://www.75mall.com/kopsht-and-vegla-te-punes-al/paisje-elektrike-and-bateri-al/burmashine-ed1100/",
  },
  {
    id: 16,
    title: "Multi cooker Gorenje MC 6 M BK",
    currentPrice: "€79.90",
    originalPrice: "€99.90",
    merchant: "75Mall",
    discount: "-20%",
    image: "images/deals/image16.webp",
    category: "Kitchen Appliance",
    link: "https://www.75mall.com/elektro-shtepiake/aparate-te-vogla-shtepiake/multi-cooker-mc-6-m-bk/",
  },
  {
    id: 17,
    title: `Fshesë me avull Gorenje SC 1200 W"`,
    currentPrice: "€50.50",
    originalPrice: "€99.90",
    merchant: "75Mall",
    discount: "-49%",
    image: "images/deals/image17.webp",
    category: "electronic-devices",
    link: "https://www.75mall.com/elektro-shtepiake/fshesa-al/fshese-me-avull-sc-1200-w/",
  },
  {
    id: 18,
    title: "Lavatriçe Gorenje WNHPI 72 SCS",
    currentPrice: "€255.50",
    originalPrice: "€379.90",
    merchant: "75Mall",
    discount: "-33%",
    image: "images/deals/image18.webp",
    category: "electronic-devices",
    link: "https://www.75mall.com/elektro-shtepiake/teknike-e-bardhe/lavatrice-wnhpi-72-scs/",
  },
  {
    id: 19,
    title: "Pantollona Shiu Nordcode Xxl Nor000rai14",
    currentPrice: "€28,00",
    originalPrice: "€44,90",
    merchant: "Lisi-M",
    discount: "-37%",
    image: "images/deals/image19.jpg",
    category: "clothes",
    link: "https://lisi-m.com/produkt/pantollona-shiu-nordcode-xxl/",
  },
  {
    id: 20,
    title: "Bateri 12v 70ah Extreme Efb De70efb Asia",
    currentPrice: "€132,00",
    originalPrice: "€165,00",
    merchant: "Lisi-M",
    discount: "-20%",
    image: "images/deals/image20.jpg",
    category: "electronic-devices",
    link: "https://lisi-m.com/produkt/bateri-12v-70ah-extreme-efb-de70efb-asia/",
  },
  {
    id: 21,
    title: "XIAOMI REDMI 13 8/256GB PINK",
    currentPrice: "€139.00",
    originalPrice: "€249.00",
    merchant: "Zbritje-KS",
    discount: "-45%",
    image: "images/deals/image21.jpg",
    category: "electronic-devices",
    link: "https://zbritje-ks.com/product/xiaomi-redmi-13-8-256gb-pink/",
  },
  {
    id: 22,
    title: `Televizor Hisense 58"58A6N LED UHD Smart TV`,
    currentPrice: "€399.90",
    originalPrice: "€699.90",
    merchant: "75Mall",
    discount: "-43%",
    image: "images/deals/image22.jpg",
    category: "electronic-devices",
    link: "https://www.75mall.com/tv-and-audio/televizore/televizor-hisense-5858a6n-led-uhd-smart-tv/",
  },
  {
    id: 23,
    title: "MBUSHES PLOOS APPLE PLTCKIT1AMFIK | 1A USB-A/LIGHTNING I ZI",
    currentPrice: "€9.99",
    originalPrice: "€24.99",
    merchant: "Zbritje-KS",
    discount: "-61%",
    image: "images/deals/image23.png",
    category: "other",
    link: "https://zbritje-ks.com/product/mbushes-ploos-apple-pltckit1amfik-1a-usb-a-lightning-i-zi/",
  },
  {
    id: 24,
    title:
      "KUFJE BUDS PHILIPS TAT3216BK/00 | WIRELESS IPX5 SPLASH MIC IN-EAR BLACK",
    currentPrice: "€69.99",
    originalPrice: "€89.99",
    merchant: "Zbritje-KS",
    discount: "-23%",
    image: "images/deals/image24.jpg",
    category: "electronic-devices",
    link: "https://zbritje-ks.com/product/kufje-buds-philips-tat3216bk-00-wireless-ipx5-splash-mic-in-ear-black/",
  },
  {
    id: 25,
    title: "Kondicioner V PIE Hisense TV 35 VD 1G/1W - 12000 BTU",
    currentPrice: "€289.90",
    originalPrice: "€399.90",
    merchant: "75Mall",
    discount: "-28%",
    image: "images/deals/image25.webp",
    category: "electronic-devices",
    link: "https://www.75mall.com/elektro-shtepiake/ngrohje-dhe-ftohje/kondicioner-v-pie-tv-35-vd-1g-1w/",
  },
  {
    id: 26,
    title: "Ngrohëse uji MPM MCZ-85, e bardhë",
    currentPrice: "€18.99",
    originalPrice: "€28.39",
    merchant: "Zbritje-KS",
    discount: "-34%",
    image: "images/deals/image26.jpg",
    category: "Kitchen Appliance",
    link: "https://zbritje-ks.com/product/ngrohese-uji-mpm-mcz-85-e-bardhe/",
  },
  {
    id: 27,
    title: "Flexi Shtrat 120x200 - YB03",
    currentPrice: "€333.50",
    originalPrice: "€540.90",
    merchant: "75Mall",
    discount: "-39%",
    image: "images/deals/image27.webp",
    category: "furniture",
    link: "https://www.75mall.com/mobilje-al/dhome-e-femijeve-al/flexi-shtrat-120x200-yb03/",
  },
  {
    id: 28,
    title: "Ore Abeler Sohne AS1341",
    currentPrice: "€119.50",
    originalPrice: "€239.00",
    merchant: "Ora-KS",
    discount: "-50%",
    image: "images/deals/image28.jpg",
    category: "Accessories",
    link: "https://ora-ks.com/outlet?product_id=3",
  },
  {
    id: 29,
    title: "Fustan Vero Moda 10323267 Liv",
    currentPrice: "€41.99",
    originalPrice: "€59.99",
    merchant: "Minimax",
    discount: "-30%",
    image: "images/deals/image29.jpg",
    category: "clothes",
    link: "https://minimax-ks.com/product/fustan-vero-moda-10323267-liv/",
  },
  {
    id: 30,
    title: "Eko Dollap 55Cm",
    currentPrice: "€129.90",
    originalPrice: "€189.90",
    merchant: "75Mall",
    discount: "-32%",
    image: "images/deals/image30.webp",
    category: "furniture",
    link: "https://www.75mall.com/mobilje-al/banjo-al/eko-dollap-55cm/",
  },
  {
    id: 31,
    title: "Patikë Guess Fmtebrlea12 Blagr",
    currentPrice: "€87.50",
    originalPrice: "€125.00",
    merchant: "Minimax",
    discount: "-30%",
    image: "images/deals/image31.jpg",
    category: "footwear",
    link: "https://minimax-ks.com/product/patike-guess-fmtebrlea12-blagr/",
  },
  {
    id: 32,
    title: "Rrobatharëse Heat Pump A++ 9KG Ecolux – ETH 9HP",
    currentPrice: "€379.99",
    originalPrice: "€499.99",
    merchant: "Interplast Group",
    discount: "-24%",
    image: "images/deals/image32.webp",
    category: "electronic-devices",
    link: "https://interplast-group.com/product/eth-9hp-rrobatharese/",
  },
  {
    id: 33,
    title: "Thithëse & Pastruese Ecolux – ECO CARPET MCD",
    currentPrice: "€89.99",
    originalPrice: "€119.99",
    merchant: "Interplast Group",
    discount: "-25%",
    image: "images/deals/image33.webp",
    category: "electronic-devices",
    link: "https://interplast-group.com/product/thithese-pastruese-ecolux-eco-carpet-mcd/ 	",
  },
  {
    id: 34,
    title: "Thithese Elektrike Samsung – VCC4135S37/BOL",
    currentPrice: "€59.99",
    originalPrice: "€69.99",
    merchant: "Interplast Group",
    discount: "-14%",
    image: "images/deals/image34.webp",
    category: "electronic-devices",
    link: "https://interplast-group.com/product/vcc-4135-thithese-elektrike/",
  },
  {
    id: 35,
    title: "Disk HDD EXTERNAL APACER AC236, USB 3.2, 1TB, i zi",
    currentPrice: "€64.00",
    originalPrice: "€90.00",
    merchant: "Foleja",
    discount: "-26%",
    image: "images/deals/image35.png",
    category: "electronic-devices",
    link: "https://www.foleja.com/YLL-200006127/Disk-HDD-EXTERNAL-APACER-AC236-USB-3.2-1TB-i-zi",
  },
  {
    id: 36,
    title: "Set ulëse për kopsht FH5711, 4 pjesë, hiri",
    currentPrice: "€939.00",
    originalPrice: "€1199.00",
    merchant: "Foleja",
    discount: "-22%",
    image: "images/deals/image36.webp",
    category: "furniture",
    link: "https://www.foleja.com/MAR-200001589/Set-ulese-per-kopsht-FH5711-4-pjese-hiri",
  },
  {
    id: 37,
    title: "Eau De Parfum Chanel Coco Noir, 50 ml",
    currentPrice: "€93.00",
    originalPrice: "€122.00",
    merchant: "Foleja",
    discount: "-24%",
    image: "images/deals/image37.jpg",
    category: "Perfume",
    link: "https://www.foleja.com/YLL-200007228/Eau-De-Parfum-Chanel-Coco-Noir-50-ml",
  },
  {
    id: 38,
    title: "Parfum per meshkuj, Giorgio Armani, Acqua Di Gio Profondo, 75 ml",
    currentPrice: "€98.00",
    originalPrice: "€133.00",
    merchant: "FOleja",
    discount: "-26%",
    image: "images/deals/image38.jpg",
    category: "Perfume",
    link: "https://www.foleja.com/YLL-200003363/Parfum-per-meshkuj-Giorgio-Armani-Acqua-Di-Gio-Profondo-75-ml",
  },
  {
    id: 39,
    title: "Top futbolli Puma TeamFinal 21.3 FIFA Quality, i bardhë",
    currentPrice: "€26.00",
    originalPrice: "€37.00",
    merchant: "Foleja",
    discount: "-30%",
    image: "images/deals/image39.jpg",
    category: "other",
    link: "https://www.foleja.com/YLL-200000706/Top-futbolli-Puma-TeamFinal-21.3-FIFA-Quality-i-bardhe",
  },
  {
    id: 40,
    title: "Tavolinë MADERUP 90xL90 zezë",
    currentPrice: "€100.00",
    originalPrice: "€149",
    merchant: "Jysk",
    discount: "-50%",
    image: "images/deals/image40.jpg",
    category: "furniture",
    link: "https://jysk-ks.com/public/ck/prd/3700471/52e32a94-00f0-11eb-ad96-02004c4f4f50",
  },
  {
    id: 41,
    title: "Pasqyrë SANDAGER 3copë lis",
    currentPrice: "€60.00",
    originalPrice: "€79.99",
    merchant: "Jysk",
    discount: "-25%",
    image: "images/deals/image41.jpg",
    category: "furniture",
    link: "https://jysk-ks.com/public/ck/prd/3651003/4d3ce1ba-00e2-11eb-9d2b-02004c4f4f50",
  },
  {
    id: 42,
    title: "Metër distancë DeWALT DWHT77100-XJ",
    currentPrice: "€79.00",
    originalPrice: "€100.00",
    merchant: "Foleja",
    discount: "-21%",
    image: "images/deals/image42.jpg",
    category: "other",
    link: "https://www.foleja.com/ACN-300062905/Meter-distance-DeWALT-DWHT77100-XJ",
  },
  {
    id: 43,
    title: "ORË E MENQUR PLATINET PSMART20B | 35MM | BLACK",
    currentPrice: "€29.90",
    originalPrice: "€39.99",
    merchant: "Zbritje-KS",
    discount: "-26%",
    image: "images/deals/image43.png",
    category: "electronic-devices",
    link: "https://zbritje-ks.com/product/ore-e-menqur-platinet-psmart20b-35mm-black/",
  },
  {
    id: 44,
    title: "LG CordZero A9 Stick Vacuum",
    currentPrice: "€19.99",
    originalPrice: "€41.63",
    merchant: "Zbritje-KS",
    discount: "-52%",
    image: "images/deals/image44.jpg",
    category: "other",
    link: "https://zbritje-ks.com/product/tharese-rrobash-vileda-smile-silver/",
  },
  {
    id: 45,
    title: "Vaj esencial i lirit Bio365, 30 ml",
    currentPrice: "€3.12",
    originalPrice: "€3.90",
    merchant: "Zbritje-KS",
    discount: "-20%",
    image: "images/deals/image45.jpg",
    category: "other",
    link: "https://zbritje-ks.com/product/vaj-esencial-i-lirit-bio365-30-ml/",
  },
  {
    id: 46,
    title: "PUMA Metallic Hooded Sweat Suit TR op",
    currentPrice: "€59.99",
    originalPrice: "€75.00",
    merchant: "Suna Sport",
    discount: "-20%",
    image: "images/deals/image46.jpg",
    category: "clothes",
    link: "https://sunasport.com/product/puma-metallic-hooded-sweat-suit-tr-op-2/",
  },
  {
    id: 47,
    title: "NIKE MANOA ’17 LTR BG",
    currentPrice: "€57.40",
    originalPrice: "€82.00",
    merchant: "Suna Sport",
    discount: "-30%",
    image: "images/deals/image47.jpg",
    category: "footwear",
    link: "https://sunasport.com/product/nike-manoa-17-ltr-bg/",
  },
  {
    id: 48,
    title: "Dollap VEDDE 166x197 lisi errët",
    currentPrice: "€425.00",
    originalPrice: "€549.00",
    merchant: "Jysk",
    discount: "-22%",
    image: "images/deals/image48.jpg",
    category: "furniture",
    link: "https://jysk-ks.com/public/ck/prd/3601087/3a1c6bc0-00ea-11eb-86b4-02004c4f4f50",
  },
  {
    id: 49,
    title: "Pasqyrë garderobe NORDBORG 40x160 argjend",
    currentPrice: "€35.00",
    originalPrice: "€99.00",
    merchant: "Jysk",
    discount: "-64%",
    image: "images/deals/image49.jpg",
    category: "furniture",
    link: "https://jysk-ks.com/public/ck/prd/3805174/b3871b7c-80f1-11eb-9f59-132a1c20b3cb",
  },
  {
    id: 50,
    title: "NIKE JUNIPER TRAIL 3",
    currentPrice: "€80.80",
    originalPrice: "€101.00",
    merchant: "Suna Sport",
    discount: "-20%",
    image: "images/deals/image50.jpg",
    category: "footwear",
    link: "https://sunasport.com/product/nike-juniper-trail-3-2/",
  },
];

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
function renderDeals() {
  const dealsContainer = document.getElementById("dealsContainer");
  dealsContainer.innerHTML = deals.map((deal) => createDealCard(deal)).join("");
}

// Initial render
document.addEventListener("DOMContentLoaded", renderDeals);


//Toggle light-dark-mode
const toggleButton = document.getElementById("theme-toggle");
const logoImg = document.querySelector(".logo");

toggleButton.innerHTML = '<i class="fa-solid fa-moon fa-2xl theme-icon"></i>';

// Click to toggle theme
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleButton.innerHTML = `<i class="fa-solid fa-sun fa-2xl theme-icon" style="color: #fff;"></i>`; // light mode icon
    logoImg.src = "images/dark-mode-logo.svg";
  } else {
    toggleButton.innerHTML = '<i class="fa-solid fa-moon fa-2xl theme-icon"></i>'; // dark mode icon
    logoImg.src = "images/light-mode-logo.svg";
  }
});

//Filter deals

function filteredDealsArr(category) {
  // If category is "all-items", return all deals
  if (category === "all-items") {
    return deals;
  }

  // Otherwise filter by category
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
    // Get the category from the button's class
    const categoryClass = btn.classList[1];

    // Render the filtered deals
    renderFilteredDeals(categoryClass);

    // Add active class to the clicked button and remove from others (optional)
    for (const key in filterBtns) {
      filterBtns[key].classList.remove("active");
    }
    btn.classList.add("active");
  });
}

//search for deals
function searchDeals() {
  const searchInput = document.querySelector(".searchbox input");
  const searchTerm = searchInput.value.toLowerCase();

  // Filter deals that contain the search term in title or merchant
  const searchResults = deals.filter(
    (deal) =>
      deal.title.toLowerCase().includes(searchTerm) ||
      deal.merchant.toLowerCase().includes(searchTerm)
  );

  // Render the filtered deals
  const dealsContainer = document.getElementById("dealsContainer");
  dealsContainer.innerHTML = searchResults
    .map((deal) => createDealCard(deal))
    .join("");
}

// Add event listener for the search icon click
document.querySelector(".search-icon").addEventListener("click", function () {
  searchDeals();
});

// Add event listener for pressing Enter key while in the search input
document
  .querySelector(".searchbox input")
  .addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      searchDeals();
    }

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("theme-toggle");
  const logoImg = document.querySelector(".logo");
  const footerLogo = document.getElementById("footer-logo");

  // Ikona fillestare e dark mode
  toggleButton.innerHTML = '<i class="fa-solid fa-moon fa-2xl theme-icon"></i>';

  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");

    // Ndrysho ikonën dhe logon për dark/light mode
    toggleButton.innerHTML = isDark
      ? '<i class="fa-solid fa-sun fa-2xl theme-icon" style="color: #fff;"></i>'
      : '<i class="fa-solid fa-moon fa-2xl theme-icon"></i>';

    logoImg.src = isDark
      ? "images/dark-mode-logo.svg"
      : "images/light-mode-logo.svg";

    footerLogo.src = logoImg.src;
  });
});

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



  });


