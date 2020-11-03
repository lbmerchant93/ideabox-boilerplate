// global variables:
var ideas = [];
var currentIdea;
// var ideas = [];


// querySelectors:
var saveButton = document.querySelector('.save-button');
var titleInput = document.querySelector('.title-input');
var bodyInput = document.querySelector('.body-input');
var ideaGrid = document.querySelector('.idea-grid');
var favoriteIdea = document.querySelector('.favorite-idea');
var showStarredIdeas = document.querySelector('.show-starred-ideas');


// addEventListeners:
window.addEventListener('load', showIdeas);
saveButton.addEventListener('click', gatherIdeas);
titleInput.addEventListener('keyup', enableSaveButton);
bodyInput.addEventListener('keyup', enableSaveButton);
ideaGrid.addEventListener('click', alterIdea);
showStarredIdeas.addEventListener('click', displayStarredIdeas);



// event handlers and funcitons:
function showHide(show, hide) {
  show.classList.remove('hidden');
  hide.classList.add('hidden');
};

function addClickableHoverEffects(enable, addHoverEffects) {
  enable.classList.remove('disabled');
  addHoverEffects.classList.add('hover-effects');
};

function removeClickableHoverEffects(removeHoverEffects, disable) {
  removeHoverEffects.classList.remove('hover-effects');
  disable.classList.add('disabled');
};

function gatherIdeas() {
  enableSaveButton();
  saveIdea();
  displayIdeas();
  keepFavorited();
  clearInputs();
  enableSaveButton();
};

function saveIdea() {
  var newTitle = titleInput.value;
  var newBody = bodyInput.value;
  currentIdea = new Idea(Date.now(), newTitle, newBody, false);
  ideas.unshift(currentIdea);
  currentIdea.saveToStorage();
};


function showIdeas() {
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var storageIdea = JSON.parse(localStorage.getItem(key));
    var storedId = storageIdea.id;
    var storedTitle = storageIdea.title;
    var storedBody = storageIdea.body;
    var storedIsStarred = storageIdea.isStarred;
    ideas.unshift(new Idea(storedId, storedTitle, storedBody, storedIsStarred));
  }

  displayIdeas();
  keepFavorited();
}


function displayIdeas() {
  ideaGrid.innerHTML = "";
  for (var i = 0; i < ideas.length; i++) {
    ideaGrid.innerHTML += `
         <section class="individual-idea">
            <div class="favorite-delete">
        <img id=${ideas[i].id} class="star favorite" src="assets/star.svg" alt="Star Icon">
          <img id=${ideas[i].id} class="star-active favorite hidden" src="assets/star-active.svg" alt="Active Star Icon">
        <img id=${ideas[i].id} class="delete x-button" src="assets/delete.svg" alt="Delete Icon">
            </div>
            <div class="display-idea-area">
                <h3 class="idea-title">${ideas[i].title}</h3>
                <h5 class="idea-body">${ideas[i].body}</h5>
            </div>
            <div class="add-comment">
        <img class="comment" src="assets/comment.svg" alt="Add comment icon">
                <label class="comment-label" for="comment">comment</label>
            </div>
        </section>
    `
  };
  star = document.querySelectorAll('.star');
  starActive = document.querySelectorAll('.star-active');
};


function clearInputs() {
  titleInput.value = "";
  bodyInput.value = "";
  removeClickableHoverEffects(saveButton, saveButton);
};

function enableSaveButton(event) {
  if (titleInput.value !== "" && bodyInput.value !== "") {
    saveButton.disabled = false;
    addClickableHoverEffects(saveButton, saveButton);
  } else {
    saveButton.disabled = true;
  };
};

function deleteIdea(event) {
  remove();
  displayIdeas();
  keepFavorited();
};

function alterIdea(event) {
  if (event.target.classList.contains(`x-button`)) {
    deleteIdea();
  } else if (event.target.classList.contains(`favorite`)) {
    toggleStar();
  };
};

function remove(idea) {
  for (var i = 0; i < ideas.length; i++) {
    if (event.target.id === `${ideas[i].id}`) {
      ideas[i].deleteFromStorage();
      ideas.splice(i, 1);
    };
  };
};

var star;
var starActive;

function toggleStar() {
  // star = document.querySelectorAll('.star');
  // starActive = document.querySelectorAll('.star-active');
  // var starIdeas = [];
  for (var i = 0; i < ideas.length; i++) {
    if (event.target.id === `${ideas[i].id}` && ideas[i].isStarred === false) {
      ideas[i].isStarred = true;
      // starIdeas.push(ideas[i]);
      showHide(starActive[i], star[i]);
    } else if (event.target.id === `${ideas[i].id}` && ideas[i].isStarred === true) {
      ideas[i].isStarred = false;
      console.log(star[i]);
      showHide(star[i], starActive[i]);
      //working here
      console.log('done');
    };
    ideas[i].saveToStorage();
  };
//   for (var i = 0; i < starIdeas.length; i++) {
//     if (event.target.id === `${starIdeas[i].id}` && starIdeas[i].isStarred === true) {
//       console.log(starIdeas);
//       starIdeas[i].isStarred = false;
//       starIdeas.splice(i, 1);
//       // console.log(starActive.length);
//       showHide(star[i], starActive[i]);
//   }
// };
}

function keepFavorited() {
  var star = document.querySelectorAll('.star');
  var starActive = document.querySelectorAll('.star-active');
  for (var i = 0; i < ideas.length; i++) {
    if (ideas[i].isStarred === true) {
      showHide(starActive[i], star[i]);
    };
  };
};

//




function displayStarredIdeas() {
  ideaGrid.innerHTML = "";
  for (var i = 0; i < ideas.length; i++) {
    if (ideas[i].isStarred === true) {
      ideaGrid.innerHTML += `
      <section class="individual-idea">
         <div class="favorite-delete">
     <img id=${ideas[i].id} class="star favorite hidden" src="assets/star.svg" alt="Star Icon">
       <img id=${ideas[i].id} class="star-active favorite" src="assets/star-active.svg" alt="Active Star Icon">
     <img id=${ideas[i].id} class="delete x-button" src="assets/delete.svg" alt="Delete Icon">
         </div>
         <div class="display-idea-area">
             <h3 class="idea-title">${ideas[i].title}</h3>
             <h5 class="idea-body">${ideas[i].body}</h5>
         </div>
         <div class="add-comment">
     <img class="comment" src="assets/comment.svg" alt="Add comment icon">
             <label class="comment-label" for="comment">comment</label>
         </div>
     </section>
     `
    }
  };
};





////
