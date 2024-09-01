// Array of prompts with placeholders for 1, 2, or 3 players
const prompts = [
    "{player1}, give out two punishments to any players of your choice.",
    "{player1}, choose one player to do a funny dance for 30 seconds.",
    "{player1}, assign a punishment to {player2} and {player3}. They must do the same punishment.",
    "{player1}, give out three punishments. One must be to {player2}, and the other two can be to any players of your choice.",
    "{player1}, make a rule that everyone must follow for the next 10 minutes. If someone breaks it, they take a punishment.",
    "{player1}, choose one player to speak in an accent of your choice for the next 5 minutes.",
    "{player1}, everyone must take a drink. However, {player2} and {player3} get an additional punishment each.",
    "{player1}, give out a punishment to any player who has not spoken in the last 10 minutes.",
    "{player1}, assign a silly task to {player2}. If they refuse or fail, they take a punishment.",
    "{player1}, pick a number between 1 and 5. That’s how many punishments you need to give out, split among any players.",
    "{player1}, choose one player to wear a silly costume for the next 15 minutes.",
    "{player1}, give a punishment to the player with the least amount of drinks in front of them.",
    "{player1}, everyone must share an embarrassing story. If someone refuses, they take a punishment.",
    "{player1}, create a new rule that must be followed for the next round. If broken, a punishment is given to the rule-breaker.",
    "{player1}, assign a random activity to {player2} that must be performed for the next 5 minutes.",
    "{player1}, all players must take turns making animal noises. If someone fails or refuses, they get a punishment.",
    "{player1}, give out a punishment to the player who last made eye contact with you.",
    "{player1}, choose a player to give you a compliment. If they refuse or it’s not good enough, they take a punishment.",
    "{player1}, everyone must come up with a new nickname for {player2}. If {player2} doesn’t like it, the nicknamers get a punishment.",
    "{player1}, assign a random, harmless task to {player3}. If they fail to complete it within 3 minutes, they take a punishment.",
    "{player1}, choose a player to perform a quick trivia quiz. For each wrong answer, they get a punishment.",
    "{player1}, all players must hold their breath for 10 seconds. If anyone fails or cheats, they take a punishment.",
    "{player1}, give out a punishment to any player who has not told a joke yet. If everyone has, then it’s a free pass.",
    "{player1}, choose a player to sing a song of your choice. If they refuse or mess up, they get a punishment.",
    "{player1}, make everyone swap seats with someone else. If anyone resists, they get a punishment.",
    "{player1}, assign a random topic for everyone to discuss for the next 5 minutes. If someone refuses or fails to contribute, they take a punishment.",
    "{player1}, give out a punishment to the player who takes the longest to complete their next drink.",
    "{player1}, choose one player to read a random page from a book or article aloud. If they refuse or struggle, they get a punishment.",
    "{player1}, assign a punishment to {player2}. They must perform a charade of your choice.",
    "{player1}, create a new rule that must be followed until your next turn. If anyone breaks it, they take a punishment.",
    "{player1}, choose one player to do a silly impression of a celebrity for the next 3 minutes.",
    "{player1}, give out a punishment to any player who has used their phone in the last 15 minutes.",
    "{player1}, make everyone do their best dance moves. The worst dancer gets a punishment.",
    "{player1}, choose a player to come up with a rhyming poem on the spot. If they fail, they take a punishment.",
    "{player1}, assign a task to {player2} to draw something with their non-dominant hand. If it’s not recognizable, they get a punishment.",
    "{player1}, give out a punishment to the player who last interrupted someone during the game.",
    "{player1}, select a player to come up with a silly nickname for everyone at the table. If anyone objects, they get a punishment.",
    "{player1}, make everyone take a drink and then give out an additional punishment to anyone who didn’t take their drink fast enough.",
    "{player1}, choose one player to recite a tongue twister. If they fail or hesitate, they get a punishment.",
    "{player1}, assign a random silly activity (like hopping on one foot) to {player2} for the next 3 minutes. If they refuse, they take a punishment.",
    "{player1}, everyone must speak in movie quotes for the next 5 minutes. If someone fails, they take a punishment.",
    "{player1}, give out a punishment to the player who has the most drink left in their glass.",
    "{player1}, choose one player to come up with a new rule for the game. If the rule is not followed, everyone else gets a punishment.",
    "{player1}, all players must swap an item of clothing with someone else at the table. If anyone refuses, they take a punishment.",
    "{player1}, pick a player to perform an impersonation of you. If they refuse or fail, they get a punishment.",
    "{player1}, assign a random object to {player2}. They must use it as a prop in a mini skit. If they refuse or fail, they get a punishment.",
    "{player1}, give out a punishment to anyone who has not guessed a number correctly in the last 10 minutes.",
    "{player1}, choose one player to tell a joke. If they don't get a laugh, they take a punishment.",
    "{player1}, make everyone come up with a new, made-up word. The worst word, as judged by you, gets a punishment.",
    "{player1}, pick a player to wear a ridiculous hat or accessory for the next 10 minutes. If they refuse, they take a punishment.",
    "{player1}, assign a punishment to {player2}. They must sing the chorus of their favorite song.",
    "{player1}, choose one player to share a fun fact about themselves. If they refuse or it’s not interesting, they get a punishment.",
    "{player1}, give out a punishment to the player who is the last to give a high-five to everyone else.",
    "{player1}, choose a player to give you a toast. If it’s not to your satisfaction, they take a punishment.",
    "{player1}, everyone must try to juggle three items. If anyone fails or refuses, they take a punishment.",
    "{player1}, assign a random silly task (like hopping like a bunny) to {player2}. If they refuse or fail, they get a punishment.",
    "{player1}, make everyone recite a random quote from a movie or TV show. If anyone fails, they take a punishment.",
    "{player1}, give out a punishment to any player who hasn’t shared an interesting fact about themselves yet.",
    "{player1}, choose one player to make a funny face and hold it for 1 minute. If they can’t, they take a punishment.",
    "{player1}, assign a punishment to {player2}. They must make up a silly song and perform it.",
    "{player1}, create a new challenge for the group. The player who performs it the worst gets a punishment.",
    "{player1}, choose a player to do their best impression of a famous movie scene. If they don’t do well, they take a punishment.",
    "{player1}, everyone must tell a joke. The person who tells the least funny joke gets a punishment.",
    "{player1}, give out a punishment to the player who has the funniest laugh.",
    "{player1}, choose a player to wear a pair of sunglasses for the next 15 minutes. If they refuse, they take a punishment.",
    "{player1}, assign a punishment to {player2}. They must take a drink with their non-dominant hand for the rest of the round.",
    "{player1}, make everyone share a fun fact about a random topic. The least interesting fact gets a punishment.",
    "{player1}, give out a punishment to the player who last touched their phone or watch.",
    "{player1}, choose a player to perform a quick stand-up comedy routine. If they fail to make you laugh, they take a punishment.",
    "{player1}, everyone must speak in questions for the next 10 minutes. If someone makes a statement, they get a punishment.",
    "{player1}, assign a punishment to {player2}. They must come up with a creative excuse for being late.",
    "{player1}, pick a player to share their most recent text message. If it’s not funny or interesting, they take a punishment.",
    "{player1}, create a silly rule that everyone must follow for the next round. If anyone breaks it, they get a punishment.",
    "{player1}, choose one player to do a dramatic reading of a random text message. If they refuse or do poorly, they take a punishment.",
    "{player1}, everyone must pretend to be a different animal for the next 5 minutes. If anyone breaks character, they take a punishment.",
    "{player1}, give out a punishment to any player who hasn’t shared a personal anecdote yet.",
    "{player1}, assign a task to {player2} to write a short poem about the game. If it’s not done in 3 minutes, they get a punishment.",
    "{player1}, choose a player to recite a random tongue twister. If they struggle, they take a punishment.",
    "{player1}, make everyone come up with a unique dance move. The least creative dancer gets a punishment.",
    "{player1}, give out a punishment to any player who has not participated in the last round.",
    "{player1}, assign a punishment to {player2}. They must perform a random act of kindness for another player.",
    "{player1}, pick a player to come up with a new game rule. If the rule is not accepted by the group, they take a punishment.",
    "{player1}, make everyone take a drink and then give out a punishment to anyone who does not finish their drink quickly.",
    "{player1}, choose one player to tell a true story that happened to them in the last week. If it’s not interesting, they get a punishment.",
    "{player1}, assign a punishment to {player2}. They must speak in a made-up language for the next 5 minutes.",
    "{player1}, give out a punishment to the player who has the least amount of drink left in their glass.",
    "{player1}, choose a player to perform a quick skit based on a random scenario you come up with. If they refuse or fail, they take a punishment.",
    "{player1}, everyone must come up with a new nickname for {player1}. The best nickname wins, and the others get a punishment.",
    "{player1}, give out a punishment to any player who has not made a toast yet.",
    "{player1}, assign a random dance style (like salsa or breakdancing) to {player2}. If they don’t do it, they get a punishment.",
    "{player1}, make everyone share a secret talent. The least impressive talent gets a punishment.",
    "{player1}, choose one player to tell a story using only gestures. If they fail to be understood, they take a punishment.",
    "{player1}, give out a punishment to the player who last used their phone or left the room."

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
