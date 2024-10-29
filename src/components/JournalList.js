// src/components/JournalList.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const JournalList = () => {
  const [journals, setJournals] = useState([]);

  //fetch journals on component
  useEffect(() => {
    const fetchJournals = async () => {
      const token = localStorage.getItem("token"); //retrieve JWT token from local storage
      const res = await axios.get(
        "http://localhost:1818/api/journals/allentries",
        {
          headers: {
            Authorization: `Bearer ${token}`, //set the Authorization header
          },
        }
      );
      setJournals(res.data);
    };

    fetchJournals();
  }, []);

  return (
    <div>
      <h1>Your Journal Entries</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Content</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {journals.map((journal) => (
            <tr key={journal._id}>
              <td>{journal.title}</td>
              <td>{journal.content}</td>
              <td>
                {/* Placeholder buttons for editing and deleting */}
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JournalList;
