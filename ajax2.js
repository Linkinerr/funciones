document.querySelector('#boton').addEventListener('click', traerDatos);
document.querySelector('#boton1').addEventListener('click', traerDatos);
document.querySelector('#boton2').addEventListener('click', traerDatos);
document.querySelector('#boton3').addEventListener('click', traerDatos);
document.querySelector('#boton4').addEventListener('click', traerDatos2);
document.querySelector('#boton5').addEventListener('click', traerDatos2);
document.querySelector('#boton6').addEventListener('click', traerDatos2);

function traerDatos(){

 console.log('dentro de la funcion');

const xhttp = new XMLHttpRequest();

xhttp.open('GET', 'catalogo.json', true);
xhttp.send();
xhttp.onreadystatechange = function(){

    if(this.readyState == 4 && this.status == 200){
console.log(this.responseText);
let datos = JSON.parse(this.responseText);
// console.log(datos);
let res = document.querySelector('#res');
res.innerHTML = '';
for(let item of datos){
    // console.log(item);
    res.innerHTML +=  `
    <tr>
            <td>${item.bidonchico}</td>
            <td>${item.bidon}</td>
            <td>${item.dispenser}</td>   
          </tr>`   
}
    }
}
}
function traerDatos2(){
    Swal.fire('Te enviaremos una notificacion')};
   
;






// array de persona
const miArray = [
    { nombre: 'Andre', edad: 20},
    { nombre: 'Andree', edad: 58},
    { nombre: 'Andreee', edad: 30},
];
const sumaDeEdades = miArray.reduce((acumulador, persona) => {
    return acumulador + persona.edad;
}, 0);
console.log(sumaDeEdades);
// Probando fetch
fetch('https://jsonplaceholder.typicode.com/posts', {
 method: 'POST',
 body: JSON.stringify({
    title: 'primera publicacion en coder',
    body: 'nuestra primera publicacion dentro de coder',
    userId: 1,
 }),
 headers: {
    'Content-type': 'application/json; charset=UTF-8',
 },
})
.then((response) => response.json())
.then((data) => console.log(data));

