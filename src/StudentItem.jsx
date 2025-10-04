import React from 'react';

const StudentItem = ({ student, deleteStudent, editStudent }) => {
  return (
    <tr className="student-row">
      <td>{student.name}</td>
      <td>{student.age}</td>
      <td>{student.email}</td>
      <td className="action-buttons">
        <button className="edit-btn" onClick={() => editStudent(student)}>Edit</button>
        <button className="delete-btn" onClick={() => deleteStudent(student.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default StudentItem;
