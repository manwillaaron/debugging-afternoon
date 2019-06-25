import React, { Component } from "react";
import axios from "axios";
import StoreFront from "./Components/StoreFront/StoreFront";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";
import NavBar from "./Components/NavBar/NavBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      cart: [],
      showCart: false,
      counter: 0
    };
    this.addToCart = this.addToCart.bind(this)
    this.removeFromCart = this.removeFromCart.bind(this)
    this.navigate = this.navigate.bind(this)
    this.cartCounter = this.cartCounter.bind(this)
    this.cartSubtract = this.cartSubtract.bind(this)
    
  }
  componentDidMount() {
    axios
      .get("https://practiceapi.devmountain.com/products/")
      .then(response => {
        this.setState({
          products: response.data
        });
      });
  }

  cartSubtract(){
    this.setState({counter: this.state.cart.length -1})
  }

  cartCounter() {
    
    this.setState({counter: this.state.cart.length +1})
  }

  addToCart(item) {
    this.setState({
      cart: [...this.state.cart, item]
      
    });
    this.cartCounter()
  }
  removeFromCart(index) {
    let cartCopy = this.state.cart.slice();
    cartCopy.splice(index, 1);
    this.setState({
      cart: cartCopy
    })
    this.cartSubtract()
  }
  navigate(location) {
    if (location === "cart") {
      this.setState({
        showCart: true
      })
    } else {
      this.setState({
        showCart: false
      })
    }
  }
  render() {
    const { products, cart, showCart,counter } = this.state;
    return (
      <div className="App">
        <NavBar navigate={this.navigate} counter = {counter} cartCounter = {this.cartCounter}/>
        <div className="main-container">
          {showCart ? (
            <ShoppingCart cart={cart} removeFromCart={this.removeFromCart} />
          ) : (
            <StoreFront products={products} addToCart={this.addToCart} onchange={e => e.target.value} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
