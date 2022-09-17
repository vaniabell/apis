console.log("Entro al main.js");

const randomImage = () => {

    console.log("entro a la funcion randomImage");

    const URL="https://picsum.photos/200/300"


    fetch(URL)
        .then((data) => {
            console.log(data);
            document.getElementById('imgRandom').src = data.url;
        })
        .catch((error) => {
            console.log("Ocurrio un error!");
        });


      

}



