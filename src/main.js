// global variables:
var ideas = [];
var currentIdea;


// querySelectors:
var savedButton = document.querySelector('.save-button');
var titleInput = document.querySelector('.title-input');
var bodyInput = document.querySelector('.body-input');
var ideaGrid = document.querySelector('.idea-grid');
var favoriteIdea = document.querySelector('.favorite-idea');


// addEventListeners:
savedButton.addEventListener('click', gatherIdeas);
titleInput.addEventListener('keyup', enableButton);
bodyInput.addEventListener('keyup', enableButton);
ideaGrid.addEventListener('click', deleteIdea);
ideaGrid.addEventListener('click', favoriteIdeas);



// event handlers and funcitons:
function gatherIdeas() {
  enableButton();
  saveIdea();
  displayIdeas();
  clearInputs();
};

function saveIdea() {
  var newTitle = titleInput.value;
  var newBody = bodyInput.value;
  currentIdea = new Idea(newTitle, newBody);
  ideas.push(currentIdea);
};

function displayIdeas() {
  ideaGrid.innerHTML = "";
  for (var i = 0; i < ideas.length; i++) {
    ideaGrid.innerHTML += `
        <section class="idea-example">
            <div class="favorite-delete">
                <button id="favorite-idea" class="favorite-idea">
        <img class="star" src="assets/star.svg" alt="Star Icon">
          <img class="star-active hidden" src="assets/star-active.svg" alt="Active Star Icon">
      </button>
                <button id=${ideas[i].id} class="delete-idea">
        <img id=${ideas[i].id} class="delete" src="assets/delete.svg" alt="Delete Icon">
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
};

function enableButton(event) {
  if (titleInput.value !== "" && bodyInput.value !== "") {
    savedButton.disabled = false;
  } else {
    savedButton.disabled = true;
  };
};

function deleteIdea(event) {
  remove();
  displayIdeas();
};

function remove() {
  for (var i = 0; i < ideas.length; i++) {
    if (event.target.id === `${ideas[i].id}`) {
      ideas.splice(i, 1);
    };
  };
};

// function testing(event) {
//   testing(event);
//   showHide(starActive, star);
//}
function showHide(show, hide) {
  show.classList.remove('hidden');
  hide.classList.add('hidden');
}

function favoriteIdeas(event) {
  for (var i = 0; i < ideas.length; i++) {
    if (event.target.id === `favorite-idea`) {
      var star = document.querySelector('.star');
      var starActive = document.querySelector('.star-active');
      showHide(starActive, star);
    };
  };
}

//click the "Star" button (favorite) on an idea card, the button was an outline of a star (not favorited), the button should now be a filled in star (favorited) -> hidden class??


//click the "Star" button on an idea card the button was a filled in star (favorited) the button should now be an outline of a star (not favorited) -> toggle between two images for button??


//when I delete or favorite any card I should not see the page reload



///
