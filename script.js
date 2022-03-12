function openUrl(url, pagina) {
    window.open(url, pagina)
}



function copia(testo) {
    var input = document.createElement('input');
    var copia = document.getElementById(testo).value;
    input.setAttribute('value', copia);
    document.body.appendChild(input);
    input.select();
    var risultato = document.execCommand('copy');
    document.body.removeChild(input);
    alert('IL TESTO È STATO COPIATO CON SUCCESSO!');
    return risultato;
}

