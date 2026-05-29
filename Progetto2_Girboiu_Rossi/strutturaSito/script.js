const images = [
  '../immaginiSito/image1.jpeg',
  '../immaginiSito/image2.webp',
  '../immaginiSito/image3.jpeg',
];

const back  = document.getElementById('bk-back');
const front = document.getElementById('bk-front');

let current = 0;

back.style.backgroundImage = `url('${images[0]}')`; //Imposto lo sfondoa zero (prima immagine e quindi punto di partenza)

//nextImage:quando viene eseguita, questa funzione svolge tre compiti in sequenza: aggiorna il numero della foto corrente (ritornando a zero se la lista è finita), applica la nuova foto al pannello anteriore rendendolo visibile e, infine, aggiorna il pannello posteriore per preparare il ciclo successivo.
function nextImage() {
  current = (current + 1) % images.length;

  front.style.backgroundImage = `url('${images[current]}')`;
  front.classList.add('visible');
//setTimeout: è una funzione di JavaScript che aspetta un determinato lasso di tempo prima di eseguire il codice al suo interno
  setTimeout(() => {
    back.style.backgroundImage = `url('${images[current]}')`;  
    front.classList.remove('visible');
  }, 1600);
}
//setInterval: questa funzione di JS fa ripetere un'azione specifica (in questo caso la funzione che scambia le immagini di sfondo) dopo un determinato lasso di tempo impostato dal programmatore ( in questo caso 10000 millisecondi, quindi 10 secondi).
setInterval(nextImage, 10000);