import React, { Component } from 'react';
import Zerodha from './Components/Zerodha';
import About from './Components/About';
import Product from './Components/Product';
import Pricing from './Components/Pricing';
import Support from './Components/Support';
import { BrowserRouter, Route } from 'react-router-dom';
import OpenAccount from './Components/OpenAccount';



export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="zerodha">


          <Route exact path='/' component={Zerodha} />
          <Route path='/About' component={About} />
          <Route path='/Product' component={Product} />
          <Route path='/Pricing' component={Pricing} />
          <Route path='/Support' component={Support} />
          <Route path='/open-account' component={OpenAccount}/>




        </div>
      </BrowserRouter>
    )
  }
}

export default App

