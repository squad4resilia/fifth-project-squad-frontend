import "./css/fullpage.css";
import React, { useState } from 'react';

const Formulario = ({threadSubject}) => {
  const [thread, setThread] = useState({
    thread_author: '',
    thread_subject: threadSubject,
    thread_title: '',
    thread_msg: ''
  });

  const handleChange = e => {
    setThread({ ...thread, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(thread)
    };

    fetch('https://forumapi.onrender.com/thread', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
  };

  return (
    <>
    <div class="caixaGrande d-flex justify-content-center align-item-center mb-5 p-3">
    <div class="d-flex border border-dark p-3" id="container">

    <form onSubmit={handleSubmit}>
      <div class="d-flex align-items-start flex-column p-1">
        <label htmlFor="thread_author"></label>
        <input placeholder='Author'
          type="text"
          id="thread_author"
          name="thread_author"
          value={thread.thread_author}
          onChange={handleChange}
        />
      </div>
      <div class="d-flex align-items-start flex-column p-1">
        <label htmlFor="thread_title"></label>
        <input placeholder='Title'
          type="text"
          id="thread_title"
          name="thread_title"
          value={thread.thread_title}
          onChange={handleChange}
          required
        />
      </div>
      <div class="d-flex align-items-start flex-column pb-2">
        <label htmlFor="thread_msg"></label>
        <textarea placeholder="Digite sua mensagem"
          id="thread_msg"
          name="thread_msg"
          value={thread.thread_msg}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" class=" btn btn-outline-dark" id="botãoTeste">Submit</button>
    </form>
    </div>
    </div>
    </>
  );
};

export default Formulario;
