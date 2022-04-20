import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function createNote(notes){
 return(
     <Note
     title = {notes.title}
     content = {notes.content} />
 );
}

function App() {
  return (
    <div>
      <Header />
      
     <Note 
      title="Delegation"
      content=
        "Q. How many programmers does it take to change a light bulb? A. None – It’s a hardware problem"
      /> *
     
      <Footer />
    </div>
  );
}

export default App;