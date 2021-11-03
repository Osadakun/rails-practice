import React from 'react'
import "/Users/onotoshiki/Code/myapp/proapp/app/assets/stylesheets/home.scss";
import Contact from './Contact'
import MyAvatar from './MyAvatar';
import Informations from './Informations';
import ScrollUp from './Scrollup';

class Home extends React.Component {
  render(){
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
}

export default Home;