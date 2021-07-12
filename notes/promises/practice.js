const swapi_url = "https://swapi.dev/api/"; // -- Obi Wan, people/10

fetch(swapi_url + "people/10", { mode: "cors" })
  .then(async (response) => {
    let data = await response.json();
    document.getElementById("city").textContent = data.name;

    fetch(data.homeworld).then(async (response) => {
      let homeworld = await response.json();
      document.getElementById("feedback").textContent =
        data.name + " is from " + homeworld.name + ".";
    });
  })
  .catch((error) => {
    console.log(error);
    document.getElementById("feedback").textContent =
      "Couldn't fetch data about Obi Wan :(";
  });
