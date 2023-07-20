import React from 'react'

const Table = ({ students }) => {
  return (
    <table className="student-table"> 
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Phonenumber</th>
        </tr>
      </thead> 
      <tbody>
        {students.map(({ id, name, email, age, phonenumber }) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{age}</td>
            <td>{phonenumber}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};


export default Table;