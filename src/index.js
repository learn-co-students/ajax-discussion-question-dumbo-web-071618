const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  const button = document.getElementsByClassName('btn btn-primary')[0]
  // console.log(button[0])

  const fullNameTag = document.getElementById('fullname')
  const emailTag = document.getElementById('email')
  const streetTag = document.getElementById('street')
  const cityTag = document.getElementById('city')
  const stateTag = document.getElementById('state')
  const postcodeTag = document.getElementById('postcode')
  const phoneTag = document.getElementById('phone')
  const cellTag = document.getElementById('cell')
  const dobTag = document.getElementById('date_of_birth')
  const profilePicture = document.getElementById('profile_picture')

  button.addEventListener('click', () => {
    fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(json => {
        // console.log(json)
        // console.log(json.results)
        console.log(json.results[0])
        // console.log(json.results[0].name)        
        // console.log(json.results[0].name["first"])
        const information = json.results[0] 
        const fullName = information.name["title"] + ". " + information.name["first"] + " " + information.name["last"]   
        // console.log(full_name)
        const email = information.email
        
        const street = information.location.street
        const city = information.location.city
        const state = information.location.state
        const postcode = information.location.postcode
        // console.log(street)
        // console.log(city)
        // console.log(state)
        // console.log(postcode)
        const phone = information['phone']
        // console.log(information.phone)
        const cell = information.cell
        const dob = information.dob.date
        const profilePictureURL = information.picture.large

        fullNameTag.innerText = fullName
        emailTag.innerText = email
        streetTag.innerText = street
        cityTag.innerText = city
        stateTag.innerText = state
        postcodeTag.innerText = postcode
        phoneTag.innerText = phone
        cellTag.innerText = cell
        dobTag.innerText = dob
        profilePicture.src = profilePictureURL

        // console.log(city)
        // console.log(state)
        // console.log(postcode)
        // console.log(phone)
        // console.log(cell)
        // console.log(profilePicture)
        // console.log(profilePicture.src)

      })
    })


  });
  