import anonymousLogo from './assets/anonymous.png'
import "./css/teste.css";
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
    <>
    <div className="imagem">
    <img src={anonymousLogo} id="imagem"  alt="" />
    </div>

    <div class="caixaGrande d-flex justify-content-center align-item-center mt-5 mb-5 p-3">
    <div class="d-flex border border-dark p-3 m-3" id="container">

    <form onSubmit={handleSubmit}>
      <div class="d-flex align-items-start flex-column p-1">
        <label htmlFor="thread_author">Author:</label>
        <input
          type="text"
          id="thread_author"
          name="thread_author"
          value={thread.thread_author}
          onChange={handleChange}
        />
      </div>
      <div class="d-flex align-items-start flex-column p-1">
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
      <div class="d-flex align-items-start flex-column p-1">
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
      <div class="d-flex align-items-start flex-column pb-2">
        <label htmlFor="thread_msg">Message:</label>
        <textarea placeholder="Digite sua mensagem"
          id="thread_msg"
          name="thread_msg"
          value={thread.thread_msg}
          onChange={handleChange}
          required
        />
      </div>
      <button type="button" class="btn btn-outline-dark" id="botãoTeste">Submit</button>
    </form>
    </div>
    </div>
    </>
  );
};

export default Formulario;
