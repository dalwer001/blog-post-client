import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const ManageBlog = () => {

    const [blog, setBlog] = useState([]);

    useEffect(() => {
        fetch('https://stark-caverns-88671.herokuapp.com/blog')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [])
    console.log(blog)


    const deleted = () => {
        fetch('https://stark-caverns-88671.herokuapp.com/blog')
            .then(res => res.json())
            .then(data => setBlog(data))
    }


    const handleDelete = (id) => {

        fetch(`https://stark-caverns-88671.herokuapp.com/deleteBlog/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Blog Deleted')
                    deleted();
                }
            })
    }



    return (
        <div>
            <Sidebar></Sidebar>

            <div style={{ marginLeft: '400px' }}>
                <h3 className="ml-5 mb-5">Total Blogs : {blog.length}</h3>

                <table class="table text-center">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Details</th>
                            <th scope="col">Image</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    {
                        blog.map(blog =>
                            <tbody>
                                <tr>
                                    <td>{blog.title}</td>
                                    <td>{blog.blogDetails}</td>
                                    <img style={{ width: '100px', height: '70px' }} src={blog.imageURL} alt="" />
                                    <td>
                                        <button class="btn btn-danger" onClick={() => handleDelete(blog._id)}>Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        )
                    }
                </table>

            </div>
        </div>
    );
};

export default ManageBlog;
