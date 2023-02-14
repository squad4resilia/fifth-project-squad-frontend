import anonymousLogo from './assets/anonymous.png'
import "./css/replypage.css";
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
    <div className="imagem" >
    <img src={anonymousLogo} id="imagem"  alt="" to="/landingpage.jsx"/>
    </div>

    <div class="caixaGrande d-flex justify-content-center align-item-center mt-5 mb-5 p-3">
    <div class="d-flex border border-dark p-3 m-3" id="container">

    <form onSubmit={handleSubmit}>
      <div class="d-flex align-items-start flex-column p-1 mt-3 mb-3">
        <label htmlFor="thread_author"></label>
        <input placeholder='Author'
          type="text"
          id="thread_author"
          name="thread_author"
          value={thread.thread_author}
          onChange={handleChange}
        />
      </div>
      <div class="d-flex align-items-start flex-column p-1 mb-3">
        <label htmlFor="thread_subject"></label>
        <input placeholder='Subject'
          type="text"
          id="thread_subject"
          name="thread_subject"
          value={thread.thread_subject}
          onChange={handleChange}
          required
        />
      </div>
      <div class="d-flex align-items-start flex-column p-1 mb-3">
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
      <button type="button" class=" btn btn-outline-dark" id="botãoTeste">Submit</button>
    </form>
    </div>
    </div>
    </>
  );
};

export default Formulario;
