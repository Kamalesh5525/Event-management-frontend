

import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

function Add() {
    const [title, setTitle] = useState("");
    const [dep, setDep] = useState("");
    const [int, setInt] = useState("");
    const [cuisine, setCuisine] = useState("");
    const [cooking, setCooking] = useState("");
    const [image, setImage] = useState(null); // State for the image file
    const [record, setRecord] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('course')) || [];
        setRecord(data);
    }, []);

    const handle = (e) => {
        e.preventDefault();

        if (!title || !dep || !int || !cuisine || !cooking || !image) {
            toast.error("All fields are required");
            return;
        }

        const obj = {
            id: Math.floor(Math.random() * 10000),
            title,
            dep,
            int,
            cuisine,
            cooking,
            image: URL.createObjectURL(image), // Convert file to URL for preview
        };

        const newrecord = [...record, obj];
        localStorage.setItem('course', JSON.stringify(newrecord));
        setRecord(newrecord);
        toast.success("Successfully added...");

        // Clear form fields
        setTitle("");
        setDep("");
        setInt("");
        setCuisine("");
        setCooking("");
        setImage(null); // Clear image
        navigate('/view');
    };

    return (
        <div>
            <Header />
            <h2 style={{ textAlign: "center", margin: "20px 0" }}>ADD PAGE</h2>
            <div className="container" style={{ textAlign: "center", color: "white" }}>
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <form onSubmit={handle} className='p-3 mt-2 shadow' style={{ border: "8px double #2E0249", borderRadius: "15px", background: "#E5D9F2" }}>
                            <div className="my-2">
                                <input
                                    type="text"
                                    className="form-control mt-3"
                                    style={{ border: "2px solid black" }}
                                    placeholder='Enter Title'
                                    onChange={(e) => setTitle(e.target.value)}
                                    value={title}
                                />
                            </div>
                            <div className="my-2">
                                <input
                                    type="text"
                                    style={{ border: "2px solid black" }}
                                    className="form-control py-4"
                                    placeholder='Description'
                                    onChange={(e) => setDep(e.target.value)}
                                    value={dep}
                                />
                            </div>
                            <div className="my-2">
                                <input
                                    type="date"
                                    style={{ border: "2px solid black" }}
                                    className="form-control py-4"
                                    onChange={(e) => setInt(e.target.value)}
                                    value={int}
                                />
                            </div>
                            <div className="my-2">
                                <select
                                    id="cuisine"
                                    className='py-2'
                                    name="cuisine"
                                    style={{ width: "100%", borderRadius: "5px", border: "2px solid black" }}
                                    onChange={(e) => setCuisine(e.target.value)}
                                    value={cuisine}
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
                            </div>
                            <div className="my-2">
                                <input
                                    type="number"
                                    style={{ border: "2px solid black" }}
                                    className="form-control"
                                    placeholder='Number of attendees'
                                    onChange={(e) => setCooking(e.target.value)}
                                    value={cooking}
                                />
                            </div>
                            <div className="my-2">
                                <input
                                    type="file"
                                    className="form-control"
                                    accept="image/*"
                                    onChange={(e) => setImage(e.target.files[0])} // Set the selected file
                                />
                            </div>
                            {image && (
                                <div className="my-2">
                                    <img
                                        src={URL.createObjectURL(image)} // Preview the image
                                        alt="Preview"
                                        style={{ width: "100%", height: "auto", border: "2px solid black" }}
                                    />
                                </div>
                            )}
                            <button type="submit" className="btn mx-auto d-block btn-primary mt-5">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
}

export default Add;
