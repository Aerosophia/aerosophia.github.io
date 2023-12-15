// Function to toggle between light and dark mode
function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-theme");

    // Save the user's preference in local storage
    const isDarkMode = body.classList.contains("dark-theme");
    localStorage.setItem("darkMode", isDarkMode);
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Check user's dark mode preference from local storage
const savedDarkMode = localStorage.getItem("darkMode");

// Apply dark mode if the user has previously set it
if (savedDarkMode === "true") {
    document.body.classList.add("dark-theme");
}
