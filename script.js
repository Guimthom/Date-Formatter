const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");

const date = new Date();
console.log(date);
const day = date.getDate();
console.log(day);
// retourne un nbr de 0 a 11. +1 pour avoir le bon mois en cours
const month = date.getMonth() + 1;
console.log(month);
const year = date.getFullYear();
console.log(year);
const hours = date.getHours();
console.log(hours);
const minutes = date.getMinutes();
console.log(minutes);

const formattedDate = `${day}-${month}-${year}`;
console.log(formattedDate);

currentDateParagraph.textContent = formattedDate;
dateOptionsSelectElement.addEventListener("change", () => {
switch(dateOptionsSelectElement.value) {
case 'yyyy-mm-dd' :
    currentDateParagraph.textContent = formattedDate
    .split("-")
    .reverse()
    .join("-")
    break;
case 'mm-dd-yyyy-h-mm' :
    currentDateParagraph.textContent = `${month}-${day}-${year} ${hours} Heure et ${minutes} Minutes`
    break;
default :
currentDateParagraph.textContent = formattedDate;
};

});