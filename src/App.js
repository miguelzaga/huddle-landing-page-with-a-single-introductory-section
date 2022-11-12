import { useState } from "react";

function App() {
  return (
    <div>
      <header className="header">
        <img src="" className="header__logo" />
      </header>
      <main className="main">
        <img src="" className="main__img" />
        <div className="main__container">
          <h1 className="main__title">
            Build The Community Your Fans Will Love{" "}
          </h1>
          <p className="main__text">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <button className="main__btn">Register</button>
        </div>
      </main>
      <footer className="footer">
        <ul className="footer__socials">
          <li className="footer__socials-li">
            <a className="footer__socials-a" href="#"></a>
          </li>
          <li className="footer__socials-li">
            <a className="footer__socials-a" href="#"></a>
          </li>
          <li className="footer__socials-li">
            <a className="footer__socials-a" href="#"></a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
