// ---------------- CATEGORY DATA ----------------
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

// ---------------- WHAT'S NEW ----------------
const whatsNew = [
    {
        title: "BUY 1 GET 6 FREE!",
        subtitle: "Molten cheese core, guaranteed.",
        img: "https://api.dominos.co.in/prod-olo-api/images/dynamicOffers/Sunday_Special_offers_AC_202410201729399304_202410211729485978_202410221729573259_202411201732090902_202412261735198159_202503181742280842_202503181742280870.jpg?ver=0.0.1",
        bg: "bg-dominos-red",
    },
    {
        title: "Cheese Burst Pizza",
        subtitle: "Limited time weekend offer.",
        img: "https://api.dominos.co.in/prod-olo-api/images/dynamicOffers/Dominos_Cheese-Burst-AC_202410241729754536.JPG?ver=0.0.1",
        bg: "bg-dominos-blue",
    },
    {
        title: "Cheese volcano",
        subtitle: "Available Mon–Fri, 11 AM – 3 PM.",
        img: "https://api.dominos.co.in/prod-olo-api/images/dynamicOffers/Domino%2527s_cheese-volcano-revamp_AC_202409301727679855_202411081731063825.jpg?ver=0.0.1",
        bg: "bg-green-600",
    },
    {
        title: "lavalicious",
        subtitle: "Available Mon–Fri, 11 AM – 3 PM.",
        img: "https://api.dominos.co.in/prod-olo-api/images/dynamicOffers/Chocolava_KV_App_Carousel_400x220px_202409301727679882_202410011727758996_202410011727766705_202410091728451033_202410151728996299_202410161729071005_202410241729754696_202411071730957121_202503181742281735_202503191742361186.jpg?ver=0.0.1",
        bg: "bg-green-600",
    },
    {
        title: "750 off on big orders",
        subtitle: "Available Mon–Fri, 11 AM – 3 PM.",
        img: "https://api.dominos.co.in/prod-olo-api/images/dynamicOffers/cheese_rewards_corousal_202210201666257463_202503181742281667.jpg?ver=0.0.1",
        bg: "bg-green-600",
    },
    {
        title: "LUNCH FEAST @ ₹149",
        subtitle: "Available Mon–Fri, 11 AM – 3 PM.",
        img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
        bg: "bg-green-600",
    }
];

// ---------------- BESTSELLERS ----------------
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

// add to cart page
// =========================
//        CART SYSTEM
// =========================

let cart = {};  
// cart structure → { "Margherita": { ...itemData, qty: 1 } }

// Save to LocalStorage
function saveCart() {
    localStorage.setItem("dominos-cart", JSON.stringify(cart));
}

// Load cart on refresh
function loadCart() {
    const saved = localStorage.getItem("dominos-cart");
    cart = saved ? JSON.parse(saved) : {};
}
loadCart();

// Re-render cart UI (optional)
function updateCartUI() {
    console.log("CURRENT CART:", cart);
}


// quantity update function

// ---------------- CHICKEN FEAST ----------------
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

// --------------- UTILITY FUNCTION ---------------
function render(containerId, htmlContent) {
    document.getElementById(containerId).innerHTML += htmlContent;
}

// ---------------- RENDER CATEGORIES --------------
categories.forEach(cat => {
    render("category-container", `
    <div class="inline-block text-center w-24">
      <div class="w-20 h-20 bg-gray-300 rounded-full mx-auto"></div>
      <p class="mt-2 text-sm">${cat.name}</p>
    </div>
  `);
});

// ---------------- RENDER WHAT'S NEW --------------
whatsNew.forEach(item => {
    render("whatsnew-container", `
    <div class="flex-shrink-0 w-[360px] h-[180px] rounded-xl overflow-hidden shadow-md">
      <img src="${item.img}" class="w-full h-full object-cover" />
    </div>
  `);
});


// ---------------- RENDER BESTSELLERS --------------
function renderBestsellers() {
  const box = document.getElementById("bestseller-container");
  box.innerHTML = "";

  bestsellers.forEach((item, idx) => {
    box.innerHTML += `
      <div class="relative min-w-[260px] max-w-[260px] aspect-[260/350] snap-center rounded-xl overflow-hidden shadow-xl bg-white">
        <img src="${item.img}" loading="lazy" class="absolute inset-0 w-full h-full object-cover" alt="${item.name}">
        <div class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>

        <div class="absolute top-3 right-3">
          <div class="bg-yellow-400 text-black font-bold px-3 py-1 rounded-md shadow">TOP 10</div>
        </div>

        <div class="absolute bottom-0 left-0 right-0 p-4 text-white">
          <div class="flex justify-between items-start">
            <div>
              <h3 class="text-lg font-bold">${item.name}</h3>
              <p class="text-xs text-gray-200">${item.desc}</p>
            </div>
            <button data-customize-index="${idx}" class="customise-btn bg-white text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">Customise</button>
          </div>

          <div class="mt-3 p-3 rounded flex items-center justify-between">
            <div class="text-lg font-bold">₹${item.price}</div>
            <button data-add-index="${idx}" class="add-btn bg-red-600 text-white px-4 py-1 rounded-md font-semibold">Add +</button>
          </div>
        </div>
      </div>
    `;
  });

  // Attach event listeners (use data attributes to map back to 'bestsellers' array)
  box.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = e.currentTarget.getAttribute('data-add-index');
      const product = bestsellers[Number(idx)];
      if (product) addToCart(product);
    });
  });

  box.querySelectorAll('.customise-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = e.currentTarget.getAttribute('data-customize-index');
      const product = bestsellers[Number(idx)];
      if (product) openCustomModal(product);
    });
  });
}

