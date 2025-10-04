import React, { useEffect, useState } from 'react'

const StudentForm = ({addStudent, editingStudent,updateStudent}) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('');


    useEffect(() =>{
        if(editingStudent){
            setName(editingStudent.name)
            setAge(editingStudent.age)
            setEmail(editingStudent.email)
        }
    },[editingStudent]);

    const handleSubmit =(e) =>{
        e.preventDefault();
        if(!name || !age || !email){
            alert('fill all details');
            return;
        }
        const student = {name,age,email};
        if(editingStudent){
            updateStudent({...student,id:editingStudent.id});
        }
        else{
            addStudent(student)
        }
        setName('');
        setEmail('')
        setAge('')
    };



  return (
    <div>
        <h1>
            Student Form
        </h1>
        <form onSubmit={handleSubmit} >
            <input type="text" placeholder='Name.....' value={name} onChange={(e) =>setName(e.target.value)} style={{width:'80%', padding:'8px', marginBottom:'8px'}} />
            <input type="text" placeholder='Email.....' value={email} onChange={(e) =>setEmail(e.target.value)} style={{width:'80%', padding:'8px', marginBottom:'8px'}}/>
            <input type="text" placeholder='Age.....' value={age} onChange={(e) =>setAge(e.target.value)} style={{width:'80%', padding:'8px', marginBottom:'8px'}}/>
            
            <button type='submit'>{editingStudent ? 'Update Student' : 'Add Student'}</button>
        </form>
    </div>
  )
}

export default StudentForm