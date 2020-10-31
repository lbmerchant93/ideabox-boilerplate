class Idea {
    constructor(title, body) {
        this.id = Date.now();
        this.title = title;
        this.body = body;
        this.star = false;
    }

    saveToStorage(array) {
        var stringifiedCards = JSON.stringify(array);
        var saveLocal = localStorage.setItem("idea-cards", stringifiedCards)
    };


    deleteFromStorage() {

    };

    updateIdea() {

    };
}