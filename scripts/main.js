/*******************************************ARRAY PAISES*******************************************************************/
const container = document.getElementsByClassName("countries");

// Mostrar países
let order = "asc";
function todosPaises() {
    // Ordenar países según el orden actual
    let sortedCountries = [...countries];
    sortedCountries.sort((a, b) => {
        if (order === "asc") {
            return a.name.localeCompare(b.name);
        } else {
            return b.name.localeCompare(a.name);
        }
    });

    // Mostrar países ordenados
    for (let i = 0; i < sortedCountries.length; i++) {
        const country = document.createElement("p");

        country.innerHTML =
            //poner la imagen del pais
            "<span><img src=" +
            sortedCountries[i].flag +
            " ></span>" +
            "<br>" +
            //meter el nombre en un span
            "<span>" +
            sortedCountries[i].name +
            "</span>" +
            "\nCapital:" +
            sortedCountries[i].capital +
            "<br>" +
            "\nLanguage:" +
            sortedCountries[i].languages +
            "<br>" +
            "\nPopulation:" +
            sortedCountries[i].population;
        container[0].appendChild(country);
    }
}
todosPaises();

// Mostrar países ordenados por capital
let orderCapital = "asc";
function paisesOrdenadosCapital() {
    // Ordenar países según el orden actual
    let sortedCountriesByCapital = [...countries];
    sortedCountriesByCapital.sort((a, b) => {
        if (orderCapital === "asc") {
            if (a.capital && b.capital) {
                return a.capital.localeCompare(b.capital);
            }
        } else {
            if (a.capital && b.capital) {
                return b.capital.localeCompare(a.capital);
            }
        }
    });

    for (let i = 0; i < sortedCountriesByCapital.length; i++) {
        const country = document.createElement("p");

        country.innerHTML =
            //poner la imagen del pais
            "<span><img src=" +
            sortedCountriesByCapital[i].flag +
            " ></span>" +
            "<br>" +
            //meter el nombre en un span
            "<span>" +
            sortedCountriesByCapital[i].name +
            "</span>" +
            "\nCapital:" +
            sortedCountriesByCapital[i].capital +
            "<br>" +
            "\nLanguage:" +
            sortedCountriesByCapital[i].languages +
            "<br>" +
            "\nPopulation:" +
            sortedCountriesByCapital[i].population;
        container[0].appendChild(country);
    }
}

// Mostrar países ordenados por población
let orderPopulation = "asc";
function paisOrdenadosPopulation() {
    // Ordenar países según el orden actual
    let sortedCountriesByPopulation = [...countries];
    sortedCountriesByPopulation.sort((a, b) => {
        let populationA = parseInt(a.population);
        let populationB = parseInt(b.population);
        if (orderPopulation === "asc") {
            return populationA - populationB;
        } else {
            return populationB - populationA;
        }
    });

    for (let i = 0; i < sortedCountriesByPopulation.length; i++) {
        const country = document.createElement("p");

        country.innerHTML =
            //poner la imagen del pais
            "<span><img src=" +
            sortedCountriesByPopulation[i].flag +
            " ></span>" +
            "<br>" +
            //meter el nombre en un span
            "<span>" +
            sortedCountriesByPopulation[i].name +
            "</span>" +
            "\nCapital:" +
            sortedCountriesByPopulation[i].capital +
            "<br>" +
            "\nLanguage:" +
            sortedCountriesByPopulation[i].languages +
            "<br>" +
            "\nPopulation:" +
            sortedCountriesByPopulation[i].population;
        container[0].appendChild(country);
    }
}

//Botones para ordenar por nombre, capital o población
const buttonName = document.querySelector(".name");
buttonName.addEventListener("click", () => {
    // Limpiar contenedor de países
    container[0].innerHTML = "";

    // Alternar orden de la lista
    order = order === "asc" ? "desc" : "asc";

    // Mostrar países ordenados
    todosPaises();

    // Poner flecha arriba o abajo según el orden
    if (order === "asc") {
        buttonName.innerHTML = "Name &#129047;";
        buttonCapital.innerHTML = "Capital";
        buttonPopulation.innerHTML = "Population";
    } else {
        buttonName.innerHTML = "Name &#129045;";
        buttonCapital.innerHTML = "Capital";
        buttonPopulation.innerHTML = "Population";
    }
});

const buttonCapital = document.querySelector(".capital");
buttonCapital.addEventListener("click", () => {
    // Limpiar contenedor de países
    container[0].innerHTML = "";

    // Alternar orden de la lista
    orderCapital = orderCapital === "asc" ? "desc" : "asc";

    // Mostrar países ordenados
    paisesOrdenadosCapital();

    // Poner flecha arriba o abajo según el orden
    if (orderCapital === "asc") {
        buttonCapital.innerHTML = "Capital &#129047;";
        buttonPopulation.innerHTML = "Population";
        buttonName.innerHTML = "Name";
    } else {
        buttonCapital.innerHTML = "Capital &#129045;";
        buttonPopulation.innerHTML = "Population";
        buttonName.innerHTML = "Name";
    }
});

