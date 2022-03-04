import React from 'react';
import { createClient } from 'contentful';

import '../styles/App.css';
import MyCommentBox from './MyCommentBox.jsx';

const fakeBlogPostId = 'my-blog-post';

const postData = (url, data) => {

    return fetch(`.netlify/functions${url}`, {
        body: JSON.stringify(data),
        headers: {
            'content-type': 'application/json'
        },
        method: 'POST',
        //mode: 'cors' // if your endpoints are on a different domain
    }).then(response => response.json());
};

const contentfulClient = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID || '2r8689br5f3p',
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN || 'P5JDNzsC3vc_oXxkP57fPqUhMqE2vEKEAH07Bx2MKD0',
    host: process.env.REACT_APP_CONTENTFUL_HOST
});

const App = props => (
    <div>
        <h3>Where's Foster Comment Section</h3>
        <div>
            <MyCommentBox
                subjectId={fakeBlogPostId}
                postData={postData}
                contentfulClient={contentfulClient}
            />
        </div>
    </div>
);



export default App;
