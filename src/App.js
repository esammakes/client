import React from "react";
import JournalEntryForm from "./components/JournalEntryForm";
import JournalList from "./components/JournalList";

const App = () => {
  return (
    <div>
      <h1>Welcome to your Journal</h1>
      {/* <JournalEntryForm /> */}
      <JournalList /> {/*render the Journallist compoenet */}
    </div>
  );
};

export default App;
