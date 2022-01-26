import React from 'react'
import { Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import NavMenu from '../components/NavBar/Navmenu';
import Footer from "../components/Footer/footer";

import Home from '../pages/Home';
import ContactUs from '../pages/ContactUs';
import Auth from '../pages/Auth'
import Home2 from '../pages/Home2'
import AboutUs from '../pages/AboutUs';
import BookNow from '../pages/BookNow';
import Monitoring from '../pages/Monitoring';
import Profile from '../pages/Profile';
import Doctor from '../pages/Doctor';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import ScrollButton from '../components/ScrollButton/ScrollButton';
import Services from '../pages/Services';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import FAQs from '../pages/FAQs';

const RootRoutes =()=>{
    return(
        <Router>
            <NavMenu/>
            <ScrollToTop>
            <Route exact path='/' component={Home} />
            <Route exact path='/Home' component={Profile} />
            <Route exact path='/ContactUs' component={ContactUs} />
            <Route exact path='/BookNow' component={BookNow}/>
            <Route exact path='/Authentication' component={Auth}/>
            <Route exact path='/Homess' component={Home2} />
            <Route exact path='/Monitoring' component={Monitoring}/>
            <Route exact path='/Profile' component={Profile}/>
            <Route exact path='/Doctor' component={Doctor}/>
            <Route exact path='/AboutUs' component={AboutUs}/>
            <Route exact path='/Services' component={Services}/>
            <Route exact path='/PrivacyPolicy' component={PrivacyPolicy}/>
            <Route exact path='/FAQs' component={FAQs}/>
            <ScrollButton/>
            </ScrollToTop>
            <Footer/>
        </Router>
        
    )
}
export default RootRoutes;