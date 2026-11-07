// ============================================================
// DATABASE DOMANDE - Ruota delle Materie v2 (COMPLETO)
// 12 materie × 100 domande = 1200 domande
// Distribuzione difficoltà: 50% Facili (1), 30% Medie (2), 20% Difficili (3)
// Tutte le risposte hanno >= 6 lettere (senza spazi)
// ============================================================

const DATABASE = {

  // ==========================================================
  // STORIA (100)
  // ==========================================================
  "Storia": [
    // FACILI (50)
    { domanda: "Chi ha scoperto l'America nel 1492?", risposta: "CRISTOFORO COLOMBO", difficolta: 1 },
    { domanda: "Chi era il primo imperatore romano?", risposta: "AUGUSTO", difficolta: 1 },
    { domanda: "Quale civiltà ha costruito le piramidi di Giza?", risposta: "EGIZIA", difficolta: 1 },
    { domanda: "Chi era il dittatore della Germania nazista?", risposta: "ADOLF HITLER", difficolta: 1 },
    { domanda: "Quale impero ha costruito il Colosseo?", risposta: "IMPERO ROMANO", difficolta: 1 },
    { domanda: "Quale guerra fu combattuta tra nord e sud degli Stati Uniti?", risposta: "GUERRA DI SECESSIONE", difficolta: 1 },
    { domanda: "Chi era il re d'Italia al momento dell'Unità?", risposta: "VITTORIO EMANUELE SECONDO", difficolta: 1 },
    { domanda: "Quale popolo ha saccheggiato Roma nel 410 dopo Cristo?", risposta: "I VISIGOTI", difficolta: 1 },
    { domanda: "Chi ha unificato l'Italia nel 1861?", risposta: "GIUSEPPE GARIBALDI", difficolta: 1 },
    { domanda: "Quale rivoluzione è iniziata in Inghilterra nel Settecento?", risposta: "RIVOLUZIONE INDUSTRIALE", difficolta: 1 },
    { domanda: "Chi era il presidente degli Stati Uniti durante la Guerra Civile americana?", risposta: "ABRAMO LINCOLN", difficolta: 1 },
    { domanda: "Quale città è stata distrutta dal Vesuvio nel 79 dopo Cristo?", risposta: "POMPEI", difficolta: 1 },
    { domanda: "In quale anno è iniziata la Rivoluzione Francese?", risposta: "MILLESETTECENTOOTTANTANOVE", difficolta: 1 },
    { domanda: "Chi era il faraone egizio famoso per la tomba intatta?", risposta: "TUTANKHAMON", difficolta: 1 },
    { domanda: "Quale città era la capitale dell'Impero Bizantino?", risposta: "COSTANTINOPOLI", difficolta: 1 },
    { domanda: "Quale popolo costruì le città maya?", risposta: "POPOLO MAYA", difficolta: 1 },
    { domanda: "Chi era il condottiero macedone che conquistò la Persia?", risposta: "ALESSANDRO MAGNO", difficolta: 1 },
    { domanda: "Quale regina egizia fu legata a Giulio Cesare e Marco Antonio?", risposta: "CLEOPATRA", difficolta: 1 },
    { domanda: "Quale muro divideva la Germania durante la Guerra Fredda?", risposta: "MURO DI BERLINO", difficolta: 1 },
    { domanda: "Come si chiamava l'aeroplano che sganciò la bomba atomica su Hiroshima?", risposta: "ENOLA GAY", difficolta: 1 },
    { domanda: "Quale sovrano inglese ebbe sei mogli?", risposta: "ENRICO OTTAVO", difficolta: 1 },
    { domanda: "Chi è considerato il padre della patria italiana insieme a Cavour e Garibaldi?", risposta: "GIUSEPPE MAZZINI", difficolta: 1 },
    { domanda: "Quale impero fu sconfitto a Lepanto nel 1571?", risposta: "IMPERO OTTOMANO", difficolta: 1 },
    { domanda: "Quale famoso monumento fu eretto a Parigi per l'Esposizione Universale del 1889?", risposta: "TORRE EIFFEL", difficolta: 1 },
    { domanda: "Chi guidò i franchi nella battaglia di Poitiers del 732?", risposta: "CARLO MARTELLO", difficolta: 1 },
    { domanda: "Quale ordine cavalleresco fu soppresso nel 1312 da papa Clemente V?", risposta: "I TEMPLARI", difficolta: 1 },
    { domanda: "Quale re francese fu ghigliottinato durante la Rivoluzione?", risposta: "LUIGI SEDICESIMO", difficolta: 1 },
    { domanda: "Chi fu l'eroina francese bruciata sul rogo a Rouen?", risposta: "GIOVANNA D ARCO", difficolta: 1 },
    { domanda: "Quale nave affondò nel suo viaggio inaugurale nel 1912?", risposta: "TITANIC", difficolta: 1 },
    { domanda: "Chi fu il primo imperatore del Sacro Romano Impero incoronato nell'800?", risposta: "CARLO MAGNO", difficolta: 1 },
    { domanda: "Quale famoso generale francese morì in esilio all'isola di Sant'Elena?", risposta: "NAPOLEONE BONAPARTE", difficolta: 1 },
    { domanda: "In quale città italiana scoppiarono le Cinque Giornate del 1848?", risposta: "MILANO", difficolta: 1 },
    { domanda: "Quale politico romano pronunciò le orazioni contro Catilina?", risposta: "MARCO TULLIO CICERONE", difficolta: 1 },
    { domanda: "Quale battaglia del 1815 segnò la sconfitta definitiva di Napoleone?", risposta: "WATERLOO", difficolta: 1 },
    { domanda: "Quale trattato di pace pose fine alla prima guerra punica?", risposta: "TRATTATO DI LUTAZIO", difficolta: 1 },
    { domanda: "Come si chiamava la spedizione di Garibaldi del 1860?", risposta: "SPEDIZIONE DEI MILLE", difficolta: 1 },
    { domanda: "Quale civiltà antica viveva nella regione tra il Tigri e l'Eufrate?", risposta: "MESOPOTAMICA", difficolta: 1 },
    { domanda: "Chi era l'imperatore romano al momento della crocifissione di Gesù?", risposta: "TIBERIO", difficolta: 1 },
    { domanda: "Quale città fu la prima ad essere colpita da una bomba atomica?", risposta: "HIROSHIMA", difficolta: 1 },
    { domanda: "Come venivano chiamati i guerrieri scandinavi del Medioevo?", risposta: "I VICHINGHI", difficolta: 1 },
    { domanda: "Quale regina governò la Gran Bretagna dal 1837 al 1901?", risposta: "REGINA VITTORIA", difficolta: 1 },
    { domanda: "Quale trattato internazionale creò la Società delle Nazioni?", risposta: "PATTO DI VERSAILLES", difficolta: 1 },
    { domanda: "Quale zar di Russia promosse la costruzione di San Pietroburgo?", risposta: "PIETRO IL GRANDE", difficolta: 1 },
    { domanda: "Come si chiamava l'alleanza tra Germania, Italia e Giappone nella seconda guerra mondiale?", risposta: "ASSE ROMA BERLINO TOKYO", difficolta: 1 },
    { domanda: "Quale presidente degli Stati Uniti promosse il New Deal?", risposta: "FRANKLIN DELANO ROOSEVELT", difficolta: 1 },
    { domanda: "Come si chiamava la flotta da guerra spagnola distrutta nel 1588 dagli inglesi?", risposta: "INVINCIBILE ARMATA", difficolta: 1 },
    { domanda: "Quale esplosione nucleare avvenne in Ucraina nel 1986?", risposta: "DISASTRO DI CHERNOBYL", difficolta: 1 },
    { domanda: "Chi è stato il leader della rivoluzione cubana salito al potere nel 1959?", risposta: "FIDEL CASTRO", difficolta: 1 },
    { domanda: "Quale trattato firmato nel 1957 diede inizio alla Comunità Economica Europea?", risposta: "TRATTATI DI ROMA", difficolta: 1 },
    { domanda: "Quale civiltà precolombiana aveva come capitale Tenochtitlán?", risposta: "CIVILTA AZTECA", difficolta: 1 },

    // MEDIE (30)
    { domanda: "Chi ha scritto il trattato politico Il Principe?", risposta: "NICCOLO MACHIAVELLI", difficolta: 2 },
    { domanda: "Quale trattato pose fine alla Prima Guerra Mondiale?", risposta: "TRATTATO DI VERSAILLES", difficolta: 2 },
    { domanda: "Chi era il leader dell'Unione Sovietica durante la Seconda Guerra Mondiale?", risposta: "GIUSEPPE STALIN", difficolta: 2 },
    { domanda: "Quale dinastia regnò in Italia meridionale con Federico II?", risposta: "DINASTIA SVEVA", difficolta: 2 },
    { domanda: "Quale papa ha indetto la Prima Crociata?", risposta: "URBANO SECONDO", difficolta: 2 },
    { domanda: "Chi ha guidato l'indipendenza dell'India dal dominio britannico?", risposta: "MAHATMA GANDHI", difficolta: 2 },
    { domanda: "Quale evento ha scatenato la Prima Guerra Mondiale?", risposta: "ASSASSINIO DI SARAJEVO", difficolta: 2 },
    { domanda: "Chi ha proclamato la Riforma protestante nel 1517?", risposta: "MARTIN LUTERO", difficolta: 2 },
    { domanda: "Quale città italiana fu capitale del Regno dal 1865 al 1871?", risposta: "FIRENZE", difficolta: 2 },
    { domanda: "Quale rivolta contadina scoppiò in Francia nel 1358?", risposta: "LA JACQUERIE", difficolta: 2 },
    { domanda: "Chi è stato il primo uomo a mettere piede sulla Luna?", risposta: "NEIL ARMSTRONG", difficolta: 2 },
    { domanda: "Quale battaglia vide i 300 spartani contro i persiani?", risposta: "BATTAGLIA DELLE TERMOPILI", difficolta: 2 },
    { domanda: "Chi ha fondato la dinastia dei Tudor in Inghilterra?", risposta: "ENRICO SETTIMO", difficolta: 2 },
    { domanda: "Chi era il primo presidente della Repubblica Italiana?", risposta: "ENRICO DE NICOLA", difficolta: 2 },
    { domanda: "Quale evento del 1989 segnò la fine della Guerra Fredda?", risposta: "CADUTA DEL MURO DI BERLINO", difficolta: 2 },
    { domanda: "Chi era il doge che guidò Venezia alla vittoria di Lepanto?", risposta: "ALVISE MOCENIGO", difficolta: 2 },
    { domanda: "Quale città fu fondata da Romolo secondo la leggenda?", risposta: "ROMA", difficolta: 2 },
    { domanda: "Quale re francese era detto il Re Sole?", risposta: "LUIGI QUATTORDICESIMO", difficolta: 2 },
    { domanda: "Quale guerra durò dal 1914 al 1918?", risposta: "PRIMA GUERRA MONDIALE", difficolta: 2 },
    { domanda: "Chi era il generale cartaginese che attraversò le Alpi con gli elefanti?", risposta: "ANNIBALE BARCA", difficolta: 2 },
    { domanda: "Quale re persiano invase la Grecia e combatté a Salamina?", risposta: "SERSE PRIMO", difficolta: 2 },
    { domanda: "Quale statuita di pace sanzionò la scissione tra impero di Carlo Magno tra i nipoti nell'843?", risposta: "TRATTATO DI VERDUN", difficolta: 2 },
    { domanda: "Chi comandava la flotta alleata a Trafalgar nel 1805?", risposta: "HORATIO NELSON", difficolta: 2 },
    { domanda: "Quale cardinale e statista governò di fatto la Francia sotto Luigi XIII?", risposta: "CARDINALE RICHELIEU", difficolta: 2 },
    { domanda: "Quale dinastia mantenne il potere in Austria fino al 1918?", risposta: "DINASTIA ASBURGO", difficolta: 2 },
    { domanda: "In quale battaglia del 1214 Filippo Augusto di Francia sconfisse Ottone IV?", risposta: "BATTAGLIA DI BOUVINES", difficolta: 2 },
    { domanda: "Chi fu il condottiero prussiano comandante a Waterloo insieme a Wellington?", risposta: "GEBHARD VON BLUCHER", difficolta: 2 },
    { domanda: "Quale concordato del 1122 pose fine alla lotta per le investiture?", risposta: "CONCORDATO DI WORMS", difficolta: 2 },
    { domanda: "Chi guidò la spedizione navale che circumnavigò per la prima volta il globo?", risposta: "FERDINANDO MAGELLANO", difficolta: 2 },
    { domanda: "Quale famoso sovrano svedese morì nella battaglia di Lützen nel 1632?", risposta: "GUSTAVO ADOLFO", difficolta: 2 },

    // DIFFICILI (20)
    { domanda: "Quale trattato del 1648 pose fine alla Guerra dei Trent'anni?", risposta: "PACE DI WESTFALIA", difficolta: 3 },
    { domanda: "Chi era il capo dei Giacobini durante la Rivoluzione Francese?", risposta: "ROBESPIERRE", difficolta: 3 },
    { domanda: "Quale imperatore bizantino ha fatto costruire Santa Sofia?", risposta: "GIUSTINIANO", difficolta: 3 },
    { domanda: "Chi ha scritto la Storia d'Italia in venti volumi?", risposta: "FRANCESCO GUICCIARDINI", difficolta: 3 },
    { domanda: "Quale dinastia cinese ha costruito la Città Proibita?", risposta: "DINASTIA MING", difficolta: 3 },
    { domanda: "Quale battaglia vide Annibale vincere sui romani nel 216 avanti Cristo?", risposta: "BATTAGLIA DI CANNE", difficolta: 3 },
    { domanda: "Chi era il re longobardo che conquistò Pavia nel 572?", risposta: "RE ALBOINO", difficolta: 3 },
    { domanda: "Quale evento del 1054 segnò la separazione tra Chiesa d'Oriente e d'Occidente?", risposta: "SCISMA D ORIENTE", difficolta: 3 },
    { domanda: "Quale imperatore romano ha emanato l'Editto di Milano nel 313?", risposta: "COSTANTINO", difficolta: 3 },
    { domanda: "Quale congresso del 1815 ridisegnò l'Europa dopo Napoleone?", risposta: "CONGRESSO DI VIENNA", difficolta: 3 },
    { domanda: "Chi ha unificato la Germania nel 1871?", risposta: "OTTO VON BISMARCK", difficolta: 3 },
    { domanda: "Quale rivoluzione del 1917 portò Lenin al potere?", risposta: "RIVOLUZIONE D OTTOBRE", difficolta: 3 },
    { domanda: "Chi era il sovrano del Regno delle Due Sicilie nel 1860?", risposta: "FRANCESCO SECONDO", difficolta: 3 },
    { domanda: "Quale battaglia vide Enrico Quinto d'Inghilterra sconfiggere i francesi nel 1415?", risposta: "BATTAGLIA DI AZINCOURT", difficolta: 3 },
    { domanda: "Quale imperatore romano d'Occidente fu deposto da Odoacre nel 476?", risposta: "ROMOLO AUGUSTOLO", difficolta: 3 },
    { domanda: "Quale trattato del 1559 sancì l'egemonia spagnola in Italia?", risposta: "PACE DI CATEAU CAMBRESIS", difficolta: 3 },
    { domanda: "Chi fu il visconte britannico segretario agli esteri al Congresso di Vienna?", risposta: "LORD CASTLEREAGH", difficolta: 3 },
    { domanda: "Quale condottiero ateniese fu l'artefice della vittoria di Salamina nel 480 a.C.?", risposta: "TEMISTOCLE", difficolta: 3 },
    { domanda: "Quale bolla papale del 1356 stabilì le modalità di elezione dell'imperatore germanico?", risposta: "BOLLA D ORO", difficolta: 3 },
    { domanda: "Quale re assiro distrusse il Regno d'Israele con la caduta di Samaria nel 722 a.C.?", risposta: "SALMANASSAR QUINTO", difficolta: 3 }
  ],

  // ==========================================================
  // MATEMATICA (100)
  // ==========================================================
  "Matematica": [
    // FACILI (50)
    { domanda: "Come si chiama il risultato di una addizione?", risposta: "SOMMA", difficolta: 1 },
    { domanda: "Come si chiama il risultato di una moltiplicazione?", risposta: "PRODOTTO", difficolta: 1 },
    { domanda: "Quanti lati ha un esagono?", risposta: "SEI LATI", difficolta: 1 },
    { domanda: "Quanti gradi ha un angolo retto?", risposta: "NOVANTA GRADI", difficolta: 1 },
    { domanda: "Come si chiama un numero divisibile solo per uno e per se stesso?", risposta: "NUMERO PRIMO", difficolta: 1 },
    { domanda: "Qual è il numero primo più piccolo?", risposta: "IL DUE", difficolta: 1 },
    { domanda: "Come si chiama il risultato di una sottrazione?", risposta: "DIFFERENZA", difficolta: 1 },
    { domanda: "Come si chiama la figura con tutti i lati e gli angoli uguali?", risposta: "POLIGONO REGOLARE", difficolta: 1 },
    { domanda: "Quanti minuti ci sono in un'ora?", risposta: "SESSANTA MINUTI", difficolta: 1 },
    { domanda: "Come si chiama il numero che esprime una parte di un intero?", risposta: "FRAZIONE", difficolta: 1 },
    { domanda: "Qual è la radice quadrata di cento quarantaquattro?", risposta: "DODICI", difficolta: 1 },
    { domanda: "Come si chiama il lato più lungo di un triangolo rettangolo?", risposta: "IPOTENUSA", difficolta: 1 },
    { domanda: "Quante facce ha un cubo?", risposta: "SEI FACCE", difficolta: 1 },
    { domanda: "Quale numero romano corrisponde a mille?", risposta: "LA LETTERA M", difficolta: 1 },
    { domanda: "Come si chiama il rapporto tra circonferenza e diametro?", risposta: "PI GRECO", difficolta: 1 },
    { domanda: "Quanti secondi ci sono in un'ora?", risposta: "TREMILASEICENTO", difficolta: 1 },
    { domanda: "Quale operazione corrisponde al segno due punti?", risposta: "DIVISIONE", difficolta: 1 },
    { domanda: "Come si chiama la parte superiore di una frazione?", risposta: "NUMERATORE", difficolta: 1 },
    { domanda: "Come si chiama la parte inferiore di una frazione?", risposta: "DENOMINATORE", difficolta: 1 },
    { domanda: "Quanti gradi misura la somma degli angoli interni di un triangolo?", risposta: "CENTOTTANTA GRADI", difficolta: 1 },
    { domanda: "Come si chiama una figura geometrica con tre lati?", risposta: "TRIANGOLO", difficolta: 1 },
    { domanda: "Qual è il risultato dell'elevamento alla potenza zero di qualsiasi numero diverso da zero?", risposta: "IL NUMERO UNO", difficolta: 1 },
    { domanda: "Come si chiama il punto centrale di una circonferenza?", risposta: "CENTRO", difficolta: 1 },
    { domanda: "Come si chiama il segmento che unisce due punti della circonferenza passando per il centro?", risposta: "DIAMETRO", difficolta: 1 },
    { domanda: "Come si chiama il segmento che unisce il centro a un punto della circonferenza?", risposta: "RAGGIO", difficolta: 1 },
    { domanda: "Quanti vertici ha una piramide a base quadrata?", risposta: "CINQUE VERTICI", difficolta: 1 },
    { domanda: "Come si chiama l'angolo di 180 gradi?", risposta: "ANGOLO PIATTO", difficolta: 1 },
    { domanda: "Come si chiama l'angolo di 360 gradi?", risposta: "ANGOLO GIRO", difficolta: 1 },
    { domanda: "Qual è il triplo di trenta?", risposta: "NOVANTA", difficolta: 1 },
    { domanda: "Qual è la metà di cinquanta?", risposta: "VENTICINQUE", difficolta: 1 },
    { domanda: "Quanti lati ha un pentagono?", risposta: "CINQUE LATI", difficolta: 1 },
    { domanda: "Quanti lati ha un eptagono?", risposta: "SETTE LATI", difficolta: 1 },
    { domanda: "Quanti lati ha un decagono?", risposta: "DIECI LATI", difficolta: 1 },
    { domanda: "Come si chiama la linea spezzata chiusa che delimita un poligono?", risposta: "PERIMETRO", difficolta: 1 },
    { domanda: "Qual è la radice quadrata di ottantuno?", risposta: "IL NUMERO NOVE", difficolta: 1 },
    { domanda: "Qual è la radice quadrata di sessantaquattro?", risposta: "IL NUMERO OTTO", difficolta: 1 },
    { domanda: "Qual è la radice quadrata di quarantanove?", risposta: "IL NUMERO SETTE", difficolta: 1 },
    { domanda: "Qual è il risultato di 5 per 5?", risposta: "VENTICINQUE", difficolta: 1 },
    { domanda: "Qual è il risultato di 12 per 12?", risposta: "CENTOQUARANTAQUATTRO", difficolta: 1 },
    { domanda: "Come si chiamano le linee aperte che non si incontrano mai sul piano?", risposta: "RETTE PARALLELE", difficolta: 1 },
    { domanda: "Come si chiamano le linee che si incontrano formando angoli retti?", risposta: "RETTE PERPENDICOLARI", difficolta: 1 },
    { domanda: "Qual è l'unità fondamentale di misura delle superfici?", risposta: "METRO QUADRATO", difficolta: 1 },
    { domanda: "Come si chiama un parallelepipedo rettangolo con tutte le facce uguali?", risposta: "CUBO", difficolta: 1 },
    { domanda: "Come si chiama una tabella numerica disposta in righe e colonne?", risposta: "MATRICE", difficolta: 1 },
    { domanda: "Quale operazione inversa è associata alla potenza?", risposta: "RADICE QUADRATA", difficolta: 1 },
    { domanda: "Quale simbolo si usa per esprimere una percentuale?", risposta: "SIMBOLO DI PERCENTUALE", difficolta: 1 },
    { domanda: "Quanto misura il perimetro di un quadrato di lato 5 centimetri?", risposta: "VENTI CENTIMETRI", difficolta: 1 },
    { domanda: "Come si chiama la misura dell'estensione di una superficie?", risposta: "L AREA", difficolta: 1 },
    { domanda: "Come si chiama lo strumento con lancette per misurare l'ora?", risposta: "L OROLOGIO", difficolta: 1 },
    { domanda: "Come si chiama il valore calcolato dividendo la somma dei dati per il loro numero?", risposta: "MEDIA ARITMETICA", difficolta: 1 },

    // MEDIE (30)
    { domanda: "Come si chiama il teorema che lega i cateti all'ipotenusa?", risposta: "TEOREMA DI PITAGORA", difficolta: 2 },
    { domanda: "Qual è il minimo comune multiplo tra quattro e sei?", risposta: "IL DODICI", difficolta: 2 },
    { domanda: "Qual è il massimo comune divisore tra dodici e diciotto?", risposta: "IL SEI", difficolta: 2 },
    { domanda: "Come si chiama la successione in cui ogni termine è la somma dei due precedenti?", risposta: "SUCCESSIONE DI FIBONACCI", difficolta: 2 },
    { domanda: "Quanto vale il numero di Nepero approssimato a due decimali?", risposta: "DUE VIRGOLA SETTANTADUE", difficolta: 2 },
    { domanda: "Come si chiama il risultato dell'operazione di elevamento a potenza?", risposta: "POTENZA", difficolta: 2 },
    { domanda: "Come si chiama un poligono con otto lati?", risposta: "OTTAGONO", difficolta: 2 },
    { domanda: "Quale è la somma degli angoli interni di un quadrilatero?", risposta: "TRECENTOSESSANTA GRADI", difficolta: 2 },
    { domanda: "Come si chiama il punto di intersezione degli assi di un triangolo?", risposta: "CIRCOCENTRO", difficolta: 2 },
    { domanda: "Come si chiama un triangolo con tutti i lati diversi?", risposta: "TRIANGOLO SCALENO", difficolta: 2 },
    { domanda: "Quanto vale il seno di trenta gradi?", risposta: "UN MEZZO", difficolta: 2 },
    { domanda: "Quanto vale il coseno di sessanta gradi?", risposta: "UN MEZZO", difficolta: 2 },
    { domanda: "Come si chiama la retta che tocca una circonferenza in un solo punto?", risposta: "RETTA TANGENTE", difficolta: 2 },
    { domanda: "Come si chiama la retta che interseca una circonferenza in due punti?", risposta: "RETTA SECANTE", difficolta: 2 },
    { domanda: "Come si chiama la funzione inversa dell'esponenziale?", risposta: "LOGARITMO", difficolta: 2 },
    { domanda: "Quanto vale il logaritmo in base dieci di mille?", risposta: "IL NUMERO TRE", difficolta: 2 },
    { domanda: "Come si chiama un angolo maggiore di novanta gradi?", risposta: "ANGOLO OTTUSO", difficolta: 2 },
    { domanda: "Come si chiama un angolo minore di novanta gradi?", risposta: "ANGOLO ACUTO", difficolta: 2 },
    { domanda: "Come si chiama il numero che indica quante volte una base è moltiplicata per se stessa?", risposta: "ESPONENTE", difficolta: 2 },
    { domanda: "Quanto vale la somma dei primi cento numeri naturali?", risposta: "CINQUEMILACINQUANTA", difficolta: 2 },
    { domanda: "Come si chiama il punto di intersezione delle altezze di un triangolo?", risposta: "ORTOCENTRO", difficolta: 2 },
    { domanda: "Come si chiama il punto di intersezione delle mediane di un triangolo?", risposta: "BARICENTRO", difficolta: 2 },
    { domanda: "Come si chiama il punto di intersezione delle bisettrici di un triangolo?", risposta: "INCENTRO", difficolta: 2 },
    { domanda: "Come si chiama un triangolo con due lati uguali?", risposta: "TRIANGOLO ISOSCELE", difficolta: 2 },
    { domanda: "Come si chiama un triangolo con tutti e tre i lati uguali?", risposta: "TRIANGOLO EQUILATERO", difficolta: 2 },
    { domanda: "Quanto vale la tangente di quarantacinque gradi?", risposta: "IL NUMERO UNO", difficolta: 2 },
    { domanda: "Come si chiama l'equazione di secondo grado della forma ax2 + bx + c = 0?", risposta: "EQUAZIONE DI SECONDO GRADO", difficolta: 2 },
    { domanda: "Come si chiama il discriminante dell'equazione di secondo grado indicato con la lettera greca delta?", risposta: "DISCRIMINANTE", difficolta: 2 },
    { domanda: "Come si chiama la branca della matematica che studia il calcolo combinatorio e le probabilità?", risposta: "CALCOLO DELLE PROBABILITA", difficolta: 2 },
    { domanda: "Come si chiama il poligono regolare con nove lati?", risposta: "ENNEAGONO", difficolta: 2 },

    // DIFFICILI (20)
    { domanda: "Come si chiama la derivata della funzione seno?", risposta: "COSENO", difficolta: 3 },
    { domanda: "Come si chiama la derivata della funzione coseno?", risposta: "MENO SENO", difficolta: 3 },
    { domanda: "Qual è la formula dell'area del cerchio?", risposta: "PI GRECO PER RAGGIO AL QUADRATO", difficolta: 3 },
    { domanda: "Come si chiama il teorema che afferma che ogni intero maggiore di uno è primo o prodotto di primi?", risposta: "TEOREMA FONDAMENTALE DELL ARITMETICA", difficolta: 3 },
    { domanda: "Quanto vale il limite di uno diviso x per x che tende a infinito?", risposta: "IL NUMERO ZERO", difficolta: 3 },
    { domanda: "Come si chiama il numero irrazionale con parte decimale non periodica?", risposta: "NUMERO IRRAZIONALE", difficolta: 3 },
    { domanda: "Come si chiama l'integrale di una funzione?", risposta: "PRIMITIVA", difficolta: 3 },
    { domanda: "Come si chiama il determinante della matrice identità?", risposta: "IL NUMERO UNO", difficolta: 3 },
    { domanda: "Come si chiama la funzione che ha la stessa derivata in ogni punto?", risposta: "FUNZIONE LINEARE", difficolta: 3 },
    { domanda: "Come si chiama il teorema che lega i lati di un triangolo qualsiasi?", risposta: "TEOREMA DEL COSENO", difficolta: 3 },
    { domanda: "Come si chiama la trasformazione che conserva le distanze?", risposta: "ISOMETRIA", difficolta: 3 },
    { domanda: "Come si chiama il numero che misura la pendenza di una retta?", risposta: "COEFFICIENTE ANGOLARE", difficolta: 3 },
    { domanda: "Come si chiama la curva descritta da un punto che ruota su una circonferenza che a sua volta ruota?", risposta: "EPICICLOIDE", difficolta: 3 },
    { domanda: "Quale celebre congettura di teoria dei numeri riguarda gli zeri della funzione zeta?", risposta: "IPOTESI DI RIEMANN", difficolta: 3 },
    { domanda: "Come si chiama l'operatore differenziale vettoriale che misura la tendenza di un campo a ruotare?", risposta: "ROTORMETRO", difficolta: 3 },
    { domanda: "Come si chiama il teorema che afferma che non esistono soluzioni intere positive per a^n + b^n = c^n con n maggiore di due?", risposta: "ULTIMO TEOREMA DI FERMAT", difficolta: 3 },
    { domanda: "Come si chiama la serie infinita di funzioni trigonometriche usata in analisi armonica?", risposta: "SERIE DI FOURIER", difficolta: 3 },
    { domanda: "Come si chiama la matrice quadrata delle derivate parziali di secondo ordine?", risposta: "MATRICE HESSIANA", difficolta: 3 },
    { domanda: "Come si chiama la matrice delle derivate parziali di primo ordine di una funzione vettoriale?", risposta: "MATRICE JACOBIANA", difficolta: 3 },
    { domanda: "Come si chiama la trasformazione geometrica che mappa rette in rette e conserva il rapporto incrociato?", risposta: "TRASFORMAZIONE PROIETTIVA", difficolta: 3 }
  ],

  // ==========================================================
  // GEOGRAFIA (100)
  // ==========================================================
  "Geografia": [
    // FACILI (50)
    { domanda: "Qual è la capitale d'Italia?", risposta: "ROMA", difficolta: 1 },
    { domanda: "Qual è il fiume più lungo d'Italia?", risposta: "IL FIUME PO", difficolta: 1 },
    { domanda: "Qual è la capitale della Francia?", risposta: "PARIGI", difficolta: 1 },
    { domanda: "Qual è la montagna più alta d'Italia?", risposta: "MONTE BIANCO", difficolta: 1 },
    { domanda: "Qual è il mare che bagna l'Italia a ovest?", risposta: "MAR TIRRENO", difficolta: 1 },
    { domanda: "Qual è la capitale della Spagna?", risposta: "MADRID", difficolta: 1 },
    { domanda: "Qual è l'isola più grande d'Italia?", risposta: "LA SICILIA", difficolta: 1 },
    { domanda: "Qual è la capitale della Germania?", risposta: "BERLINO", difficolta: 1 },
    { domanda: "Qual è il lago più grande d'Italia?", risposta: "LAGO DI GARDA", difficolta: 1 },
    { domanda: "Qual è la capitale del Regno Unito?", risposta: "LONDRA", difficolta: 1 },
    { domanda: "Qual è il fiume che attraversa Roma?", risposta: "IL TEVERE", difficolta: 1 },
    { domanda: "Qual è la capitale del Giappone?", risposta: "TOKYO", difficolta: 1 },
    { domanda: "Qual è il vulcano attivo più alto d'Europa?", risposta: "L ETNA", difficolta: 1 },
    { domanda: "Qual è la capitale degli Stati Uniti?", risposta: "WASHINGTON", difficolta: 1 },
    { domanda: "Qual è l'oceano più grande del mondo?", risposta: "OCEANO PACIFICO", difficolta: 1 },
    { domanda: "Qual è la regione italiana più estesa?", risposta: "LA SICILIA", difficolta: 1 },
    { domanda: "Qual è la capitale della Cina?", risposta: "PECHINO", difficolta: 1 },
    { domanda: "Qual è il mare che bagna l'Italia a est?", risposta: "MAR ADRIATICO", difficolta: 1 },
    { domanda: "Qual è la capitale del Portogallo?", risposta: "LISBONA", difficolta: 1 },
    { domanda: "Qual è la capitale della Grecia?", risposta: "ATENE", difficolta: 1 },
    { domanda: "Qual è la capitale dell'Olanda?", risposta: "AMSTERDAM", difficolta: 1 },
    { domanda: "Qual è la capitale del Belgio?", risposta: "BRUXELLES", difficolta: 1 },
    { domanda: "Qual è la capitale dell'Austria?", risposta: "VIENNA", difficolta: 1 },
    { domanda: "Qual è la capitale della Svizzera?", risposta: "BERNA", difficolta: 1 },
    { domanda: "Qual è il fiume che attraversa Parigi?", risposta: "LA SENNA", difficolta: 1 },
    { domanda: "Qual è la capitale della Polonia?", risposta: "VARSAVIA", difficolta: 1 },
    { domanda: "Qual è l'isola più grande del Mar Mediterraneo?", risposta: "LA SICILIA", difficolta: 1 },
    { domanda: "Qual è la seconda isola più grande d'Italia?", risposta: "LA SARDEGNA", difficolta: 1 },
    { domanda: "In quale regione si trova Firenze?", risposta: "TOSCANA", difficolta: 1 },
    { domanda: "In quale regione si trova Napoli?", risposta: "CAMPANIA", difficolta: 1 },
    { domanda: "In quale regione si trova Venezia?", risposta: "VENETO", difficolta: 1 },
    { domanda: "Qual è il fiume che attraversa Firenze e Pisa?", risposta: "L ARNO", difficolta: 1 },
    { domanda: "Quale mare bagna la Puglia a est?", risposta: "MAR ADRIATICO", difficolta: 1 },
    { domanda: "Quale mare si trova tra la Calabria e la Grecia?", risposta: "MAR IONIO", difficolta: 1 },
    { domanda: "Qual è il capoluogo della regione Lombardia?", risposta: "MILANO", difficolta: 1 },
    { domanda: "Qual è il capoluogo della regione Piemonte?", risposta: "TORINO", difficolta: 1 },
    { domanda: "Qual è la capitale della Svezia?", risposta: "STOCCOLMA", difficolta: 1 },
    { domanda: "Qual è la capitale della Norvegia?", risposta: "OSLO", difficolta: 1 },
    { domanda: "Qual è la capitale della Danimarca?", risposta: "COPENAGHEN", difficolta: 1 },
    { domanda: "Qual è la capitale della Finlandia?", risposta: "HELSINKI", difficolta: 1 },
    { domanda: "Qual è la capitale dell'Irlanda?", risposta: "DUBLINO", difficolta: 1 },
    { domanda: "Qual è la capitale dell'Egitto?", risposta: "IL CAIRO", difficolta: 1 },
    { domanda: "Qual è il continente in cui si trova il Brasile?", risposta: "AMERICA DEL SUD", difficolta: 1 },
    { domanda: "Qual è il continente in cui si trova la Cina?", risposta: "L ASIA", difficolta: 1 },
    { domanda: "Qual è il continente più a sud del pianeta ricoperto di ghiaccio?", risposta: "ANTARTIDE", difficolta: 1 },
    { domanda: "Qual è la capitale dell'India?", risposta: "NUOVA DELHI", difficolta: 1 },
    { domanda: "Qual è la catena montuosa più lunga d'Italia?", risposta: "GLI APPENNINI", difficolta: 1 },
    { domanda: "Qual è il golfo su cui si affaccia Napoli?", risposta: "GOLFO DI NAPOLI", difficolta: 1 },
    { domanda: "Come si chiama l'isola francese dove nacque Napoleone?", risposta: "COR SICA", difficolta: 1 },
    { domanda: "Qual è lo stato dell'America del Nord tra Canada e Messico?", risposta: "STATI UNITI D AMERICA", difficolta: 1 },

    // MEDIE (30)
    { domanda: "Qual è il deserto più grande del mondo?", risposta: "IL SAHARA", difficolta: 2 },
    { domanda: "Qual è la catena montuosa che separa Europa e Asia?", risposta: "MONTAGNE URALI", difficolta: 2 },
    { domanda: "Qual è il paese più popoloso del mondo?", risposta: "L INDIA", difficolta: 2 },
    { domanda: "Qual è il fiume più lungo del mondo?", risposta: "IL FIUME NILO", difficolta: 2 },
    { domanda: "Qual è la capitale dell'Australia?", risposta: "CANBERRA", difficolta: 2 },
    { domanda: "Qual è il mare più salato del mondo?", risposta: "MAR MORTO", difficolta: 2 },
    { domanda: "Qual è la vetta più alta del mondo?", risposta: "MONTE EVEREST", difficolta: 2 },
    { domanda: "Qual è la capitale del Brasile?", risposta: "BRASILIA", difficolta: 2 },
    { domanda: "Qual è il paese più piccolo del mondo?", risposta: "CITTA DEL VATICANO", difficolta: 2 },
    { domanda: "Qual è il continente più grande del mondo?", risposta: "L ASIA", difficolta: 2 },
    { domanda: "Qual è la capitale del Canada?", risposta: "OTTAWA", difficolta: 2 },
    { domanda: "Qual è il fiume più importante dell'Egitto?", risposta: "IL FIUME NILO", difficolta: 2 },
    { domanda: "Qual è la capitale dell'Argentina?", risposta: "BUENOS AIRES", difficolta: 2 },
    { domanda: "Qual è il golfo più grande del mondo?", risposta: "GOLFO DEL MESSICO", difficolta: 2 },
    { domanda: "Qual è la capitale dell'Egitto?", risposta: "IL CAIRO", difficolta: 2 },
    { domanda: "Qual è la capitale della Russia?", risposta: "MOSCA", difficolta: 2 },
    { domanda: "Qual è la penisola più grande d'Europa?", risposta: "PENISOLA IBERICA", difficolta: 2 },
    { domanda: "Qual è il paese con più fusi orari?", risposta: "LA FRANCIA", difficolta: 2 },
    { domanda: "Qual è la capitale del Messico?", risposta: "CITTA DEL MESSICO", difficolta: 2 },
    { domanda: "Qual è la pianura più grande d'Italia?", risposta: "PIANURA PADANA", difficolta: 2 },
    { domanda: "Qual è la capitale dell'Ungheria?", risposta: "BUDAPEST", difficolta: 2 },
    { domanda: "Qual è la capitale della Repubblica Ceca?", risposta: "PRAGA", difficolta: 2 },
    { domanda: "Qual è il lago più esteso d'Africa?", risposta: "LAGO VITTORIA", difficolta: 2 },
    { domanda: "Qual è la capitale della Romania?", risposta: "BUCAREST", difficolta: 2 },
    { domanda: "Qual è la catena montuosa dell'America meridionale?", risposta: "CATENA DELLE ANDE", difficolta: 2 },
    { domanda: "Qual è il fiume più lungo d'Europa?", risposta: "IL FIUME VOLGA", difficolta: 2 },
    { domanda: "Qual è la capitale della Corea del Sud?", risposta: "SEOUL", difficolta: 2 },
    { domanda: "Qual è la capitale della Thailandia?", risposta: "BANGKOK", difficolta: 2 },
    { domanda: "Qual è il secondo fiume più lungo d'Europa?", risposta: "IL DANUBIO", difficolta: 2 },
    { domanda: "Qual è la capitale del Cile?", risposta: "SANTIAGO DEL CILE", difficolta: 2 },

    // DIFFICILI (20)
    { domanda: "Qual è lo stretto che separa l'Europa dall'Africa?", risposta: "STRETTO DI GIBILTERRA", difficolta: 3 },
    { domanda: "Qual è il lago più profondo del mondo?", risposta: "LAGO BAIKAL", difficolta: 3 },
    { domanda: "Qual è la capitale del Kazakistan?", risposta: "ASTANA", difficolta: 3 },
    { domanda: "Qual è il paese più esteso del mondo?", risposta: "LA RUSSIA", difficolta: 3 },
    { domanda: "Qual è la capitale della Nuova Zelanda?", risposta: "WELLINGTON", difficolta: 3 },
    { domanda: "Qual è la corrente oceanica che riscalda l'Europa?", risposta: "CORRENTE DEL GOLFO", difficolta: 3 },
    { domanda: "Qual è la capitale della Turchia?", risposta: "ANKARA", difficolta: 3 },
    { domanda: "Qual è il vulcano più alto del mondo?", risposta: "OJOS DEL SALADO", difficolta: 3 },
    { domanda: "Qual è il paese con la maggiore densità di popolazione?", risposta: "IL PRINCIPATO DI MONACO", difficolta: 3 },
    { domanda: "Qual è la capitale del Marocco?", risposta: "RABAT", difficolta: 3 },
    { domanda: "Qual è il mare interno più grande del mondo?", risposta: "MAR CASPIO", difficolta: 3 },
    { domanda: "Qual è la capitale dell'Indonesia?", risposta: "GIACARTA", difficolta: 3 },
    { domanda: "Qual è il deserto più arido del mondo?", risposta: "DESERTO DI ATACAMA", difficolta: 3 },
    { domanda: "Qual è la capitale della Mongolia?", risposta: "ULAN BATOR", difficolta: 3 },
    { domanda: "Qual è la capitale dell'Islanda?", risposta: "REYKJAVIK", difficolta: 3 },
    { domanda: "Qual è lo stretto tra la Russia e l'Alaska?", risposta: "STRETTO DI BERING", difficolta: 3 },
    { domanda: "Qual è la capitale dell'Etiopia?", risposta: "ADDIS ABEBA", difficolta: 3 },
    { domanda: "Qual è la capitale della Bolivia riconosciuta dalla costituzione?", risposta: "SUCRE", difficolta: 3 },
    { domanda: "Qual è la capitale del Madagascar?", risposta: "ANTANANARIVO", difficolta: 3 },
    { domanda: "Qual è l'arcipelago più grande del mondo per numero di isole?", risposta: "ARCIPELAGO MALESE", difficolta: 3 }
  ],

  // ==========================================================
  // SCIENZE (100)
  // ==========================================================
  "Scienze": [
    // FACILI (50)
    { domanda: "Qual è il simbolo chimico dell'acqua?", risposta: "H DUE O", difficolta: 1 },
    { domanda: "Qual è il pianeta più vicino al Sole?", risposta: "IL PIANETA MERCURIO", difficolta: 1 },
    { domanda: "Quale organo pompa il sangue nel corpo?", risposta: "IL CUORE", difficolta: 1 },
    { domanda: "Qual è l'organo principale della respirazione?", risposta: "I POLMONI", difficolta: 1 },
    { domanda: "Qual è il pianeta più grande del sistema solare?", risposta: "IL PIANETA GIOVE", difficolta: 1 },
    { domanda: "Qual è lo stato della materia con molecole più libere?", risposta: "LO STATO GASSOSO", difficolta: 1 },
    { domanda: "Quanti sono i pianeti del sistema solare?", risposta: "OTTO PIANETI", difficolta: 1 },
    { domanda: "Quale gas assorbono le piante dall'aria?", risposta: "ANIDRIDE CARBONICA", difficolta: 1 },
    { domanda: "Quale organo filtra il sangue?", risposta: "I RENI", difficolta: 1 },
    { domanda: "Qual è il satellite naturale della Terra?", risposta: "LA LUNA", difficolta: 1 },
    { domanda: "Quale forza ci tiene a terra?", risposta: "LA GRAVITA", difficolta: 1 },
    { domanda: "Qual è il simbolo chimico del ferro?", risposta: "FE", difficolta: 1 },
    { domanda: "Qual è l'unità di misura della lunghezza?", risposta: "IL METRO", difficolta: 1 },
    { domanda: "Quanti denti ha un adulto in genere?", risposta: "TRENTADUE DENTI", difficolta: 1 },
    { domanda: "Qual è la stella più vicina alla Terra?", risposta: "IL SOLE", difficolta: 1 },
    { domanda: "Qual è il simbolo chimico dell'oro?", risposta: "AU", difficolta: 1 },
    { domanda: "Come si chiama il processo con cui le piante producono glucosio?", risposta: "FOTOSINTESI", difficolta: 1 },
    { domanda: "Qual è il composto che rende verdi le foglie?", risposta: "LA CLOROFILLA", difficolta: 1 },
    { domanda: "Come si chiama l'osso principale della coscia?", risposta: "IL FEMORE", difficolta: 1 },
    { domanda: "Come si chiama il pigmento che dà colore alla pelle?", risposta: "LA MELANINA", difficolta: 1 },
    { domanda: "Qual è il pianeta rosso del sistema solare?", risposta: "IL PIANETA MARTE", difficolta: 1 },
    { domanda: "Qual è il pianeta famoso per i suoi spettacolari anelli?", risposta: "SATURNO", difficolta: 1 },
    { domanda: "Qual è l'organo principale della vista?", risposta: "GLI OCCHI", difficolta: 1 },
    { domanda: "Qual è l'organo del sistema nervoso racchiuso nel cranio?", risposta: "IL CERVELLO", difficolta: 1 },
    { domanda: "Come si chiama la trasformazione da bruco a farfalla?", risposta: "METAMORFOSI", difficolta: 1 },
    { domanda: "Qual è l'animale terrestre più grande del mondo?", risposta: "L ELEFANTE AFRICANO", difficolta: 1 },
    { domanda: "Qual è l'animale marino più grande del pianeta?", risposta: "BALENOTTERA AZZURRA", difficolta: 1 },
    { domanda: "Come si chiamano gli animali che si nutrono solo di piante?", risposta: "ERBIVORI", difficolta: 1 },
    { domanda: "Come si chiamano gli animali che si nutrono sia di carne che di vegetali?", risposta: "ONNIVORI", difficolta: 1 },
    { domanda: "Come si chiamano gli animali che si nutrono solo di carne?", risposta: "CARNIVORI", difficolta: 1 },
    { domanda: "Qual è lo strumento per osservare le cellule non visibili ad occhio nudo?", risposta: "MICROSCOPIO", difficolta: 1 },
    { domanda: "Qual è lo strumento astronomico per osservare le stelle?", risposta: "TELESCOPIO", difficolta: 1 },
    { domanda: "Come si chiama l'organo della digestione nello stomaco?", risposta: "LO STOMACO", difficolta: 1 },
    { domanda: "Quale gas respiriamo per vivere contenuto nell'aria?", risposta: "OSSIGENO", difficolta: 1 },
    { domanda: "Come si chiamano i vasi sanguigni che portano il sangue dal cuore alla periferia?", risposta: "LE ARTERIE", difficolta: 1 },
    { domanda: "Come si chiamano i vasi sanguigni che riportano il sangue al cuore?", risposta: "LE VENE", difficolta: 1 },
    { domanda: "Qual è l'organo che depura il corpo e produce la bile?", risposta: "IL FEGATO", difficolta: 1 },
    { domanda: "Quale animale depone le uova ed è ricoperto di piume?", risposta: "GLI UCCELLI", difficolta: 1 },
    { domanda: "Come si chiama la scienza che studia le piante?", risposta: "BOTANICA", difficolta: 1 },
    { domanda: "Come si chiama la scienza che studia gli animali?", risposta: "ZOOLOGIA", difficolta: 1 },
    { domanda: "Come si chiama la scienza che studia le rocce e la Terra?", risposta: "GEOLOGIA", difficolta: 1 },
    { domanda: "Come si chiama l'involucro di gas che circonda la Terra?", risposta: "ATMOSFERA", difficolta: 1 },
    { domanda: "Quale strato protettivo dell'atmosfera ci ripara dai raggi ultravioletti?", risposta: "OZONO", difficolta: 1 },
    { domanda: "Come si chiama il passaggio dall'acqua allo stato solido?", risposta: "CONGELAMENTO", difficolta: 1 },
    { domanda: "A quanti gradi centigradi bolle l'acqua a livello del mare?", risposta: "CENTO GRADI", difficolta: 1 },
    { domanda: "A quanti gradi centigradi fonde il ghiaccio?", risposta: "ZERO GRADI", difficolta: 1 },
    { domanda: "Come si chiama lo scheletro interno dei vertebrati?", risposta: "SCHELETRO", difficolta: 1 },
    { domanda: "Quale parte della pianta assorbe acqua e minerali dal terreno?", risposta: "LE RADICI", difficolta: 1 },
    { domanda: "Quale parte della pianta sostiene le foglie e i fiori?", risposta: "IL FUSTO", difficolta: 1 },
    { domanda: "Come si chiamano i denti usati per strappare la carne?", risposta: "CANINI", difficolta: 1 },

    // MEDIE (30)
    { domanda: "Qual è la particella con carica negativa nell'atomo?", risposta: "L ELETTRONE", difficolta: 2 },
    { domanda: "Qual è la formula chimica del sale da cucina?", risposta: "NACL", difficolta: 2 },
    { domanda: "Qual è la velocità della luce nel vuoto in chilometri al secondo?", risposta: "TRECENTOMILA", difficolta: 2 },
    { domanda: "Qual è l'unità di misura dell'energia?", risposta: "IL JOULE", difficolta: 2 },
    { domanda: "Qual è l'elemento chimico più abbondante nell'universo?", risposta: "L IDROGENO", difficolta: 2 },
    { domanda: "Come si chiama la divisione cellulare che produce due cellule identiche?", risposta: "MITOSI", difficolta: 2 },
    { domanda: "Quale legge di Newton afferma che ad ogni azione corrisponde una reazione?", risposta: "TERZA LEGGE DI NEWTON", difficolta: 2 },
    { domanda: "Qual è il pH di una soluzione neutra?", risposta: "IL NUMERO SETTE", difficolta: 2 },
    { domanda: "Quale organo produce l'insulina?", risposta: "IL PANCREAS", difficolta: 2 },
    { domanda: "Come si chiama il processo di fusione dei nuclei nelle stelle?", risposta: "FUSIONE NUCLEARE", difficolta: 2 },
    { domanda: "Quante ossa ha il corpo umano adulto?", risposta: "DUECENTOSEI OSSA", difficolta: 2 },
    { domanda: "Come si chiama la membrana che racchiude la cellula?", risposta: "MEMBRANA CELLULARE", difficolta: 2 },
    { domanda: "Qual è il gruppo sanguigno donatore universale?", risposta: "ZERO NEGATIVO", difficolta: 2 },
    { domanda: "Come si chiama il fenomeno per cui la luce cambia direzione passando tra due mezzi?", risposta: "RIFRAZIONE", difficolta: 2 },
    { domanda: "Qual è il gas nobile più leggero?", risposta: "L ELIO", difficolta: 2 },
    { domanda: "Quale parte della cellula contiene il materiale genetico?", risposta: "IL NUCLEO", difficolta: 2 },
    { domanda: "Come si chiama lo strumento per misurare la pressione atmosferica?", risposta: "BAROMETRO", difficolta: 2 },
    { domanda: "Qual è l'unità di misura della pressione?", risposta: "IL PASCAL", difficolta: 2 },
    { domanda: "Come si chiama la proteina che trasporta l'ossigeno nel sangue?", risposta: "EMOGLOBINA", difficolta: 2 },
    { domanda: "Qual è il simbolo chimico del sodio?", risposta: "NA", difficolta: 2 },
    { domanda: "Come si chiama la ghiandola alla base del cervello che regola molte altre ghiandole endocrini?", risposta: "IPOFISI", difficolta: 2 },
    { domanda: "Quale acido è contenuto principalmente nello stomaco umano?", risposta: "ACIDO CLORIDRICO", difficolta: 2 },
    { domanda: "Come si chiama il processo di respirazione delle cellule in assenza di ossigeno?", risposta: "FERMENTAZIONE", difficolta: 2 },
    { domanda: "Qual è la valvola del cuore tra atrio sinistro e ventricolo sinistro?", risposta: "VALVOLA MITRALE", difficolta: 2 },
    { domanda: "Come si chiama il tessuto muscolare del cuore?", risposta: "MIOCARDIO", difficolta: 2 },
    { domanda: "Come si chiama l'era geologica in cui vissero i dinosauri?", risposta: "ERA MESOZOICA", difficolta: 2 },
    { domanda: "Qual è la galassia a noi più vicina oltre alla Via Lattea?", risposta: "GALASSIA DI ANDROMEDA", difficolta: 2 },
    { domanda: "Come si chiama il rivestimento mielinico degli assoni dei neuroni?", risposta: "GUAINA MIELINICA", difficolta: 2 },
    { domanda: "Qual è l'organo delle piante responsabile degli scambi gassosi tramite gli stomi?", risposta: "LE FOGLIE", difficolta: 2 },
    { domanda: "Come si chiama l'ormone dello stress prodotto dalle ghiandole surrenali?", risposta: "CORTISOLO", difficolta: 2 },

    // DIFFICILI (20)
    { domanda: "Qual è la particella subatomica neutra?", risposta: "IL NEUTRONE", difficolta: 3 },
    { domanda: "Come si chiama la divisione cellulare che produce quattro cellule aploidi?", risposta: "MEIOSI", difficolta: 3 },
    { domanda: "Qual è l'unità di misura della quantità di sostanza?", risposta: "LA MOLE", difficolta: 3 },
    { domanda: "Come si chiama la teoria che spiega l'origine dell'universo?", risposta: "TEORIA DEL BIG BANG", difficolta: 3 },
    { domanda: "Quale legge afferma che la pressione di un gas è inversamente proporzionale al volume?", risposta: "LEGGE DI BOYLE", difficolta: 3 },
    { domanda: "Come si chiama l'organulo cellulare che produce energia?", risposta: "IL MITOCONDRIO", difficolta: 3 },
    { domanda: "Qual è l'unità di misura della carica elettrica?", risposta: "IL COULOMB", difficolta: 3 },
    { domanda: "Come si chiama il decadimento radioattivo che emette un elettrone?", risposta: "DECADIMENTO BETA", difficolta: 3 },
    { domanda: "Qual è l'elemento con numero atomico uno?", risposta: "L IDROGENO", difficolta: 3 },
    { domanda: "Come si chiama il pianeta nano scoperto nel duemilasei?", risposta: "PLUTONE", difficolta: 3 },
    { domanda: "Qual è il nome della teoria di Einstein sulla gravità?", risposta: "RELATIVITA GENERALE", difficolta: 3 },
    { domanda: "Come si chiama la particella mediatrice della forza elettromagnetica?", risposta: "IL FOTONE", difficolta: 3 },
    { domanda: "Come si chiama il fenomeno per cui la luce si comporta sia come onda che come particella?", risposta: "DUALISMO ONDA PARTICELLA", difficolta: 3 },
    { domanda: "Come si chiama l'organulo cellulare contenente enzimi digestivi per la degradazione di sostanze?", risposta: "LISOSOMA", difficolta: 3 },
    { domanda: "Qual è la legge di distribuzione delle velocità molecolari in un gas perfetto?", risposta: "DISTRIBUZIONE DI MAXWELL BOLTZMANN", difficolta: 3 },
    { domanda: "Come si chiama il ciclo metabolico della respirazione cellulare aerobica?", risposta: "CICLO DI KREBS", difficolta: 3 },
    { domanda: "Quale proteina motrice si muove lungo i microtubuli verso l'estremità positiva?", risposta: "CHINESINA", difficolta: 3 },
    { domanda: "Come si chiama il fenomeno epigenetico di inattivazione del cromosoma X?", risposta: "LIONIZZAZIONE", difficolta: 3 },
    { domanda: "Quale enzima catalizza la replica del DNA srotolando la doppia elica?", risposta: "DNA ELICASI", difficolta: 3 },
    { domanda: "Come si chiama la radiazione cosmica di fondo residuo del Big Bang?", risposta: "RADIAZIONE COSMICA DI FONDO", difficolta: 3 }
  ],

  // ==========================================================
  // ARTE (100)
  // ==========================================================
  "Arte": [
    // FACILI (50)
    { domanda: "Chi ha dipinto la Gioconda?", risposta: "LEONARDO DA VINCI", difficolta: 1 },
    { domanda: "Chi ha scolpito il David?", risposta: "MICHELANGELO BUONARROTI", difficolta: 1 },
    { domanda: "In quale museo si trova la Gioconda?", risposta: "MUSEO DEL LOUVRE", difficolta: 1 },
    { domanda: "Chi ha dipinto la Notte Stellata?", risposta: "VINCENT VAN GOGH", difficolta: 1 },
    { domanda: "Chi ha affrescato la Cappella Sistina?", risposta: "MICHELANGELO BUONARROTI", difficolta: 1 },
    { domanda: "Come si chiama l'arte di scolpire il marmo?", risposta: "LA SCULTURA", difficolta: 1 },
    { domanda: "Chi ha dipinto la Primavera?", risposta: "SANDRO BOTTICELLI", difficolta: 1 },
    { domanda: "Qual è il colore ottenuto mescolando giallo e blu?", risposta: "IL COLORE VERDE", difficolta: 1 },
    { domanda: "Chi ha dipinto il Guernica?", risposta: "PABLO PICASSO", difficolta: 1 },
    { domanda: "Come si chiama la tecnica di dipingere su muro?", risposta: "L AFFRESCO", difficolta: 1 },
    { domanda: "Chi ha dipinto la Nascita di Venere?", risposta: "SANDRO BOTTICELLI", difficolta: 1 },
    { domanda: "Come si chiama l'arte di costruire edifici?", risposta: "L ARCHITETTURA", difficolta: 1 },
    { domanda: "Chi ha dipinto l'Ultima Cena?", risposta: "LEONARDO DA VINCI", difficolta: 1 },
    { domanda: "Qual è il colore ottenuto mescolando rosso e giallo?", risposta: "IL COLORE ARANCIONE", difficolta: 1 },
    { domanda: "Chi ha scolpito la Pietà?", risposta: "MICHELANGELO BUONARROTI", difficolta: 1 },
    { domanda: "Chi ha dipinto La scuola di Atene?", risposta: "RAFFAELLO SANZIO", difficolta: 1 },
    { domanda: "Come si chiama lo stile artistico del Medioevo con archi a punta?", risposta: "STILE GOTICO", difficolta: 1 },
    { domanda: "Qual è la tecnica di dipingere con colori ad acqua su carta?", risposta: "ACQUERELLO", difficolta: 1 },
    { domanda: "Qual è il colore ottenuto mescolando rosso e blu?", risposta: "IL COLORE VIOLA", difficolta: 1 },
    { domanda: "Chi ha scolpito Amore e Psiche conservato al Louvre?", risposta: "ANTONIO CANOVA", difficolta: 1 },
    { domanda: "Chi ha scolpito il celebre Apollo e Dafne alla Galleria Borghese?", risposta: "GIAN LORENZO BERNINI", difficolta: 1 },
    { domanda: "In quale città si trova la torre pendente più famosa d'Italia?", risposta: "CITTA DI PISA", difficolta: 1 },
    { domanda: "In quale museo di Firenze si trova la Nascita di Venere?", risposta: "GALLERIA DEGLI UFFIZI", difficolta: 1 },
    { domanda: "Come si chiama l'anfiteatro romano più famoso al mondo?", risposta: "IL COLOSSEO", difficolta: 1 },
    { domanda: "Chi ha dipinto I Girasoli?", risposta: "VINCENT VAN GOGH", difficolta: 1 },
    { domanda: "Come si chiama il tempio romano con la grande cupola e il buco al centro?", risposta: "IL PANTHEON", difficolta: 1 },
    { domanda: "Come si chiama la tecnica di unire tessere colorate per creare immagini?", risposta: "IL MOSAICO", difficolta: 1 },
    { domanda: "Chi ha realizzato le Ninfee?", risposta: "CLAUDE MONET", difficolta: 1 },
    { domanda: "Chi ha scolpito Il Pensatore?", risposta: "AUGUSTE RODIN", difficolta: 1 },
    { domanda: "Qual è il colore primario oltre al giallo e al blu?", risposta: "IL COLORE ROSSO", difficolta: 1 },
    { domanda: "Come si chiama lo strumento su cui il pittore mescola i colori?", risposta: "LA TAVOLOZZA", difficolta: 1 },
    { domanda: "Come si chiama il supporto in legno su cui si appoggia la tela per dipingere?", risposta: "IL CAVALLETTO", difficolta: 1 },
    { domanda: "Come si chiama lo stile artistico con archi a tutto sesto tipico dell'Alto Medioevo?", risposta: "STILE ROMANICO", difficolta: 1 },
    { domanda: "Chi fu l'architetto della basilica di San Pietro a Roma del Seicento?", risposta: "GIAN LORENZO BERNINI", difficolta: 1 },
    { domanda: "Come si chiama il ritratto che un pittore fa di se stesso?", risposta: "AUTORITRATTO", difficolta: 1 },
    { domanda: "Quale celebre pittore spagnolo ha dipinto I disastri della guerra e la Maja desnuda?", risposta: "FRANCISCO GOYA", difficolta: 1 },
    { domanda: "Chi ha dipinto la celebre Ragazza con l'orecchino di perla?", risposta: "JAN VERMEER", difficolta: 1 },
    { domanda: "Come si chiama la statua senza testa conservata al Louvre rappresentante la vittoria?", risposta: "NIKE DI SAMOTRACIA", difficolta: 1 },
    { domanda: "Come si chiama il tempio greco dell'Acropoli di Atene dedicato ad Atena?", risposta: "PARTENONE", difficolta: 1 },
    { domanda: "Quale famoso pittore impressionista amava dipingere la cattedrale di Rouen?", risposta: "CLAUDE MONET", difficolta: 1 },
    { domanda: "Come si chiama l'arte moderna di creare sculture assemblando oggetti quotidiani?", risposta: "ASSEMBLAGE", difficolta: 1 },
    { domanda: "Chi ha dipinto la Creazione di Adamo sul soffitto della Cappella Sistina?", risposta: "MICHELANGELO BUONARROTI", difficolta: 1 },
    { domanda: "Come viene definita la pittura che ritrae frutta, fiori od oggetti inanimati?", risposta: "NATURA MORTA", difficolta: 1 },
    { domanda: "Come si chiama l'arte di disegnare lettere in modo decorativo?", risposta: "CALLIGRAFIA", difficolta: 1 },
    { domanda: "Chi ha progettato il campanile del Duomo di Firenze?", risposta: "GIOTTO DI BONDONE", difficolta: 1 },
    { domanda: "Quale artista pop art è famoso per i barattoli di zuppa Campbell?", risposta: "ANDY WARHOL", difficolta: 1 },
    { domanda: "In quale città si trova la basilica di San Marco?", risposta: "VENEZIA", difficolta: 1 },
    { domanda: "Chi ha dipinto la Trasfigurazione e la Fornarina?", risposta: "RAFFAELLO SANZIO", difficolta: 1 },
    { domanda: "Come si chiama il rilievo scultoreo leggermente sporgente da una superficie?", risposta: "BASSO RILIEVO", difficolta: 1 },
    { domanda: "Come si chiama il corridoio aereo che collega Palazzo Vecchio a Palazzo Pitti?", risposta: "CORRIDOIO VASARIANO", difficolta: 1 },

    // MEDIE (30)
    { domanda: "Chi ha dipinto La persistenza della memoria con gli orologi molli?", risposta: "SALVADOR DALI", difficolta: 2 },
    { domanda: "Chi ha dipinto Il bacio con foglie d'oro?", risposta: "GUSTAV KLIMT", difficolta: 2 },
    { domanda: "Chi ha realizzato l'opera Fontana con un orinatoio?", risposta: "MARCEL DUCHAMP", difficolta: 2 },
    { domanda: "Come si chiama il movimento artistico di Monet e Renoir?", risposta: "IMPRESSIONISMO", difficolta: 2 },
    { domanda: "Chi ha dipinto L'urlo?", risposta: "EDVARD MUNCH", difficolta: 2 },
    { domanda: "Chi ha dipinto Le signorine di Avignone?", risposta: "PABLO PICASSO", difficolta: 2 },
    { domanda: "Come si chiama il movimento artistico di Picasso con forme geometriche?", risposta: "CUBISMO", difficolta: 2 },
    { domanda: "Chi ha dipinto La ragazza con l'orecchino di perla?", risposta: "JAN VERMEER", difficolta: 2 },
    { domanda: "Chi ha dipinto Il giardino delle delizie?", risposta: "HIERONYMUS BOSCH", difficolta: 2 },
    { domanda: "Come si chiama la tecnica pittorica con punti di colore?", risposta: "PUNTINISMO", difficolta: 2 },
    { domanda: "Chi ha realizzato la Statua della Libertà?", risposta: "FREDERIC BARTOLDI", difficolta: 2 },
    { domanda: "Chi ha dipinto La zattera della Medusa?", risposta: "THEODORE GERICAULT", difficolta: 2 },
    { domanda: "Chi ha dipinto La libertà che guida il popolo?", risposta: "EUGENE DELACROIX", difficolta: 2 },
    { domanda: "Chi ha progettato la cupola di Santa Maria del Fiore?", risposta: "FILIPPO BRUNELLESCHI", difficolta: 2 },
    { domanda: "Chi ha dipinto I girasoli?", risposta: "VINCENT VAN GOGH", difficolta: 2 },
    { domanda: "Come si chiama il movimento artistico italiano del primo Novecento?", risposta: "FUTURISMO", difficolta: 2 },
    { domanda: "Chi ha dipinto La morte di Marat?", risposta: "JACQUES LOUIS DAVID", difficolta: 2 },
    { domanda: "Chi ha progettato l'anfiteatro Flavio detto Colosseo?", risposta: "IMPERATORE VESPASIANO", difficolta: 2 },
    { domanda: "Come si chiama lo stile artistico di Klimt con decorazioni dorate?", risposta: "SECESSIONE VIENNESE", difficolta: 2 },
    { domanda: "Chi ha dipinto La ronda di notte?", risposta: "REMBRANDT", difficolta: 2 },
    { domanda: "Chi ha scolpito il celebre Ratto di Proserpina?", risposta: "GIAN LORENZO BERNINI", difficolta: 2 },
    { domanda: "Chi ha dipinto Il giuramento degli Orazi?", risposta: "JACQUES LOUIS DAVID", difficolta: 2 },
    { domanda: "Chi è l'autore della pala d'altare della Pala Pesaro a Venezia?", risposta: "TIZIANO VECELLIO", difficolta: 2 },
    { domanda: "Come si chiama la tecnica pittorica del Rinascimento di transizione graduale tra toni senza stacchi netti?", risposta: "SFUMATO LEONARDESCO", difficolta: 2 },
    { domanda: "Chi ha affrescato la Cappella degli Scrovegni a Padova?", risposta: "GIOTTO DI BONDONE", difficolta: 2 },
    { domanda: "Chi ha dipinto la pala di Brera con Federico da Montefeltro?", risposta: "PIERO DELLA FRANCESCA", difficolta: 2 },
    { domanda: "Come si chiama il movimento d'avanguardia nato a Zurigo nel 1916 con Tristan Tzara?", risposta: "DADAISMO", difficolta: 2 },
    { domanda: "Chi ha dipinto la Composizione con rosso, giallo e blu?", risposta: "PIET MONDRIAN", difficolta: 2 },
    { domanda: "Chi ha progettato la Chiesa di San Carlo alle Quattro Fontane a Roma?", risposta: "FRANCESCO BORROMINI", difficolta: 2 },
    { domanda: "Chi ha scolpito il Perseo con la testa di Medusa in Piazza della Signoria?", risposta: "BENVENUTO CELLINI", difficolta: 2 },

    // DIFFICILI (20)
    { domanda: "Chi ha dipinto La vocazione di San Matteo?", risposta: "CARAVAGGIO", difficolta: 3 },
    { domanda: "Come si chiama la tecnica di Caravaggio con contrasto forte tra luce e ombra?", risposta: "CHIAROSCURO", difficolta: 3 },
    { domanda: "Chi ha dipinto Las Meninas?", risposta: "DIEGO VELAZQUEZ", difficolta: 3 },
    { domanda: "Come si chiama il movimento artistico di Kandinsky?", risposta: "ASTRATTISMO", difficolta: 3 },
    { domanda: "Chi ha realizzato la Porta del Paradiso a Firenze?", risposta: "LORENZO GHIBERTI", difficolta: 3 },
    { domanda: "Come si chiama lo stile architettonico di Gaudì a Barcellona?", risposta: "MODERNISMO CATALANO", difficolta: 3 },
    { domanda: "Chi ha dipinto Il quarto stato?", risposta: "GIUSEPPE PELLIZZA DA VOLPEDO", difficolta: 3 },
    { domanda: "Chi ha progettato il Padiglione di Barcellona?", risposta: "MIES VAN DER ROHE", difficolta: 3 },
    { domanda: "Come si chiama la tecnica di dipingere con cera e pigmenti a caldo?", risposta: "ENCÀUSTICA", difficolta: 3 },
    { domanda: "Chi ha dipinto la Madonna Sistina?", risposta: "RAFFAELLO SANZIO", difficolta: 3 },
    { domanda: "Come si chiama il movimento artistico americano degli anni Cinquanta di Pollock?", risposta: "ESPRESSIONISMO ASTRATTO", difficolta: 3 },
    { domanda: "Chi ha dipinto Le demoiselles d'Avignon?", risposta: "PABLO PICASSO", difficolta: 3 },
    { domanda: "Come si chiama la tecnica di dipingere su tela con colori a olio?", risposta: "PITTURA A OLIO", difficolta: 3 },
    { domanda: "Chi ha dipinto il celebre Tempio di Salomone nell'affresco dello Sposalizio della Vergine?", risposta: "RAFFAELLO SANZIO", difficolta: 3 },
    { domanda: "Chi ha realizzato la celebre scultura Estasi di Santa Teresa a Roma?", risposta: "GIAN LORENZO BERNINI", difficolta: 3 },
    { domanda: "Quale scultore greco del V secolo a.C. definì il canone delle proporzioni del corpo umano?", risposta: "POLICLETO", difficolta: 3 },
    { domanda: "Chi ha affrescato la Camera degli Sposi nel Castello di San Giorgio a Mantova?", risposta: "ANDREA MANTEGNA", difficolta: 3 },
    { domanda: "Chi ha dipinto il Retablo di Issenheim risalente al XVI secolo?", risposta: "MATTHIAS GRUNEWALD", difficolta: 3 },
    { domanda: "Quale pittore rinascimentale è autore della Tempesta conservata alle Gallerie dell'Accademia?", risposta: "GIORGIONE", difficolta: 3 },
    { domanda: "Chi ha progettato la facciata di Santa Maria Novella a Firenze applicando proporzioni matematiche?", risposta: "LEON BATTISTA ALBERTI", difficolta: 3 }
  ],

  // ==========================================================
  // MUSICA (100)
  // ==========================================================
  "Musica": [
    // FACILI (50)
    { domanda: "Quante note ci sono nella scala musicale?", risposta: "SETTE NOTE", difficolta: 1 },
    { domanda: "Come si chiama lo strumento a tastiera con corde percosse?", risposta: "IL PIANOFORTE", difficolta: 1 },
    { domanda: "Chi ha composto la Quinta Sinfonia?", risposta: "LUDWIG VAN BEETHOVEN", difficolta: 1 },
    { domanda: "Come si chiama l'insieme di musicisti che suonano insieme?", risposta: "L ORCHESTRA", difficolta: 1 },
    { domanda: "Quante corde ha una chitarra classica?", risposta: "SEI CORDE", difficolta: 1 },
    { domanda: "Chi ha composto Le Quattro Stagioni?", risposta: "ANTONIO VIVALDI", difficolta: 1 },
    { domanda: "Quale strumento ha ottantotto tasti?", risposta: "IL PIANOFORTE", difficolta: 1 },
    { domanda: "Chi ha composto La Traviata?", risposta: "GIUSEPPE VERDI", difficolta: 1 },
    { domanda: "Come si chiama la velocità di esecuzione di un brano?", risposta: "IL TEMPO", difficolta: 1 },
    { domanda: "Quale strumento suona un violinista?", risposta: "IL VIOLINO", difficolta: 1 },
    { domanda: "Chi ha composto Il Flauto Magico?", risposta: "WOLFGANG AMADEUS MOZART", difficolta: 1 },
    { domanda: "Chi ha composto la Tosca?", risposta: "GIACOMO PUCCINI", difficolta: 1 },
    { domanda: "Come si chiama il segno musicale che indica la pausa?", risposta: "LA PAUSA", difficolta: 1 },
    { domanda: "Qual è lo strumento a fiato più piccolo dell'orchestra?", risposta: "L OTTAVINO", difficolta: 1 },
    { domanda: "Come si chiama il gruppo di musicisti che suona musica jazz?", risposta: "JAZZ BAND", difficolta: 1 },
    { domanda: "Come si chiama l'insieme di cinque musicisti?", risposta: "QUINTETTO", difficolta: 1 },
    { domanda: "Qual è il nome del musicista che dirige l'orchestra?", risposta: "DIRETTORE D ORCHESTRA", difficolta: 1 },
    { domanda: "Come si chiama il brano per voci senza strumenti?", risposta: "A CAPPELLA", difficolta: 1 },
    { domanda: "Come si chiama lo strumento a percussione con piatti di metallo metallici su battente?", risposta: "I PIATTI", difficolta: 1 },
    { domanda: "Quale strumento a tastiera e aria si trova nelle grandi chiese?", risposta: "L ORGANO", difficolta: 1 },
    { domanda: "Chi ha composto la Turandot?", risposta: "GIACOMO PUCCINI", difficolta: 1 },
    { domanda: "Chi ha composto l me celebre opera Aida?", risposta: "GIUSEPPE VERDI", difficolta: 1 },
    { domanda: "Chi ha composto la Carmen?", risposta: "GEORGES BIZET", difficolta: 1 },
    { domanda: "Come si chiama lo strumento a fiato in legno con ancia doppia?", risposta: "L OBOE", difficolta: 1 },
    { domanda: "Come si chiama lo strumento a corde sfregate più grave del violino ma più acuto del violoncello?", risposta: "LA VIOLA", difficolta: 1 },
    { domanda: "Come si chiama lo strumento a fiato in metallo dorato usato nel jazz?", risposta: "SASSOFONO", difficolta: 1 },
    { domanda: "Come si chiama il dispositivo che scandisce il tempo costante in bpm per lo studio della musica?", risposta: "METRONOMO", difficolta: 1 },
    { domanda: "Come si chiama lo spartito dove si scrivono le note musicali?", risposta: "PENTAGRAMMA", difficolta: 1 },
    { domanda: "Come si chiama la chiave musicale più usata per gli strumenti acuti?", risposta: "CHIAVE DI VIOLINO", difficolta: 1 },
    { domanda: "Come si chiama la chiave usata per le note gravi?", risposta: "CHIAVE DI BASSO", difficolta: 1 },
    { domanda: "Come si chiama il cantante maschile dalla voce più acuta?", risposta: "IL TENORE", difficolta: 1 },
    { domanda: "Come si chiama il cantante maschile dalla voce più grave?", risposta: "IL BASSO", difficolta: 1 },
    { domanda: "Come si chiama la cantante femminile dalla voce più acuta?", risposta: "IL SOPRANO", difficolta: 1 },
    { domanda: "Come si chiama la cantante femminile dalla voce più grave?", risposta: "IL CONTRALTO", difficolta: 1 },
    { domanda: "Qual è lo strumento musicale nazionale dell'Irlanda?", risposta: "L ARPA", difficolta: 1 },
    { domanda: "Quale strumento a fiato scozzese ha una sacca d'aria e varie canne?", risposta: "CORNAMUSA", difficolta: 1 },
    { domanda: "Come si chiama l'insieme di tre note suonate contemporaneamente?", risposta: "ACCORDO", difficolta: 1 },
    { domanda: "Come si chiama lo strumento a percussione costituito da grandi tamburi a intonazione determinata?", risposta: "I TIMPANI", difficolta: 1 },
    { domanda: "Chi era conosciuto come il Re del Rock and Roll?", risposta: "ELVIS PRESLEY", difficolta: 1 },
    { domanda: "Chi era conosciuto come il Re del Pop?", risposta: "MICHAEL JACKSON", difficolta: 1 },
    { domanda: "Quale celebre gruppo britannico incise l'album Abbey Road?", risposta: "THE BEATLES", difficolta: 1 },
    { domanda: "Quale celebre gruppo rock britannico era guidato da Freddie Mercury?", risposta: "QUEEN", difficolta: 1 },
    { domanda: "Come si chiama il grande festival della canzone italiana?", risposta: "FESTIVAL DI SANREMO", difficolta: 1 },
    { domanda: "Come si chiama la battuta di riposo in cui si tace?", risposta: "LA PAUSA", difficolta: 1 },
    { domanda: "Come si chiama la distanza di altezza tra due note musicali?", risposta: "INTERVALLO", difficolta: 1 },
    { domanda: "Come si chiama il simbolo che alza la nota di un semitono?", risposta: "IL DIESIS", difficolta: 1 },
    { domanda: "Come si chiama il simbolo che abbassa la nota di un semitono?", risposta: "IL BEMOLLE", difficolta: 1 },
    { domanda: "Quale strumento a fiato in legno ha la forma di un tubo diritto dritto con chiavi?", risposta: "CLARINETTO", difficolta: 1 },
    { domanda: "Quale strumento a percussione è fatto di barrette di legno percosse con mazzuole?", risposta: "XILOFONO", difficolta: 1 },
    { domanda: "Quale strumento a tastiera fu l'antenato diretto del pianoforte nel Barocco?", risposta: "CLAVICEMBALO", difficolta: 1 },

    // MEDIE (30)
    { domanda: "Chi ha composto la Nona Sinfonia con l'Inno alla Gioia?", risposta: "LUDWIG VAN BEETHOVEN", difficolta: 2 },
    { domanda: "Chi ha composto Il Barbiere di Siviglia?", risposta: "GIOACHINO ROSSINI", difficolta: 2 },
    { domanda: "Chi ha composto la Sinfonia Jupiter?", risposta: "WOLFGANG AMADEUS MOZART", difficolta: 2 },
    { domanda: "Come si chiama la scala musicale con cinque note?", risposta: "SCALA PENTATONICA", difficolta: 2 },
    { domanda: "Chi ha composto Pierino e il lupo?", risposta: "SERGEJ PROKOFIEV", difficolta: 2 },
    { domanda: "Come si chiama il gruppo di quattro strumenti ad arco?", risposta: "QUARTETTO D ARCHI", difficolta: 2 },
    { domanda: "Chi ha composto La sagra della primavera?", risposta: "IGOR STRAVINSKIJ", difficolta: 2 },
    { domanda: "Come si chiama il brano per strumento solista e orchestra?", risposta: "CONCERTO", difficolta: 2 },
    { domanda: "Chi ha composto il Requiem?", risposta: "WOLFGANG AMADEUS MOZART", difficolta: 2 },
    { domanda: "Come si chiama il genere musicale nato in America da musicisti afroamericani?", risposta: "IL JAZZ", difficolta: 2 },
    { domanda: "Chi ha composto la Rapsodia in blu?", risposta: "GEORGE GERSHWIN", difficolta: 2 },
    { domanda: "Chi ha composto La bohème?", risposta: "GIACOMO PUCCINI", difficolta: 2 },
    { domanda: "Come si chiama il genere musicale italiano con voci soliste?", risposta: "OPERA LIRICA", difficolta: 2 },
    { domanda: "Chi ha composto il Nabucco?", risposta: "GIUSEPPE VERDI", difficolta: 2 },
    { domanda: "Qual è lo strumento a corde più grande dell'orchestra?", risposta: "IL CONTRABBASSO", difficolta: 2 },
    { domanda: "Chi ha composto le Suite per violoncello?", risposta: "JOHANN SEBASTIAN BACH", difficolta: 2 },
    { domanda: "Chi ha composto Madame Butterfly?", risposta: "GIACOMO PUCCINI", difficolta: 2 },
    { domanda: "Come si chiama il brano musicale eseguito da un solo strumento?", risposta: "L ASSOLO", difficolta: 2 },
    { domanda: "Chi ha composto la Sinfonia dei Mille?", risposta: "GUSTAV MAHLER", difficolta: 2 },
    { domanda: "Come si chiama la forma musicale con tema e variazioni?", risposta: "TEMA E VARIAZIONI", difficolta: 2 },
    { domanda: "Chi ha composto la famosissima Marcia Radetzky?", risposta: "JOHANN STRAUSS PADRE", difficolta: 2 },
    { domanda: "Chi ha composto il balletto Lo Schiaccianoci?", risposta: "PIOTR ILIC CIAIKOVSKIJ", difficolta: 2 },
    { domanda: "Chi ha composto il balletto Il lago dei cigni?", risposta: "PIOTR ILIC CIAIKOVSKIJ", difficolta: 2 },
    { domanda: "Chi ha composto le famose Danze Ungheresi?", risposta: "JOHANNES BRAHMS", difficolta: 2 },
    { domanda: "Chi ha composto i Concerti Brandeburghesi?", risposta: "JOHANN SEBASTIAN BACH", difficolta: 2 },
    { domanda: "Chi ha composto l'opera Guglielmo Tell?", risposta: "GIOACHINO ROSSINI", difficolta: 2 },
    { domanda: "Come si chiama la scala musicale composta da dodici semitoni?", risposta: "SCALA CROMATICA", difficolta: 2 },
    { domanda: "Chi ha composto l'opera Don Giovanni?", risposta: "WOLFGANG AMADEUS MOZART", difficolta: 2 },
    { domanda: "Chi ha composto l'opera Le nozze di Figaro?", risposta: "WOLFGANG AMADEUS MOZART", difficolta: 2 },
    { domanda: "Chi ha composto il ciclo di poemi sinfonici Mia Patria?", risposta: "BEDRICH SMETANA", difficolta: 2 },

    // DIFFICILI (20)
    { domanda: "Chi ha composto L'anello del Nibelungo?", risposta: "RICHARD WAGNER", difficolta: 3 },
    { domanda: "Come si chiama il sistema di notazione musicale di Guido d'Arezzo?", risposta: "SOLFEGGIO", difficolta: 3 },
    { domanda: "Chi ha composto Il clavicembalo ben temperato?", risposta: "JOHANN SEBASTIAN BACH", difficolta: 3 },
    { domanda: "Come si chiama la tecnica di comporre con dodici suoni?", risposta: "DODECAFONIA", difficolta: 3 },
    { domanda: "Chi ha composto la Sinfonia Fantastica?", risposta: "HECTOR BERLIOZ", difficolta: 3 },
    { domanda: "Come si chiama l'opera di Berg che mescola canto e parlato?", risposta: "WOZZECK", difficolta: 3 },
    { domanda: "Chi ha composto La creazione?", risposta: "FRANZ JOSEPH HAYDN", difficolta: 3 },
    { domanda: "Come si chiama il movimento musicale del Novecento di Stockhausen?", risposta: "MUSICA ELETTRONICA", difficolta: 3 },
    { domanda: "Chi ha composto il Bolero?", risposta: "MAURICE RAVEL", difficolta: 3 },
    { domanda: "Chi ha composto la Passione secondo Matteo?", risposta: "JOHANN SEBASTIAN BACH", difficolta: 3 },
    { domanda: "Come si chiama il movimento musicale impressionista di Debussy?", risposta: "IMPRESSIONISMO MUSICALE", difficolta: 3 },
    { domanda: "Chi ha composto la Sinfonia Patetica?", risposta: "PIOTR ILIC CIAIKOVSKIJ", difficolta: 3 },
    { domanda: "Come si chiama il brano per orchestra in più movimenti?", risposta: "SINFONIA", difficolta: 3 },
    { domanda: "Chi ha composto l'opera Tristan und Isolde?", risposta: "RICHARD WAGNER", difficolta: 3 },
    { domanda: "Chi è l'autore della celebre opera Pelléas et Mélisande?", risposta: "CLAUDE DEBUSSY", difficolta: 3 },
    { domanda: "Chi ha composto la Sinfonia delle Alpi?", risposta: "RICHARD STRAUSS", difficolta: 3 },
    { domanda: "Quale compositore ungherese raccolse canti popolari e scrisse il Mikrokosmos?", risposta: "BELA BARTOK", difficolta: 3 },
    { domanda: "Chi ha composto il poema sinfonico I pini di Roma?", risposta: "OTTORINO RESPIGHI", difficolta: 3 },
    { domanda: "Chi ha composto la Nona Sinfonia detta Dal Nuovo Mondo?", risposta: "ANTONIN DVORAK", difficolta: 3 },
    { domanda: "Quale compositore russo ha scritto l'opera Boris Godunov?", risposta: "MODEST MUSORGSKIJ", difficolta: 3 }
  ],

  // ==========================================================
  // TECNOLOGIA (100)
  // ==========================================================
  "Tecnologia": [
    // FACILI (50)
    { domanda: "Qual è l'unità di misura della potenza elettrica?", risposta: "IL WATT", difficolta: 1 },
    { domanda: "Come si chiama il dispositivo che trasforma energia elettrica in luce?", risposta: "LA LAMPADINA", difficolta: 1 },
    { domanda: "Quale dispositivo permette di navigare in internet?", risposta: "IL MODEM", difficolta: 1 },
    { domanda: "Come si chiama il programma per scrivere testi?", risposta: "MICROSOFT WORD", difficolta: 1 },
    { domanda: "Qual è il componente che elabora i dati nel computer?", risposta: "IL PROCESSORE", difficolta: 1 },
    { domanda: "Come si chiama il piccolo dispositivo per ascoltare musica?", risposta: "L AURICOLARE", difficolta: 1 },
    { domanda: "Come si chiama il sistema operativo di Microsoft?", risposta: "WINDOWS", difficolta: 1 },
    { domanda: "Qual è il dispositivo per stampare documenti?", risposta: "LA STAMPANTE", difficolta: 1 },
    { domanda: "Come si chiama il piccolo dispositivo che memorizza dati?", risposta: "CHIAVETTA USB", difficolta: 1 },
    { domanda: "Quale strumento si usa per misurare la temperatura?", risposta: "IL TERMOMETRO", difficolta: 1 },
    { domanda: "Come si chiama il sistema operativo di Apple per computer?", risposta: "MACOS", difficolta: 1 },
    { domanda: "Quale dispositivo permette di scattare fotografie digitali?", risposta: "LA FOTOCAMERA", difficolta: 1 },
    { domanda: "Come si chiama la memoria temporanea del computer?", risposta: "MEMORIA RAM", difficolta: 1 },
    { domanda: "Qual è l'unità di misura della corrente elettrica?", risposta: "L AMPERE", difficolta: 1 },
    { domanda: "Come si chiama il dispositivo per navigare in internet senza fili?", risposta: "ROUTER WIFI", difficolta: 1 },
    { domanda: "Quale strumento si usa per misurare la pressione?", risposta: "IL BAROMETRO", difficolta: 1 },
    { domanda: "Come si chiama il dispositivo per digitare testi?", risposta: "LA TASTIERA", difficolta: 1 },
    { domanda: "Qual è il dispositivo che mostra le immagini sullo schermo?", risposta: "IL MONITOR", difficolta: 1 },
    { domanda: "Come si chiama il dispositivo per muovere il puntatore sullo schermo?", risposta: "IL MOUSE", difficolta: 1 },
    { domanda: "Come si chiama la batteria ricaricabile usata nei telefoni moderni?", risposta: "BATTERIA AL LITIO", difficolta: 1 },
    { domanda: "Come si chiama la presa elettrica usata per ricaricare gli smartphone moderni?", risposta: "PORTA USB TYPE C", difficolta: 1 },
    { domanda: "Come si chiama lo schermo tattile dei moderni telefoni?", risposta: "TOUCH SCREEN", difficolta: 1 },
    { domanda: "Qual è l'unità di misura della tensione elettrica?", risposta: "IL VOLT", difficolta: 1 },
    { domanda: "Come si chiama il supporto ottico circolare per film in alta definizione?", risposta: "DISCO BLU RAY", difficolta: 1 },
    { domanda: "Come si chiama il dispositivo che converte l'energia solare in elettricità?", risposta: "PANNELLO FOTOVOLTAICO", difficolta: 1 },
    { domanda: "Quale strumento elettronico si usa per fare calcoli matematici?", risposta: "CALCOLATRICE", difficolta: 1 },
    { domanda: "Come si chiama la scheda con i chip inserita nello smartphone dal gestore telefonico?", risposta: "SCHEDA SIM", difficolta: 1 },
    { domanda: "Come si chiama la rete di satelliti usata per la navigazione stradale?", risposta: "SISTEMA GPS", difficolta: 1 },
    { domanda: "Come si chiama il telecomando per cambiare canale alla televisione?", risposta: "TELECOMANDO", difficolta: 1 },
    { domanda: "Come si chiama il dispositivo acustico che diffonde la musica in una stanza?", risposta: "ALTOPARLANTE", difficolta: 1 },
    { domanda: "Come si chiama l'apparecchio domestico per conservare i cibi al freddo?", risposta: "FRIGORIFERO", difficolta: 1 },
    { domanda: "Come si chiama l'apparecchio domestico per lavare i panni?", risposta: "LAVATRICE", difficolta: 1 },
    { domanda: "Come si chiama l'apparecchio domestico per lavare i piatti?", risposta: "LAVASTOVIGLIE", difficolta: 1 },
    { domanda: "Come si chiama l'apparecchio domestico per cuocere i cibi con microonde?", risposta: "FORNO A MICROONDE", difficolta: 1 },
    { domanda: "Come si chiama il dispositivo per aspirare la polvere dai pavimenti?", risposta: "ASPIRAPOLVERE", difficolta: 1 },
    { domanda: "Come si chiama il dispositivo volante radiocomandato con eliche?", risposta: "IL DRONE", difficolta: 1 },
    { domanda: "Come si chiama il veicolo a due ruote alimentato da un motore elettrico?", risposta: "MONOPATTINO ELETTRICO", difficolta: 1 },
    { domanda: "Come si chiama la memoria interna a stato solido dei PC veloci?", risposta: "DISCO SSD", difficolta: 1 },
    { domanda: "Come si chiama il proiettore visivo che proietta sul muro?", risposta: "VIDEOPROIETTORE", difficolta: 1 },
    { domanda: "Quale formato di compressione audio è diventato famoso negli anni novanta?", risposta: "FORMATO MP3", difficolta: 1 },
    { domanda: "Quale formato di compressione video è tra i più diffusi per lo streaming?", risposta: "FORMATO MP4", difficolta: 1 },
    { domanda: "Come si chiama la tecnologia per trasmettere immagini dal telefono al televisore?", risposta: "SCREEN MIRRORING", difficolta: 1 },
    { domanda: "Come si chiama l'interruttore automatico di sicurezza del quadro elettrico di casa?", risposta: "SALVAVITA", difficolta: 1 },
    { domanda: "Come si chiama l'apparecchio che raffredda l'aria in estate nelle case?", risposta: "CONDIZIONATORE", difficolta: 1 },
    { domanda: "Quale strumento si usa per saldare componenti elettronici?", risposta: "SALDATORE AD STAGNO", difficolta: 1 },
    { domanda: "Come si chiama il dispositivo che trasforma la luce solare in acqua calda?", risposta: "PANNELLO SOLARE TERMICO", difficolta: 1 },
    { domanda: "Come si chiama il dispositivo che digitalizza fogli cartacei?", risposta: "LO SCANNER", difficolta: 1 },
    { domanda: "Come si chiama il lettore di codici a barre al supermercato?", risposta: "LETTORE OTTICO", difficolta: 1 },
    { domanda: "Come si chiama il piccolo microchip senza contatto per i pagamenti bancomat?", risposta: "CHIP CONTACTLESS", difficolta: 1 },
    { domanda: "Come si chiama l'orologio digitale collegato allo smartphone?", risposta: "SMARTWATCH", difficolta: 1 },

    // MEDIE (30)
    { domanda: "Come si chiama il protocollo per la posta elettronica in uscita?", risposta: "PROTOCOLLO SMTP", difficolta: 2 },
    { domanda: "Qual è l'unità di misura della capacità di un hard disk?", risposta: "IL TERABYTE", difficolta: 2 },
    { domanda: "Come si chiama la scheda che gestisce i suoni del computer?", risposta: "SCHEDA AUDIO", difficolta: 2 },
    { domanda: "Quale tecnologia permette di trasmettere dati via radio a corto raggio?", risposta: "BLUETOOTH", difficolta: 2 },
    { domanda: "Come si chiama il linguaggio di programmazione per il web?", risposta: "JAVASCRIPT", difficolta: 2 },
    { domanda: "Quale dispositivo converte corrente alternata in continua?", risposta: "L ALIMENTATORE", difficolta: 2 },
    { domanda: "Come si chiama la scheda che gestisce i video del computer?", risposta: "SCHEDA VIDEO", difficolta: 2 },
    { domanda: "Quale protocollo si usa per i siti web sicuri?", risposta: "PROTOCOLLO HTTPS", difficolta: 2 },
    { domanda: "Come si chiama la scheda madre del computer?", risposta: "MOTHERBOARD", difficolta: 2 },
    { domanda: "Quale dispositivo permette di proiettare immagini su uno schermo?", risposta: "IL PROIETTORE", difficolta: 2 },
    { domanda: "Come si chiama il sistema di stampa tridimensionale con filamenti plastici?", risposta: "STAMPA 3D FDM", difficolta: 2 },
    { domanda: "Quale unità di misura indica la frequenza del processore?", risposta: "IL GIGAHERTZ", difficolta: 2 },
    { domanda: "Come si chiama l'insieme dei protocolli di internet?", risposta: "PROTOCOLLI TCP IP", difficolta: 2 },
    { domanda: "Quale dispositivo permette di misurare la velocità del vento?", risposta: "L ANEMOMETRO", difficolta: 2 },
    { domanda: "Come si chiama il sistema per stampare documenti a distanza in rete?", risposta: "STAMPA IN RETE", difficolta: 2 },
    { domanda: "Quale tecnologia permette di ricaricare dispositivi senza fili?", risposta: "INDUZIONE ELETTROMAGNETICA", difficolta: 2 },
    { domanda: "Come si chiama il componente che dissipa il calore del processore?", risposta: "IL DISSIPATORE", difficolta: 2 },
    { domanda: "Qual è l'unità di misura della resistenza elettrica?", risposta: "L OHM", difficolta: 2 },
    { domanda: "Quale strumento si usa per misurare la corrente elettrica?", risposta: "L AMPEROMETRO", difficolta: 2 },
    { domanda: "Come si chiama il connettore universale per collegare dispositivi?", risposta: "PORTA USB", difficolta: 2 },
    { domanda: "Qual è l'unità di misura della capacità elettrica dei condensatori?", risposta: "IL FARAD", difficolta: 2 },
    { domanda: "Qual è l me strumento usato per visualizzare forme d'onda elettriche su uno schermo?", risposta: "OSCILLOSCOPIO", difficolta: 2 },
    { domanda: "Come si chiama la tecnologia a fibra ottica che arriva direttamente nelle case?", risposta: "FIBRA FTTH", difficolta: 2 },
    { domanda: "Come si chiama il componente elettronico a tre terminali che amplifica i segnali?", risposta: "IL TRANSISTOR", difficolta: 2 },
    { domanda: "Come si chiama il componente elettronico che fa passare la corrente in una sola direzione?", risposta: "IL DIODO", difficolta: 2 },
    { domanda: "Come si chiama la tecnologia radio per la lettura di targhette senza contatto?", risposta: "TECNOLOGIA RFID", difficolta: 2 },
    { domanda: "Come si chiama il componente raddrizzatore formato da quattro diodi a ponte?", risposta: "PONTE DI GRAETZ", difficolta: 2 },
    { domanda: "Quale lega metallica è usata principalmente per le saldature dei circuiti stampati?", risposta: "LEGA DI STAGNO", difficolta: 2 },
    { domanda: "Come si chiama il gruppo di continuità che fornisce energia al PC in caso di blackout?", risposta: "GRUPPO DI CONTINUITA", difficolta: 2 },
    { domanda: "Come si chiama la tecnologia di trasmissione mobile di quinta generazione?", risposta: "RETE CINQUE G", difficolta: 2 },

    // DIFFICILI (20)
    { domanda: "Come si chiama il protocollo per la crittografia delle comunicazioni web?", risposta: "PROTOCOLLO TLS", difficolta: 3 },
    { domanda: "Quale tecnologia permette la realtà aumentata sui telefonini?", risposta: "REALTA AUMENTATA", difficolta: 3 },
    { domanda: "Come si chiama il processo di fusione dei metalli ad alta temperatura?", risposta: "LA FUSIONE", difficolta: 3 },
    { domanda: "Quale tecnologia permette di collegare dispositivi in rete locale?", risposta: "RETE LAN", difficolta: 3 },
    { domanda: "Come si chiama la tecnica per creare circuiti stampati?", risposta: "CIRCUITO STAMPATO", difficolta: 3 },
    { domanda: "Quale protocollo si usa per trasferire file in rete?", risposta: "PROTOCOLLO FTP", difficolta: 3 },
    { domanda: "Come si chiama il processo di produzione additiva di oggetti?", risposta: "STAMPA TRIDIMENSIONALE", difficolta: 3 },
    { domanda: "Quale tecnologia permette di far volare droni?", risposta: "ELICOTTERO A QUATTRO ELICHE", difficolta: 3 },
    { domanda: "Come si chiama il sistema per gestire grandi quantità di dati?", risposta: "BIG DATA", difficolta: 3 },
    { domanda: "Quale tecnologia permette di ricavare energia dal sole?", risposta: "PANNELLO FOTOVOLTAICO", difficolta: 3 },
    { domanda: "Come si chiama il linguaggio di programmazione per l'intelligenza artificiale?", risposta: "PYTHON", difficolta: 3 },
    { domanda: "Quale tecnologia consente la guida autonoma delle auto?", risposta: "SENSORI LIDAR", difficolta: 3 },
    { domanda: "Come si chiama il processo di ricarica rapida delle batterie al litio?", risposta: "RICARICA RAPIDA", difficolta: 3 },
    { domanda: "Come si chiama l'architettura dei microprocessori a set di istruzioni ridotto?", risposta: "ARCHITETTURA RISC", difficolta: 3 },
    { domanda: "Come si chiama il fenomeno di degradazione delle giunzioni a semiconduttore per elettromigrazione?", risposta: "ELETTROMIGRAZIONE", difficolta: 3 },
    { domanda: "Quale tipo di memoria ad altissima velocità si trova integrata direttamente dentro la CPU?", risposta: "MEMORIA CACHE", difficolta: 3 },
    { domanda: "Come si chiama il protocollo industriale di comunicazione seriale bus ampiamente usato nei veicoli?", risposta: "CAN BUS", difficolta: 3 },
    { domanda: "Come si chiama il materiale bidimensionale composto da un singolo strato di atomi di carbonio?", risposta: "IL GRAFENE", difficolta: 3 },
    { domanda: "Come si chiama il processo chimico di incisione dei wafer di silicio nella produzione di chip?", risposta: "FOTOLITOGRAFIA", difficolta: 3 },
    { domanda: "Come si chiama la tecnologia di visualizzazione a diodi organici ad emissione di luce?", risposta: "SCHERMO OLED", difficolta: 3 }
  ],

  // ==========================================================
  // FILOSOFIA (100)
  // ==========================================================
  "Filosofia": [
    // FACILI (50)
    { domanda: "Chi ha detto Conosci te stesso?", risposta: "SOCRATE", difficolta: 1 },
    { domanda: "Chi ha scritto La Repubblica?", risposta: "PLATONE", difficolta: 1 },
    { domanda: "Chi è considerato il padre della filosofia occidentale?", risposta: "SOCRATE", difficolta: 1 },
    { domanda: "Chi ha detto Penso dunque sono?", risposta: "RENATO CARTESIO", difficolta: 1 },
    { domanda: "Chi ha scritto l'Etica?", risposta: "BARUCH SPINOZA", difficolta: 1 },
    { domanda: "Chi ha scritto il trattato politico Il Principe?", risposta: "NICCOLO MACHIAVELLI", difficolta: 1 },
    { domanda: "Chi ha fondato la scuola stoica?", risposta: "ZENONE DI CIZIO", difficolta: 1 },
    { domanda: "Chi ha detto L'uomo è un animale politico?", risposta: "ARISTOTELE", difficolta: 1 },
    { domanda: "Quale filosofo greco ha fondato il Liceo?", risposta: "ARISTOTELE", difficolta: 1 },
    { domanda: "Chi ha scritto il Contratto Sociale?", risposta: "JEAN JACQUES ROUSSEAU", difficolta: 1 },
    { domanda: "Chi ha scritto Così parlò Zarathustra?", risposta: "FRIEDRICH NIETZSCHE", difficolta: 1 },
    { domanda: "Chi ha fondato l'Accademia di Atene?", risposta: "PLATONE", difficolta: 1 },
    { domanda: "Chi ha scritto Il mondo come volontà e rappresentazione?", risposta: "ARTHUR SCHOPENHAUER", difficolta: 1 },
    { domanda: "Chi ha detto Dio è morto?", risposta: "FRIEDRICH NIETZSCHE", difficolta: 1 },
    { domanda: "Chi ha scritto il Leviatano?", risposta: "THOMAS HOBBES", difficolta: 1 },
    { domanda: "Chi è l'autore della Fenomenologia dello Spirito?", risposta: "GEORG WILHELM HEGEL", difficolta: 1 },
    { domanda: "Chi ha scritto il Manifesto del Partito Comunista?", risposta: "KARL MARX", difficolta: 1 },
    { domanda: "Chi ha scritto il Discorso sul metodo?", risposta: "RENATO CARTESIO", difficolta: 1 },
    { domanda: "Chi è il filosofo greco famoso per la teoria dell'atomo?", risposta: "DEMOCRITO", difficolta: 1 },
    { domanda: "Chi è il filosofo greco del Panta Rei tutto scorre?", risposta: "ERACLITO", difficolta: 1 },
    { domanda: "Chi è il filosofo dell'Essere è e non può non essere?", risposta: "PARMENIDE", difficolta: 1 },
    { domanda: "Chi è il filosofo del giardino e del piacere moderato?", risposta: "EPICURO", difficolta: 1 },
    { domanda: "Quale imperatore romano fu anche un celebre filosofo stoico?", risposta: "MARCO AURELIO", difficolta: 1 },
    { domanda: "Chi scrisse la Summa Theologiae nel Medioevo?", risposta: "TOMMASO D AQUINO", difficolta: 1 },
    { domanda: "Chi scrisse La città di Dio?", risposta: "SANT AGOSTINO", difficolta: 1 },
    { domanda: "Chi ha scritto l'Elogio della follia?", risposta: "ERASMO DA ROTTERDAM", difficolta: 1 },
    { domanda: "Quale filosofo illuminista scrisse il Candido?", risposta: "VOLTAIRE", difficolta: 1 },
    { domanda: "Chi ha scritto il saggio Sull'utilitarismo?", risposta: "JOHN STUART MILL", difficolta: 1 },
    { domanda: "Chi ha fondato il Positivismo nel Sette-Ottocento?", risposta: "AUGUSTE COMTE", difficolta: 1 },
    { domanda: "Chi ha scritto Il Capitale?", risposta: "KARL MARX", difficolta: 1 },
    { domanda: "Chi ha scritto L'essere e il nulla?", risposta: "JEAN PAUL SARTRE", difficolta: 1 },
    { domanda: "Quale filosofa scrisse Il secondo sesso?", risposta: "SIMONE DE BEAUVOIR", difficolta: 1 },
    { domanda: "Chi ha scritto La banalità del male su Eichmann a Gerusalemme?", risposta: "HANNAH ARENDT", difficolta: 1 },
    { domanda: "Chi è il filosofo della maieutica e del dubbio?", risposta: "SOCRATE", difficolta: 1 },
    { domanda: "Quale filosofo presocratico fondò una famosa confraternita a Crotone?", risposta: "PITAGORA", difficolta: 1 },
    { domanda: "Chi scrisse la Nuova Atlantide?", risposta: "FRANCESCO BACONE", difficolta: 1 },
    { domanda: "Chi ha scritto i Pensieri sulla religione e la filosofia?", risposta: "BLAISE PASCAL", difficolta: 1 },
    { domanda: "Quale filosofo italiano bruciato sul rogo teorizzò gli infiniti mondi?", risposta: "GIORDANO BRUNO", difficolta: 1 },
    { domanda: "Chi scrisse la Scienza Nuova nel Settecento?", risposta: "GIAMBATTISTA VICO", difficolta: 1 },
    { domanda: "Chi scrisse Dei delitti e delle pene contro la pena di morte?", risposta: "CESARE BECCARIA", difficolta: 1 },
    { domanda: "Chi è il filosofo dell'imperativo categorico?", risposta: "IMMANUEL KANT", difficolta: 2 },
    { domanda: "Quale filosofo idealista elaborò la tesi, antitesi e sintesi?", risposta: "GEORG WILHELM HEGEL", difficolta: 1 },
    { domanda: "Chi scrisse Aut-Aut e Diario di un seduttore?", risposta: "SOREN KIERKEGAARD", difficolta: 1 },
    { domanda: "Chi scrisse la Nausea?", risposta: "JEAN PAUL SARTRE", difficolta: 1 },
    { domanda: "Quale corrente filosofica mette l'esistenza prima dell'essenza?", risposta: "ESISTENZIALISMO", difficolta: 1 },
    { domanda: "Quale corrente filosofica mette l'esperienza dei sensi alla base della conoscenza?", risposta: "EMPIRISMO", difficolta: 1 },
    { domanda: "Quale corrente filosofica si basa sulla ragione come fonte di verità?", risposta: "RAZIONALISMO", difficolta: 1 },
    { domanda: "Come si chiama l'arte socratica di far partorire le idee?", risposta: "LA MAIEUTICA", difficolta: 1 },
    { domanda: "Come si chiama la scuola filosofica fondata da Epicuro ad Atene?", risposta: "IL GIARDINO", difficolta: 1 },
    { domanda: "Chi fu il maestro di Alessandro Magno ad Atene?", risposta: "ARISTOTELE", difficolta: 1 },

    // MEDIE (30)
    { domanda: "Chi ha scritto la Critica della ragion pura?", risposta: "IMMANUEL KANT", difficolta: 2 },
    { domanda: "Chi ha scritto l'Etica Nicomachea?", risposta: "ARISTOTELE", difficolta: 2 },
    { domanda: "Chi ha fondato la scuola pitagorica?", risposta: "PITAGORA", difficolta: 2 },
    { domanda: "Chi ha elaborato la teoria delle idee?", risposta: "PLATONE", difficolta: 2 },
    { domanda: "Chi ha scritto il Tractatus logico-philosophicus?", risposta: "LUDWIG WITTGENSTEIN", difficolta: 2 },
    { domanda: "Chi ha scritto la Critica della ragion pratica?", risposta: "IMMANUEL KANT", difficolta: 2 },
    { domanda: "Chi è l'autore di Essere e tempo?", risposta: "MARTIN HEIDEGGER", difficolta: 2 },
    { domanda: "Chi ha scritto la Lettera sulla tolleranza?", risposta: "JOHN LOCKE", difficolta: 2 },
    { domanda: "Chi ha fondato l'esistenzialismo cristiano?", risposta: "SOREN KIERKEGAARD", difficolta: 2 },
    { domanda: "Chi ha elaborato la teoria dell'imperativo categorico?", risposta: "IMMANUEL KANT", difficolta: 2 },
    { domanda: "Chi ha scritto il Saggio sull'intelletto umano?", risposta: "JOHN LOCKE", difficolta: 2 },
    { domanda: "Chi ha scritto La gaia scienza?", risposta: "FRIEDRICH NIETZSCHE", difficolta: 2 },
    { domanda: "Chi ha elaborato il concetto di plusvalore?", risposta: "KARL MARX", difficolta: 2 },
    { domanda: "Chi ha scritto il Fedone?", risposta: "PLATONE", difficolta: 2 },
    { domanda: "Chi ha elaborato la dottrina delle monadi?", risposta: "GOTTFRIED LEIBNIZ", difficolta: 2 },
    { domanda: "Chi ha scritto la Metafisica?", risposta: "ARISTOTELE", difficolta: 2 },
    { domanda: "Chi ha elaborato la teoria dei quattro stadi della conoscenza?", risposta: "JEAN PIAGET", difficolta: 2 },
    { domanda: "Chi ha scritto l'Etica dimostrata secondo l'ordine geometrico?", risposta: "BARUCH SPINOZA", difficolta: 2 },
    { domanda: "Chi ha elaborato il concetto di a priori e a posteriori?", risposta: "IMMANUEL KANT", difficolta: 2 },
    { domanda: "Chi ha scritto il Parmenide?", risposta: "PLATONE", difficolta: 2 },
    { domanda: "Chi ha scritto la Guida dei perplessi nel Medioevo ebraico?", risposta: "MAIMONIDE", difficolta: 2 },
    { domanda: "Chi ha scritto il trattato Sulla quadruplice radice del principio di ragion sufficiente?", risposta: "ARTHUR SCHOPENHAUER", difficolta: 2 },
    { domanda: "Chi scrisse le Ricerche filosofiche pubblicate postume?", risposta: "LUDWIG WITTGENSTEIN", difficolta: 2 },
    { domanda: "Chi è l'autore dell'opera La struttura delle rivoluzioni scientifiche?", risposta: "THOMAS KUHN", difficolta: 2 },
    { domanda: "Chi scrisse la Logica della scoperta scientifica proponendo la falsificabilità?", risposta: "KARL POPPER", difficolta: 2 },
    { domanda: "Chi scrisse Verità e metodo fondando l'ermeneutica filosofica contemporanea?", risposta: "HANS GEORG GADAMER", difficolta: 2 },
    { domanda: "Chi ha elaborato la teoria della giustizia come equità nel 1971?", risposta: "JOHN RAWLS", difficolta: 2 },
    { domanda: "Chi ha scritto Sorvegliare e punire sulla nascita della prigione?", risposta: "MICHEL FOUCAULT", difficolta: 2 },
    { domanda: "Chi ha scritto Dialettica dell'illuminismo insieme a Horkheimer?", risposta: "THEODOR ADORNO", difficolta: 2 },
    { domanda: "Chi ha elaborato il concetto di spirito assoluto nella filosofia idealista?", risposta: "GEORG WILHELM HEGEL", difficolta: 2 },

    // DIFFICILI (20)
    { domanda: "Chi ha elaborato la teoria della rimembranza?", risposta: "PLATONE", difficolta: 3 },
    { domanda: "Chi ha scritto l'Apologia di Socrate?", risposta: "PLATONE", difficolta: 3 },
    { domanda: "Chi ha elaborato la teoria dell'eterno ritorno?", risposta: "FRIEDRICH NIETZSCHE", difficolta: 3 },
    { domanda: "Chi ha scritto il Sofista?", risposta: "PLATONE", difficolta: 3 },
    { domanda: "Chi ha elaborato il concetto di Dasein?", risposta: "MARTIN HEIDEGGER", difficolta: 3 },
    { domanda: "Chi ha scritto il Cratilo?", risposta: "PLATONE", difficolta: 3 },
    { domanda: "Chi ha elaborato la teoria della volontà di potenza?", risposta: "FRIEDRICH NIETZSCHE", difficolta: 3 },
    { domanda: "Chi ha scritto la Critica del giudizio?", risposta: "IMMANUEL KANT", difficolta: 3 },
    { domanda: "Chi ha scritto il Timeo?", risposta: "PLATONE", difficolta: 3 },
    { domanda: "Chi ha elaborato il concetto di superuomo?", risposta: "FRIEDRICH NIETZSCHE", difficolta: 3 },
    { domanda: "Chi ha scritto la Fenomenologia dello spirito?", risposta: "GEORG WILHELM HEGEL", difficolta: 3 },
    { domanda: "Chi ha elaborato il concetto di alienazione?", risposta: "KARL MARX", difficolta: 3 },
    { domanda: "Chi ha scritto il Teeteto?", risposta: "PLATONE", difficolta: 3 },
    { domanda: "Chi formulò il celebre argomento del rasoio per privilegiare le spiegazioni più semplici?", risposta: "GUGLIELMO DI OCKHAM", difficolta: 3 },
    { domanda: "Quale filosofo neoplatonico scrisse le Enneadi?", risposta: "PLOTINO", difficolta: 3 },
    { domanda: "Chi scrisse l'opera La dottrina della scienza nel 1794?", risposta: "JOHANN GOTTLIEB FICHTE", difficolta: 3 },
    { domanda: "Chi è l'autore del Sistema dell'idealismo trascendentale?", risposta: "FRIEDRICH SCHELLING", difficolta: 3 },
    { domanda: "Chi ha scritto L'essenza del cristianesimo nel 1841 critico di Hegel?", risposta: "LUDWIG FEUERBACH", difficolta: 3 },
    { domanda: "Chi ha scritto l'opera Idee per una fenomenologia pura e una filosofia fenomenologica?", risposta: "EDMUND HUSSERL", difficolta: 3 },
    { domanda: "Chi formulò la teoria del prospettivismo conoscitivo secondo cui non esistono fatti ma solo interpretazioni?", risposta: "FRIEDRICH NIETZSCHE", difficolta: 3 }
  ],

  // ==========================================================
  // FISICA (100)
  // ==========================================================
  "Fisica": [
    // FACILI (50)
    { domanda: "Qual è l'unità di misura della forza?", risposta: "IL NEWTON", difficolta: 1 },
    { domanda: "Qual è l'unità di misura della lunghezza?", risposta: "IL METRO", difficolta: 1 },
    { domanda: "Come si chiama la forza che attrae i corpi verso la Terra?", risposta: "LA GRAVITA", difficolta: 1 },
    { domanda: "Qual è l'unità di misura del tempo?", risposta: "IL SECONDO", difficolta: 1 },
    { domanda: "Qual è lo strumento per misurare la temperatura?", risposta: "IL TERMOMETRO", difficolta: 1 },
    { domanda: "Come si chiama il passaggio da solido a liquido?", risposta: "LA FUSIONE", difficolta: 1 },
    { domanda: "Qual è l'unità di misura della massa?", risposta: "IL CHILOGRAMMO", difficolta: 1 },
    { domanda: "Come si chiama la grandezza che misura lo spazio percorso nel tempo?", risposta: "LA VELOCITA", difficolta: 1 },
    { domanda: "Qual è la forza che si oppone al movimento?", risposta: "L ATTRITO", difficolta: 1 },
    { domanda: "Come si chiama il passaggio da liquido a vapore?", risposta: "L EVAPORAZIONE", difficolta: 1 },
    { domanda: "Qual è lo strumento per misurare la forza?", risposta: "IL DINAMOMETRO", difficolta: 1 },
    { domanda: "Come si chiama il passaggio da vapore a liquido?", risposta: "LA CONDENSAZIONE", difficolta: 1 },
    { domanda: "Qual è l'unità di misura della temperatura nel sistema internazionale?", risposta: "IL KELVIN", difficolta: 1 },
    { domanda: "Come si chiama la spinta che riceve un corpo immerso in un fluido?", risposta: "SPINTA DI ARCHIMEDE", difficolta: 1 },
    { domanda: "Come si chiama il passaggio diretto da solido a vapore?", risposta: "LA SUBLIMAZIONE", difficolta: 1 },
    { domanda: "Qual è l'unità di misura del volume?", risposta: "IL METRO CUBO", difficolta: 1 },
    { domanda: "Come si chiama la grandezza che misura la quantità di materia?", risposta: "LA MASSA", difficolta: 1 },
    { domanda: "Qual è l'unità di misura del lavoro?", risposta: "IL JOULE", difficolta: 1 },
    { domanda: "Come si chiama la grandezza data dalla massa divisa per il volume?", risposta: "LA DENSITA", difficolta: 1 },
    { domanda: "Come si chiama l'energia dovuta al movimento di un corpo?", risposta: "ENERGIA CINETICA", difficolta: 1 },
    { domanda: "Come si chiama l'energia posseduta da un corpo in virtù della sua posizione?", risposta: "ENERGIA POTENZIALE", difficolta: 1 },
    { domanda: "Qual è lo strumento per misurare la pressione atmosferica?", risposta: "BAROMETRO", difficolta: 1 },
    { domanda: "Come si chiama il raggio di luce riflesso da uno specchio?", risposta: "RAGGIO RIFLESSO", difficolta: 1 },
    { domanda: "Come si chiama la deviazione della luce quando passa attraverso una lente?", risposta: "RIFRAZIONE", difficolta: 1 },
    { domanda: "Come si chiama il fenomeno di separazione della luce bianca nei vari colori dell'arcobaleno?", risposta: "DISPERSIONE", difficolta: 1 },
    { domanda: "Come si chiama la forza d'attrazione magnetica prodotta dai magneti?", risposta: "MAGNETISMO", difficolta: 1 },
    { domanda: "Quali poli magnetici si respingono tra loro?", risposta: "POLI UGUALI", difficolta: 1 },
    { domanda: "Quali poli magnetici si attraggono tra loro?", risposta: "POLI OPPOSTI", difficolta: 1 },
    { domanda: "Come si chiama l'unità di misura della frequenza delle onde?", risposta: "L HERTZ", difficolta: 1 },
    { domanda: "Qual è l'unità di misura della potenza meccanica ed elettrica?", risposta: "IL WATT", difficolta: 1 },
    { domanda: "Come si chiama lo specchio curvo che fa convergere i raggi di luce?", risposta: "SPECCHIO CONCAVO", difficolta: 1 },
    { domanda: "Come si chiama lo specchio curvo che fa divergere i raggi di luce?", risposta: "SPECCHIO CONVESSO", difficolta: 1 },
    { domanda: "Come si chiama la linea attorno alla quale ruota un corpo?", risposta: "ASSE DI ROTAZIONE", difficolta: 1 },
    { domanda: "Come si chiama l'unità di misura dell'angolo nel sistema internazionale?", risposta: "IL RADIANTE", difficolta: 1 },
    { domanda: "Come si chiama lo strumento per misurare la corrente elettrica?", risposta: "AMPEROMETRO", difficolta: 1 },
    { domanda: "Come si chiama lo strumento per misurare la tensione elettrica?", risposta: "VOLTMETRO", difficolta: 1 },
    { domanda: "Quale forza si oppone allo scorrimento di due superfici a contatto?", risposta: "ATTRITO RADENTE", difficolta: 1 },
    { domanda: "Quale scienziato formulò la legge della gravità dopo la caduta di una mela?", risposta: "ISAAC NEWTON", difficolta: 1 },
    { domanda: "Quale scienziato italiano scoprì le leggi del pendolo e perfezionò il cannocchiale?", risposta: "GALILEO GALILEI", difficolta: 1 },
    { domanda: "Come si chiama il punto attorno a cui ruota una leva?", risposta: "IL FULCRO", difficolta: 1 },
    { domanda: "Quale tipo di leva ha il fulcro situato tra la forza applicata e la resistenza?", risposta: "LEVA DI PRIMO GENERE", difficolta: 1 },
    { domanda: "Quale tipo di leva ha la resistenza situata tra il fulcro e la forza?", risposta: "LEVA DI SECONDO GENERE", difficolta: 1 },
    { domanda: "Quale tipo di leva ha la forza applicata tra il fulcro e la resistenza?", risposta: "LEVA DI TERZO GENERE", difficolta: 1 },
    { domanda: "Come si chiama l'onda meccanica percepita dall'orecchio umano?", risposta: "ONDA SONORA", difficolta: 1 },
    { domanda: "Qual è la velocità approssimativa del suono nell'aria in metri al secondo?", risposta: "TRECENTOQUARANTA", difficolta: 1 },
    { domanda: "Come si chiama la riflessione dell'onda sonora contro un ostacolo distante?", risposta: "L ECO", difficolta: 1 },
    { domanda: "Come si chiama il passaggio diretto di uno stato gassoso al liquido?", risposta: "CONDENSAZIONE", difficolta: 1 },
    { domanda: "Come si chiama la quantità di calore necessaria per alzare di un grado la temperatura di un grammo d'acqua?", risposta: "CALORIA", difficolta: 1 },
    { domanda: "Qual è l'unità di misura del flusso di calore o dell'energia nel SI?", risposta: "IL JOULE", difficolta: 1 },
    { domanda: "Quale scienziato formulò la teoria della relatività?", risposta: "ALBERT EINSTEIN", difficolta: 1 },

    // MEDIE (30)
    { domanda: "Quale legge di Newton afferma che la forza è uguale a massa per accelerazione?", risposta: "SECONDA LEGGE DI NEWTON", difficolta: 2 },
    { domanda: "Come si chiama il fenomeno per cui la luce si propaga in linea retta?", risposta: "PROPAGAZIONE RETTILINEA", difficolta: 2 },
    { domanda: "Qual è l'unità di misura della frequenza?", risposta: "L HERTZ", difficolta: 2 },
    { domanda: "Come si chiama la legge che lega tensione corrente e resistenza?", risposta: "LEGGE DI OHM", difficolta: 2 },
    { domanda: "Qual è l'unità di misura della potenza?", risposta: "IL WATT", difficolta: 2 },
    { domanda: "Come si chiama il fenomeno per cui un'onda cambia direzione tra due mezzi?", risposta: "RIFRAZIONE", difficolta: 2 },
    { domanda: "Qual è l'unità di misura della carica elettrica?", risposta: "IL COULOMB", difficolta: 2 },
    { domanda: "Come si chiama la legge per cui l'energia non si crea né si distrugge?", risposta: "CONSERVAZIONE DELL ENERGIA", difficolta: 2 },
    { domanda: "Qual è l'unità di misura del campo magnetico?", risposta: "IL TESLA", difficolta: 2 },
    { domanda: "Come si chiama la legge per cui la pressione di un gas è inversamente proporzionale al volume?", risposta: "LEGGE DI BOYLE", difficolta: 2 },
    { domanda: "Come si chiama il movimento con velocità costante?", risposta: "MOTO UNIFORME", difficolta: 2 },
    { domanda: "Qual è l'unità di misura della pressione?", risposta: "IL PASCAL", difficolta: 2 },
    { domanda: "Come si chiama il movimento con accelerazione costante?", risposta: "MOTO UNIFORMEMENTE ACCELERATO", difficolta: 2 },
    { domanda: "Qual è l'unità di misura dell'accelerazione?", risposta: "METRO AL SECONDO QUADRATO", difficolta: 2 },
    { domanda: "Come si chiama la tendenza di un corpo a mantenere il suo stato di moto?", risposta: "L INERZIA", difficolta: 2 },
    { domanda: "Quale legge regola il moto dei pianeti attorno al Sole?", risposta: "LEGGE DI KEPLERO", difficolta: 2 },
    { domanda: "Come si chiama la legge che descrive la forza elastica di una molla?", risposta: "LEGGE DI HOOKE", difficolta: 2 },
    { domanda: "Qual è l'unità di misura della resistenza elettrica?", risposta: "L OHM", difficolta: 2 },
    { domanda: "Come si chiama la forza che si esercita tra due cariche elettriche?", risposta: "FORZA DI COULOMB", difficolta: 2 },
    { domanda: "Qual è la costante che indica la velocità della luce nel vuoto?", risposta: "TRECENTOMILA KM AL SECONDO", difficolta: 2 },
    { domanda: "Come si chiama la costante universale di gravità indicata con G stampatello?", risposta: "COSTANTE GRAVITAZIONALE", difficolta: 2 },
    { domanda: "Come si chiama l'effetto per cui la frequenza apparente di un'onda cambia con il movimento di sorgente o osservatore?", risposta: "EFFETTO DOPPLER", difficolta: 2 },
    { domanda: "Qual è il primo principio della termodinamica?", risposta: "CONSERVAZIONE DELL ENERGIA", difficolta: 2 },
    { domanda: "Come si chiama la misura del disordine di un sistema termodinamico?", risposta: "ENTROPIA", difficolta: 2 },
    { domanda: "Come si chiama l'angolo di incidenza oltre il quale avviene la riflessione totale?", risposta: "ANGOLO LIMITE", difficolta: 2 },
    { domanda: "Come si chiama il fenomeno per cui un corpo sottoposto ad una forza periodica di pari frequenza oscilla con ampiezza massima?", risposta: "RISONANZA", difficolta: 2 },
    { domanda: "Qual è la costante fondamentale del quanto d'azione indicata con h?", risposta: "COSTANTE DI PLANCK", difficolta: 2 },
    { domanda: "Come si chiama la forza apparente avvertita in un sistema di riferimento in rotazione?", risposta: "FORZA CENTRIFUGA", difficolta: 2 },
    { domanda: "Come si chiama la forza reale diretta verso il centro della traiettoria circolare?", risposta: "FORZA CENTRIPETA", difficolta: 2 },
    { domanda: "Come si chiama il teorema per cui la variazione di energia cinetica è pari al lavoro compito?", risposta: "TEOREMA DELL ENERGIA CINETICA", difficolta: 2 },

    // DIFFICILI (20)
    { domanda: "Come si chiama il principio per cui non si può determinare contemporaneamente posizione e velocità di una particella?", risposta: "PRINCIPIO DI INDETERMINAZIONE", difficolta: 3 },
    { domanda: "Come si chiama la particella mediatrice della forza elettromagnetica?", risposta: "IL FOTONE", difficolta: 3 },
    { domanda: "Come si chiama la teoria che unifica spazio e tempo?", risposta: "RELATIVITA RISTRETTA", difficolta: 3 },
    { domanda: "Qual è la formula che lega energia e massa?", risposta: "E UGUALE M C QUADRATO", difficolta: 3 },
    { domanda: "Come si chiama il fenomeno per cui la luce si comporta sia come onda che come particella?", risposta: "DUALISMO ONDA PARTICELLA", difficolta: 3 },
    { domanda: "Come si chiama la teoria che descrive il moto dei corpi a velocità prossime a quella della luce?", risposta: "TEORIA DELLA RELATIVITA", difficolta: 3 },
    { domanda: "Qual è la particella elementare con carica positiva nel nucleo?", risposta: "IL PROTONE", difficolta: 3 },
    { domanda: "Come si chiama il fenomeno per cui un corpo cambia la sua massa con la velocità?", risposta: "DILATAZIONE RELATIVISTICA", difficolta: 3 },
    { domanda: "Qual è la legge che regola l'attrazione tra due masse?", risposta: "LEGGE DI GRAVITAZIONE UNIVERSALE", difficolta: 3 },
    { domanda: "Come si chiama l'unità di misura dell'energia nel sistema internazionale?", risposta: "IL JOULE", difficolta: 3 },
    { domanda: "Come si chiama il fenomeno per cui un corpo immerso in un fluido riceve una spinta verticale?", risposta: "SPINTA DI ARCHIMEDE", difficolta: 3 },
    { domanda: "Qual è la legge che regola la forza tra due cariche elettriche?", risposta: "LEGGE DI COULOMB", difficolta: 3 },
    { domanda: "Come si chiama la grandezza che misura la variazione di velocità nel tempo?", risposta: "L ACCELERAZIONE", difficolta: 3 },
    { domanda: "Come si chiama l'equazione fondamentale della meccanica quantistica non relativistica?", risposta: "EQUAZIONE DI SCHRODINGER", difficolta: 3 },
    { domanda: "Come si chiama il principio di esclusione per i fermioni con lo stesso stato quantico?", risposta: "PRINCIPIO DI PAULI", difficolta: 3 },
    { domanda: "Come si chiama la trasformazione relativistica che lega le coordinate di due sistemi in moto relativo uniforme?", risposta: "TRASFORMAZIONI DI LORENTZ", difficolta: 3 },
    { domanda: "Quale vettore descrive la densità di flusso di energia di un campo elettromagnetico?", risposta: "VETTORE DI POYNTING", difficolta: 3 },
    { domanda: "Come si chiama la radiazione emessa da particelle cariche che si muovono in un mezzo a velocità superiore a quella della luce nel mezzo stesso?", risposta: "EFFETTO CERENKOV", difficolta: 3 },
    { domanda: "Come si chiama l'effetto di emissione di elettroni da una superficie metallica colpita da radiazione luminosa?", risposta: "EFFETTO ELETTROFOTONICO", difficolta: 3 },
    { domanda: "Come si chiama la temperatura teorica alla quale l'energia cinetica molecolare diventa minima?", risposta: "ZERO ASSOLUTO", difficolta: 3 }
  ],

  // ==========================================================
  // CHIMICA (100)
  // ==========================================================
  "Chimica": [
    // FACILI (50)
    { domanda: "Qual è il simbolo chimico dell'idrogeno?", risposta: "LA LETTERA H", difficolta: 1 },
    { domanda: "Qual è il simbolo chimico dell'ossigeno?", risposta: "LA LETTERA O", difficolta: 1 },
    { domanda: "Qual è il simbolo chimico del carbonio?", risposta: "LA LETTERA C", difficolta: 1 },
    { domanda: "Qual è la formula chimica dell'acqua?", risposta: "H DUE O", difficolta: 1 },
    { domanda: "Qual è il simbolo chimico del sodio?", risposta: "NA", difficolta: 1 },
    { domanda: "Qual è il simbolo chimico del cloro?", risposta: "CL", difficolta: 1 },
    { domanda: "Come si chiama il numero che indica i protoni di un atomo?", risposta: "NUMERO ATOMICO", difficolta: 1 },
    { domanda: "Qual è la particella con carica positiva nell'atomo?", risposta: "IL PROTONE", difficolta: 1 },
    { domanda: "Qual è il simbolo chimico del ferro?", risposta: "FE", difficolta: 1 },
    { domanda: "Come si chiama la sostanza che accelera una reazione chimica?", risposta: "IL CATALIZZATORE", difficolta: 1 },
    { domanda: "Qual è il simbolo chimico dell'oro?", risposta: "AU", difficolta: 1 },
    { domanda: "Come si chiama la reazione tra acido e base?", risposta: "NEUTRALIZZAZIONE", difficolta: 1 },
    { domanda: "Qual è il simbolo chimico dell'azoto?", risposta: "LA LETTERA N", difficolta: 1 },
    { domanda: "Come si chiama la tabella che raccoglie tutti gli elementi chimici?", risposta: "TAVOLA PERIODICA", difficolta: 1 },
    { domanda: "Qual è il simbolo chimico del calcio?", risposta: "CA", difficolta: 1 },
    { domanda: "Qual è la particella con carica negativa nell'atomo?", risposta: "L ELETTRONE", difficolta: 1 },
    { domanda: "Qual è il simbolo chimico del rame?", risposta: "CU", difficolta: 1 },
    { domanda: "Come si chiama la molecola formata da due atomi di ossigeno?", risposta: "OSSIGENO MOLECOLARE", difficolta: 1 },
    { domanda: "Qual è il simbolo chimico dell'elmo o elio?", risposta: "HE", difficolta: 1 },
    { domanda: "Qual è il simbolo chimico dell'argento?", risposta: "AG", difficolta: 1 },
    { domanda: "Qual è il simbolo chimico del piombo?", risposta: "PB", difficolta: 1 },
    { domanda: "Qual è il simbolo chimico dello zolfo?", risposta: "LA LETTERA S", difficolta: 1 },
    { domanda: "Qual è il simbolo chimico del potassio?", risposta: "LA LETTERA K", difficolta: 1 },
    { domanda: "Qual è il simbolo chimico del mercurio?", risposta: "HG", difficolta: 1 },
    { domanda: "Qual è il simbolo chimico del fosforo?", risposta: "LA LETTERA P", difficolta: 1 },
    { domanda: "Qual è il simbolo chimico del silicio?", risposta: "SI", difficolta: 1 },
    { domanda: "Qual è il simbolo chimico dello zinco?", risposta: "ZN", difficolta: 1 },
    { domanda: "Qual è il simbolo chimico del magnesio?", risposta: "MG", difficolta: 1 },
    { domanda: "Qual è il simbolo chimico del alluminio?", risposta: "AL", difficolta: 1 },
    { domanda: "Qual è il simbolo chimico dello stagno?", risposta: "SN", difficolta: 1 },
    { domanda: "Qual è la formula del gas anidride carbonica?", risposta: "C O DUE", difficolta: 1 },
    { domanda: "Come si chiamano gli atomi dello stesso elemento con diverso numero di neutroni?", risposta: "ISOTOPI", difficolta: 1 },
    { domanda: "Come si chiama la parte centrale dell'atomo?", risposta: "IL NUCLEO", difficolta: 1 },
    { domanda: "Come si chiama la particella atomica priva di carica elettrica?", risposta: "NEUTRONE", difficolta: 1 },
    { domanda: "Come si chiama un atomo che ha perso o acquistato elettroni?", risposta: "LO IONE", difficolta: 1 },
    { domanda: "Come si chiama uno ione con carica positiva?", risposta: "CATIONE", difficolta: 1 },
    { domanda: "Come si chiama uno ione con carica negativa?", risposta: "ANIONE", difficolta: 1 },
    { domanda: "Come si chiama la scala usata per misurare l'acidità di una soluzione?", risposta: "SCALA DEL PH", difficolta: 1 },
    { domanda: "Qual è il valore del pH che indica una soluzione perfettamente neutra?", risposta: "IL NUMERO SETTE", difficolta: 1 },
    { domanda: "Come si chiamano le sostanze con pH inferiore a sette?", risposta: "SOSTANZE ACIDE", difficolta: 1 },
    { domanda: "Come si chiamano le sostanze con pH superiore a sette?", risposta: "SOSTANZE BASICHE", difficolta: 1 },
    { domanda: "Qual è la formula del gas metano?", risposta: "C H QUATTRO", difficolta: 1 },
    { domanda: "Come si chiama la miscela omogenea di due o più sostanze?", risposta: "SOLUZIONE", difficolta: 1 },
    { domanda: "Come si chiama il componente della soluzione presente in quantità maggiore?", risposta: "SOLVENTE", difficolta: 1 },
    { domanda: "Come si chiama il componente sciolto in un solvente?", risposta: "SOLUTO", difficolta: 1 },
    { domanda: "Qual è il solvente universale più comune in natura?", risposta: "L ACQUA", difficolta: 1 },
    { domanda: "Come si chiama lo stato di aggregazione dei soliti con volume e forma propri?", risposta: "STATO SOLIDO", difficolta: 1 },
    { domanda: "Come si chiama lo stato di aggregazione con volume proprio ma forma del recipiente?", risposta: "STATO LIQUIDO", difficolta: 1 },
    { domanda: "Come si chiama lo stato di aggregazione che occupa tutto il volume disponibile?", risposta: "STATO GASSOSO", difficolta: 1 },
    { domanda: "Come si chiama la reazione chimica di combustione rapida con produzione di fuoco?", risposta: "COMBUSTIONE", difficolta: 1 },

    // MEDIE (30)
    { domanda: "Qual è il pH di una soluzione acida?", risposta: "MINORE DI SETTE", difficolta: 2 },
    { domanda: "Come si chiama il legame tra due atomi che condividono elettroni?", risposta: "LEGAME COVALENTE", difficolta: 2 },
    { domanda: "Qual è la formula chimica dell'anidride carbonica?", risposta: "C O DUE", difficolta: 2 },
    { domanda: "Come si chiama la reazione che assorbe calore?", risposta: "REAZIONE ENDOTERMICA", difficolta: 2 },
    { domanda: "Qual è il simbolo chimico dell'argento?", risposta: "AG", difficolta: 2 },
    { domanda: "Come si chiama il legame tra ioni positivi e negativi?", risposta: "LEGAME IONICO", difficolta: 2 },
    { domanda: "Qual è la formula chimica dell'ammoniaca?", risposta: "N H TRE", difficolta: 2 },
    { domanda: "Come si chiama la reazione che libera calore?", risposta: "REAZIONE ESOTERMICA", difficolta: 2 },
    { domanda: "Qual è il simbolo chimico del piombo?", risposta: "PB", difficolta: 2 },
    { domanda: "Qual è la formula chimica del metano?", risposta: "C H QUATTRO", difficolta: 2 },
    { domanda: "Come si chiama il numero di Avogadro?", risposta: "SEI VIRGOLA ZERO VENTIDUE PER DIECI ALLA VENTITREESIMA", difficolta: 2 },
    { domanda: "Qual è il simbolo chimico dello zinco?", risposta: "ZN", difficolta: 2 },
    { domanda: "Come si chiama la reazione di un elemento con l'ossigeno?", risposta: "OSSIDAZIONE", difficolta: 2 },
    { domanda: "Qual è la formula chimica del glucosio?", risposta: "C SEI H DODICI O SEI", difficolta: 2 },
    { domanda: "Come si chiama la sostanza che cede elettroni in una reazione?", risposta: "AGENTE RIDUCENTE", difficolta: 2 },
    { domanda: "Qual è il simbolo chimico del potassio?", risposta: "LA LETTERA K", difficolta: 2 },
    { domanda: "Come si chiama la sostanza che acquista elettroni in una reazione?", risposta: "AGENTE OSSIDANTE", difficolta: 2 },
    { domanda: "Qual è la formula chimica dell'acido cloridrico?", risposta: "H CL", difficolta: 2 },
    { domanda: "Come si chiama il processo di separazione di liquidi per ebollizione?", risposta: "DISTILLAZIONE", difficolta: 2 },
    { domanda: "Qual è il simbolo chimico del mercurio?", risposta: "HG", difficolta: 2 },
    { domanda: "Come si chiama il principio per cui un sistema in equilibrio reagisce alle perturbazioni spostandosi nella direzione che le minimizza?", risposta: "PRINCIPIO DI LE CHATELIER", difficolta: 2 },
    { domanda: "Come si chiama la geometria molecolare con quattro coppie di elettroni disposte a 109.5 gradi?", risposta: "TETRAEDRICA", difficolta: 2 },
    { domanda: "Come si chiama il legame chimico debole tra molecole polari?", risposta: "LEGAME DI VAN DER WAALS", difficolta: 2 },
    { domanda: "Come si chiama la grandezza che misura l'attrazione di un atomo per gli elettroni di legame?", risposta: "ELETTRONEGATIVITA", difficolta: 2 },
    { domanda: "Come si chiama il passaggio dallo stato gassoso direttamente a quello solido?", risposta: "BRINAMENTO", difficolta: 2 },
    { domanda: "Come si chiama la pressione esercitata dal vapore saturo in equilibrio con il suo liquido?", risposta: "TENSIONE DI VAPORE", difficolta: 2 },
    { domanda: "Come si chiama una soluzione contenente la massima quantità possibile di soluto disciolto?", risposta: "SOLUZIONE SATURA", difficolta: 2 },
    { domanda: "Qual è la formula chimica del perossido di idrogeno comunemente detto acqua ossigenata?", risposta: "H DUE O DUE", difficolta: 2 },
    { domanda: "Come si chiama la branca della chimica che studia i composti del carbonio?", risposta: "CHIMICA ORGANICA", difficolta: 2 },
    { domanda: "Come si chiama la branca della chimica che studia l'energia scambiata durante le reazioni?", risposta: "TERMOCHIMICA", difficolta: 2 },

    // DIFFICILI (20)
    { domanda: "Qual è la formula chimica dell'acido solforico?", risposta: "H DUE S O QUATTRO", difficolta: 3 },
    { domanda: "Come si chiama il numero di massa di un atomo?", risposta: "SOMMA DI PROTONI E NEUTRONI", difficolta: 3 },
    { domanda: "Qual è la formula chimica del benzene?", risposta: "C SEI H SEI", difficolta: 3 },
    { domanda: "Come si chiama la reazione in cui un composto si scinde in due o più sostanze?", risposta: "DECOMPOSIZIONE", difficolta: 3 },
    { domanda: "Qual è il simbolo chimico del tungsteno?", risposta: "LA LETTERA W", difficolta: 3 },
    { domanda: "Come si chiama il legame tra molecole d'acqua?", risposta: "LEGAME A IDROGENO", difficolta: 3 },
    { domanda: "Qual è la formula chimica dell'etano?", risposta: "C DUE H SEI", difficolta: 3 },
    { domanda: "Come si chiama il processo di rottura di un legame chimico con acqua?", risposta: "IDROLISI", difficolta: 3 },
    { domanda: "Come si chiama la reazione in cui due sostanze si combinano in una sola?", risposta: "SINTESI", difficolta: 3 },
    { domanda: "Qual è la formula chimica dell'etanolo?", risposta: "C DUE H CINQUE O H", difficolta: 3 },
    { domanda: "Come si chiama il composto formato da idrogeno e carbonio?", risposta: "IDROCARBURO", difficolta: 3 },
    { domanda: "Come si chiama il processo di separazione di una miscela mediante un solvente?", risposta: "ESTRAZIONE", difficolta: 3 },
    { domanda: "Come si chiama la sostanza che in soluzione acquosa conduce corrente?", risposta: "ELETTROLITA", difficolta: 3 },
    { domanda: "Come si chiama l'equazione che lega l'assorbanza alla concentrazione e al cammino ottico?", risposta: "LEGGE DI LAMBERT BEER", difficolta: 3 },
    { domanda: "Quale equazione descrive il potenziale di elettrodo in condizioni non standard?", risposta: "EQUAZIONE DI NERNST", difficolta: 3 },
    { domanda: "Come si chiama il composto aromatico eterociclico a cinque atomi contenente azoto?", risposta: "PIRROLO", difficolta: 3 },
    { domanda: "Come si chiama la grandezza termodinamica definita come H = U + PV?", risposta: "ENTALPIA", difficolta: 3 },
    { domanda: "Come si chiama l'energia libera definita come G = H - TS?", risposta: "ENERGIA LIBERA DI GIBBS", difficolta: 3 },
    { domanda: "Come si chiama il fenomeno per cui molecole con uguale formula bruta presentano diversa struttura?", risposta: "ISOMERIA STRUTTURALE", difficolta: 3 },
    { domanda: "Come si chiama la tecnica analitica basata sulla misurazione della massa di ioni in fase gassosa?", risposta: "SPETTROMETRIA DI MASSA", difficolta: 3 }
  ],

  // ==========================================================
  // INFORMATICA (100)
  // ==========================================================
  "Informatica": [
    // FACILI (50)
    { domanda: "Come si chiama il cervello del computer?", risposta: "IL PROCESSORE", difficolta: 1 },
    { domanda: "Qual è il sistema operativo più diffuso al mondo?", risposta: "WINDOWS", difficolta: 1 },
    { domanda: "Come si chiama il dispositivo per digitare testi?", risposta: "LA TASTIERA", difficolta: 1 },
    { domanda: "Qual è l'unità di misura della memoria di un computer?", risposta: "IL BYTE", difficolta: 1 },
    { domanda: "Come si chiama il programma per navigare in internet?", risposta: "IL BROWSER", difficolta: 1 },
    { domanda: "Qual è il linguaggio per creare pagine web?", risposta: "LINGUAGGIO HTML", difficolta: 1 },
    { domanda: "Come si chiama il dispositivo che mostra le immagini?", risposta: "IL MONITOR", difficolta: 1 },
    { domanda: "Qual è il foglio di calcolo più diffuso?", risposta: "MICROSOFT EXCEL", difficolta: 1 },
    { domanda: "Come si chiama la memoria che si cancella allo spegnimento?", risposta: "MEMORIA RAM", difficolta: 1 },
    { domanda: "Qual è l'unità minima di informazione?", risposta: "IL BIT", difficolta: 1 },
    { domanda: "Come si chiama il dispositivo per stampare documenti?", risposta: "LA STAMPANTE", difficolta: 1 },
    { domanda: "Qual è il programma per scrivere testi di Microsoft?", risposta: "MICROSOFT WORD", difficolta: 1 },
    { domanda: "Come si chiama il piccolo dispositivo per memorizzare dati?", risposta: "CHIAVETTA USB", difficolta: 1 },
    { domanda: "Qual è il sistema operativo di Apple per computer?", risposta: "MACOS", difficolta: 1 },
    { domanda: "Come si chiama il sistema operativo open source più diffuso?", risposta: "LINUX", difficolta: 1 },
    { domanda: "Qual è la rete mondiale di computer?", risposta: "INTERNET", difficolta: 1 },
    { domanda: "Come si chiama il programma per gestire fogli di calcolo?", risposta: "FOGLIO ELETTRONICO", difficolta: 1 },
    { domanda: "Qual è il formato di file per documenti portatili?", risposta: "FORMATO PDF", difficolta: 1 },
    { domanda: "Come si chiama la freccia che si muove sullo schermo muovendo il mouse?", risposta: "IL CURSORE", difficolta: 1 },
    { domanda: "Come si chiama la finestra di dialogo o il programma di posta elettronica?", risposta: "CLIENT DI POSTA", difficolta: 1 },
    { domanda: "Come si chiama la schermata principale del sistema operativo con le icone?", risposta: "IL DESKTOP", difficolta: 1 },
    { domanda: "Come si chiama la cartella dove finiscono i file eliminati temporaneamente?", risposta: "IL CESTINO", difficolta: 1 },
    { domanda: "Come si chiama il collegamento rapido a un file sul desktop?", risposta: "COLLEGAMENTO", difficolta: 1 },
    { domanda: "Come si chiama l'estensione dei file di testo semplice?", risposta: "ESTENZIONE TXT", difficolta: 1 },
    { domanda: "Come si chiama la combinazione di tasti Ctrl+C?", risposta: "COPIA", difficolta: 1 },
    { domanda: "Come si chiama la combinazione di tasti Ctrl+V?", risposta: "INCOLLA", difficolta: 1 },
    { domanda: "Come si chiama la combinazione di tasti Ctrl+X?", risposta: "TAGLIA", difficolta: 1 },
    { domanda: "Come si chiama la combinazione di tasti Ctrl+Z?", risposta: "ANNULLA", difficolta: 1 },
    { domanda: "Come si chiama il motore di ricerca più usato al mondo?", risposta: "GOOGLE", difficolta: 1 },
    { domanda: "Come si chiama l'enciclopedia libera online più famosa?", risposta: "WIKIPEDIA", difficolta: 1 },
    { domanda: "Come si chiama la rete sociale per condivisione video di Google?", risposta: "YOUTUBE", difficolta: 1 },
    { domanda: "Come si chiama il programma antivirus che protegge il PC dai malware?", risposta: "ANTIVIRUS", difficolta: 1 },
    { domanda: "Come si chiama un software malevolo in grado di infettare i computer?", risposta: "VIRUS INFORMATICO", difficolta: 1 },
    { domanda: "Come si chiama la password usata per autenticarsi su un sito?", risposta: "PAROLA D ORDINE", difficolta: 1 },
    { domanda: "Come si chiama il nome utente necessario per accedere a un servizio online?", risposta: "NOME UTENTE", difficolta: 1 },
    { domanda: "Come si chiama la posta elettronica inviata via internet?", risposta: "POSTA ELETTRONICA", difficolta: 1 },
    { domanda: "Come si chiama la posta indesiderata di pubblicità?", risposta: "POSTA SPAM", difficolta: 1 },
    { domanda: "Come si chiama la copia di sicurezza dei propri dati?", risposta: "COPIA DI BACKUP", difficolta: 1 },
    { domanda: "Come si chiama il dispositivo che collega una rete domestica a internet?", risposta: "IL ROUTER", difficolta: 1 },
    { domanda: "Come si chiama il sistema operativo di Google per smartphone?", risposta: "ANDROID", difficolta: 1 },
    { domanda: "Come si chiama il sistema operativo di Apple per iPhone?", risposta: "SISTEMA IOS", difficolta: 1 },
    { domanda: "Come si chiama l'applicazione usata per chattare su smartphone con icona verde?", risposta: "WHATSAPP", difficolta: 1 },
    { domanda: "Come si chiama la trasmissione di dati salvati sul web invece che sul PC locale?", risposta: "CLOUD COMPUTING", difficolta: 1 },
    { domanda: "Come si chiama la parte fisica del computer composta da circuiti e tastiera?", risposta: "L HARDWARE", difficolta: 1 },
    { domanda: "Come si chiamano i programmi e il sistema operativo del computer?", risposta: "IL SOFTWARE", difficolta: 1 },
    { domanda: "Quanti bit formano un byte?", risposta: "OTTO BIT", difficolta: 1 },
    { domanda: "Quale tasto si usa per cancellare il carattere a sinistra del cursore?", risposta: "BACKSPACE", difficolta: 1 },
    { domanda: "Quale tasto si usa per confermare un comando o andare a capo?", risposta: "TASTO INVIO", difficolta: 1 },
    { domanda: "Quale tasto della tastiera permette di scrivere in maiuscolo fisso?", risposta: "BLOCCO MAIUSCOLE", difficolta: 1 },
    { domanda: "Come si chiama l'immagine identificativa di un utente sui social?", risposta: "L AVATAR", difficolta: 1 },

    // MEDIE (30)
    { domanda: "Come si chiama il protocollo per la posta elettronica in uscita?", risposta: "PROTOCOLLO SMTP", difficolta: 2 },
    { domanda: "Qual è il linguaggio di programmazione per il web lato client?", risposta: "JAVASCRIPT", difficolta: 2 },
    { domanda: "Come si chiama il linguaggio per lo stile delle pagine web?", risposta: "LINGUAGGIO CSS", difficolta: 2 },
    { domanda: "Qual è il protocollo per i siti web sicuri?", risposta: "PROTOCOLLO HTTPS", difficolta: 2 },
    { domanda: "Come si chiama la scheda che gestisce i video?", risposta: "SCHEDA VIDEO", difficolta: 2 },
    { domanda: "Qual è il linguaggio di programmazione per l'intelligenza artificiale?", risposta: "PYTHON", difficolta: 2 },
    { domanda: "Come si chiama la parte del computer che contiene i componenti principali?", risposta: "SCHEDA MADRE", difficolta: 2 },
    { domanda: "Qual è l'unità di misura della frequenza del processore?", risposta: "IL GIGAHERTZ", difficolta: 2 },
    { domanda: "Come si chiama l'insieme dei protocolli di internet?", risposta: "PROTOCOLLI TCP IP", difficolta: 2 },
    { domanda: "Qual è il linguaggio di programmazione per applicazioni desktop di Microsoft?", risposta: "LINGUAGGIO C SHARP", difficolta: 2 },
    { domanda: "Come si chiama il protocollo per trasferire file in rete?", risposta: "PROTOCOLLO FTP", difficolta: 2 },
    { domanda: "Qual è la tecnologia per collegare dispositivi senza fili?", risposta: "BLUETOOTH", difficolta: 2 },
    { domanda: "Come si chiama il formato di file per documenti portatili?", risposta: "FORMATO PDF", difficolta: 2 },
    { domanda: "Qual è il sistema per gestire database relazionali?", risposta: "LINGUAGGIO SQL", difficolta: 2 },
    { domanda: "Come si chiama il formato di immagine compresso più diffuso?", risposta: "FORMATO JPEG", difficolta: 2 },
    { domanda: "Qual è il linguaggio per creare app Android?", risposta: "LINGUAGGIO JAVA", difficolta: 2 },
    { domanda: "Come si chiama il formato di file audio compresso?", risposta: "FORMATO MP3", difficolta: 2 },
    { domanda: "Qual è il linguaggio per creare app iOS?", risposta: "LINGUAGGIO SWIFT", difficolta: 2 },
    { domanda: "Come si chiama il protocollo per la posta in arrivo?", risposta: "PROTOCOLLO POP3", difficolta: 2 },
    { domanda: "Qual è il formato di file per video compressi?", risposta: "FORMATO MP4", difficolta: 2 },
    { domanda: "Come si chiama il server che assegna automaticamente gli indirizzi IP in una rete?", risposta: "SERVER DHCP", difficolta: 2 },
    { domanda: "Come si chiama il sistema che traduce i nomi di dominio web in indirizzi IP?", risposta: "SISTEMA DNS", difficolta: 2 },
    { domanda: "Come si chiama l'attacco informatico che cerca di rubare credenziali tramite false email bancarie?", risposta: "ATTACCO PHISHING", difficolta: 2 },
    { domanda: "Come si chiama la parete virtuale di sicurezza che filtra il traffico di rete?", risposta: "IL FIREWALL", difficolta: 2 },
    { domanda: "Come si chiama la struttura dati in cui l'ultimo elemento inserito è il primo ad uscire?", risposta: "STRUTTURA PILA", difficolta: 2 },
    { domanda: "Come si chiama la struttura dati in cui il primo elemento inserito è il primo ad uscire?", risposta: "STRUTTURA CODA", difficolta: 2 },
    { domanda: "Come si chiama il sistema operativo server basato su Linux molto famoso nei webserver?", risposta: "DEBIAN LINUX", difficolta: 2 },
    { domanda: "Come si chiama l'ambiente di esecuzione JavaScript lato server basato sul motore V8?", risposta: "NODE JS", difficolta: 2 },
    { domanda: "Come si chiama l'infrastruttura di modellatura 3D e fogli stile web basata su griglie?", risposta: "FLEXBOX CSS", difficolta: 2 },
    { domanda: "Come si chiama il ciclo di controllo nei programmi che ripete finché una condizione è vera?", risposta: "CICLO WHILE", difficolta: 2 },

    // DIFFICILI (20)
    { domanda: "Come si chiama il protocollo per la crittografia delle comunicazioni web?", risposta: "PROTOCOLLO TLS", difficolta: 3 },
    { domanda: "Quale tecnologia permette la realtà aumentata sui telefonini?", risposta: "REALTA AUMENTATA", difficolta: 3 },
    { domanda: "Come si chiama il sistema per gestire dati su larga scala?", risposta: "BIG DATA", difficolta: 3 },
    { domanda: "Qual è la tecnologia per l'apprendimento automatico?", risposta: "MACHINE LEARNING", difficolta: 3 },
    { domanda: "Come si chiama il formato di file per contenitori multimediali?", risposta: "FORMATO MKV", difficolta: 3 },
    { domanda: "Qual è il linguaggio per la programmazione funzionale?", risposta: "LINGUAGGIO HASKELL", difficolta: 3 },
    { domanda: "Come si chiama il sistema per la gestione di versioni di codice?", risposta: "SISTEMA GIT", difficolta: 3 },
    { domanda: "Qual è il formato di file per documenti di testo semplice?", risposta: "FORMATO TXT", difficolta: 3 },
    { domanda: "Come si chiama il protocollo per la configurazione di rete automatica?", risposta: "PROTOCOLLO DHCP", difficolta: 3 },
    { domanda: "Qual è il linguaggio per la programmazione di sistemi operativi?", risposta: "LINGUAGGIO C", difficolta: 3 },
    { domanda: "Come si chiama il sistema per la gestione di container?", risposta: "DOCKER", difficolta: 3 },
    { domanda: "Qual è la tecnologia per il riconoscimento vocale?", risposta: "RICONOSCIMENTO VOCALE", difficolta: 3 },
    { domanda: "Come si chiama il formato di file per immagini vettoriali?", risposta: "FORMATO SVG", difficolta: 3 },
    { domanda: "Come si chiama l'algoritmo di crittografia asimmetrica basato sulla difficoltà di fattorizzazione di grandi numeri primi?", risposta: "CRITTOGRAFIA RSA", difficolta: 3 },
    { domanda: "Quale modello teorico di calcolo fu introdotto nel 1936 con nastro infinito e testina?", risposta: "MACCHINA DI TURING", difficolta: 3 },
    { domanda: "Come si chiama l'architettura software a microservizi orchestrata con Kubernetes?", risposta: "KUBERNETES", difficolta: 3 },
    { domanda: "Come si chiama l'attacco cibernetico che rende inaccessibile un server inondandolo di richieste?", risposta: "ATTACCO DDOS", difficolta: 3 },
    { domanda: "Come si chiama la tabella hash che risolve le collisioni con l'indirizzamento aperto?", risposta: "TABELLA HASH", difficolta: 3 },
    { domanda: "Come si chiama l'algoritmo di ordinamento rapido basato sul paradigma Divide et Impera?", risposta: "QUICKSORT", difficolta: 3 },
    { domanda: "Come si chiama il pattern architetturale Model-View-Controller ampiamente usato nello sviluppo web?", risposta: "MODELLO MVC", difficolta: 3 }
  ],

  // ==========================================================
  // RELIGIONE (100)
  // ==========================================================
  "Religione": [
    // FACILI (50)
    { domanda: "Qual è il libro sacro dei cristiani?", risposta: "LA BIBBIA", difficolta: 1 },
    { domanda: "Qual è il libro sacro dell'Islam?", risposta: "IL CORANO", difficolta: 1 },
    { domanda: "Qual è il libro sacro dell'ebraismo?", risposta: "LA TORAH", difficolta: 1 },
    { domanda: "Chi è il fondatore del cristianesimo?", risposta: "GESU CRISTO", difficolta: 1 },
    { domanda: "Chi è il fondatore dell'Islam?", risposta: "MAOMETTO", difficolta: 1 },
    { domanda: "Chi è il fondatore del buddismo?", risposta: "IL BUDDA", difficolta: 1 },
    { domanda: "Come si chiama il luogo di culto dei cristiani?", risposta: "LA CHIESA", difficolta: 1 },
    { domanda: "Come si chiama il luogo di culto degli ebrei?", risposta: "LA SINAGOGA", difficolta: 1 },
    { domanda: "Come si chiama il luogo di culto dei musulmani?", risposta: "LA MOSCHEA", difficolta: 1 },
    { domanda: "Quanti sono i Vangeli canonici?", risposta: "QUATTRO VANGELI", difficolta: 1 },
    { domanda: "Chi è il capo della Chiesa cattolica?", risposta: "IL PAPA", difficolta: 1 },
    { domanda: "Qual è la città santa per l'Islam?", risposta: "LA MECCA", difficolta: 1 },
    { domanda: "Qual è la città santa per l'ebraismo?", risposta: "GERUSALEMME", difficolta: 1 },
    { domanda: "Qual è la festa cristiana che celebra la nascita di Gesù?", risposta: "IL NATALE", difficolta: 1 },
    { domanda: "Qual è la festa cristiana che celebra la resurrezione di Gesù?", risposta: "LA PASQUA", difficolta: 1 },
    { domanda: "Come si chiama il digiuno dei musulmani?", risposta: "IL RAMADAN", difficolta: 1 },
    { domanda: "Come si chiama il pellegrinaggio dei musulmani alla Mecca?", risposta: "IL PELLEGRINAGGIO", difficolta: 1 },
    { domanda: "Chi ha ricevuto le tavole dei Dieci Comandamenti?", risposta: "MOSE", difficolta: 1 },
    { domanda: "Qual è la festa che celebra la discesa dello Spirito Santo sugli Apostoli?", risposta: "PENTECOSTE", difficolta: 1 },
    { domanda: "Come si chiama la madre di Gesù Cristo secondo i Vangeli?", risposta: "MARIA VERGINE", difficolta: 1 },
    { domanda: "Come si chiama il padre putativo di Gesù?", risposta: "GIUSEPPE", difficolta: 1 },
    { domanda: "Come si chiama il luogo dove Gesù fu crocifisso?", risposta: "IL GOLGOTA", difficolta: 1 },
    { domanda: "In quale città nacque Gesù Cristo secondo la tradizione evangelica?", risposta: "BETLEMME", difficolta: 1 },
    { domanda: "In quale regione storica visse e predicò prevalentemente Gesù?", risposta: "GALILEA", difficolta: 1 },
    { domanda: "Chi tradì Gesù per trenta denari d'argento?", risposta: "GIUDA ISCARIOTA", difficolta: 1 },
    { domanda: "Quale apostolo rinnegò Gesù tre volte prima che il gallo cantasse?", risposta: "PIETRO APOSTOLO", difficolta: 1 },
    { domanda: "Quanti erano gli apostoli scelti da Gesù?", risposta: "DODICI APOSTOLI", difficolta: 1 },
    { domanda: "Come si chiama il sacramento di ingresso nella comunità cristiana?", risposta: "IL BATTESIMO", difficolta: 1 },
    { domanda: "Come si chiama il sacramento del perdono dei peccati da parte del sacerdote?", risposta: "CONFESSIONE", difficolta: 1 },
    { domanda: "Come si chiama il sacramento della confermazione del battesimo?", risposta: "CRESIMA", difficolta: 1 },
    { domanda: "Come si chiama l'unione sacra tra uomo e donna benedetta in chiesa?", risposta: "MATRIMONIO", difficolta: 1 },
    { domanda: "Chi è l'angelo dell'Annunciazione a Maria?", risposta: "ARCANGELO GABRIELE", difficolta: 1 },
    { domanda: "Come si chiama l'arca costruita per salvarsi dal diluvio universale?", risposta: "ARCA DI NOE", difficolta: 1 },
    { domanda: "Come si chiama il primo uomo creato da Dio nella Genesi?", risposta: "ADAMO", difficolta: 1 },
    { domanda: "Come si chiama la prima donna creata da Dio nella Genesi?", risposta: "EVA", difficolta: 1 },
    { domanda: "Chi fu ucciso da suo fratello Caino?", risposta: "ABELE", difficolta: 1 },
    { domanda: "Quale celebre re d'Israele sconfisse il gigante Golia?", risposta: "RE DAVIDE", difficolta: 1 },
    { domanda: "Quale re d'Israele fu famoso per la sua grande saggezza?", risposta: "RE SALOMONE", difficolta: 1 },
    { domanda: "Come si chiama la festa ebraica delle luci?", risposta: "HANUKKAH", difficolta: 1 },
    { domanda: "Come si chiama il copricapo circolare indossato dagli ebrei maschi?", risposta: "KIPPAH", difficolta: 1 },
    { domanda: "Come si chiama il candelabro a sette bracci della tradizione ebraica?", risposta: "MENORAH", difficolta: 2 },
    { domanda: "Come si chiama la guida spirituale di una comunità ebraica?", risposta: "IL RABBINO", difficolta: 1 },
    { domanda: "Come si chiama la guida spirituale delle preghiere in moschea?", risposta: "L IMAM", difficolta: 1 },
    { domanda: "Come si chiama la torre della moschea da cui si chiama alla preghiera?", risposta: "MINARETO", difficolta: 1 },
    { domanda: "Quante volte al giorno un musulmano praticante recita la preghiera prescritta?", risposta: "CINQUE VOLTE", difficolta: 1 },
    { domanda: "Come si chiama il principio di causa ed effetto nelle religioni orientali?", risposta: "IL KARMA", difficolta: 1 },
    { domanda: "Come si chiama la reincarnazione dell'anima in un nuovo corpo dopo la morte?", risposta: "REINCARNAZIONE", difficolta: 1 },
    { domanda: "Come si chiama lo stato di liberazione dal soffrire nel buddismo?", risposta: "NIRVANA", difficolta: 1 },
    { domanda: "Come si chiama il fiume sacro per gli induisti dove ci si purifica?", risposta: "IL FIUME GANGE", difficolta: 1 },
    { domanda: "Quale animale è considerato particolarmente sacro nell'induismo in India?", risposta: "LA VACCA", difficolta: 1 },

    // MEDIE (30)
    { domanda: "Come si chiama il primo libro della Bibbia?", risposta: "IL LIBRO DELLA GENESI", difficolta: 2 },
    { domanda: "Chi ha battezzato Gesù nel fiume Giordano?", risposta: "GIOVANNI BATTISTA", difficolta: 2 },
    { domanda: "Come si chiama la preghiera più importante del cristianesimo?", risposta: "PADRE NOSTRO", difficolta: 2 },
    { domanda: "Chi ha fondato la religione ebraica secondo la tradizione?", risposta: "ABRAMO", difficolta: 2 },
    { domanda: "Come si chiama il libro sacro dei mormoni?", risposta: "LIBRO DI MORMON", difficolta: 2 },
    { domanda: "Chi ha scritto le Lettere ai Corinzi?", risposta: "SAN PAOLO", difficolta: 2 },
    { domanda: "Come si chiama il sacramento del pane e del vino?", risposta: "L EUCARESTIA", difficolta: 2 },
    { domanda: "Chi è il profeta dell'Islam?", risposta: "MAOMETTO", difficolta: 2 },
    { domanda: "Chi ha fondato la religione buddista?", risposta: "SIDDHARTHA GAUTAMA", difficolta: 2 },
    { domanda: "Chi è il successore di Pietro nella Chiesa cattolica?", risposta: "IL PAPA", difficolta: 2 },
    { domanda: "Come si chiama il libro sacro degli induisti?", risposta: "I VEDA", difficolta: 2 },
    { domanda: "Qual è la religione più diffusa al mondo?", risposta: "IL CRISTIANESIMO", difficolta: 2 },
    { domanda: "Qual è la seconda religione più diffusa al mondo?", risposta: "L ISLAM", difficolta: 2 },
    { domanda: "Come si chiama il giorno sacro degli ebrei?", risposta: "IL SABATO", difficolta: 2 },
    { domanda: "Come si chiama il giorno sacro dei cristiani?", risposta: "LA DOMENICA", difficolta: 2 },
    { domanda: "Come si chiama il giorno sacro dei musulmani?", risposta: "IL VENERDI", difficolta: 2 },
    { domanda: "Come si chiama il viaggio di Maometto dalla Mecca a Medina?", risposta: "L EGIRA", difficolta: 2 },
    { domanda: "Come si chiama il sacramento del battesimo nella religione cristiana?", risposta: "IL BATTESIMO", difficolta: 2 },
    { domanda: "Chi ha tradotto la Bibbia in latino?", risposta: "SAN GIROLAMO", difficolta: 2 },
    { domanda: "Come si chiama il testo sacro dei buddisti?", risposta: "IL TIPITAKA", difficolta: 2 },
    { domanda: "Come si chiama l'uscita degli Ebrei dall'Egitto sotto la guida di Mosè descritta nella Bibbia?", risposta: "IL LIBRO DELL ESODO", difficolta: 2 },
    { domanda: "Come si chiama la festa ebraica che commemora l'uscita dall'Egitto?", risposta: "PESACH", difficolta: 2 },
    { domanda: "Come si chiama il giorno dell'espiazione ed è la ricorrenza più sacra dell'ebraismo?", risposta: "YOM KIPPUR", difficolta: 2 },
    { domanda: "Chi è considerato il patriarca fondatore comune di ebraismo, cristianesimo e islam?", risposta: "ABRAMO", difficolta: 2 },
    { domanda: "Come si chiama la raccolta delle tradizioni e dei detti attribuiti al profeta Maometto?", risposta: "GLI HADITH", difficolta: 2 },
    { domanda: "Come si chiama la legge religiosa islamica basata sul Corano e la Sunna?", risposta: "SHARIA", difficolta: 2 },
    { domanda: "Come si chiama la divinità suprema dell'induismo considerata il creatore dell'universo?", risposta: "BRAHMA", difficolta: 2 },
    { domanda: "Come si chiama la divinità induista conservatrice dell'universo?", risposta: "VISHNU", difficolta: 2 },
    { domanda: "Come si chiama la divinità induista distruttrice e rigeneratrice dell'universo?", risposta: "SHIVA", difficolta: 2 },
    { domanda: "Come si chiama la massima autorità spirituale del buddismo tibetano?", risposta: "DALAI LAMA", difficolta: 2 },

    // DIFFICILI (20)
    { domanda: "Come si chiama il Concilio che definì la natura di Cristo nel trecentoventicinque?", risposta: "CONCILIO DI NICEA", difficolta: 3 },
    { domanda: "Chi è il fondatore della religione sikh?", risposta: "GURU NANAK", difficolta: 3 },
    { domanda: "Come si chiama il codice di leggi ebraiche?", risposta: "IL TALMUD", difficolta: 3 },
    { domanda: "Chi è il profeta che ha fondato il mormonismo?", risposta: "JOSEPH SMITH", difficolta: 3 },
    { domanda: "Come si chiama il mese sacro degli ebrei?", risposta: "IL MESE DI TISHRI", difficolta: 3 },
    { domanda: "Chi ha fondato la religione Bahai?", risposta: "BAHA ULLAH", difficolta: 3 },
    { domanda: "Come si chiama il testo sacro degli zoroastriani?", risposta: "L AVESTA", difficolta: 3 },
    { domanda: "Chi è il fondatore del taoismo?", risposta: "LAO TZU", difficolta: 3 },
    { domanda: "Come si chiama il testo sacro del taoismo?", risposta: "TAO TE CHING", difficolta: 3 },
    { domanda: "Chi è il fondatore del confucianesimo?", risposta: "CONFUCIO", difficolta: 3 },
    { domanda: "Come si chiama il testo sacro del confucianesimo?", risposta: "LIBRO DEI MUTAMENTI", difficolta: 3 },
    { domanda: "Come si chiama il libro sacro dei parsi?", risposta: "LIBRO DELL AVESTA", difficolta: 3 },
    { domanda: "Come si chiama il luogo sacro dell'Islam a Gerusalemme?", risposta: "MOSCHEA DI AL AQSA", difficolta: 3 },
    { domanda: "Quale concilio ecumenico svoltosi tra il 1545 e il 1563 diede avvio alla Controriforma cattolica?", risposta: "CONCILIO DI TRENTO", difficolta: 3 },
    { domanda: "Come si chiama la corrente mistica dell'Islam basata sulla ricerca dell'unione personale con Dio?", risposta: "SUFISMO", difficolta: 3 },
    { domanda: "Quale trattato di mistica ebraica cabalistica attribuisce un valore simbolico alle lettere dell'alfabeto?", risposta: "IL ZOHAR", difficolta: 3 },
    { domanda: "Quale dottrina protestante formulata a Ginevra nel XVI secolo afferma la predestinazione divina?", risposta: "CALVINISMO", difficolta: 3 },
    { domanda: "Come si chiama la scissione avvenuta nel 1054 tra la Chiesa Cattolica romana e la Chiesa Ortodossa orientale?", risposta: "GRANDE SCISMA", difficolta: 3 },
    { domanda: "Come si chiama l'accordo di pace del 1555 che stabilì il principio cuius regio, eius religio?", risposta: "PACE DI AUGUSTA", difficolta: 3 },
    { domanda: "Come si chiama l'opera teologica di Sant'Anselmo d'Aosta contenente l'argomento ontologico dell'esistenza di Dio?", risposta: "PROSLOGION", difficolta: 3 }
  ]

}; // fine DATABASE


