


import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Edit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [course, setCourse] = useState({ title: '', dep: '', int: '', cuisine: '', cooking: '' });

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('course')) || [];
        const currentCourse = data.find(val => val.id === parseInt(id));
        if (currentCourse) {
            setCourse(currentCourse);
        }
    }, [id]);

    const handleChange = (e) => {
        setCourse({ ...course, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = JSON.parse(localStorage.getItem('course')) || [];
        const updatedData = data.map(val => (val.id === parseInt(id) ? course : val));
        localStorage.setItem('course', JSON.stringify(updatedData));
        toast.success("Record updated successfully!");
        navigate('/view'); // Redirect to view page
    };

    return (
        <div className="container">
            <h1>Edit Course</h1>
        <button style={{ width: "120px", display: "flex", textAlign: "center", padding: "5px", margin: "20px 40%", color: "black" }}>
                <Link to="/view" style={{ textAlign: "center", margin: "0 auto", textDecoration: "none", color: 'black', fontWeight: "800" }}>view page</Link>
            </button>

            <form onSubmit={handleSubmit}>
                <input type="text" name="title" value={course.title} onChange={handleChange} placeholder="Title" required />
                <input type="text" name="dep" value={course.dep} onChange={handleChange} placeholder="Description" required />
                <input type="date" name="int" value={course.int} onChange={handleChange} placeholder="Interaction" required />
                {/* <input type="text" name="select" value={course.cuisine} onChange={handleChange} placeholder="Location" required /> */}
                <select style={{padding:"11px 0",marginBottom:"10px"}}
                                   type="text" name="cuisine" value={course.cuisine} onChange={handleChange} placeholder="Location" required
                                >
                                    <option value="">Select Location</option>
                                    <option value="Surat">Surat</option>
                                    <option value="Ahmedabad">Ahmedabad</option>
                                    <option value="Rajkot">Rajkot</option>
                                    <option value="Surendranagar">Surendranagar</option>
                                    <option value="japanese">Vadodara</option>
                                    <option value="Bhavnagar">Bhavnagar</option>
                                    <option value="Gandhinagar">Gandhinagar</option>
                                    <option value="Jamnagar">Jamnagar</option>
                                    <option value="Kutchh">Kutchh</option>
                                    <option value="Porbandar">Porbandar</option>
                                    <option value="Tapi">Tapi</option>
                                    <option value="Junagadh">Junagadh</option>
                                    <option value="Dang">Dang</option>
                                    <option value="Amareli">Amareli</option>
                                    
                                         
                                </select>
                <input type="number" name="cooking" value={course.cooking} onChange={handleChange} placeholder="Atendees" required />
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default Edit;
