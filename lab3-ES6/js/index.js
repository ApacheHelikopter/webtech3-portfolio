class Note {
  constructor(title) {
    this.title = title;
    // HINT🤩 this.element = this.createElement(title);
    this.element = this.createElement(title);
  }
  
  createElement(title){
    let newNote = document.createElement('div');
    
    // HINT🤩 a.addEventListener('click', this.remove.bind(newNote));
    
    return newNote;
  }
  
  add(){
    // HINT🤩
    // this function should append the note to the screen somehow
  }
  
  saveToStorage(){
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify
  }
  
  remove(){
    // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
    // in this function, 'this' will refer to the current note element
  } 
}

class App {
  constructor() {
    console.log("👊🏼 The Constructor!");
    // HINT🤩
    // clicking the button should work
    
    this.btnAdd = document.querySelector("#btnAddNote");
    this.btnAdd.addEventListener("click", this.createNote.bind(this));
    
    // pressing the enter key should also work
    
    
    
    // this.loadNotesFromStorage();
    
    
  }
  
  loadNotesFromStorage() {
    // HINT🤩
    // load all notes from storage here and add them to the screen
    // something like note.add() in a loop would be nice
  }
   
  createNote(e){
    // this function should create a new note by using the Note() class
    
    let txtNote = document.querySelector("#txtAddNote").value;
    let newNote = new Note(txtNote);
    console.log(txtNote);
    
    // HINT🤩
    // note.add();
    
    newNote.add();
    
    // note.saveToStorage();
    
    newNote.saveToStorage();
    
    // this.reset();
    
    this.reset();
    
  }
  
  reset(){
    // this function should reset the form
    
    let txtNote = document.querySelector("#txtAddNote");
    txtNote.value = "";
  }
  
}

let app = new App();