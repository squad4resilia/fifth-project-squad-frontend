import "./css/landingpage.css";
import anonymousLogo from './assets/anonymous.png'
import facebookLogo from './assets/facebook.svg'
import twitterLogo from './assets/twitter.svg'
import instagramLogo from './assets/instagram.svg'

function Page() {
  return (
    <>
          <div className="imagem">
          <img src={anonymousLogo} id="imagem"  alt="" />
        </div>
      <div id="testando">
        <div id="teste">
          <div className="topics">
            <h1>Topics</h1>
          </div>
          <div className="principal">
            <div>
              <ul>
                <h2 className="temas">💻Tech</h2>
                <li>Programming</li>
              </ul>
            </div>
            <div>
              <ul>
                <h2 className="temas">⚽Sports</h2>
                <li>Soccer</li>
              </ul>
            </div>
            <div>
              <ul>
                <h2 className="temas">🍽Cooking</h2>
                <li>Brazillian</li>
              </ul>
            </div>
            <div>
              <ul>
                <h2 className="temas">🎞Movies</h2>
                <li>Sci-fi</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
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
              <use xlinkHref="#bootstrap"></use>
            </a>
            <span className="mb-3 mb-md-0 text-muted">© 2023 Company, Inc</span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a className="text-muted" href="https://twitter.com/home">
                <img
                  src={twitterLogo}
                  className="bi"
                  width="5"
                  height="5"
                />
                <use xlinkHref="#twitter"></use>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" href="https://www.instagram.com/">
                <img
                  src={instagramLogo}
                  className="bi"
                  width="5"
                  height="5"
                />
                <use xlinkHref="#instagram"></use>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" href="https://www.facebook.com/">
                <img
                  src={facebookLogo}
                  className="bi"
                  width="5"
                  height="5"
                />
                <use xlinkHref="#facebook"></use>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}

export default Page;

