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