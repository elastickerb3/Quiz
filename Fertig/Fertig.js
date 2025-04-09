// Punkte Anzahl herausfinden
let Url = window.location;
let url = new URL(Url)
let punkte = url.searchParams.get("punkte");
let maxlevel = url.searchParams.get("maxlevel")
let feld = document.querySelector(".Punkte");
feld.innerHTML = "Du bist jetzt fertig was willst du machen?(Du hast " + punkte + " fragen von " + maxlevel + " richtig beantwortet)"