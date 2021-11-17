import React from 'react'
import {Route} from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import NavMenu from '../components/NavBar/Navmenu';
import Footer from "../components/Footer/footer";

import Home from '../pages/Home';
import ContactUs from '../pages/ContactUs';
import AboutUs from '../pages/AboutUs';
import BookNow from '../pages/BookNow';
import Monitoring from '../pages/Monitoring';
import Profile from '../pages/Profile';

const RootRoutes =()=>{
    return(
        <Router>
            <NavMenu/>
            <Route exact path='/' component={Home} />
            <Route exact path='/Home' component={Home} />
            <Route exact path='/AboutUs' component={AboutUs} />
            <Route exact path='/ContactUs' component={ContactUs} />
            <Route exact path='/BookNow' component={BookNow}/>
            <Route exact path='/Monitoring' component={Monitoring}/>
            <Route exact path='/Profile' component={Profile}/>
            <Footer/>
        </Router>
        
    )
}
export default RootRoutes;