import React, { Fragment } from 'react';


export const Product = (props) => {
    return(
        <Fragment>
           
          <section className="product">
            <div className="inner">
              <div className="img-prod"></div>
              <h1>{props.product}</h1>
              <p>$ {props.price}</p>
              <p>cantidad: {props.qty}</p>

              {/* button sera el componente hijo de product */}
              {/* le paso al hijo mediante el operador spread los props de funciones */}

              <button onClick={props.funcion1}>+</button>
              <button onClick={props.funcion2}>-</button>

              <button className="add" onClick={props.addTo}>Añadir</button>
            </div>
          </section>
        </Fragment>
    );   
}