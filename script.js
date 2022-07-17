//LINKPAGINA
function openUrl(url, pagina) {
    window.open(url, pagina)
}


//COPIATESTO
function copia(testo) {
    var input = document.createElement('input');
    var area = document.getElementById(testo).value;
    input.setAttribute('value', area);
    document.body.appendChild(input);
    input.select();
    var risultato = document.execCommand('copy');
    document.body.removeChild(input);
    alert('testo copiato: '+ area);
    return risultato;
}


//FAQ
var faq = document.getElementsByClassName("faq-page");
var i;

for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}