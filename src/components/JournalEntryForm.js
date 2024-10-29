import React, { useState } from "react";
import axios from "axios";

const JournalEntryForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token"); // Assuming you store the JWT in local storage

    try {
      await axios.post(
        "/api/journals",
        { title, content },
        {
          headers: { "x-auth-token": token },
        }
      );
      // Clear the form or handle success
      setTitle("");
      setContent("");
      // Optionally, refresh journal entries
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Journal Title"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your journal entry here..."
        required
      ></textarea>
      <button type="submit">Add Journal Entry</button>
    </form>
  );
};

export default JournalEntryForm;
