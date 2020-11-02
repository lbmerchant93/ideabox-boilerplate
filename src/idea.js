class Idea {
    constructor(title, body) {
        this.id = Date.now();
        this.title = title;
        this.body = body;
        this.isStarred = false;
    }

    // saveToStorage() {
    //     var stringifiedCards = JSON.stringify(this);
    //     localStorage.setItem("ideas", stringifiedCards);
    //
    // };



    saveToStorage(array) {
        var stringifiedCards = JSON.stringify(this);
        // array.push(localStorage.setItem(`${this.id}`, stringifiedCards))
        var example = localStorage.setItem(`${this.id}`, stringifiedCards)
        array.push(example)
    };


    deleteFromStorage(id) {
        localStorage.removeItem(id)
    }






    updateIdea() {

    };
}