const buttonPopulation = document.querySelector(".population");
buttonPopulation.addEventListener("click", () => {
    // Limpiar contenedor de países
    container[0].innerHTML = "";

    // Alternar orden de la lista
    orderPopulation = orderPopulation === "asc" ? "desc" : "asc";

    // Mostrar países ordenados
    paisOrdenadosPopulation();

    // Poner flecha arriba o abajo según el orden
    if (orderPopulation === "asc") {
        buttonPopulation.innerHTML = "Population &#129047;";
        buttonCapital.innerHTML = "Capital";
        buttonName.innerHTML = "Name";
    } else {
        buttonPopulation.innerHTML = "Population &#129045;";
        buttonCapital.innerHTML = "Capital";
        buttonName.innerHTML = "Name";
    }
});

// Barra de busqueda para buscar paises que contengan las letras introducidas en su nombre, capital o idioma
const searchInput = document.querySelector("#searchInput");
searchInput.addEventListener("input", function () {
    const searchValue = searchInput.value;
    const countries = document.querySelectorAll(".countries p");
    countries.forEach((country) => {
        const countryData = country.innerText.toLowerCase().split("\n");
        const filteredData = countryData.filter((data) => !data.includes("population"));
        const name = filteredData[0].toLowerCase();
        const capital = filteredData[1].toLowerCase();
        const language = filteredData[2].toLowerCase();
        if (
            name.includes(searchValue.toLowerCase()) ||
            capital.includes(searchValue.toLowerCase()) ||
            language.includes(searchValue.toLowerCase())
        ) {
            country.style.display = "block";
        } else if (searchValue) {
            country.style.display = "none";
        } else {
            country.style.display = "block";
        }
    });
});
/**************************************************************************************************************************/

/*******************************************GRAFRICAS PAISES***************************************************************/
// cambiar el titulo del h4 en funcion que boton se pulsa
const btnpopulation = document.querySelector(".btnpopulation");
btnpopulation.addEventListener("click", () => {
    const graphTitle = document.querySelector(".graph-title");
    graphTitle.textContent = "10 Most Populated Countries in the World";
    chartPopulation(mostPopulatedCountries, "Population");
    document.querySelector("#graphLanguages").style.display = "none";
    document.querySelector("#graphPopulation").style.display = "block";
});

const btnlanguages = document.querySelector(".btnlanguages");
btnlanguages.addEventListener("click", () => {
    const graphTitle = document.querySelector(".graph-title");
    graphTitle.textContent = "10 Most Spoken Languages in the World";
    chartLanguages(mostSpeakedLanguagesArray, "Languages");
    document.querySelector("#graphPopulation").style.display = "none";
    document.querySelector("#graphLanguages").style.display = "block";
});

//Crear un array con los 10 paises mas poblados
const mostPopulatedCountries = countries.sort((a, b) => b.population - a.population).slice(0, 10);

//Hacer un bucle para ver en cuantos paises se habla cada idioma
const mostSpeakedLanguages = countries.reduce((acc, country) => {
    country.languages.forEach((language) => {
        if (!acc[language]) {
            acc[language] = 1;
        } else {
            acc[language]++;
        }
    });
    return acc;
}, {});

//quedarse con los 10 idiomas mas hablados
const mostSpeakedLanguagesArray = Object.entries(mostSpeakedLanguages)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);
console.log(mostSpeakedLanguagesArray);

//Crear la grafica de barras para la poblacion
function chartPopulation(data, title) {
    const canvas = document.getElementById("graphPopulation").getContext("2d");
    const labels = data.map((country) => country.name);
    const values = data.map((country) => country.population);
    const chart = new Chart(canvas, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [
                {
                    label: title,
                    backgroundColor: "#f2a93b",
                    borderColor: "white",
                    data: values,
                },
            ],
        },
    });
}

// Crear la grafica de barras para los idiomas
function chartLanguages(data, title) {
    const canvas = document.getElementById("graphLanguages").getContext("2d");
    const labels = data.map((language) => language[0]);
    const values = data.map((language) => language[1]);
    const chart = new Chart(canvas, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [
                {
                    label: title,
                    backgroundColor: "#f2a93b",
                    borderColor: "white",
                    data: values,
                },
            ],
        },
    });
}
/**************************************************************************************************************************/

/*******************************************BOTON SUBIR********************************************************************/
// Cuando el usuario haga scroll hacia abajo 250px del borde superior de la página, muestra el botón
window.onscroll = function () {
    scrollFunction();
};

const btnSubir = document.querySelector(".btn-subir");

function scrollFunction() {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        btnSubir.style.display = "block";
    } else {
        btnSubir.style.display = "none";
    }
}

// Cuando el usuario hace clic en el botón, desplázate hasta la parte superior de la página
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
/**************************************************************************************************************************/
