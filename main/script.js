const input = document.querySelector("input");
const button = document.querySelector("button");

const lugar = document.querySelector("#lugar");
const graus = document.querySelector("#graus");
const vento = document.querySelector("#vento");

const img = document.querySelector("img");

const conteudo = document.querySelector(".conteudo");

button.addEventListenera("click", () => {
    if (!input.value) return;

    getDataApi();
});

async function getDataApi() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
         input.value 
    )}&units=metric&appid=1e37a98894d8eb1ac2beee461ac94961`;
    
    try {
        await fetch(url)
          .then((res) => res.json())
          .then((data) => {
            if (data?.cod && data.cod === "404") {
              return alert("Local não encontrado!");
            }
    
            loadData(data);
          });
      } catch (error) {
        alert(error);
      }
}