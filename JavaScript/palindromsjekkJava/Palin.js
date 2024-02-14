function sjekkPalindrom() {
    var inputTall = document.getElementById("inputTall").value;
    var tekststreng = inputTall.toString();
    var tekstlengde = tekststreng.length;
    var erPalindrom = true;

    for (var i = 0; i < tekstlengde / 2; i++) {
        if (tekststreng[i] !== tekststreng[tekstlengde - 1 - i]) {
            erPalindrom = false;
            break;
        }
    }

    if (erPalindrom) {
        alert("Inputet er et PALINDROM!!");
    } else {
        alert("Inputet er ikke et palindrom.");
    }
}



