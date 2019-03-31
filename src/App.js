import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faMarker, faBasketballBall, faClock} from '@fortawesome/free-solid-svg-icons'

import Header from './comp/header'
import Footer from './comp/footer'
import Home from './home'
import Teams from './comp/teams'
import Team from './comp/team'
import News from './comp/news'
import Contact from './comp/contact'

library.add(fab, faMarker, faBasketballBall, faClock);

class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/teams" component={Teams} />
          <Route exact path="/team/:id" component={Team} />
          <Route exact path="/news" component={News} />
          <Route exact path="/contact" component={Contact} />
          <Footer />
        </div>
      
      
      </BrowserRouter>
    );
  }
}

export default App;
