let players = [
    'Jayson Tatum',
    'Stephen Curry',
    'Christian Wood',
    'Julius Randle',
    'Domantas Sabonis',
    'Damian Lillard',
    'Nikola Vucevic',
    'Kyrie Irving',
    'Anthony Davis',
    'Andre Drummond',
    'LeBron James',
    'James Harden',
    'Joel Embiid',
    'Karl-Anthony Towns',
    'Giannis Antetokounmpo',
    'Kevin Durant',
    'Bradley Beal',
    'Luka Doncic',
    'Nikola Jokic'
]

let numPlayers = 5;
let yourTeam1 = [];
let yourTeam2 = [];
let totalPoints1 = 0;
let totalPoints2 = 0;

while (yourTeam1.length !== 5) {
    let yourPlayer = Math.floor(Math.random() * players.length); 
    let flag = true;
    for (let j = 0; j < yourTeam1.length; j++) {
        if (yourPlayer === yourTeam1[j]) {
            flag = false;
            break;
        }
    }
    if (flag) {
        yourTeam1.push(yourPlayer)
    }
}
// console.log(yourTeam1);

for (let i = 0; i < yourTeam1.length; i++) {
    totalPoints1 += yourTeam1[i]
}
// console.log(totalPoints1);

while (yourTeam2.length !== 5) {
    let yourPlayer = Math.floor(Math.random() * players.length); 
    let flag = true;
    for (let j = 0; j < yourTeam1.length; j++) {
        if (yourPlayer === yourTeam1[j]) {
            flag = false;
            break;
        }
    }
    if (flag) {
        let flag2 = true;
        for (let j = 0; j < yourTeam2.length; j++) {
            if (yourPlayer === yourTeam2[j]) {
                flag2 = false;
                break;
            }
        }
        if (flag2){
            yourTeam2.push(yourPlayer)
        }
    }
}
// console.log(yourTeam2);

for (let i = 0; i < yourTeam2.length; i++) {
    totalPoints2 += yourTeam2[i]
}
// console.log(totalPoints1);

for (let i = 0; i < yourTeam1.length; i++) {
    yourTeam1[i] = players[yourTeam1[i]]; 
}
// console.log(yourTeam1);
// console.log(totalPoints1);

for (let i = 0; i < yourTeam2.length; i++) {
    yourTeam2[i] = players[yourTeam2[i]]; 
}
// console.log(yourTeam2);
// console.log(totalPoints2);

let endResult = '';
if (totalPoints1 > totalPoints2){
    endResult = `First Team ${totalPoints1} - ${totalPoints2} Second Team. First Team Wins!`;
}
else if (totalPoints1 < totalPoints2){
    endResult = `First Team ${totalPoints1} - ${totalPoints2} Second Team. Second Team Wins!`;
}
else if (totalPoints1 === totalPoints2){
    endResult = `First Team ${totalPoints1} - ${totalPoints2} Second Team. Game Tied!`;
}

function firstTeam() {
    console.log('yourTeam1');
    document.getElementById('team1Display').innerHTML = yourTeam1;
}

function secondTeam() {
    console.log('yourTeam2');
    document.getElementById('team2Display').innerHTML = yourTeam2;
}

function gameResult () {
    console.log(`Team 1 ${totalPoints1} - ${totalPoints2} Team 2`);
    document.getElementById('displayResult').innerHTML = endResult;
}