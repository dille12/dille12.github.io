// Array of prompts with placeholders for 1, 2, or 3 players
const prompts = [
    "{player1}, anna kaksi rangaistusta valitsemillesi pelaajille.",
    "{player1}, valitse yksi pelaaja, joka tanssii hauskan tanssin 30 sekuntia.",
    "{player1}, määrää rangaistus {player2}:lle ja {player3}:lle. Heidän on suoritettava sama rangaistus.",
    "{player1}, anna kolme rangaistusta. Yksi täytyy olla {player2}:lle ja kaksi muuta voi olla kenelle tahansa pelaajalle.",
    "{player1}, tee sääntö, jota kaikkien on noudatettava seuraavien 10 minuutin ajan. Jos joku rikkoo sen, hän saa rangaistuksen.",
    "{player1}, valitse yksi pelaaja puhumaan valitsemallasi aksentilla seuraavat 5 minuuttia.",
    "{player1}, kaikkien on otettava juoma. Kuitenkin {player2}:lle ja {player3}:lle annetaan lisäksi rangaistus.",
    "{player1}, anna rangaistus kaikille pelaajille, jotka eivät ole puhuneet viimeisten 10 minuutin aikana.",
    "{player1}, anna {player2}:lle hassu tehtävä. Jos he kieltäytyvät tai epäonnistuvat, he saavat rangaistuksen.",
    "{player1}, valitse numero 1 ja 5 väliltä. Se on rangaistusten määrä, jonka sinun on annettava jaettuna pelaajien kesken.",
    "{player1}, valitse yksi pelaaja pukemaan päällensä hassu asu seuraavaksi 15 minuutiksi.",
    "{player1}, anna rangaistus pelaajalle, jolla on vähiten juomia edessään.",
    "{player1}, kaikkien on jaettava nolo tarina. Jos joku kieltäytyy, hän saa rangaistuksen.",
    "{player1}, luo uusi sääntö, jota on noudatettava seuraavan kierroksen ajan. Jos sääntöä rikotaan, rangaistus annetaan sääntöä rikkovalle.",
    "{player1}, määrää satunnainen aktiviteetti {player2}:lle, joka on suoritettava seuraavat 5 minuuttia.",
    "{player1}, kaikkien pelaajien on vuorotellen tehtävä eläinääniä. Jos joku epäonnistuu tai kieltäytyy, hän saa rangaistuksen.",
    "{player1}, anna rangaistus pelaajalle, joka viimeksi katsoi sinua silmiin.",
    "{player1}, valitse pelaaja antamaan sinulle kohteliaisuus. Jos he kieltäytyvät tai se ei ole tarpeeksi hyvä, he saavat rangaistuksen.",
    "{player1}, kaikkien on keksittävä uusi lempinimi {player2}:lle. Jos {player2} ei pidä siitä, nimenkeksijät saavat rangaistuksen.",
    "{player1}, määrää satunnainen, harmiton tehtävä {player3}:lle. Jos he eivät suorita sitä 3 minuutissa, he saavat rangaistuksen.",
    "{player1}, valitse pelaaja tekemään nopea tietovisa. Jokaisesta väärästä vastauksesta he saavat rangaistuksen.",
    "{player1}, kaikkien pelaajien on pidettävä hengitystään 10 sekuntia. Jos joku epäonnistuu tai huijaa, hän saa rangaistuksen.",
    "{player1}, anna rangaistus kaikille pelaajille, jotka eivät ole kertoneet vitsejä vielä. Jos kaikki ovat kertoneet, se on vapaa pass.",
    "{player1}, valitse pelaaja laulamaan valitsemasi kappale. Jos he kieltäytyvät tai epäonnistuvat, he saavat rangaistuksen.",
    "{player1}, vaihda kaikkien istumapaikat jonkun muun kanssa. Jos joku vastustaa, hän saa rangaistuksen.",
    "{player1}, määrää satunnainen aihe, jota kaikkien on käsiteltävä seuraavat 5 minuuttia. Jos joku kieltäytyy tai ei osallistu, he saavat rangaistuksen.",
    "{player1}, anna rangaistus pelaajalle, joka käyttää eniten aikaa seuraavan juomansa lopettamiseen.",
    "{player1}, valitse yksi pelaaja lukemaan satunnainen sivu kirjasta tai artikkelista ääneen. Jos he kieltäytyvät tai epäonnistuvat, he saavat rangaistuksen.",
    "{player1}, anna rangaistus {player2}:lle. Heidän on esitettävä valitsemasi charade.",
    "{player1}, luo uusi sääntö, jota on noudatettava seuraavaan vuoroosi asti. Jos joku rikkoo sitä, hän saa rangaistuksen.",
    "{player1}, valitse yksi pelaaja tekemään hassu jäljitelmä julkkiksesta seuraavat 3 minuuttia.",
    "{player1}, anna rangaistus kaikille pelaajille, jotka ovat käyttäneet puhelintaan viimeisten 15 minuutin aikana.",
    "{player1}, kaikkien on tehtävä parhaat tanssiliikkeensä. Huonoin tanssija saa rangaistuksen.",
    "{player1}, valitse pelaaja keksimään riimittelyruno paikan päällä. Jos he epäonnistuvat, he saavat rangaistuksen.",
    "{player1}, määrää {player2}:lle tehtävä, jossa he piirtävät jotain ei-dominantilla kädellään. Jos se ei ole tunnistettavissa, he saavat rangaistuksen.",
    "{player1}, anna rangaistus pelaajalle, joka viimeksi keskeytti jonkun pelin aikana.",
    "{player1}, valitse pelaaja keksimään hassu lempinimi kaikille pöydän ääressä oleville. Jos joku vastustaa, hän saa rangaistuksen.",
    "{player1}, anna kaikille juoma ja anna sitten ylimääräinen rangaistus kaikille, jotka eivät juoneet juomaansa nopeasti.",
    "{player1}, valitse yksi pelaaja lausumaan kielioppiharjoitus. Jos he epäonnistuvat tai epäröivät, he saavat rangaistuksen.",
    "{player1}, määrää satunnainen hassu aktiviteetti (kuten pomppiminen yhdellä jalalla) {player2}:lle seuraavaksi 3 minuutiksi. Jos he kieltäytyvät, he saavat rangaistuksen.",
    "{player1}, kaikkien on puhuttava elokuvan lainauksilla seuraavat 5 minuuttia. Jos joku epäonnistuu, he saavat rangaistuksen.",
    "{player1}, anna rangaistus pelaajalle, jolla on eniten juomaa jäljellä lasissaan.",
    "{player1}, valitse yksi pelaaja keksimään uusi sääntö peliin. Jos sääntöä ei noudateta, kaikki muut saavat rangaistuksen.",
    "{player1}, kaikkien pelaajien on vaihdettava vaatekappale jollekin muulle pöydän ääressä. Jos joku kieltäytyy, hän saa rangaistuksen.",
    "{player1}, valitse pelaaja tekemään sinusta jäljitelmä. Jos he kieltäytyvät tai epäonnistuvat, he saavat rangaistuksen.",
    "{player1}, määrää satunnainen esine {player2}:lle. Heidän on käytettävä sitä rekvisiittana pienessä sketsissä. Jos he kieltäytyvät tai epäonnistuvat, he saavat rangaistuksen.",
    "{player1}, anna rangaistus kaikille pelaajille, jotka eivät ole arvanneet numeroa oikein viimeisten 10 minuutin aikana.",
    "{player1}, valitse yksi pelaaja kertomaan vitsi. Jos se ei saa naurua, he saavat rangaistuksen.",
    "{player1}, kaikkien on keksittävä uusi, kuvitteellinen sana. Huonoin sana, sinun arvostelusi mukaan, saa rangaistuksen.",
    "{player1}, valitse pelaaja pukeutumaan naurettavaan hattuun tai asusteeseen seuraavaksi 10 minuutiksi. Jos he kieltäytyvät, he saavat rangaistuksen.",
    "{player1}, määrää rangaistus {player2}:lle. Heidän on laulettava heidän suosikkikappaleensa kertosäe.",
    "{player1}, valitse yksi pelaaja jakamaan hauska fakta itsestään. Jos he kieltäytyvät tai se ei ole kiinnostavaa, he saavat rangaistuksen.",
    "{player1}, anna rangaistus pelaajalle, joka on viimeinen antamaan high-five kaikille muille.",
    "{player1}, valitse pelaaja antamaan sinulle malja. Jos se ei ole mielestäsi hyvä, he saavat rangaistuksen.",
    "{player1}, kaikkien on yritettävä jongleerata kolmea esinettä. Jos joku epäonnistuu tai kieltäytyy, he saavat rangaistuksen.",
    "{player1}, määrää satunnainen hassu tehtävä (kuten pomppiminen kuin kani) {player2}:lle. Jos he kieltäytyvät tai epäonnistuvat, he saavat rangaistuksen.",
    "{player1}, kaikkien on lausuttava satunnainen lainaus elokuvasta tai TV-ohjelmasta. Jos joku epäonnistuu, hän saa rangaistuksen.",
    "{player1}, anna rangaistus kaikille pelaajille, jotka eivät ole vielä jakaneet henkilökohtaista anekdoottia.",
    "{player1}, määrää {player2}:lle tehtäväksi keksiä lyhyt runo pelistä. Jos se ei valmistu 3 minuutissa, he saavat rangaistuksen.",
    "{player1}, valitse yksi pelaaja lausumaan satunnainen kielioppiharjoitus. Jos heillä on vaikeuksia, he saavat rangaistuksen.",
    "{player1}, kaikkien on keksittävä ainutlaatuinen tanssiliike. Huonoin tanssija saa rangaistuksen.",
    "{player1}, anna rangaistus kaikille pelaajille, jotka eivät ole osallistuneet viime kierrokseen.",
    "{player1}, määrää rangaistus {player2}:lle. Heidän on suoritettava satunnainen ystävällinen teko toiselle pelaajalle.",
    "{player1}, valitse pelaaja keksimään uusi pelisääntö. Jos sääntöä ei hyväksytä ryhmässä, he saavat rangaistuksen.",
    "{player1}, anna kaikille juoma ja sitten anna ylimääräinen rangaistus kaikille, jotka eivät juoneet juomaansa nopeasti.",
    "{player1}, valitse yksi pelaaja kertomaan todellinen tarina, joka tapahtui heille viime viikon aikana. Jos se ei ole kiinnostavaa, he saavat rangaistuksen.",
    "{player1}, määrää rangaistus {player2}:lle. Heidän on puhuttava keksityllä kielellä seuraavat 5 minuuttia.",
    "{player1}, anna rangaistus pelaajalle, jolla on vähiten juomaa jäljellä lasissaan.",
    "{player1}, valitse pelaaja esittämään nopea sketsi satunnaisesta tilanteesta, jonka keksit. Jos he kieltäytyvät tai epäonnistuvat, he saavat rangaistuksen.",
    "{player1}, kaikkien on keksittävä uusi lempinimi {player1}:lle. Paras lempinimi voittaa, ja muut saavat rangaistuksen.",
    "{player1}, anna rangaistus kaikille pelaajille, jotka eivät ole vielä tehneet maljaa.",
    "{player1}, määrää satunnainen tanssityyli (kuten salsa tai breakdance) {player2}:lle. Jos he eivät tanssi sitä, he saavat rangaistuksen.",
    "{player1}, kaikkien on jaettava salainen taito. Huonoin taito saa rangaistuksen.",
    "{player1}, valitse yksi pelaaja kertomaan tarina vain eleillä. Jos he eivät tule ymmärretyiksi, he saavat rangaistuksen.",
    "{player1}, anna rangaistus pelaajalle, joka viimeksi käytti puhelintaan tai lähti huoneesta."
];
// Array to store users
let users = [];

