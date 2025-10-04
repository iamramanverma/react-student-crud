import { useState } from 'react';
import './App.css';
import StudentForm from './StudentForm';
import StudentList from './StudentList';

function App() {
  const [students, setStudents] = useState([]);
  const [editStudent, setEditStudent] = useState(null);

  const addStudent = (student) => {
    setStudents([...students, { id: Date.now(), ...student }]);
  };

  const updateStudent = (updatedStudent) => {
    setStudents(students.map((s) => (s.id === updatedStudent.id ? updatedStudent : s)));
    setEditStudent(null);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  return (
    <div className="container">
      <h1>🎓 School Management App</h1>
      <StudentForm
        addStudent={addStudent}
        editingStudent={editStudent}
        updateStudent={updateStudent}
      />
      <StudentList
        students={students}
        deleteStudent={deleteStudent}
        editStudent={setEditStudent}
      />
    </div>
  );
}

export default App;
