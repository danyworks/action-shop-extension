const resultArray = Array.from(document.getElementsByClassName("font-bold text-price-whole-xs"), (item, index) => parseFloat(`${item.textContent}.${document.getElementsByClassName("font-bold text-price-fraction-xs")[index].textContent}`));

const sum = resultArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

alert(`Total Cost in €: ${sum}`);