// Function to add a user
function addUser() {
    const userName = prompt("Enter the name of the user:");
    if (userName) {
        users.push(userName);
        updateUserList();
    }
}

// Function to update the user list display
function updateUserList() {
    const userList = document.getElementById('user-list');
    userList.innerHTML = ""; // Clear the current list

    users.forEach((user, index) => {
        const li = document.createElement('li');
        li.innerText = `${index + 1}. ${user}`;
        userList.appendChild(li);
    });
}

// Function to start the app
function startApp() {
    if (users.length > 0) {
        document.getElementById('user-management').style.display = 'none';
        document.getElementById('prompt-container').style.display = 'block';
    } else {
        alert("Please add at least one user before continuing.");
    }
}

// Function to display a random prompt with players' names
function displayRandomPrompt() {
    const randomIndex = Math.floor(Math.random() * prompts.length);
    let randomPrompt = prompts[randomIndex];

    const selectedPlayers = selectRandomPlayers(randomPrompt);

    if (selectedPlayers) {
        selectedPlayers.forEach((player, index) => {
            randomPrompt = randomPrompt.replace(`{player${index + 1}}`, player);
        });

        document.getElementById('prompt').innerText = randomPrompt;
    } else {
        displayRandomPrompt();
    }
}

// Function to select the required number of random players based on the prompt
function selectRandomPlayers(prompt) {
    const requiredPlayers = (prompt.match(/{player\d}/g) || []).length;
    
    if (requiredPlayers > users.length) {
        return null;
    }

    const shuffledUsers = [...users].sort(() => 0.5 - Math.random());
    return shuffledUsers.slice(0, requiredPlayers);
}

// Function to handle button clicks
function handleButtonClick(event) {
    // Add the pop-out effect to the background image
    const img = document.querySelector('.background img');
    img.classList.add('popped');

    // Remove the class after the animation is complete to hide the image
    setTimeout(() => {
        img.classList.remove('popped');
    }, 500); // Match this time with the duration of the zoom animation

    // Determine which button was clicked and call the appropriate function
    switch (event.target.id) {
        case 'addUserButton':
            addUser();
            break;
        case 'continueButton':
            startApp();
            break;
        case 'showPromptButton':
            displayRandomPrompt();
            break;
    }
}

// Attach event listeners to buttons
document.getElementById('addUserButton').addEventListener('click', handleButtonClick);
document.getElementById('continueButton').addEventListener('click', handleButtonClick);
document.getElementById('showPromptButton').addEventListener('click', handleButtonClick);
