import React, { Fragment } from 'react';
import './App.css';
import { Product } from '../src/components/product/product';
import { Cart } from '../src/components/cart/cart';

export class Shopcart extends React.Component {
  
  // seteo, inicializo objeto state
  state = {
    qty: 0,
    cartList: [],
  }
  
  // objeto product para hacer el seed al card
  product = {
    product: 'cloro',
    price: 2000
  }

  handleAdd = (e) => {
    console.log('add');
    this.setState({
      qty: this.state.qty + 1
    })
  }

  handleDec = () => {
    console.log('dec');
    this.setState({
      qty: this.state.qty - 1
    })
  }

  addToCart = (e) => {
    // debo caprutar un objeto! por lo tanto creo un objeto
    // este es añadido al arreglo que setea el state obj

    let objP = {
      name: this.product.product,
      price: this.product.price,
      qty: this.state.qty
    }
    
    if(objP.qty < 1 ) {
      alert('debes añadir mas al carro');
    } else {
      this.setState({
        // pusheo al array
        cartList: this.state.cartList.concat(objP)
      })
    }

  }


  render() {
    return (
      <Fragment>

        <div className="wrapper">
          {/* componente hijo product */}
          <Product {...this.product} 
          qty={this.state.qty} 
          funcion1={e => this.handleAdd(e)} 
          funcion2={e => this.handleDec(e)} 
          addTo={e => this.addToCart(e)}
          />
          
          {/* componente hijo carro */}
          <Cart item={this.state.cartList}/>

        </div>
      </Fragment>
    );
  }
}


