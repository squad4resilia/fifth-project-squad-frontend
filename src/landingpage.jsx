import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import FullPage from './fullpage';
import './css/landingpage.css';
import anonymousLogo from './assets/anonymous.png';
import tst from './assets/tst.png'
import tst2 from './assets/anonimo-removebg-preview.png'
import tst3 from './assets/2-removebg-preview.png'
import facebookLogo from './assets/facebook.svg';
import twitterLogo from './assets/twitter.svg';
import instagramLogo from './assets/instagram.svg';
import ThreadForm from './replypage';
import fundo from './assets/fundo.png'

function Page() {
  const [selectedThread, setSelectedThread] = useState(null);

  return (
    <>
      <div className="imagem">
        <img src={tst2} id="imagem" alt="" />
        <img src={fundo} id="imagem2" alt="" />

      </div>      
      <div id="testando">
        <div id="teste">
          <div className="principal">
            <div>
              <ul>
                <h2 className="temas">💻Tech</h2>
                <li onClick={() => setSelectedThread('Programming')}>
                    Programming
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <h2 className="temas">⚽Sports</h2>
                <li onClick={() => setSelectedThread('Soccer')}>
                    Soccer
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <h2 className="temas">🍽Cooking</h2>
                <li onClick={() => setSelectedThread('Brazilian')}>
                    Brazilian
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <h2 className="temas">🎞Movies</h2>
                <li onClick={() => setSelectedThread('Sci-fi')}>
                    Sci-fi
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ThreadForm threadSubject={selectedThread} />
      <div className="container">
        {selectedThread && (
          <MyComponentWithThreadSubject
            threadSubject={selectedThread}
            render={(threadData) => (
              <FullPage threadData={threadData} threadSubject={selectedThread} />
            )}
          />
        )}

        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a
              href="/"
              className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
            >
              <img
                src={anonymousLogo}
                className="bi"
                width="30"
                height="24"
              />
              <div xlinkHref="#bootstrap"></div>
            </a>
            <span className="mb-3 mb-md-0 text-muted">© 2023 Company, Inc</span>
          </div>
        </footer>

      </div>
    </>
  );
}

function MyComponentWithThreadSubject({ threadSubject }) {
  const [threadData, setThreadData] = useState(null);

  useEffect(() => {
    fetch(`forumapi.onrender.com/thread/subject/${threadSubject}`).then(data => {
      setThreadData(data);
      console.log(threadSubject)
    });
  }, [threadSubject]);

  return <FullPage threadData={threadData} threadSubject={threadSubject} />;
}

export default Page;

