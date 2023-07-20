import React, { useState } from 'react';
import Table from '../component/Table';
import Form from '../component/Form';

const Page = () => {
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
    <div>
      <Form onSubmit={handleSubmit} />

      {students && students.length > 0 ? (
        <Table students={students} />
      ) : (
        <p>Students details not found</p>
      )}
    </div>
  );
};

export default Page;
