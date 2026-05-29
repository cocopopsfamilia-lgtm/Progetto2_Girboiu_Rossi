SVILUPPO.MD: Documento delle modifiche del sito e varie osservazioni

Il lavoro, come già specificato nel file README.md, è suddiviso in questo modo:
    - Rossi:
        . Home Page
        . Pagina 3 (diversi lavori che si possono svolgere)
    -Girboiu: 
        . Pagina 2 (Paesi che collaborano al progetto ERASMUS)
        . Pagina 4 (Sezione Community dove vengono lasciati dei commenti con i pensieri delle persone che hanno preso parte al progetto)

HOME PAGE:

Data, orario di modifica e autore: 23/05/2026, ore 19:18, Rossi e Girboiu
- Creazione della repository di GitHub;
- Inizio sviluppo del file README.md;
- Inizzializzazione del file struttura.txt per la realizzazione del sito (struttura ipotetica con eventuali modifiche).

Data, orario di modifica e autore: 24/05/2026, ore 17:, Rossi e Griboiu
- Terminazione del file struttura.txt

Data, orario di modifica e autore: 25/05/2026, ore 15:32, Rossi 
 - Inizio sviluppo home page del sito:
    . realizzazione della navigation bar (con varie modifiche CSS);
    . inizio paragrafo sulla presentazione del sito.
Ragionando su cosa inserire all'interno della NAV bar usando java script (componenti eventuali da inserire).

Data, orario di modifica e autore: 26/05/2026, ore 17:20, Rossi
- Continuo sviluppo home page
Utilizzo di javascript per sfondo animato (slideshow di tre foto [diverse destinazioni erasmus]).ù
Nel file JavaScript realizzo un'array in cui inserisco le immagini caricate nella cartella "immaginiSito" per poi farle scorrere tramite una funzione (nextImage()) che cambia l'immagine di sfondo ogni 10 secondi caricando la nuova foto su un pannello anteriore invisibile, che poi viene sfumato gradualmente per creare una transizione sopra la vecchia immagine.

Data, orario di modifica e autore: 28/05/2026, ore 18:23, Rossi
- Inserimento delle varie immagini;
- Miglioramento del javascript: 
    . modifica per lo slide show e diminuzione del tempo di cambio delle immagini. Corretti inoltre errori di logica all'interno delo file che non permettevano lo scorrimento delle immagini (setTimeout nella funzione);
- Inserimento dei contenuti della prima pagina (vari testi di presentazione della scuola e del progetto Erasmus);

Completamento della Home Page.

Della Home Page verranno mostrate all'utente le seguenti componenti:
 - la componente titolo (e la banda su cui esso si trova);
 - la Navigation Bar: che l'utente può usare per spostarsi all'interno delle pagine del sito;
 - i vari testi espositivi e le immagini che le rappresentano;
 - lo sfondo animato in background che mostra 3 immagini diverse

Difficoltà trovata nella parte di CSS incui prendo la navigation bar e la lascio visibile anche quando si scorre in fondo alla pagina. Difficoltà riscontrata non nella complessità, ma nel trovare il comando che mi permette di fare ciò.

TERZA PAGINA:

Data, orario di modifica e autore: 29/05/2026, ore 14:48, Rossi
- Inizio della terza pagina del sito:
    . inizio dello sviluppo dell'HTML e del CSS

Data, orario di modifica e autore: 29/05/2026, ore 20:19, Rossi
- Completamento della terza pagina del sito:
    . inseriti tutti i testi espositivi per quanto riguarda l'argomento sui percorsi lavorativi
    . inserite le immagini illustrative correlate all'argomento
    . finito lo sviluppo del CSS (codice ripreso [poiché simile] dalla prima pagina)

Elemento mancante:
- Provato ad inserire una funzione un pò più sofisticata di zooming delle tabelle nella pagina usando JavaScript, ma, data la complicatezza (e nonostante l'aiuto da parte di compagni e IA) della funzione, non è stato inserito all'interno del testo.

Il problema era che non veniva visualizzata l'interfaccia di zoom, il che non permetteva lo zoom effettivo della tabella per poterla vedere meglio. Se aumento e basta la grandezza delle tabelle mi occupoano troppo spazio e saltano subito all'occhio per la poca praticità.

Della terza pagina (Page3). vengono mostrati i seguenti elementi:
 - Come per la home page:
    . la componente titolo (e la banda su cui esso si trova);
    . la Navigation Bar: che l'utente può usare per spostarsi all'interno delle pagine del sito;
 - la pagina restante:
    . contenuti riguardanti l'obbiettivo dell'ERASMUS e il perché si fa;
    . sezione con i vari percorsi lavorativi e distinzione tra i due tipi (utilizzando due tabelle)