// ============================================================
// GESTIONE DOMANDE PER MATERIA E DIFFICOLTÀ
// ============================================================
// ============================================================
// GESTIONE DOMANDE - Estrazione casuale per difficoltà
// ============================================================
// Logica:
// - Ogni materia ha 3 pool separati per difficoltà (1, 2, 3)
// - Il giocatore pesca dal pool della difficoltà più bassa non ancora esaurita
// - Dentro il pool, l'estrazione è casuale (shuffle Fisher-Yates)
// - Quando un pool si esaurisce, si passa al successivo
// - Quando tutti si esauriscono, si resetta la materia
// - Le risposte vengono NORMALIZZATE (solo A-Z e spazi) per evitare
//   problemi con la tastiera virtuale (accenti, apostrofi, punteggiatura)

// Stato per ogni materia:
// {
//   pool: { 1: [domande], 2: [...], 3: [...] },  // domande non ancora estratte
//   corrente: 1|2|3,                              // difficoltà attiva
//   usate: numero totale domande estratte
// }
const statoMaterie = {};

// Normalizza una risposta: solo lettere A-Z e spazi singoli.
// Es: "L'AFFRESCO" → "L AFFRESCO"; "ENCÀUSTICA" → "ENCAUSTICA"; "CITTÀ DEL VATICANO" → "CITTA DEL VATICANO"
function normalizzaRisposta(risposta) {
  if (!risposta) return '';
  return risposta
    .toUpperCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // rimuove accenti
    .replace(/[^A-Z\s]/g, ' ')                         // tutto ciò che non è A-Z/spazio diventa spazio
    .replace(/\s+/g, ' ')                              // spazi multipli → spazio singolo
    .trim();
}

