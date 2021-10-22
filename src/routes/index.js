import React from 'react'
import {Route} from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import NavMenu from '../components/NavBar/Navmenu';
import Footer from "../components/Footer/footer";

import Home from '../pages/Home'
import ContactUs from '../pages/ContactUs';
import AboutUs from '../pages/AboutUs'
import BookNow from '../pages/BookNow'

const RootRoutes =()=>{
    return(
        <Router>
            <NavMenu/>
            <Route exact path='/' component={Home} />
            <Route exact path='/Home' component={Home} />
            <Route exact path='/AboutUs' component={AboutUs} />
            <Route exact path='/ContactUs' component={ContactUs} />
            <Route exact path='/BookNow' component={BookNow}/>
<<<<<<< HEAD
            </div>
            <Footer/>
=======
>>>>>>> 05bc5616f9e9b78336ba3cef1c477fac48d4ff69
        </Router>
    )
}
export default RootRoutes;