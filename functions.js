function traer() {
    let midato = document.getElementById("caja").value;
    const url = `https://pokeapi.co/api/v2/pokemon/${midato}/`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            let element = document.getElementById("elem");
            element.innerHTML = `
        
        <p>${data.name}</p>
        <p>${data.order}</p>
        <img class="pokeimg" src='${data.sprites.front_default}'/>
        `;

            console.log(data);
        })
        .catch((err) => console.log(err));
}