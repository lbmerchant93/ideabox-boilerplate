// global variables:
var ideas = [];
var currentIdea;


// querySelectors:
var saveButton = document.querySelector('.save-button');
var titleInput = document.querySelector('.title-input');
var bodyInput = document.querySelector('.body-input');
var ideaGrid = document.querySelector('.idea-grid');
var favoriteIdea = document.querySelector('.favorite-idea');


// addEventListeners:
saveButton.addEventListener('click', gatherIdeas);
titleInput.addEventListener('keyup', enableButton);
bodyInput.addEventListener('keyup', enableButton);
ideaGrid.addEventListener('click', alterIdea);



// event handlers and funcitons:
function showHide(show, hide) {
  show.classList.remove('hidden');
  hide.classList.add('hidden');
}

function addClickableHoverEffects(enable, addHoverEffects) {
  enable.classList.remove('disabled');
  addHoverEffects.classList.add('hover-effects');
}

function removeClickableHoverEffects(removeHoverEffects, disable) {
  removeHoverEffects.classList.remove('hover-effects');
  disable.classList.add('disabled');
}

function gatherIdeas() {
  enableButton();
  saveIdea();
  displayIdeas();
  clearInputs();
  enableButton();
};

function saveIdea() {
  var newTitle = titleInput.value;
  var newBody = bodyInput.value;
  currentIdea = new Idea(newTitle, newBody);
  ideas.unshift(currentIdea);
  console.log(ideas);
};

function displayIdeas() {
  ideaGrid.innerHTML = "";
  for (var i = 0; i < ideas.length; i++) {
    ideaGrid.innerHTML += `
         <section class="idea-example">
            <div class="favorite-delete">
                <button id=${ideas[i].id} class="favorite-idea favorite">
        <img id=${ideas[i].id} class="star favorite" src="assets/star.svg" alt="Star Icon">
          <img id=${ideas[i].id} class="star-active favorite hidden" src="assets/star-active.svg" alt="Active Star Icon">
      </button>
                <button id=${ideas[i].id} class="delete-idea x-button">
        <img id=${ideas[i].id} class="delete x-button" src="assets/delete.svg" alt="Delete Icon">
      </button>
            </div>
            <div class="display-idea-area">
                <h3 class="idea-title">${ideas[i].title}</h3>
                <h5 class="idea-body">${ideas[i].body}</h5>
            </div>
            <div class="add-comment">
                <button class="comment-button" name="comment">
        <img class="comment" src="" alt="Add comment icon">
      </button>
                <label class="comment-label" for="comment">comment</label>
            </div>
        </section>
    `
  };
};

function clearInputs() {
  titleInput.value = "";
  bodyInput.value = "";
  removeClickableHoverEffects(saveButton, saveButton);
};

function enableButton(event) {
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
};

function alterIdea(event) {
  if (event.target.classList.contains(`x-button`)) {
    deleteIdea();
  } else if (event.target.classList.contains(`favorite`)) {
    toggleStar();
  };
};

function remove() {
  for (var i = 0; i < ideas.length; i++) {
    if (event.target.id === `${ideas[i].id}`) {
      ideas.splice(i, 1);
    };
  };
};


function toggleStar() {
  var star = document.querySelectorAll('.star');
  var starActive = document.querySelectorAll('.star-active');
  for (var i = 0; i < ideas.length; i++) {
    if (event.target.id === `${ideas[i].id}` && ideas[i].star === false) {
      ideas[i].star = true;
      showHide(starActive[i], star[i]);
    } else if (event.target.id === `${ideas[i].id}` && ideas[i].star === true) {
      ideas[i].star = false;
      showHide(star[i], starActive[i]);
    };
  }
}
// function unfavoriteIdeas(event) {
//   for (var i = 0; i < ideas.length; i++) {
//     if (event.target.id === `favorite-idea`) {
//       var star = document.querySelector('.star');
//       var starActive = document.querySelector('.star-active');
//       toggleHidden(starActive);
//       toggleHidden(star);
//     };
//   };
// }

//click the "Star" button on an idea card the button was a filled in star (favorited) the button should now be an outline of a star (not favorited) -> toggle between two images for button??


//when I delete or favorite any card I should not see the page reload



///
