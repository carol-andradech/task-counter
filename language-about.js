// Function to change language dynamically
function changeLanguage(language) {
  fetch(`translations/${language}.json`)
    .then((response) => response.json())
    .then((data) => {
      // Update titles and text using the data from JSON
      document.getElementById("pageTitle").innerText = data.pageTitle;
      document.getElementById("objectiveTitle").innerText = data.objectiveTitle;
      document.getElementById("objectiveText").innerText = data.objectiveText;
      document.getElementById("featuresTitle").innerText = data.featuresTitle;
      document.getElementById("feature1").innerText = data.feature1;
      document.getElementById("feature2").innerText = data.feature2;
      document.getElementById("feature3").innerText = data.feature3;
      document.getElementById("howItWorksTitle").innerText =
        data.howItWorksTitle;
      document.getElementById("howItWorksText").innerText = data.howItWorksText;
      document.getElementById("exampleTitle").innerText = data.exampleTitle;
      document.getElementById("exampleText").innerText = data.exampleText;
      document.getElementById("footerLink").innerText = data.footerLink;
      document.getElementById("title").innerText = data.title;
      document.getElementById("homeLink").innerText = data.homeLink;
      document.getElementById("aboutLink").innerText = data.aboutLink;
    })
    .catch((err) => {
      console.error("Error loading translation file:", err);
    });
}

// Set default language to Portuguese on page load
document.addEventListener("DOMContentLoaded", () => {
  changeLanguage("about-pt");
});
