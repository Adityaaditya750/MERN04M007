// ================= DATA (unchanged) =================
const categories = [
  { name: "Cheese Lava", img: "https://cdn.jflimages.co.in/nextgen-catalog/media/prod/Dominos/CategoriesV1/78ac6411-a99b-415f-a047-824a579d0177_CheeseLavaPullApart1.png?ver=V0.0.1" },
  { name: "Big Big Pizza", img: "https://cdn.jflimages.co.in/nextgen-catalog/media/prod/Dominos/CategoriesV1/2544336f-11ad-445d-b7a9-1522d0c4c689_BigBigPizza_Normal.png?ver=V0.0.1" },
  { name: "Crazy Deals", img: "https://cdn.jflimages.co.in/nextgen-catalog/media/prod/Dominos/CategoriesV1/e396c20d-5eb1-42a3-8abf-98cac7d51d84_LoadedSaucyRange.png?ver=V0.0.1" },
  { name: "Lunch Feast", img: "https://cdn.jflimages.co.in/nextgen-catalog/media/prod/Dominos/CategoriesV1/34bc1050-b755-4d78-bde8-b3c52280794f_LunchFeastCoke.png?ver=V0.0.1" },
  { name: "Veg Pizza", img: "https://cdn.jflimages.co.in/nextgen-catalog/media/prod/Dominos/CategoriesV1/34bc1050-b755-4d78-bde8-b3c52280794f_LunchFeastCoke.png?ver=V0.0.1" },
  { name: "Pizza Mania", img: "https://cdn.jflimages.co.in/nextgen-catalog/media/prod/Dominos/CategoriesV1/dd2e3ddb-3ba2-4bbd-8463-239a0e354df1_PizzaManianew.png?ver=V0.0.1" },
  { name: "Garlic Breads", img: "https://cdn.jflimages.co.in/nextgen-catalog/media/prod/Dominos/CategoriesV1/8f40712d-0364-42bf-8edd-bdd5d177a3a2_garlicbread.jpg?ver=V0.0.1" },
  { name:"No onion No Gralic",img:"https://cdn.jflimages.co.in/nextgen-catalog/media/prod/Dominos/CategoriesV1/b8a5f7ad-d22a-49b1-936d-f8252a559be8_noonionnogarlic.png?ver=V0.0.1"},
  { name:"Chese Brust Pizza", img:"https://cdn.jflimages.co.in/nextgen-catalog/media/prod/Dominos/CategoriesV1/1f4457f4-6c15-433b-817a-ac400ef72835_cheeseburst.jpg?ver=V0.0.1"},
  { name:"Value Combos", img:"https://cdn.jflimages.co.in/nextgen-catalog/media/prod/Dominos/CategoriesV1/de9b4339-d70a-4b55-b5a0-80b3790a6dbe_ValueCombosNew.png?ver=V0.0.1"},
  { name:"Chesee Volcano", img:"https://cdn.jflimages.co.in/nextgen-catalog/media/prod/Dominos/CategoriesV1/7638be6f-fb68-47cc-b003-474daa7f3406_cheesevolcano.jpg?ver=V0.0.1"},
  { name:"Baverages",img:"https://cdn.jflimages.co.in/nextgen-catalog/media/prod/Dominos/CategoriesV1/c5cb1709-fb96-4233-982a-7fa73d327f75_CokeBeverage.png?ver=V0.0.1"}
];

const whatsNew = [
  {
    title: "BUY 1 GET 6 FREE!",
    subtitle: "Molten cheese core, guaranteed.",
    img: "https://api.dominos.co.in/prod-olo-api/images/dynamicOffers/Sunday_Special_offers_AC_202410201729399304_202410211729485978_202410221729573259_202411201732090902_202412261735198159_202503181742280842_202503181742280870.jpg?ver=0.0.1",
    bg: "bg-red-600",
  },
  {
    title: "Cheese Burst Pizza",
    subtitle: "Limited time weekend offer.",
    img: "https://api.dominos.co.in/prod-olo-api/images/dynamicOffers/Dominos_Cheese-Burst-AC_202410241729754536.JPG?ver=0.0.1",
    bg: "bg-blue-700",
  },
  {
    title: "Cheese volcano",
    subtitle: "Available Mon–Fri, 11 AM – 3 PM.",
    img: "https://api.dominos.co.in/prod-olo-api/images/dynamicOffers/Domino%2527s_cheese-volcano-revamp_AC_202409301727679855_202411081731063825.jpg?ver=0.0.1",
    bg: "bg-green-600",
  }
];

