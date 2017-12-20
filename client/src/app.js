// this is the front end entry point
const countryListFile = require('/public/country_list.js');

const countryList = new CountryList("https://restcountries.eu/rest/v1");
countrylist.getData();



const app = function() {

  const select = document.querySelector(".countries");
  // const countrySelectView = new countrySelectView(select, countryList);
  const button = document.querySelector("#add-country");
  button.addEventListener("click", handleButtonClick);
  select.populateDropdown();
}

const handleButtonClick = function(){

};

const populateDropdown = function() {

}

window.addEventListener('load', app);
