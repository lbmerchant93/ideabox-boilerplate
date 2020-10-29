var ideas = [];
var currentIdea;


// event listener for save button
// functions modify innerhtml/ push into array/ make new instance of Idea

var savedButton = document.querySelector('.save-button');
var titleInput = document.querySelector('.title-input');
var bodyInput = document.querySelector('.body-input');
var ideaGrid = document.querySelector('.idea-grid');



savedButton.addEventListener('click', gatherIdeas);


function gatherIdeas() {
    enableButton()
    saveIdea()
    displayIdeas()
    clearInputs()

}

function saveIdea() {
    var newTitle = titleInput.value;
    var newBody = bodyInput.value;
    currentIdea = new Idea(newTitle, newBody);
    ideas.push(currentIdea);
}



function displayIdeas() {
    ideaGrid.innerHTML = "";
    for (var i = 0; i < ideas.length; i++) {
        ideaGrid.innerHTML += ` 
        <section class="idea-example">
            <div class="favorite-delete">
                <button class="favorite-idea">
        <img class="star" src="" alt="Star Icon">
      </button>
                <button class="delete-idea">
        <img class="delete" src="assets/delete.svg" alt="Delete Icon">
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

    }
}


function clearInputs() {
    titleInput.value = "";
    bodyInput.value = "";
}

function enableButton() {
    if (titleInput.value !== "" || bodyInput.value !== "") {
        savedButton.disabled = false;
    } else {
        savedButton.disabled = true;
    }

}