const bestsellers = [
  {
    name: "Margherita",
    img: "https://cdn.jflimages.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/05e8ba85-4444-4c19-b085-8012f1baf0b4_margherita_side.webp?ver=V0.0.1",
    desc: "New Hand Tossed-Regular.",
    price: 109,
    veg: true
  },
  {
    name: "Farmhouse",
    img: "img/farmhouse.webp",
    desc: "Onion, capsicum, tomato & grilled mushroom.",
    price: 259,
    veg: true
  },
  {
    name: "Peppy Paneer",
    img: "img/peppy.webp",
    desc: "Juicy paneer, crisp capsicum with spicy red paprika.",
    price: 259,
    veg: true
  },
  {
    name: "Veggie Paradise",
    img: "img/paradise.webp",
    desc: "Golden corn, black olives, capsicum & paprika.",
    price: 259,
    veg: true
  }
];

const chickenFeast = [
  {
    name: "Hot & Fiery Cheesiken",
    price: 159,
    desc: "Juicy Chicken | Spicy Sauce | Molten Cheese",
    tag: "NEW",
  },
  {
    name: "Garlic Cheesiken",
    price: 159,
    desc: "Creamy Garlic Chicken | Cheese | Jalapeno",
    tag: "NEW",
  },
  {
    name: "Tangy Tomato Cheesiken",
    price: 159,
    desc: "Chicken | Tangy Sauce | Melted Cheese",
    tag: "NEW",
  }
];

// =================== CART (localStorage) ===================
let cart = {}; // { key: { name, price, img, qty } }

function saveCart() {
  localStorage.setItem("dominos-cart", JSON.stringify(cart));
}

function loadCart() {
  const raw = localStorage.getItem("dominos-cart");
  cart = raw ? JSON.parse(raw) : {};
}
loadCart();

// helper: get product object by name from datasets (searches through known sections)
function findProductByName(name) {
  return bestsellers.find(p => p.name === name)
      || chickenFeast.find(p => p.name === name)
      || categories.find(p => p.name === name)
      || whatsNew.find(p => p.title === name) // fallback
      || null;
}

// =================== CART OPERATIONS ===================
function addToCartByName(name) {
  const prod = findProductByName(name);
  if (!prod) {
    // create minimal product if not found (defensive)
    cart[name] = cart[name] || { name, price: 0, img: "", qty: 1 };
  } else {
    if (!cart[name]) cart[name] = { name: prod.name || name, price: prod.price || 0, img: prod.img || "", qty: 1 };
    else cart[name].qty++;
  }
  saveCart();
  renderBestsellers(); // re-render to update qty buttons
  updateCartUI();
}

function decreaseQtyByName(name) {
  if (!cart[name]) return;
  cart[name].qty--;
  if (cart[name].qty <= 0) delete cart[name];
  saveCart();
  renderBestsellers();
  updateCartUI();
}

// optional: remove item completely
function removeFromCart(name) {
  if (cart[name]) {
    delete cart[name];
    saveCart();
    renderBestsellers();
    updateCartUI();
  }
}

// =================== CART UI (simple) ===================
function updateCartUI() {
  // Example: show total items in console or update a badge if you have one
  const totalItems = Object.values(cart).reduce((s, it) => s + (it.qty || 0), 0);
  console.log("Cart items:", totalItems, cart);
  // If you have a cart badge element, update it here:
  const badge = document.getElementById("cart-badge");
  if (badge) badge.innerText = totalItems > 0 ? totalItems : "";
}

// =================== RENDER HELPERS ===================
function render(id, html) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML += html;
}

// ---------------- RENDER CATEGORIES ----------------
document.getElementById("category-container").innerHTML = "";
categories.forEach(cat => {
  render("category-container", `
    <div class="inline-block text-center w-24">
        <img src="${cat.img}" class="w-20 h-20 rounded-full object-cover mx-auto" alt="${escapeHtml(cat.name)}">
        <p class="mt-2 text-sm">${escapeHtml(cat.name)}</p>
    </div>
  `);
});

