import React from 'react'
import {Route} from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import NavMenu from '../components/NavBar/Navmenu';

import Home from '../pages/Home'
import ContactUs from '../pages/ContactUs';
import AboutUs from '../pages/AboutUs'
import BookNow from '../pages/BookNow'

const RootRoutes =()=>{
    return(
        <Router>
            <NavMenu/>
            <div style={{ marginTop: 100 }}>
            <Route exact path='/' component={Home} />
            <Route exact path='/Home' component={Home} />
            <Route exact path='/AboutUs' component={AboutUs} />
            <Route exact path='/ContactUs' component={ContactUs} />
            <Route exact path='/BookNow' component={BookNow}/>

              </div>
        </Router>
    )
}
export default RootRoutes;