import React, { useState } from 'react';

const Formulario = () => {
  const [thread, setThread] = useState({
    thread_author: '',
    thread_subject: '',
    thread_title: '',
    thread_msg: ''
  });

  const handleChange = e => {
    setThread({ ...thread, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(thread);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="thread_author">Author:</label>
        <input
          type="text"
          id="thread_author"
          name="thread_author"
          value={thread.thread_author}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="thread_subject">Subject:</label>
        <input
          type="text"
          id="thread_subject"
          name="thread_subject"
          value={thread.thread_subject}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="thread_title">Title:</label>
        <input
          type="text"
          id="thread_title"
          name="thread_title"
          value={thread.thread_title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="thread_msg">Message:</label>
        <textarea
          id="thread_msg"
          name="thread_msg"
          value={thread.thread_msg}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Formulario;
