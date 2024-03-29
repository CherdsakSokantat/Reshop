// EditStudent Component for update student data

// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentForm from "./StudentForm";
import { Navigate, useNavigate, useParams } from 'react-router-dom'

// EditStudent Component
const EditStudent = () => {

const { id } = useParams();
const navigate = useNavigate();
const [formValues, setFormValues] = useState({
	name: "",
	email: "",
	rollno: "",
});
	
//onSubmit handler
const onSubmit = (studentObject) => {
	axios
	.put(
		"http://localhost:4000/api/students/update-student/" +
		id,
		studentObject
	)
	.then((res) => {
		if (res.status === 200) {
		alert("Student successfully updated");
        navigate("/")
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

// Load data from server and reinitialize student form
useEffect(() => {
	axios
	.get(
		"http://localhost:4000/api/students/edit-student/"
		+ id
	)
	.then((res) => {
		const { name, email, rollno } = res.data;
		setFormValues({ name, email, rollno });
	})
	.catch((err) => console.log(err));
}, []);

// Return student form
return (
	<StudentForm
	initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize
	>
	Update Student
	</StudentForm>
);
};

// Export EditStudent Component
export default EditStudent;
