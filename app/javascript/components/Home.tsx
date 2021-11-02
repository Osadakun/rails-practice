import React from 'react'
import "./assets/home.scss";
import Contact from './Contact'
import MyAvatar from './MyAvatar';
import Informations from './Informations';
import ScrollUp from './Scrollup';

const Home: React.FC = () => {
  return (
    <>
      <header>
        <p className="greet">Welcome to Mypage!!</p>
      </header>
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
      </ul>
      <section>
        <MyAvatar />
      </section>
      <section id='informations'>
        <Informations />
      </section>
      <section id='contact'>
        <Contact />
      </section>
      <ScrollUp />
    </>
  );
}

export default Home;