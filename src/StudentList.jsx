import React from 'react'
import StudentItem from './StudentItem'

const StudentList = ({students,deleteStudent,editStudent}) => {

    if(students.length === 0){
        return<p style={{textAlign:'center'}}>No Student Found !!</p>
    }


  return (
    <div>
        <table style={{width:'100%', borderCollapse:'collapse'}}>
            <thead style={{backgroundColor:'gray'}}>
                <tr>
                    <th style={{border:'1px solid white', padding:'8px'}}>Name</th>
                    <th style={{border:'1px solid white', padding:'8px'}}>Age</th>
                    <th style={{border:'1px solid white', padding:'8px'}}>Email</th>
                </tr>
            </thead>

            <tbody>
                    {students.map((student, index)=>(
                        <StudentItem
                        key={student.id}
                        student={student}
                        index={index}
                        deleteStudent={deleteStudent}
                        editStudent={editStudent} />
                    ))}
            </tbody>


        </table>
    </div>
  )
}

export default StudentList