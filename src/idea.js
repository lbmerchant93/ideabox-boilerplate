class Idea {
    constructor(id, title, body, isStarred) {
        this.id = id || Date.now();
        this.title = title;
        this.body = body;
        this.isStarred = isStarred || false;
    }

    saveToStorage() {
        var stringifiedCards = JSON.stringify(this);
        localStorage.setItem(`${this.id}`, stringifiedCards);
    }

    deleteFromStorage() {
        localStorage.removeItem(`${this.id}`);
    }

    updateIdea() {

    };
}
