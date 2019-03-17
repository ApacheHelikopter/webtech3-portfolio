class Note {
  constructor(title) {
    this.title = title;
    // HINT🤩 this.element = this.createElement(title);
    this.element = this.createElement(title);
  }
  
  createElement(title){
    this.title = title;
    let newNote = document.createElement('div');
    const card = `<p>${this.title}</p>`+`<a href="#" class="card-remove">Remove</a>`;
    newNote.innerHTML += card; 
    newNote.className = "card";
    
    // HINT🤩 a.addEventListener('click', this.remove.bind(newNote));
     setTimeout( () => {
       let a = document.getElementsByTagName('a');
       a[i].addEventListener('click', this.remove.bind(newNote));
       i++;
    });
    
    return newNote;
  }
  
  add(){
    // HINT🤩
    // this function should append the note to the screen somehow
    document.querySelector(".notes").appendChild(this.element);
  }
  
  saveToStorage(){
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify
    
    let storedNotes = JSON.parse(localStorage.getItem("notes"));
    if (storedNotes == null){
        storedNotes = [];
      }
     storedNotes.push(this.title);
     localStorage.setItem("notes", JSON.stringify(storedNotes));
  }
  
  remove(){
    // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
    // in this function, 'this' will refer to the current note element
    console.log("remove me");
    localStorage.removeItem("notes");
    let remove = this;
    remove.style.display = "none";
    
  } 
}

class App {
  constructor() {
    console.log("👊🏼 The Constructor!");
    // HINT🤩
    // clicking the button should work
    
    this.btnAddTxt = document.querySelector("#btnAddNote");
    this.btnAddTxt.addEventListener("click", this.createNote.bind(this));
    this.txtAdd = document.querySelector('#txtAddNote');
    
    // pressing the enter key should also work
    
    this.txtAdd.addEventListener("keydown", event => {
      if(event.keyCode === 13){
        this.createNote();
      }
    });
    
    // this.loadNotesFromStorage();
    
    this.loadNotesFromStorage();
    
  }
  
  loadNotesFromStorage() {
    // HINT🤩
    // load all notes from storage here and add them to the screen
    // something like note.add() in a loop would be nice
    
    let getNotes = JSON.parse(localStorage.getItem("notes"));
      if (getNotes != null){
        getNotes.forEach(element => {
          let note = new Note(element);
          note.add();
        });
      }
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

let i =0;
let app = new App();