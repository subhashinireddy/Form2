import './App.css';
import React, { useState } from 'react';
import Navbar from './component/Navbar';
import Form from './component/Form';
import Table from './component/Table';
import Page from './Page/Page'

import { Routes, Route } from "react-router-dom";

function App() {
  const [students, setStudents] = useState([]);

  const handleSubmit = (newStudent) => {
    const updatedStudents = [
      ...students,
      {
        ...newStudent,
        id: students.length + 1,
      },
    ];
    setStudents(updatedStudents);
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Form onSubmit={handleSubmit} />} />
        <Route path="/Table" element={<Table students={students} />} />
        <Route path="/Page" element={<Page students={students} />} />
        
      </Routes>
    </div>
  );
}

export default App;
