import React, { Fragment } from 'react';
import './App.css';

export class Shopcart extends React.Component {



  render() {
    return (
      <Fragment>

        <div className="wrapper">

          {/* componente producto */}
          <section className="product">
            <div class="inner">
              <div class="img-prod"></div>
              <h1>product</h1>
              <p>$ 4000</p>
              <p>cantidad: 2</p>
              {/* componente hijo */}
              <button>+</button>
              <button>-</button>

              <button className="add">Añadir</button>
            </div>
          </section>

          {/* componente carro */}
          <section className="cart">
            <div className="inner">
              <h1>Mis Productos</h1>
              <ul>
                <li>
                  <div className="item">
                    <h3>product</h3>
                    <p>precio: $ 4000</p>
                    <p>cantidad: 2</p>
                  </div>
                </li>
                
              </ul>
            </div>
          </section>

        </div>
      </Fragment>
    );
  }
}


