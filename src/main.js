// global variables:
var ideas = [];
var currentIdea;
var favIdeas = [];
var showingFavs = false;

// querySelectors:
var saveButton = document.querySelector('.save-button');
var titleInput = document.querySelector('.title-input');
var bodyInput = document.querySelector('.body-input');
var ideaGrid = document.querySelector('.idea-grid');
var showStarredIdeas = document.querySelector('.show-starred-ideas');
var searchIdeas = document.querySelector('.search-ideas');

// addEventListeners:
window.addEventListener('load', showIdeas);
saveButton.addEventListener('click', gatherIdeas);
titleInput.addEventListener('keyup', enableSaveButton);
bodyInput.addEventListener('keyup', enableSaveButton);
ideaGrid.addEventListener('click', alterIdea);
showStarredIdeas.addEventListener('click', displayStarredOrAllIdeas);
searchIdeas.addEventListener('keyup', searchDisplayedIdeas);

// event handlers and funcitons:
function addClickableHoverEffects(enable) {
  enable.classList.remove('disabled');
  enable.classList.add('hover-effects');
};

function removeClickableHoverEffects(disable) {
  disable.classList.remove('hover-effects');
  disable.classList.add('disabled');
};

function gatherIdeas() {
  enableSaveButton();
  saveIdea();
  displayIdeas(ideas);
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
  };
  displayIdeas(ideas);
};

function displayIdeas(array) {
  var starColorClass = "favorite";
  var starColorSrc;
  ideaGrid.innerHTML = "";
  for (var i = 0; i < array.length; i++) {
    if (array[i].isStarred === true) {
      starColorSrc = "assets/star-active.svg";
    } else {
      starColorSrc = "assets/star.svg";
    }
    ideaGrid.innerHTML += `
         <section class="individual-idea">
            <div class="favorite-delete">
        <img id=${array[i].id} class=${starColorClass} src=${starColorSrc} alt="Favorite Idea">
        <img id=${array[i].id} class="delete x-button" src="assets/delete.svg" alt="Delete Idea">
            </div>
            <div class="display-idea-area">
                <h4 class="idea-title">${array[i].title}</h4>
                <h3 class="idea-body">${array[i].body}</h3>
            </div>
            <div class="add-comment">
        <img class="comment" src="assets/comment.svg" alt="Add comment icon">
                <label class="comment-label" for="comment">comment</label>
            </div>
        </section>
    `
  };
};

function clearInputs() {
  titleInput.value = "";
  bodyInput.value = "";
  removeClickableHoverEffects(saveButton);
};

function enableSaveButton(event) {
  if (titleInput.value !== "" && bodyInput.value !== "") {
    saveButton.disabled = false;
    addClickableHoverEffects(saveButton);
  } else {
    saveButton.disabled = true;
  };
};

function deleteIdea(event) {
  remove();
  gatherStarredIdeas();
  displayCurrentIdeas();
};

function alterIdea(event) {
  if (event.target.classList.contains(`x-button`)) {
    deleteIdea();
  } else if (event.target.classList.contains(`favorite`)) {
    correctStarState();
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

function toggleStar() {
  var star = document.querySelectorAll('.star');
  for (var i = 0; i < ideas.length; i++) {
    if (event.target.id === `${ideas[i].id}` && ideas[i].isStarred === false) {
      ideas[i].isStarred = true;
    } else if (event.target.id === `${ideas[i].id}` && ideas[i].isStarred === true) {
      ideas[i].isStarred = false;
    };
    ideas[i].saveToStorage();
  };
};

function correctStarState() {
  toggleStar();
  gatherStarredIdeas();
  displayCurrentIdeas();
};

function displayCurrentIdeas() {
  if (showingFavs === false) {
    displayIdeas(ideas);
  } else if (showingFavs === true) {
    displayIdeas(favIdeas);
  };
};

function gatherStarredIdeas() {
  favIdeas = [];
  for (var i = 0; i < ideas.length; i++) {
    if (ideas[i].isStarred === true) {
      favIdeas.push(ideas[i]);
    };
  };
};

function displayStarredOrAllIdeas() {
  showingFavs = !showingFavs;
  gatherStarredIdeas();
  displayCurrentIdeas();
  showFavsOrAllButtonText();
};

function showFavsOrAllButtonText() {
  if (showingFavs === true) {
    showStarredIdeas.innerText = `Show All Ideas`;
  } else if (showingFavs === false) {
    showStarredIdeas.innerText = `Show Starred Ideas`;
  };
};

function searchDisplayedIdeas() {
  var ideasIncludedInSearch = [];
  for (var i = 0; i < ideas.length; i++) {
    if(ideas[i].title.includes(searchIdeas.value.toLowerCase()) || ideas[i].body.includes(searchIdeas.value.toLowerCase())) {
      ideasIncludedInSearch.push(ideas[i]);
    };
  };
  displayIdeas(ideasIncludedInSearch);
};