// Filtro: la risposta normalizzata deve avere almeno 6 lettere
function isDomandaValida(q) {
  if (!q || !q.risposta) return false;
  const normalizzata = normalizzaRisposta(q.risposta);
  const pulita = normalizzata.replace(/\s+/g, '');
  return pulita.length >= 6;
}

// Shuffle Fisher-Yates
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Inizializza lo stato di una materia (pool + shuffle)
function initMateria(materia) {
  const lista = DATABASE[materia];
  if (!lista) {
    statoMaterie[materia] = { pool: { 1: [], 2: [], 3: [] }, corrente: 1, usate: 0 };
    return;
  }

  // Filtra e normalizza le risposte prima di inserirle nel pool
  const valide = [];
  lista.forEach(q => {
    if (!isDomandaValida(q)) return;
    valide.push({
      domanda: q.domanda,
      risposta: normalizzaRisposta(q.risposta),
      difficolta: q.difficolta || 1
    });
  });

  const pool = { 1: [], 2: [], 3: [] };
  valide.forEach(q => {
    const d = (q.difficolta >= 1 && q.difficolta <= 3) ? q.difficolta : 1;
    pool[d].push(q);
  });

  // Shuffle ogni pool (estrazione casuale dentro la difficoltà)
  pool[1] = shuffle(pool[1]);
  pool[2] = shuffle(pool[2]);
  pool[3] = shuffle(pool[3]);

  // Difficoltà di partenza = la più bassa non vuota
  let corrente = 1;
  if (pool[1].length === 0) corrente = pool[2].length > 0 ? 2 : 3;

  statoMaterie[materia] = { pool, corrente, usate: 0 };
}

