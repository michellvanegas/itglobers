import React from 'react'
import './Home.css'

export default function HomeHeader() {
        return (
          <div className="header">
            <img className='logo' src={require('../images/PUFI.png')} />
            <div className='container-main'>
              <nav className="nav">
              <section className="nav-itemsP">
                    <a className="nav-items">PUFI PUFF </a>
                    <a className="nav-items"> PUFI RAIN </a>
                    <a className="nav-items"> PUFI CART </a>
                    <a className="nav-items"> PUFI NAP </a>
                </section>
              </nav>
              <div className="container-two">
              <ul className="main">
                  <a className="itemOne" id="cuenta">
                    MI CUENTA
                  </a>
                  <a className="itemTwo"> MI COMPRA</a>
              </ul>
            </div> 
            </div>
            <div  className="title">
            {/* <img className="imgFondo" src={require('../images/sofacama.jpg')} /> */}
              <h1>
              ESTÁR CÓMODO,
              <br />
              NUNCA FUE TAN FÁCIL.
              </h1>
              <p className="shop">SHOP</p>
            </div>
          </div>
        );
      };
    