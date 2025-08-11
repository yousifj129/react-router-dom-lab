// src/App.jsx
// lib
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { useState } from "react";

// components
import MailboxList from "./components/MailboxList/MailboxList";
import MailboxForm from "./components/MailboxForm/MailboxForm";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";
import NavBar from "./components/NavBar/NavBar";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import LetterForm from "./components/LetterForm/LetterForm";

const App = () => {
  const [mailboxes, setMailboxes] = useState([{
    _id: 0,
    boxSize: 'Small',
    boxOwner: 'Alex'
  },])

  const [letters, setLetters] = useState([])
  const addBox = (box) =>{
    const newMailboxes = [...mailboxes, box]

    setMailboxes(newMailboxes)
  }

  const addLetter = (letter) =>{

    const newLetters = [...letters, letter]

    setLetters(newLetters)
    
    console.log(newLetters)

  }

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route path="/mailboxes" element={<MailboxList  mailboxes={mailboxes}/>} />
        <Route path="/new-mailbox" element={< MailboxForm addBox={addBox} mailboxes={mailboxes}/>} />
        <Route path="/new-letter" element={< LetterForm addLetter={addLetter} mailboxes={mailboxes}/>} />

        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} letters={letters} />} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </Router>
  )
};

export default App;