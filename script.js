const userLocation = document.querySelector(".location");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(showPosition);
});

function showPosition(position) {
  userLocation.innerHTML = `
        Latitude: ${position.coords.latitude} <br>
        Longitude: ${position.coords.longitude}
    `;
}

//testes
//var boletim=[[8,7,9,3],[4,5,8,6]]; console.log(boletim[1][2]);
//setTimeout("console.log('Hello');",5000); // faz o texto aparecer após 5 s. 