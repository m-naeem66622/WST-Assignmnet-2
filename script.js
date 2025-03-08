const themeToggle = document.getElementById("theme-toggle");
const darkIcon = document.getElementById("theme-toggle-dark-icon");
const lightIcon = document.getElementById("theme-toggle-light-icon");
const htmlElement = document.documentElement;

// Check for saved theme
const savedTheme = localStorage.getItem("theme") || "light";
if (savedTheme === "dark") {
  htmlElement.classList.add("dark");
  darkIcon.classList.remove("hidden");
} else {
  htmlElement.classList.remove("dark");
  lightIcon.classList.remove("hidden");
}

// Toggle handler
themeToggle.addEventListener("click", () => {
  htmlElement.classList.toggle("dark");

  if (htmlElement.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    lightIcon.classList.add("hidden");
    darkIcon.classList.remove("hidden");
  } else {
    localStorage.setItem("theme", "light");
    darkIcon.classList.add("hidden");
    lightIcon.classList.remove("hidden");
  }
});
