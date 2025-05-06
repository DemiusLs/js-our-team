const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];


const createCard = (member) => {
  const {
    name, role, email, img
  } = member

  return `<div class="card">
                <div>
                    <img src="./${img}" width="150px" alt="">
                </div>

                <div class="card-description">
                    <h2>${name}</h2>
                    <span>${role}</span>
                    <a href=""> ${email}</a>

                </div>

            </div>`


}
const cardContainer = document.getElementById("card-container");
// for (let member of teamMembers) {

//   console.log((member));

//   cardContainer.innerHTML = 



// }

const printCard = (arrayList, element) => {

  let cardList = "";
  for (let member of arrayList) {

    cardList += createCard(member)

  }

  element.innerHTML = cardList

}

printCard(teamMembers, cardContainer)



const formElem = document.getElementById("form");

formElem.addEventListener("submit", uploadCard)

function uploadCard(e) {

  e.preventDefault();

  const name = document.getElementById("nome").value;
  const role = document.getElementById("ruolo").value;
  const email = document.getElementById("email").value;
  const img = document.getElementById("img").value;

  const newMember = {
    name, role, email, img
  }
  teamMembers.push(newMember)

  printCard(teamMembers, cardContainer)

}

