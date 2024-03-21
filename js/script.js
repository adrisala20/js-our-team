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
        'images': 'wayne-barnett-founder-ceo.jpg'
    },
    {
        'name': 'Angela',
        'surname': 'Caroll',
        'role': 'Chef Editor',
        'images': 'angela-caroll-chief-editor.jpg',
    },
    {
        'name': 'Walter',
        'surname': 'Gordon',
        'role': 'Office Manager',
        'images':'walter-gordon-office-manager.jpg'
    },
    {
        'name': 'Angela',
        'surname': 'Lopez',
        'role': 'Social Media Manager',
        'images':'angela-lopez-social-media-manager.jpg'
    },
    {
        'name': 'Scott',
        'surname': 'Estrada',
        'role': 'Developer',
        'images': 'scott-estrada-developer.jpg'
    },
    {
        'name': 'Barbara',
        'surname': 'Ramos',
        'role': 'GRaphic Designer',
        'images': 'barbara-ramos-graphic-designer.jpg'
    }
] 
console.log(team)

const rowEl = document.createElement('div');
rowEl.classList.add('col');
console.log(rowEl)


rowEl.innerHTML = `

`;