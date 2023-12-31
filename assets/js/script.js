/* Descrizione:

Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.

Bonus: 

1- al click su una thumb, visualizzare in grande l'immagine corrispondente 

2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente 

3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce

Consigli del giorno:
regola d'oro: riciclare ovunque possibile! Questo significa che per la parte di markup possiamo recuperare html e css dell'esercizio svolto qualche giorno fa: è già tutto pronto!
il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l'esercizio si riduce a poche righe ;) */

const { createApp } = Vue  // Importa il metodo createApp da Vue.js
    createApp({   // Crea una nuova app Vue
    data() {   // Definisce le proprietà dei dati per l'app
        return { 

        activeImage: 0,   // L'indice dell'immagine attualmente visualizzata

        direction: 'next',  // La direzione in cui si muove il diaporama
        
        slides : [
            {
                image: './assets/img/01.webp',
                title: 'Marvel\'s Spiderman Miles Morale',
                text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
            }, {
                image: './assets/img/02.webp',
                title: 'Ratchet & Clank: Rift Apart',
                text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
            }, {
                image: './assets/img/03.webp',
                title: 'Fortnite',
                text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
            }, {
                image: './assets/img/04.webp',
                title: 'Stray',
                text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
            }, {
                image: './assets/img/05.webp',
                title: "Marvel's Avengers",
                text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
            }
            ],

            autoplay: null  // Un segnaposto per la funzione setInterval autoplay
        }
    },
    methods: {  // Definisce i metodi per l'app

        changeImage(index) {  // Cambia l'immagine attiva con quella all'indice fornito
            this.activeImage = index;
        },

        prev() {  // Passa all'immagine precedente, o all'ultima immagine se attualmente alla prima
            if (this.activeImage > 0) {
                this.activeImage--;
            } else {
                this.activeImage = this.slides.length - 1;
            }
        },
        next() {  // Passa all'immagine successiva, o alla prima immagine se attualmente all'ultima
            if (this.activeImage < this.slides.length - 1) {
                this.activeImage++;
            } else {
                this.activeImage = 0;
            }
        },
        startAutoplay() {  // Inizia l'autoplay del diaporama ogni 3 secondi
            this.autoplay = setInterval(() => {
                if (this.direction === 'next') {
                    this.next();
                } else {
                    this.prev();
                }
            }, 3000); // Cambia image ogni 3 sec
        },
        stopAutoplay() {  // Ferma l'autoplay del diaporama
            clearInterval(this.autoplay); 
        }
    },
    
    mounted() {  // Aggancio del ciclo di vita che viene chiamato dopo che l'istanza è stata montata
        this.startAutoplay();
    }
}).mount('#app');  // Monta l'app su un elemento con id 'app'
    
