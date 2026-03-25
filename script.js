// DOM Elements ko select karein
const darkModeToggle = document.getElementById('dark-mode-toggle');
const modeIcon = document.getElementById('mode-icon');
const body = document.body;

// Check karein ki kya user preference pehle se saved hai
const savedTheme = localStorage.getItem('theme');

// Agar saved preference hai, toh use apply karein
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  modeIcon.textContent = 'light_mode'; // Change to sun icon
} else {
  modeIcon.textContent = 'dark_mode'; // Light mode is default (moon icon)
}

// Toggle logic: jab toggle area click ho
darkModeToggle.addEventListener('click', () => {
  // Toggle the class on the body element
  body.classList.toggle('dark-mode');
  
  // Icon aur Preferences update karein
  if (body.classList.contains('dark-mode')) {
    modeIcon.textContent = 'light_mode'; // Change to sun icon
    localStorage.setItem('theme', 'dark'); // Save as 'dark'
  } else {
    modeIcon.textContent = 'dark_mode'; // Change back to moon icon
    localStorage.setItem('theme', 'light'); // Save as 'light'
  }
});
 
//banner trans animation 



// --- BANNER AUTOMATIC SLIDESHOW LOGIC ---

// DOM Elements select karein
const bannerWrapper = document.getElementById('banner_wrapper');
const bannerImages = bannerWrapper.querySelectorAll('.banner_image');

let currentIndex = 0; // Shuruat pehli image se
const totalImages = bannerImages.length; // Total images kitni hain
const slideInterval = 3000; // Har 3 seconds mein slide hoga (3000ms)

// Function images ko slide karne ke liye
function nextSlide() {
  // Index increase karein
  currentIndex++;
  
  // Agar index last image se aage nikal jaye, toh wapas first par layein
  if (currentIndex >= totalImages) {
    currentIndex = 0;
  }
  
  // Wrapper ko move karein variable index ke basis par
  // transform: translateX(-100%) se doosri image dikhegi
  const percentageToMove = -currentIndex * 100;
  bannerWrapper.style.transform = `translateX(${percentageToMove / totalImages}%)`;
}

// Automatic interval set karein variable slideInterval ke basis par
setInterval(nextSlide, slideInterval); 