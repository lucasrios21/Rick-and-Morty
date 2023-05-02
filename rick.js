const apiRick = async (pagina) => {
    let url = "https://rickandmortyapi.com/api/character/?page=" + pagina;
    const api = await fetch(url);
    const data = await api.json();
    console.log(data);
    divRes=document.querySelector("#resultado");
    divRes.innerHTML=""
    data.results.map(item => {
        divItem = document.createElement('div')
        divItem.innerHTML= `
        <div class="card" style="width: 18rem;">
        <img src="${item.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Nombre: ${item.name}</h5>
            <p class="card-text">Estado: ${item.status}</p>
            <p class="card-text">Especie: ${item.species}</p>
            <p class="card-text">Género: ${item.gender}</p>
            <p class="card-text">Locación: ${item.location.name}</p>
            
        </div>
        </div>
        `
        divRes.appendChild(divItem);
    })
}


apiRick(1);