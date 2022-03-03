//elementos y variables

const formulario=document.querySelector("#formulario")
const lista=document.querySelector("#lista-tweets")


let tweets=[]

APP()

function APP(){
     formulario.addEventListener("submit",agregarTweet)

     

     document.addEventListener("DOMContentLoaded",()=>{
          tweets=JSON.parse(localStorage.getItem("citas"))||[];
          console.log("sad")
          agregarHTML()
     })
     
}


function agregarTweet(e){
     e.preventDefault();
     const tweet=document.querySelector("#tweet").value;
     if(tweet==""){
          mensajeError();
          return;
     }

     const tweetObj={
          id:Date.now(),
          tweet
     }

     tweets=[...tweets,tweetObj]

     agregarHTML()
     console.log(tweets)
}



mensajeError=()=>{
     const mensaje=document.createElement("p");
     mensaje.textContent="NO ESCRIBIO NADA"
     mensaje.classList.add("error")
     const contenido=document.querySelector("#contenido")

     contenido.appendChild(mensaje)

     setTimeout(()=>{
          mensaje.remove()
     },2400)
}


agregarHTML=()=>{
     borrarHtml()

     tweets.forEach(item=>{
          const li=document.createElement("li")
          const btn=document.createElement("a")
          btn.textContent="X"
          btn.classList = 'borrar-tweet';
          
          li.textContent=item.tweet
          li.dataset.id=item.id
          lista.appendChild(li)
          li.appendChild(btn)

          btn.onclick=()=>{
               borrarTweet(item.id)
          }

     })

     localStorage.setItem("citas",JSON.stringify(tweets))
     formulario.reset()
}

borrarHtml=()=>{
     while(lista.firstChild){
          lista.removeChild(lista.firstChild)
     }
}


borrarTweet=(id)=>{
     
     tweets=tweets.filter(tweet=>tweet.id !== id)
     agregarHTML()
     console.log(tweets)

}







/* // Variables
const listaTweets = document.querySelector('#lista-tweets');
const formulario = document.querySelector('#formulario');
let tweets = [];

// Event Listeners
eventListeners();

function eventListeners() {
     //Cuando se envia el formulario
     formulario.addEventListener('submit', agregarTweet);

     // Borrar Tweets
     listaTweets.addEventListener('click', borrarTweet);

     // Contenido cargado
     document.addEventListener('DOMContentLoaded', () => {
          tweets = JSON.parse( localStorage.getItem('tweets') ) || []  ;
          console.log(tweets);
          crearHTML();
     });
}

// Añadir tweet del formulario
function agregarTweet(e) {
     e.preventDefault();
     // leer el valor del textarea
     const tweet = document.querySelector('#tweet').value;
     
     // validación
     if(tweet === '') {
          mostrarError('Un mensaje no puede ir vacio');
          return;
     }

     // Crear un objeto Tweet
     const tweetObj = {
          id: Date.now(),
          texto: tweet
     }

     // Añadirlo a mis tweets
     tweets = [...tweets, tweetObj];
     
     // Una vez agregado, mandamos renderizar nuestro HTML
     crearHTML();

     // Reiniciar el formulario
     formulario.reset();
}

function mostrarError(error) {
     const mensajeEerror = document.createElement('p');
     mensajeEerror.textContent = error;
     mensajeEerror.classList.add('error');

     const contenido = document.querySelector('#contenido');
     contenido.appendChild(mensajeEerror);

     setTimeout(() => {
          mensajeEerror.remove();
     }, 3000);
}

function crearHTML() {
     limpiarHTML();
     
     if(tweets.length > 0 ) {
          tweets.forEach( tweet =>  {
               // crear boton de eliminar
               const botonBorrar = document.createElement('a');
               botonBorrar.classList = 'borrar-tweet';
               botonBorrar.innerText = 'X';
     
               // Crear elemento y añadirle el contenido a la lista
               const li = document.createElement('li');

               // Añade el texto
               li.innerText = tweet.texto;

               // añade el botón de borrar al tweet
               li.appendChild(botonBorrar);

               // añade un atributo único...
               li.dataset.tweetId = tweet.id;

               // añade el tweet a la lista
               listaTweets.appendChild(li);
          });
     }

     sincronizarStorage();
}

// Elimina el Tweet del DOM
function borrarTweet(e) {
     e.preventDefault();

     // console.log(e.target.parentElement.dataset.tweetId);
     const id = e.target.parentElement.dataset.tweetId;
     tweets = tweets.filter( tweet => tweet.id != id  );
     crearHTML();
}

// Agrega tweet a local storage
function sincronizarStorage() {
     localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Elimina los cursos del carrito en el DOM
function limpiarHTML() {
     while(listaTweets.firstChild) {
          listaTweets.removeChild(listaTweets.firstChild);
     }
} 

*/