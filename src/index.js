const makeButton = document.querySelector('button')

const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  // console.log("CONTENT LOADED!");
  makeButton.addEventListener("click", (e) => {
    fetch('https://randomuser.me/api/')
      .then( res => res.json() )
      .then( appendPage )
  })
});

function appendPage(info) {
  console.log(info)

  // Name:
  const nameObj = info.results[0].name
  document.querySelector('#fullname').innerText = `${nameObj.title} ${nameObj.first} ${nameObj.last}`

  // Email:
  document.querySelector('#email').innerText = info.results[0].email

  // Location
  const locObj = info.results[0].location

  // Street:
  document.querySelector('#street').innerText = locObj.street

  //City:
  




  document.querySelector('#postcode').innerHTML = `<img src="${info.results[0].picture.large}">`
}