// Inizializza tutte le materie
function initContatoriDomande() {
  for (const materia in DATABASE) {
    initMateria(materia);
  }
}

// Estrae la prossima domanda per una materia
// - Pesca casualmente dal pool della difficoltà corrente
// - Quando il pool è esaurito, passa alla difficoltà successiva
// - Quando tutti i pool sono esauriti, resetta la materia e ricomincia da 1
function getNextQuestion(materia) {
  if (!statoMaterie[materia]) initMateria(materia);
  const s = statoMaterie[materia];
  if (!s) return null;

  // Cerca il pool più basso non vuoto >= corrente
  for (let d = s.corrente; d <= 3; d++) {
    if (s.pool[d] && s.pool[d].length > 0) {
      s.corrente = d;
      const q = s.pool[d].pop();
      s.usate += 1;
      return q;
    }
  }

  // Tutti esauriti → reset materia e ricomincia da difficoltà 1
  initMateria(materia);
  return getNextQuestion(materia);
}

// Reset contatore di una materia
function resetContatoreMateria(materia) {
  initMateria(materia);
}

// Reset di TUTTE le materie
function resetTuttiContatori() {
  initContatoriDomande();
}

// Numero di domande ancora disponibili per una materia
function domandeRimanenti(materia) {
  const s = statoMaterie[materia];
  if (!s) return 0;
  return (s.pool[1]?.length || 0) + (s.pool[2]?.length || 0) + (s.pool[3]?.length || 0);
}

