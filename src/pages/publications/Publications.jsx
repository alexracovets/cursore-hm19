import React, {useEffect, useState} from 'react';
import Post from "../../components/Post/Post";

const Publications = () => {
    const [posts, setPosts]=useState([]);

    const getPosts = async()=>{
        const request = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
        const response = await request.json();

        setPosts(response);
    }

    useEffect(()=>{
        getPosts();
    }, []);


    return (
        <div className="posts-wrapper">
            { posts.map((post)=>{
                    return(<Post key={post.id} store={post} />);
                })
            }
        </div>
    );
};

export default Publications;