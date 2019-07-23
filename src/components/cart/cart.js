import React, { Fragment } from 'react';

export const Cart = (props) => {

    let priceArray = [];

    let priceList = props.item.map((prod, i) => {
        let precio = prod.price * prod.qty;
        priceArray.push(precio);
        
    })

    let total = priceArray.reduce((a, b) => {
        return a + b;
    }, 0)


    // recorre el valor de el array cartList
    const listItem = props.item.map((items, i) => {
        return(
            <div className="item" key={i}>
                <h3>producto: {items.name}</h3>
                <p>precio: $ {items.price}</p>
                <p>cantidad: {items.qty}</p>
            </div>
        );
    })


    return(
        <Fragment>
          <section className="cart">
            <div className="inner">
              <h1>Mis Productos</h1>
              <ul>
                <li>
                  {listItem}
                </li>
              </ul>
              <hr />
              <p className="total">total: {total}</p>
            </div>
          </section>
        </Fragment>
    );
}