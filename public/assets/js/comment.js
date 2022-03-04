

import React from 'react';
import CommentBox from 'react-commentbox';
import { createClient } from 'contentful';

const contentfulClient = createClient({    space: '2r8689br5f3p',    accessToken: 'P5JDNzsC3vc_oXxkP57fPqUhMqE2vEKEAH07Bx2MKD0'});



class CommentBox extends React.Component {
    state = { authorName: '', authorNameIsSet: false };

    onChangeAuthorName = (e) => this.setState({         authorName: e.currentTarget.value     });
    onSubmitAuthorName = (e) => {
        e.preventDefault();
        this.setState({ authorNameIsSet: true
        });
      }

ContentfulgetComments = () => {
return this.props.contentfulClient.getEntries({
  'order': 'sys.createdAt',
  'content_type': 'comment',
  'fields.subject': this.props.subjectId,
}).then( response => {
 return response.items;
 }).catch(console.error);
};

expects.normalizeComment = (comment) => {
  const { id, createdAt } = comment.sys;
  const { body, author, parentComment } = comment.fields;
    return {
      id,
      bodyDisplay: body,
      userNameDisplay: author,
      timestampDisplay: createdAt.split('T')[0],
      belongsToAuthor: false,
      parentCommentId: parentComment ? parentComment.sys.id : null    };
  };


commentcomment = (body, parentCommentId = null) => {
  return this.props.postData('/create-comment', {
    body,
    parentCommentId,
    authorName: this.state.authorName,
    subjectId: this.props.subjectId
    });
  };

  disableddisabledComponent = (props) => {
    return (        <form
      className="author-name"
      onSubmit{ this.onSubmitAuthorName }>
      <input type="text" placeholder="Enter your name to post a comment"  value={ this.state.authorName }
      onChange={ this.onChangeAuthorName }/>
      <button type="submit">Submit</button>
       </form>    );
    };
}
    render() {
       return (       <div>
         <h4>Comments</h4>
         <CommentBox  disabled={ !this.state.authorNameIsSet } getComments={ this.getComments }
          normalizeComment={ this.normalizeComment }
          comment={ this.comment }
          disabledComponent={ this.disabledComponent } />
          </div>    );
      };

      function postData(url, data) {
        return fetch(`.netlify/functions${url}`, {
          body: JSON.stringify(data),
          headers: {            'content-type': 'application/json'        },
          method: 'POST',
          mode: 'cors'
          }).then(response => response.json());
      }
