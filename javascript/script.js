function pause(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function afficherDate() {
    while (true) {
        await pause(1000);
        var cejour = new Date();
        var options = { weekday: "long", year: "numeric", month: "long", day: "2-digit" };
        var date = cejour.toLocaleDateString("fr-FR", options);
        var heure = ("0" + cejour.getHours()).slice(-2) + ":" + ("0" + cejour.getMinutes()).slice(-2) + ":" + ("0" + cejour.getSeconds()).slice(-2);
        var dateheure = date + " " + heure;
        var dateheure = dateheure.replace(/(^\w{1})|(\s+\w{1})/g, lettre => lettre.toUpperCase());
        document.getElementById("datetime").innerHTML = dateheure;
    }
}
afficherDate();

function envoi() {

    var lastname = document.getElementById('lastname').value;
    var firstname = document.getElementById('firstname').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (lastname == '' || firstname == '' || email == '' || message == '') {
        alert('Veuillez remplir tous les champs');
    } else {
        alert('Votre message a bien été envoyé !')
        window.location.reload();
    }
}
envoi();