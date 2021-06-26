import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ShowBlog = () => {

    const [blog, setBlog] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:9999/showBlog/${id}`)
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [id])

    return (
        <div>
            <div class="container">
                <img style={{width: '100%', height: '70%'}} src={blog.imageURL} alt="" />

                <h1 class="text-center">{blog.title}</h1>
                <h5>{blog.blogDetails}</h5>

                <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore cumque sint voluptas minima optio non in deserunt? Ea rem aspernatur perspiciatis, eaque sed deleniti maiores ipsam fugit, aperiam doloribus ducimus? Aut nihil voluptates, velit necessitatibus hic ipsa perferendis vitae consequatur similique dolores in voluptatem beatae, assumenda laboriosam iure aliquid totam veritatis, ratione fuga quam quo pariatur eius. Id placeat a veniam. Pariatur, voluptatibus laboriosam, soluta autem cum expedita hic molestiae at omnis, eveniet voluptates? Iusto id expedita quas, accusantium non consectetur, exercitationem quaerat laboriosam libero debitis doloribus eos earum aut cupiditate perspiciatis, ipsam inventore ipsum! Placeat molestiae officia nostrum rerum nihil praesentium vero accusantium quaerat autem eum aspernatur labore, commodi non unde quis ad hic, laboriosam voluptatum sed nemo, iusto nam quas? Error pariatur quae aut eligendi aperiam tenetur dolorum perspiciatis eaque omnis velit architecto exercitationem odio delectus id saepe debitis perferendis totam ad, neque vitae, ducimus, a ipsum officia. Quas unde odio cum iste, nostrum magni at impedit ipsum eaque error deserunt provident labore officia accusantium? Ipsum eum, velit perferendis odio, perspiciatis excepturi exercitationem repudiandae architecto deleniti natus ea voluptatibus obcaecati quae unde dicta modi illo a impedit consectetur suscipit quaerat nostrum amet deserunt. Quaerat accusantium illo pariatur blanditiis?</h6>
                
                <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore cumque sint voluptas minima optio non in deserunt? Ea rem aspernatur perspiciatis, eaque sed deleniti maiores ipsam fugit, aperiam doloribus ducimus? Aut nihil voluptates, velit necessitatibus hic ipsa perferendis vitae consequatur similique dolores in voluptatem beatae, assumenda laboriosam iure aliquid totam veritatis, ratione fuga quam quo pariatur eius. Id placeat a veniam. Pariatur, voluptatibus laboriosam, soluta autem cum expedita hic molestiae at omnis, eveniet voluptates? Iusto id expedita quas, accusantium non consectetur, exercitationem quaerat laboriosam libero debitis doloribus eos earum aut cupiditate perspiciatis, ipsam inventore ipsum! Placeat molestiae officia nostrum rerum nihil praesentium vero accusantium quaerat autem eum aspernatur labore, commodi non unde quis ad hic, laboriosam voluptatum sed nemo, iusto nam quas? Error pariatur quae aut eligendi aperiam tenetur dolorum perspiciatis eaque omnis velit architecto exercitationem odio delectus id saepe debitis perferendis totam ad, neque vitae, ducimus, a ipsum officia. Quas unde odio cum iste, nostrum magni at impedit ipsum eaque error deserunt provident labore officia accusantium? Ipsum eum, velit perferendis odio, perspiciatis excepturi exercitationem repudiandae architecto deleniti natus ea voluptatibus obcaecati quae unde dicta modi illo a impedit consectetur suscipit quaerat nostrum amet deserunt. Quaerat accusantium illo pariatur blanditiis?</h6>
                
                <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore cumque sint voluptas minima optio non in deserunt? Ea rem aspernatur perspiciatis, eaque sed deleniti maiores ipsam fugit, aperiam doloribus ducimus? Aut nihil voluptates, velit necessitatibus hic ipsa perferendis vitae consequatur similique dolores in voluptatem beatae, assumenda laboriosam iure aliquid totam veritatis, ratione fuga quam quo pariatur eius. Id placeat a veniam. Pariatur, voluptatibus laboriosam, soluta autem cum expedita hic molestiae at omnis, eveniet voluptates? Iusto id expedita quas, accusantium non consectetur, exercitationem quaerat laboriosam libero debitis doloribus eos earum aut cupiditate perspiciatis, ipsam inventore ipsum! Placeat molestiae officia nostrum rerum nihil praesentium vero accusantium quaerat autem eum aspernatur labore, commodi non unde quis ad hic, laboriosam voluptatum sed nemo, iusto nam quas? Error pariatur quae aut eligendi aperiam tenetur dolorum perspiciatis eaque omnis velit architecto exercitationem odio delectus id saepe debitis perferendis totam ad, neque vitae, ducimus, a ipsum officia. Quas unde odio cum iste, nostrum magni at impedit ipsum eaque error deserunt provident labore officia accusantium? Ipsum eum, velit perferendis odio, perspiciatis excepturi exercitationem repudiandae architecto deleniti natus ea voluptatibus obcaecati quae unde dicta modi illo a impedit consectetur suscipit quaerat nostrum amet deserunt. Quaerat accusantium illo pariatur blanditiis?</h6>
            </div>
        </div>
    );
};

export default ShowBlog;
