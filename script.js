// Array of prompts with placeholders for 1, 2, or 3 players
const prompts = [
    "What is your favorite hobby, {player1}, and why?",
    "Describe your ideal vacation destination, {player1}.",
    "If {player1} and {player2} could swap lives for a day, what would happen?",
    "{player1}, if you could have any superpower, what would it be?",
    "{player1}, {player2}, and {player3}, describe your perfect day together.",
    "What is a book that has impacted your life, {player1}?",
    "{player1}, if you could meet any historical figure, who would it be?",
    "What qualities do you admire most in {player1}, {player2}?",
    "Tell us about a memorable experience from your childhood, {player1}.",
    "{player1} and {player2}, what is a skill you'd like to learn together and why?"
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
    // Select a random prompt from the array
    const randomIndex = Math.floor(Math.random() * prompts.length);
    let randomPrompt = prompts[randomIndex];

    // Replace placeholders with players' names
    const selectedPlayers = selectRandomPlayers(randomPrompt);

    if (selectedPlayers) {
        selectedPlayers.forEach((player, index) => {
            randomPrompt = randomPrompt.replace(`{player${index + 1}}`, player);
        });

        // Display the prompt in the HTML
        document.getElementById('prompt').innerText = randomPrompt;
    } else {
        alert("Not enough players to fulfill this prompt.");
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
