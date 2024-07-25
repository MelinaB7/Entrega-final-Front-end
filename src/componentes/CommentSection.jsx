import React, { useState, useEffect } from 'react';

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleInputChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  const handleDeleteComment = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  return (
    <div>
      <h2>Comment Section</h2>
      <input
        type="text"
        value={newComment}
        onChange={handleInputChange}
        placeholder="Write a comment"
      />
      <button onClick={handleAddComment}>Add Comment</button>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            {comment}
            <button onClick={() => handleDeleteComment(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;
