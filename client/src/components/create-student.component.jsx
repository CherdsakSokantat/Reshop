// CreateStudent Component for add new student

// Import Modules
import React, { useState, useEffect } from "react";
import axios from 'axios';
import StudentForm from "./StudentForm";
import Swal from 'sweetalert2';
// CreateStudent Component
const CreateStudent = () => {
const [formValues, setFormValues] =
	useState({ name: '', email: '', rollno: '' })
// onSubmit handler
const onSubmit = studentObject => {
	axios.post(
'http://mern.com/api/students/create-student',
	studentObject)
	.then(res => {
		if (res.status === 200)
		Swal.fire({
			icon: "success",
			text: "success"
		})
		else
		Promise.reject()
	})
	.catch(err => Swal.fire({
		text: "error somthing when wrong",
		icon: "error"
	}))
}
	
// Return student form
return(
	<StudentForm initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize>
	Create Student
	</StudentForm>
)
}

// Export CreateStudent Component
export default CreateStudent
