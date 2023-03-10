import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/fullpage.css";

const FullPage = ({threadData, threadSubject}) => {
  const [threads, setThreads] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://forumapi.onrender.com/thread/subject/${threadSubject}`
      );
      setThreads(result.data);
    };

    fetchData();
  }, []);

  return (
    <div className="page">
      {threads.map((thread) => (
        
        <div className="thread" key={thread._id}>
          <div className="thread-info">
            <h2 className="thread-title">{thread.thread_title}</h2>
            <p className="thread-author">{thread.thread_author}</p>
            <p className="thread-date">{new Date(thread.thread_date).toLocaleDateString()}</p>
          </div>
          <div className="thread-body">
            <p className="thread-msg">{thread.thread_msg}</p>
          </div>
        </div>
        
      ))}
    </div>
  );
};


export default FullPage;
