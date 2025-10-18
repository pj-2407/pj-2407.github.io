/* ############################################################################
    #                                                                          #
    #                              JAVASCRIPT                                  #
    # To jest plik z kodem JavaScript. Odpowiada on za całą interaktywność      #
    # na stronie, czyli za wszystko to, co "dzieje się" po kliknięciu itp.      #
    #                                                                          #
    ############################################################################
*/


// Czekamy, aż cała strona się załaduje, zanim uruchomimy nasz kod.
document.addEventListener('DOMContentLoaded', function() {

    // Znajdź w dokumencie HTML przycisk o identyfikatorze 'magicButton'
    const magicButton = document.getElementById('magicButton');
    
    // Znajdź w dokumencie HTML paragraf o identyfikatorze 'funFact'
    const funFactParagraph = document.getElementById('funFact');
    
    // Stwórz listę (tablicę) z ciekawostkami
    const ciekawostki = [
        "Pierwsza strona internetowa na świecie wciąż działa!",
        "W języku JavaScript '[]' jest równe '![]'. Dziwne, prawda?",
        "Kot potrafi wydać z siebie około 100 różnych dźwięków. Pies tylko 10.",
        "Banany są jagodami, ale truskawki nie."
    ];

    // Dodaj 'słuchacza' na kliknięcie. Czeka, aż ktoś kliknie przycisk.
    magicButton.addEventListener('click', function() {
        // Wybierz losową ciekawostkę z naszej listy
        const losowyIndeks = Math.floor(Math.random() * ciekawostki.length);
        const losowaCiekawostka = ciekawostki[losowyIndeks];
    
        // Wstaw wylosowaną ciekawostkę do paragrafu na stronie
        funFactParagraph.textContent = losowaCiekawostka;
    });

});
