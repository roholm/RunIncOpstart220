import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Home from './pages/home/home'
import Event from './pages/events/events'
import Shop from './pages/shop/shop'
import Contact from './pages/contact/contact'
import NotFound from './pages/notfound/notfound'

function App() {
  return (
    // alt skal pakkes i BrowserRouter 
    //for at alle links på alle sider går det rigtige sted hen. På siderne bruges <Link to="..path..">
    //kig evt. i navbar component
    <BrowserRouter>
      <div className="App">
        <Header />
        <div id="page-body">
          {/* Switch viser det første komponent, hvor url passer, derfor notfound i bunden */}
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/home" component={Home} />
            <Route path="/events" component={Event} />
            <Route path="/shop" component={Shop} />
            <Route path="/contactus" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
