/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Brian Nabende",
    photo:{
        src:"images/profilePicture.jpg",
        alt:"Profile Image"
    },
    hobbies: ["football",
            "Music", 
            "dance"
            ],
    favoriteFoods: [
        'chocolate',
        'bread',
        'milk',
        'orange',
        'eggs'
            ],
    placesLived:[

    ]
};



/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
  {
    place: 'Naivasha, Nakuru',
    length: '2 years'
  },
  {
    place: 'Eastleigh, Nairobi',
    length: '3 months'
  },
  {
    place: 'Bamburi, Mombasa',
    length: '2 months'
  }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo.src;
document.querySelector('#photo').alt = myProfile.photo.alt;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
  let li = document.createElement('li');
  li.textContent = food;
  document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
  let li = document.createElement('li');
  li.textContent = hobby;
  document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
const dlElement = document.getElementById('places-lived');

    // Iterate over each object in the placesLived array
    myProfile.placesLived.forEach(placeInfo => {
      // Create dt and dd elements
      let dtElement = document.createElement('dt');
      let ddElement = document.createElement('dd');

      // Set text content of dt and dd elements
      dtElement.textContent = placeInfo.place;
      ddElement.textContent = placeInfo.length;

      // Append dt and dd elements to dl element
      dlElement.appendChild(dtElement);
      dlElement.appendChild(ddElement);
    });


