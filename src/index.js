/*
Description
In this exercise, we're going to create an app to show off our furry friends. 
This will also let us practice events and forms! This is a combo that you will find all the time out there

Instructions
- Use this template as a starting point (it won't work properly on Codesandbox, you have to download it to your device) => https://codesandbox.io/s/day-8-dog-owners-app-template-t4um2
- You'll find a variable called data in the console.log. That's your list of dogs
- Render the top list of dogs using the list item template you'll find on the HTML file
- Each list item should be clickable. When you click on an item, the selected dog should display on the main card
- The main card should contain all the information from the selected dog. Follow the template for the main card that you'll find on the HTML file.
- There should be only one card at the time on the screen
- The card should have a button that toggles for the selected dog between good dog/ bad dog

Tips
- Take advantage of scope in JS to have access to the data you need
- Remember you can add event listeners to any element on the page
*/

console.log(data);

let dogList = document.querySelector(".dogs-list");
let dogSection = document.querySelector(".main__dog-section");

function addDogListItem(dog) {
  let liEl = document.createElement("li");
  liEl.className = "dogs-list__button";
  liEl.textContent = dog.name;
  dogList.append(liEl);
  liEl.addEventListener("click", function () {
    displayDog(dog);
  });
}

for (let dog of data) {
  addDogListItem(dog);
}

function displayDog(dog) {
  dogSection.textContent = "";
  // <h2>Mr. Bonkers</h2>
  // <img
  // src="https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_1.jpg"
  // alt=""
  // />
  // <div class="main__dog-section__desc">
  //   <h3>Bio</h3>
  //    <p>
  //    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
  //   minima voluptates libero cumque rerum consequatur optio aliquid sint
  //   eum maxime illo laborum omnis quo ab rem cupiditate nulla
  //   perspiciatis ipsum!
  //   </p>
  // </div>
  // <p><em>Is naughty?</em> yes!</p>
  // <button class="main__dog-section__btn">Good dog!</button>

  let h2El = document.createElement("h2");
  h2El.textContent = dog.name;
  let imgEl = document.createElement("img");
  imgEl.src = dog.image;

  let dogDescription = document.createElement("div");
  dogDescription.className = "main__dog-section__desc";
  let h3El = document.createElement("h3");
  h3El.textContent = "Bio";
  let pEl = document.createElement("p");
  pEl.textContent = dog.bio;
  dogDescription.append(h3El, pEl);

  let pQuestionEl = document.createElement("p");
  pQuestionEl.innerHTML = `<em>Is naughty?</em> ${
    dog.isGoodDog ? "Yes!" : "No!"
  }!`;
  let buttonEl = document.createElement("button");
  buttonEl.className = "main__dog-section__btn";
  buttonEl.textContent = dog.isGoodDog ? "Good dog!" : "Bad dog!";

  dogSection.append(h2El, imgEl, dogDescription, pQuestionEl, buttonEl);

  buttonEl.addEventListener("click", function () {
    if (dog.isGoodDog === true) {
      dog.isGoodDog = false;
      buttonEl.textContent = "Bad dog!";
      pQuestionEl.innerHTML = `<em>Is naughty?</em> No!`;
    } else if (dog.isGoodDog === false) {
      dog.isGoodDog = true;
      buttonEl.textContent = "Good dog!";
      pQuestionEl.innerHTML = `<em>Is naughty?</em> Yes!`;
    }
  });
}