// call to render
renderBestsellers();

// ---------------- RENDER CHICKEN FEAST --------------
function renderBestsellers() {
  const box = document.getElementById("bestseller-container");
  box.innerHTML = "";

  bestsellers.forEach((item, idx) => {
    box.innerHTML += `
      <div class="relative min-w-[260px] max-w-[260px] aspect-[260/350] snap-center rounded-xl overflow-hidden shadow-xl bg-white">
        <img src="${item.img}" loading="lazy" class="absolute inset-0 w-full h-full object-cover" alt="${item.name}">
        <div class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>

        <div class="absolute top-3 right-3">
          <div class="bg-yellow-400 text-black font-bold px-3 py-1 rounded-md shadow">TOP 10</div>
        </div>

        <div class="absolute bottom-0 left-0 right-0 p-4 text-white">
          <div class="flex justify-between items-start">
            <div>
              <h3 class="text-lg font-bold">${item.name}</h3>
              <p class="text-xs text-gray-200">${item.desc}</p>
            </div>
            <button data-customize-index="${idx}" class="customise-btn bg-white text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">Customise</button>
          </div>

          <div class="mt-3 p-3 rounded flex items-center justify-between">
            <div class="text-lg font-bold">₹${item.price}</div>
            <button data-add-index="${idx}" class="add-btn bg-red-600 text-white px-4 py-1 rounded-md font-semibold">Add +</button>
          </div>
        </div>
      </div>
    `;
  });

  // Attach event listeners (use data attributes to map back to 'bestsellers' array)
  function renderChickenFeast() {
  const container = document.getElementById('chicken-container');
  if (!container) return;
  container.innerHTML = ''; // clear existing

  chickenFeast.forEach((item, idx) => {
    container.innerHTML += `
      <div class="relative min-w-[260px] max-w-[260px] aspect-[260/350] snap-center rounded-xl overflow-hidden shadow-xl bg-white mr-4">
        <img src="${item.img || 'https://images.unsplash.com/photo-1601924582971-6f7d3b1b89c1?auto=format&fit=crop&w=800&q=80'}"
             class="absolute inset-0 w-full h-full object-cover" alt="${item.name}" loading="lazy">

        <div class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>

        <div class="absolute top-3 left-3">
          <div class="bg-yellow-400 text-black font-bold px-3 py-1 rounded-md shadow">
            ${item.tag ? item.tag : "Domino's TOP 10"}
          </div>
        </div>

        <div class="absolute bottom-0 left-0 right-0 p-4 text-white">
          <div class="flex justify-between items-start">
            <div>
              <h3 class="text-lg font-bold">${item.name}</h3>
              <p class="text-xs text-gray-200">${item.desc || ''}</p>
            </div>
            <button data-customize="${idx}" class="customise-btn bg-white text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">Customise</button>
          </div>

          <div class="mt-3 p-3 rounded flex items-center justify-between">
            <div class="text-lg font-bold">₹${item.price}</div>
            <button data-add="${idx}" class="add-btn bg-red-600 text-white px-4 py-1 rounded-md font-semibold">Add +</button>
          </div>
        </div>

        <!-- transient confirmation (hidden, toggled by JS) -->
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 transition-opacity duration-300" data-toast="${idx}">
          <div class="bg-black/70 text-white px-4 py-2 rounded">Added ✔</div>
        </div>
      </div>
    `;
  });

  // wire up buttons (no cart logic)
  container.querySelectorAll('[data-add]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = e.currentTarget.getAttribute('data-add');
      const card = e.currentTarget.closest('[data-toast="'+idx+'"]')?.parentElement || e.currentTarget.closest('.relative');
      // show transient "Added" overlay on the card
      const toast = container.querySelector(`[data-toast="${idx}"]`);
      if (toast) {
        toast.style.opacity = '1';
        setTimeout(() => { toast.style.opacity = '0'; }, 900);
      } else {
        // fallback tiny flash
        e.currentTarget.textContent = 'Added';
        setTimeout(()=> e.currentTarget.textContent = 'Add +', 900);
      }
    });
  });

  container.querySelectorAll('[data-customize]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = Number(e.currentTarget.getAttribute('data-customize'));
      const product = chickenFeast[idx];
      if (typeof openCustomModal === 'function') openCustomModal(product);
      else alert(`Customise: ${product.name}`);
    });
  });
}

// Call it
renderChickenFeast();
}