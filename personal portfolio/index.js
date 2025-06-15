// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

//  nav link on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".right ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});
//it is used for buttons
document.querySelector(".work").addEventListener("click", () => {
  document.querySelector("#projects").scrollIntoView({ behavior: "smooth" });
});
document.querySelector(".Get-Resume").addEventListener("click", () => {
  window.open("vipul_resume.pdf", "_blank");
});


//hover effect
const projectCards = document.querySelectorAll('.project1,.about1,.skill1');
projectCards.forEach(card => {
  card.addEventListener("mouseover", () => {
    card.style.transform = "scale(1.05)";
    card.style.transition = "0.3s";
  });
  card.addEventListener("mouseout", () => {
    card.style.transform = "scale(1)";
  });
});


// create button
const scrollBtn = document.createElement("button");
scrollBtn.id = "scrollTopBtn";
scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>'; 
document.body.appendChild(scrollBtn);

// show/hide on for scroll
window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "flex" : "none";
});

// scroll to top on click
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const toggleBtn = document.getElementById("toggle");
const icon = toggleBtn.querySelector("i");


document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggle');
    const navMenu = document.querySelector('.right ul');
    
    toggleBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
});

// glow mode
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  icon.classList.remove("fa-moon");
  icon.classList.add("fa-sun");
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const dark = document.body.classList.contains("dark-mode");

  icon.classList.toggle("fa-moon", !dark);
  icon.classList.toggle("fa-sun", dark);

  localStorage.setItem("theme", dark ? "dark" : "light");
});
