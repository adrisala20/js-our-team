/* 
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
BONUS 3:
Permettere l'aggiunta di un nuovo membro del team
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
*/

//creo l'array
//inserisco gli oggeti
//<div class="col"></div>

let team = [
    {
        'name': 'Wayne',
        'surname': 'Barnett',
        'role': 'Founder & CEO',
        'img': 'wayne-barnett-founder-ceo.jpg'
    },
    {
        'name': 'Angela',
        'surname': 'Caroll',
        'role': 'Chef Editor',
        'img': 'angela-caroll-chief-editor.jpg',
    },
    {
        'name': 'Walter',
        'surname': 'Gordon',
        'role': 'Office Manager',
        'img':'walter-gordon-office-manager.jpg'
    },
    {
        'name': 'Angela',
        'surname': 'Lopez',
        'role': 'Social Media Manager',
        'img':'angela-lopez-social-media-manager.jpg'
    },
    {
        'name': 'Scott',
        'surname': 'Estrada',
        'role': 'Developer',
        'img': 'scott-estrada-developer.jpg'
    },
    {
        'name': 'Barbara',
        'surname': 'Ramos',
        'role': 'GRaphic Designer',
        'img': 'barbara-ramos-graphic-designer.jpg'
    }
] 
console.log(team)



for(let i = 0 ; i < team.length ;i++){
    const row = document.querySelector('.row');
    const rowEl = document.createElement('div');
    rowEl.classList.add('col');

    rowEl.innerHTML = `
    <img src='img/${team[i].img}'> <br>
    ${team[i].name}
    ${team[i].surname}<br> 
    ${team [i].role} <br>
    `;

    row.appendChild(rowEl)
    //console.log(rowEl)
}