// ---------------- RENDER WHAT'S NEW ----------------
document.getElementById("whatsnew-container").innerHTML = "";
whatsNew.forEach(item => {
  render("whatsnew-container", `
    <div class="flex-shrink-0 w-[360px] h-[180px] rounded-xl overflow-hidden relative">
      <img src="${item.img}" class="w-full h-full object-cover" alt="${escapeHtml(item.title)}">
      <div class="absolute inset-0 bg-black/30"></div>
      <div class="absolute bottom-4 left-4 text-white drop-shadow-lg">
        <h3 class="text-lg font-bold">${escapeHtml(item.title)}</h3>
        <p class="text-sm">${escapeHtml(item.subtitle)}</p>
      </div>
    </div>
  `);
});

// ---------------- RENDER BESTSELLERS (with qty controls) ----------------
function renderBestsellers() {
  const box = document.getElementById("bestseller-container");
  if (!box) return;
  box.innerHTML = "";

  bestsellers.forEach(item => {
    // current quantity in cart
    const qty = cart[item.name] ? cart[item.name].qty : 0;

    // qty-control HTML: either Add button or counter
    const qtyControlHTML = qty === 0
      ? `<button data-name="${escapeAttr(item.name)}" class="add-btn bg-red-600 text-white px-6 py-2 rounded-lg font-semibold">Add +</button>`
      : `
        <div class="flex items-center gap-3 bg-white text-black px-3 py-1 rounded-lg font-bold">
          <button data-name="${escapeAttr(item.name)}" data-action="decrease" class="dec-btn text-xl px-2">−</button>
          <span class="qty-display" data-name="${escapeAttr(item.name)}">${qty}</span>
          <button data-name="${escapeAttr(item.name)}" data-action="increase" class="inc-btn text-xl px-2">+</button>
        </div>
      `;

    box.innerHTML += `
      <div class="flex-shrink-0 w-[360px] rounded-xl overflow-hidden shadow-xl bg-white relative">
        <div class="relative h-[240px]">
          <img src="${item.img}" class="w-full h-full object-cover" alt="${escapeHtml(item.name)}">
          <div class="absolute top-3 left-3 bg-yellow-500 text-xs font-bold px-3 py-1 rounded">Domino's TOP 10</div>
          <button class="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-4 py-1 rounded">Customise →</button>
          <div class="absolute bottom-3 left-3 text-white">
            <div class="flex items-center gap-2">
              <span class="${item.veg ? 'text-green-500' : 'text-red-500'}">■</span>
              <h3 class="text-lg font-bold">${escapeHtml(item.name)}</h3>
            </div>
            <p class="text-sm">${escapeHtml(item.desc)}</p>
          </div>
        </div>

        <div class="bg-[linear-gradient(89.08deg,rgba(80,80,80,0.15)_9.1%,rgba(123,122,122,0.26)_108.79%,rgba(65,65,65,0.26)_108.79%)]
                     backdrop-blur-[4px]
                     border-t border-[hsla(0,0%,100%,0.38)]
                     text-white px-4 py-4 flex justify-between items-center">
          <div>
            <p class="text-xl font-bold">₹${item.price}</p>
            <p class="text-xs text-gray-300">Regular | New Hand Tossed →</p>
          </div>

          ${qtyControlHTML}
        </div>
      </div>
    `;
  });

  // attach listeners after render
  attachBestsellerListeners();
}

// ---------------- event attachments ----------------
function attachBestsellerListeners() {
  // Add buttons
  document.querySelectorAll("#bestseller-container .add-btn").forEach(btn => {
    btn.removeEventListener("click", handleAddClick);
    btn.addEventListener("click", handleAddClick);
  });

  // Increase buttons
  document.querySelectorAll("#bestseller-container .inc-btn").forEach(btn => {
    btn.removeEventListener("click", handleIncClick);
    btn.addEventListener("click", handleIncClick);
  });

  // Decrease buttons
  document.querySelectorAll("#bestseller-container .dec-btn").forEach(btn => {
    btn.removeEventListener("click", handleDecClick);
    btn.addEventListener("click", handleDecClick);
  });
}

