import React from 'react'
import { Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import NavMenu from '../components/NavBar/Navmenu';
import Footer from "../components/Footer/footer";

import Home from '../pages/Home';
import ContactUs from '../pages/ContactUs';
import Doctor from '../pages/Doctor';
import BookNow from '../pages/BookNow';
import Monitoring from '../pages/Monitoring';
import Profile from '../pages/Profile';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

const RootRoutes =()=>{
    return(
        <Router>
            <NavMenu/>
            <ScrollToTop>
            <Route exact path='/' component={Home} />
            <Route exact path='/Home' component={Home} />
            <Route exact path='/ContactUs' component={ContactUs} />
            <Route exact path='/BookNow' component={BookNow}/>
            <Route exact path='/Monitoring' component={Monitoring}/>
            <Route exact path='/Profile' component={Profile}/>
            <Route exact path='/Doctor' component={Doctor}/>
            </ScrollToTop>
            <Footer/>
        </Router>
        
    )
}
export default RootRoutes;