import axios from 'axios';
import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';


const AddBlog = () => {

    const [imageURL, setImageURL] = useState(null);
    const [imageURLStatus, setImageURLStatus] = useState();
    const [dbStatus, setDbStatus] = useState(false);


    const handleBlogSubmit = e => {
        const blogInfo = {
            title: e.target.title.value,
            blogDetails: e.target.blogDetails.value,
            imageURL: imageURL
        };


        const url = `https://stark-caverns-88671.herokuapp.com/addBlog`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blogInfo)
        })
            .then(res => res.json())
            .then(data => {
                setDbStatus(data);
                if (data) {
                    e.target.reset();
                    alert('Blog added successfully.')
                }
            })

        e.preventDefault();
    }


    const handleImageUpload = (event) => {
        console.log(event.target.files[0]);
        const imageData = new FormData()
        imageData.set('key', '798ea45a777a4ccd52f1701860227c6b');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                console.log(response.data.data.display_url);
                setImageURL(response.data.data.display_url);
                setImageURLStatus(true);
                if(imageURLStatus){
                    alert('Image uploaded')
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <Sidebar></Sidebar>

            <div style={{ marginLeft: '400px' }} className="col-md-9">
                <h2 className="mb-4">Add Blog</h2>
                <br />
                <form onSubmit={handleBlogSubmit}>
                    <h5>Title</h5>
                    <input type="text" class="form-control w-50" placeholder="Blog title" name="title" aria-label="First name" required />
                    <br />

                    <h5>Blog Details</h5>
                    <textarea type="text" class="form-control w-50" placeholder="Blog Details" name="blogDetails" aria-label="Last name" required />
                    <br />

                    <h5>Blog Image</h5>
                    <input type="file" onChange={handleImageUpload} class="mb-5" placeholder="Last name" aria-label="Last name" required />

                    {
                        <p style={{ color: 'red' }}> {imageURLStatus ? "Image uploaded successfully, Click Submit to send your data to Database." : "After choosing a file, Wait until image get uploaded."}</p>
                    }

                    <br />
                    <input className="btn btn-success mb-3" type="submit" value="Submit" />
                    {
                        <span style={{ color: 'green' }}> {dbStatus ? "Blog added successfully." : ""}</span>
                    }
                </form>
            </div>
        </div>
    );
};

export default AddBlog;
