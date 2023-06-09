import './App.css';
import React, { Component } from 'react';

class Welcome extends React.Component {
  constructor(valueArgu) {
    super(valueArgu);
  }

  render() {
    return <h1>Welcome to { this.valueArgu.name} Digital Banking</h1>;
  }
}

function App() {

  const name ='Digital'
  return (
    <div className="container">
      <img src="Angelo_Gemmi_rosette_3.png"/>

          <Welcome name="Alizzwallet" />
          <Welcome name="AlizzBusiness" />
          <div className="login">
          <ul>
              <li>Login</li>
              <li>Email Support</li>
              <li>Telephone Support</li>
          </ul>
          </div>
          <h1></h1>
          <ul>
            <li>Support Document</li>
            <li>System Infrustructure </li>
            <li>Design Documents</li>  
          </ul>


   <article>
      <div className="container">
      <p>
      Alizz islamic bank <b>{name}</b> is a leading provider
       of comprehensive digital solutions, offering
      a wide range of services that help businesses achieve 
      their goals in the digital world. With a team of highly skilled 
      professionals, we specialize in services management, transaction 
      management, network support, and business technology support. We work closely with clients to understand their unique needs and provide customized strategies that drive growth and success. Our team is dedicated to delivering results that exceed our clients' expectations, leveraging cutting-edge technology and innovative solutions. Whether it's managing complex services, optimizing transactions, or providing expert network and technology support, our digital department is here to help businesses thrive in today's digital landscape."
      </p>
      <button className='button' onClick={()=>alert('HI from javascript')}>Please click here</button>
      </div>
      </article>
    </div>
  );
}

export default App;