function handleAddClick(e) {
  const name = e.currentTarget.getAttribute("data-name");
  addToCartByName(name);
}

function handleIncClick(e) {
  const name = e.currentTarget.getAttribute("data-name");
  addToCartByName(name);
}

function handleDecClick(e) {
  const name = e.currentTarget.getAttribute("data-name");
  decreaseQtyByName(name);
}

// ---------------- RENDER CHICKEN FEAST ----------------
document.getElementById("chicken-container").innerHTML = "";
chickenFeast.forEach(item => {
  render("chicken-container", `
    <div class="inline-block w-72 bg-white shadow-lg rounded-xl overflow-hidden border relative">
      <div class="h-48 bg-gray-200 relative">
        <img src="${item.img || ''}" class="w-full h-full object-cover" alt="${escapeHtml(item.name)}" />
      </div>

      <span class="absolute top-2 right-2 bg-yellow-400 px-3 py-1 text-sm font-bold rounded">
        ${escapeHtml(item.tag || 'NEW')}
      </span>

      <div class="p-4">
        <h3 class="font-bold text-lg">🍗 ${escapeHtml(item.name)}</h3>
        <p class="text-gray-600 text-sm mt-1">${escapeHtml(item.desc)}</p>
      </div>

      <div class="flex justify-between items-center px-4 py-3 bg-gray-50">
        <span class="font-bold">₹${item.price}</span>
        <button data-name="${escapeAttr(item.name)}" class="bg-red-600 text-white px-4 py-1 rounded-lg add-btn-compact">Add +</button>
      </div>
    </div>
  `);
});

// attach add handlers for chicken compact buttons
document.querySelectorAll(".add-btn-compact").forEach(b => {
  b.addEventListener("click", (e) => {
    const name = e.currentTarget.getAttribute("data-name");
    addToCartByName(name);
  });
});

// initial render for bestsellers
renderBestsellers();
updateCartUI();


// =================== small helpers ===================
function escapeHtml(s) {
  if (!s && s !== 0) return "";
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
function escapeAttr(s) {
  if (!s && s !== 0) return "";
  return String(s).replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}
// ================== CART SLIDE DRAWER UI ==================
function openCart() {
    document.getElementById("cartDrawer").classList.remove("translate-x-full");
    renderCartUI();
}

function closeCart() {
    document.getElementById("cartDrawer").classList.add("translate-x-full");
}

function renderCartUI() {
    const box = document.getElementById("cart-items");
    const totalBox = document.getElementById("cart-total");
    const countBox = document.getElementById("cart-count");

    if (!box) return;

    box.innerHTML = "";
    let total = 0;
    let itemCount = 0;

    Object.values(cart).forEach(item => {
        total += item.price * item.qty;
        itemCount += item.qty;

        box.innerHTML += `
        <div class="bg-gray-100 p-3 rounded-lg flex items-center gap-3">
            <img src="${item.img}" class="w-16 h-16 object-cover rounded">
            <div class="flex-1">
                <p class="font-bold">${item.name}</p>
                <p class="text-sm">₹${item.price}</p>

                <div class="flex items-center gap-3 mt-1">
                    <button onclick="decreaseQtyByName('${item.name}')" class="px-3 bg-gray-300 rounded">–</button>
                    <span>${item.qty}</span>
                    <button onclick="addToCartByName('${item.name}')" class="px-3 bg-gray-300 rounded">+</button>
                </div>
            </div>
        </div>
        `;
    });

    totalBox.innerText = total;
    countBox.innerText = itemCount;
}
// Add item by name (used for "+" inside cart)
function addToCartByName(name) {
    const item = Object.values(cart).find(i => i.name === name);
    if (item) {
        item.qty++;
        renderCartUI();
    }
}

// Decrease item qty by name (used for "–" inside cart)
function decreaseQtyByName(name) {
    const item = Object.values(cart).find(i => i.name === name);
    if (item) {
        item.qty--;
        if (item.qty <= 0) {
            delete cart[name];
        }
        renderCartUI();
    }
}

