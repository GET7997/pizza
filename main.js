async function getData(){

    let res = await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
    let data = await res.json();
    let recipies = data.recipes;
console.log(recipies);
let divcontent = recipies.map(function(item){
    return `
    <div>

    <img src='${item.image_url}' >
        <h3> ${item.title}</h3>

    </div>
    `

}).join('');
let divhtml =document.querySelector('div');
divhtml.innerHTML =divcontent;


}



getData()