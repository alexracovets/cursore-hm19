import './Post.css';
import React from 'react';

import PostImg from './img/post.svg'

const Post = (props) => {

    const postData = props.store;

    return (
            <div className='post'>
                <div className='post-image'>
                    <img src={PostImg} alt=""/>
                </div>
                <div className='post-info'>
                    <div className='top-info'>
                        <div className='info_name'>
                            {postData.name}
                        </div>
                        <div className='info_tag'>
                            {postData.email}
                        </div>
                    </div>
                    <div className='content-info'>
                        {postData.body}
                    </div>
                </div>
            </div>
    );
};

export default Post;