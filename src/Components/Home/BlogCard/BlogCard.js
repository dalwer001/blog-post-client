import React from 'react';
import { useHistory } from 'react-router-dom';

const BlogCard = ({ blog }) => {

    const history = useHistory();

    const handleClick = (id) => {
        history.push(`/showBlog/${id}`);
    }

    return (
        <div onClick={() => handleClick(blog._id)} class="col-md-3 row container blogCardInfo cardDesign mt-5 p-3 btn">
            <div>
                <img src={blog.imageURL} alt="" />
                <div>
                    <h3 className="text-center mt-4 mb-5">{blog.title}</h3>
                    <button className="btn btn-success">See More</button>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
