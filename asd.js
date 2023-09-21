document.querySelector('#boton').addEventListener('click', traerDatos);

function traerDatos(){
    console.log('dentro de la funcion');

    const xhttp = new XMLHttpRequest();

  xhttp.open('GET', 'catalogo.json', true);

  xhttp.send();

  xhttp.onreadystatechange = function(){

    if(this.readyState == 4 && this.status == 200){
        console.log(this.responseText);
        let datos= JSON.parse(this.responseText);

        let res = document.querySelector('#res');

        res.innerHTML = "";
        for(let item of datos); {

            res.innerHTML += 
            `
            <tr>
                    <td>${item.grande}</td>
                    <td>${item.chico}</td>
                    
                 
                  </tr>`

        }
    }
  }
}