// Serializza lo stato per il salvataggio
function serializzaStatoMaterie() {
  const out = {};
  for (const m in statoMaterie) {
    const s = statoMaterie[m];
    out[m] = {
      usate: s.usate,
      corrente: s.corrente,
      rimaste: {
        1: s.pool[1].map(q => q.domanda),
        2: s.pool[2].map(q => q.domanda),
        3: s.pool[3].map(q => q.domanda)
      }
    };
  }
  return out;
}

// Ripristina lo stato da un salvataggio
function ripristinaStatoMaterie(salvato) {
  if (!salvato) return;
  for (const m in statoMaterie) {
    if (!salvato[m]) continue;
    const s = statoMaterie[m];
    const sv = salvato[m];
    s.usate = sv.usate || 0;
    s.corrente = sv.corrente || 1;
    if (sv.rimaste) {
      [1, 2, 3].forEach(d => {
        const rimasteSet = new Set(sv.rimaste[d] || []);
        s.pool[d] = s.pool[d].filter(q => rimasteSet.has(q.domanda));
      });
    }
  }
}

// Inizializza
initContatoriDomande();

// Report in console
(function reportDatabase() {
  let totale = 0, valide = 0;
  for (const m in DATABASE) {
    totale += DATABASE[m].length;
    valide += DATABASE[m].filter(isDomandaValida).length;
  }
  console.log('[DATABASE] Totale:', totale, '| Valide (>=6 lettere dopo normalizzazione):', valide, '| Scartate:', totale - valide);
})();

