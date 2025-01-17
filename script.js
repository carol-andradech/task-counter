document
  .getElementById("generateButton")
  .addEventListener("click", function () {
    const start = parseInt(document.getElementById("start").value, 10);
    const end = parseInt(document.getElementById("end").value, 10);

    // Validate inputs
    if (isNaN(start) || isNaN(end)) {
      alert("Please enter valid numbers!");
      return;
    }

    // Clear existing buttons in the .squares div before generating new ones
    const squaresDiv = document.querySelector(".squares");
    squaresDiv.innerHTML = ""; // Clear the squares container

    let eachRow = 10;
    let total = end - start + 1; // Ensure the total count is inclusive of 'end'
    let current = start;
    let count = 0; // Declare count here to keep track of selected buttons

    // Calculate the total number of rows (round up to ensure extra row if not full)
    let totalRow = Math.ceil(total / eachRow);

    // Create the buttons in rows
    for (let i = 0; i < totalRow; i++) {
      const lineDiv = document.createElement("div");
      lineDiv.classList.add("line");

      // Create buttons for the current row
      for (let j = 0; j < eachRow; j++) {
        if (current > end) break; // Stop if we reach the 'end' number

        const buttonOption = document.createElement("button");
        buttonOption.textContent = current;

        // Add click event listener to toggle the button selection
        buttonOption.addEventListener("click", function () {
          if (this.style.backgroundColor === "rgb(239, 177, 29)") {
            // Deselect the button (remove yellow color)
            this.style.backgroundColor = ""; // Reset to original color
            this.style.color = "";
            count--; // Decrease the count
          } else {
            // Select the button (change color to yellow)
            this.style.backgroundColor = "#efb11d"; // Change color to yellow
            this.style.color = "black";
            count++; // Increase the count
          }
          // Update the total count displayed
          document.getElementById("total").innerHTML = count;
        });

        lineDiv.appendChild(buttonOption);
        current++; // Increment the button number
      }

      squaresDiv.appendChild(lineDiv); // Add the row to the container
    }
  });

// Function to change the language
function changeLanguage(language) {
  fetch(`translations/${language}.json`)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("start").placeholder = data.start;
      document.getElementById("end").placeholder = data.end;
      document.getElementById("generateButton").innerText = data.generate;
      document.getElementById("clear").innerText = data.clear;
      document.getElementById("finished").innerText = data.finished;
      document.getElementById("total").innerText = data.total;
      document.getElementById("toptext").innerText = data.toptext;
    })
    .catch((err) => {
      console.error("Error loading translation file:", err);
    });
}

// Set default language to English on page load
document.addEventListener("DOMContentLoaded", () => {
  changeLanguage("pt");
});

// Clear the fields and unselect buttons when "Clear" is clicked
document.getElementById("clear").addEventListener("click", function () {
  // Clear the input fields
  document.getElementById("start").value = "";
  document.getElementById("end").value = "";

  // Unselect all buttons
  const allButtons = document.querySelectorAll(".squares button");
  allButtons.forEach((button) => {
    button.style.backgroundColor = ""; // Reset to original color
    button.style.color = ""; // Reset text color
  });

  // Reset the total count
  document.getElementById("total").innerText = "0";
});
