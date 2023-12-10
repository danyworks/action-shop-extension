// Function to calculate and display the total sum in Euros
function calculateAndDisplaySum() {
  const resultArray = Array.from(document.getElementsByClassName("font-bold text-price-whole-xs"), (item, index) => parseFloat(`${item.textContent}.${document.getElementsByClassName("font-bold text-price-fraction-xs")[index].textContent}`));

  const sum = resultArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  // Assuming the currency is in Euros (€)
  const sumInEuros = sum.toFixed(2); // Fix the number of decimal places to 2

  // Display the total sum in Euros using an alert
  alert(`Total Sum in €: ${sumInEuros}`);
}

// Function to check if the elements are visible
function areElementsVisible() {
  const wholeElements = document.getElementsByClassName("font-bold text-price-whole-xs");
  const fractionElements = document.getElementsByClassName("font-bold text-price-fraction-xs");

  // Check if at least one whole element and one fraction element are visible
  return wholeElements.length > 0 && fractionElements.length > 0 &&
      wholeElements[0].offsetParent !== null && fractionElements[0].offsetParent !== null;
}

// Callback function for the MutationObserver
function mutationCallback(mutationsList, observer) {
  // Check if the desired elements are visible
  if (areElementsVisible()) {
      // Disconnect the observer once the elements are visible
      observer.disconnect();

      // Run the script to calculate and display the total sum
      calculateAndDisplaySum();
  }
}

// Target elements to observe
const targetElements = document.body;

// Options for the MutationObserver
const observerOptions = {
  childList: true,
  subtree: true,
};

// Create a new MutationObserver with the callback function
const observer = new MutationObserver(mutationCallback);

// Start observing changes on the target elements
observer.observe(targetElements, observerOptions);