/* ===============================
   1. ACTIVE NAV LINK ON SCROLL
================================ */
const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("text-black", "font-semibold");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("text-black", "font-semibold");
    }
  });
});

/* ===============================
   2. TYPING EFFECT (HOME)
================================ */
const typingTarget = document.querySelector(".typing-text");
if (typingTarget) {
  const words = ["UX/UI Designer", "Frontend Developer", "Web Designer"];
  let i = 0, j = 0, del = false;

  function typing() {
    typingTarget.textContent = words[i].substring(0, j);

    if (!del && j++ === words[i].length) {
      del = true;
      setTimeout(typing, 1200);
      return;
    }
    if (del && j-- === 0) {
      del = false;
      i = (i + 1) % words.length;
    }
    setTimeout(typing, del ? 60 : 120);
  }
  typing();
}

/* ===============================
   3. COUNTER ANIMATION
================================ */
const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    const el = entry.target;
    const target = +el.dataset.target;
    let count = 0;
    const step = Math.ceil(target / 40);

    const update = () => {
      count += step;
      if (count >= target) {
        el.textContent = target + "+";
      } else {
        el.textContent = count;
        requestAnimationFrame(update);
      }
    };
    update();
    counterObserver.unobserve(el);
  });
}, { threshold: 0.5 });

counters.forEach(c => counterObserver.observe(c));

/* ===============================
   4. CARD TILT EFFECT
================================ */
document.querySelectorAll(".tilt").forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * 10;
    const rotateY = (x / rect.width - 0.5) * -10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0)";
  });
});

/* ===============================
   5. CONTACT FORM ANIMATION
================================ */
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    const btn = form.querySelector("button");
    btn.textContent = "Sending...";
    btn.classList.add("opacity-70");

    setTimeout(() => {
      btn.textContent = "Message Sent ✓";
      btn.classList.remove("opacity-70");
      btn.classList.add("bg-green-600");
      form.reset();
    }, 1500);
  });
}

/* ===============================
   6. SCROLL TO TOP BUTTON
================================ */
const scrollBtn = document.createElement("button");
scrollBtn.innerHTML = "↑";
scrollBtn.className =
  "fixed bottom-6 right-6 w-10 h-10 bg-black text-white rounded-full shadow-lg hidden";
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
  scrollBtn.classList.toggle("hidden", scrollY < 400);
});

scrollBtn.onclick = () =>
  window.scrollTo({ top: 0, behavior: "smooth" });

/* ===============================
   7. IMAGE PARALLAX HOVER
================================ */
document.querySelectorAll("img").forEach(img => {
  img.addEventListener("mousemove", e => {
    img.style.transform = "scale(1.03)";
  });
  img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
  });
});
