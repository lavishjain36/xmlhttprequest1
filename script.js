let countriesInfo = [
  {
    name: "India",
    population: " 1,394,975,829",
    region: "Asia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/7/7b/India_flag_300.png",
    capital: "New delhi",
  },
  {
    name: "Germany",
    population: "81,770,900",
    region: "Europe",
    flag: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
    capital: "Berlin",
  },
  {
    name: "United states",
    population: "323,947,000",
    region: "Americas",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/640px-Flag_of_the_United_States.svg.png",
    capital: "Washington D.C",
  },
  {
    name: "Brazil",
    population: "206,135,893",
    region: "Americas",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/01/Brazil_flag_300.png",
    capital: "Brasilia",
  },
  {
    name: "Iceland",
    population: "334,300",
    region: "Europe",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/640px-Flag_of_Iceland.svg.png",
    capital: "Reykjavik",
  },
];

const container = document.createElement("div");
const row = document.createElement("div");

container.setAttribute("class", "container-fluid");
row.setAttribute("class", "row");
container.append(row);
countriesInfo.forEach((item) => {
  row.innerHTML += `
<div class="col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center p-2">
<div class="main-container card">
<div class="image-container">
<img src="${item.flag}" alt="${item.name}" class="flag w-100 h-100">
</div>

<div class="content-container">
<h4 class="name">${item.name}</h4>
<p class="content">Population:<span class="sub-content">${item.population}</span></p>
<p class="content">Region:<span class="sub-content">${item.region}</span></p>

<p class="content">Capital:<span class="sub-content">${item.capital}</span></p>

</div>
</div>



</div>




`;
});

document.body.append(container);
