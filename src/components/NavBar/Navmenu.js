import React, { useState,useEffect } from "react";
import { makeStyles, AppBar } from "@material-ui/core";
import {
  Button,
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from "reactstrap";
import decode from 'jwt-decode';
import {useDispatch} from 'react-redux';
import { Link,useHistory,useLocation } from "react-router-dom";
import { COLORS } from "../../Styles/colors";
import Item from "./Item";
import "./Navmenu.css";
import * as actionType from '../Connection/Reducers/Constant/actionType'
import IconClinic from "../../assets/images/sdmc-no-border.png";

const menu =[
    {
        title: "Home",
        component: "/Home"
    },

    {
        title: "Book Now",
        component: "/BookNow"
    },

    // {
    
    //   title: "About Us",
    //   component: "/AboutUs"
    // },

    // {
    //   title: "Contact Us",
    //   component: "/ContactUs"
    // },


    // {
    //   title: "Notification",
    //   component: "/home"
    // },

    // {
    //     title : "Learn More",
    //     component: "/Services"
    // },

    
]

const menu1 = [


{

  title: "About Us",
  component: "/AboutUs"
},

{
  title: "Contact Us",
  component: "/ContactUs"
},


{
    title : "Learn More",
    component: "/Services"
},



]

const NavMenu = () => {
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const [isOpen, setIsOpen] = useState(false);
    const [selectedPage, setSelectedPage] = useState("Home");
    const classes = useStyles();
    const location =useLocation();
    const history = useHistory();
    const dispatch = useDispatch();

    const logout = ()=>{
      dispatch({type: actionType.LOGOUT})
      history.push('/Authentication');
      setUser(null);
    }
  useEffect(()=>{
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem('profile')))
  },[location])


    return (
      <AppBar
        elevation={0}
        position='relative'
        style={{ boxShadow: "none", background: COLORS.MAROON, }}
      >
        <Navbar
          className='navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow w-100'
          dark
        >
          <Container>

            <NavbarBrand tag={Link} to='/'>
              <div className="navbarbrand">
                <img src={IconClinic} alt='logo' height="60px" width="60px" />
              </div>
            </NavbarBrand>
            {user?.result? (<>
            <NavbarToggler
              onClick={() => setIsOpen(!isOpen)}
              className='mr-2 white '
            />
            <Collapse
              className='d-sm-inline-flex flex-sm-row-reverse'
              isOpen={isOpen}
              navbar
            >
              <ul className='navbar-nav flex-grow mx-auto'>
                {menu.map(({ title, component }, idx) => (
                  <Item
                    key={idx}
                    title={title}
                    component={component}
                    onClickListener={() => {
                      setSelectedPage(title);
                    }}
                  
                  />

                ))}
              </ul>
            </Collapse>

            <Button className={classes.buttonlogout} variant="contained"  onClick={logout}>Logout</Button>

            </>):(<>
              <NavbarToggler
              onClick={() => setIsOpen(!isOpen)}
              className='mr-2 white '
            />
            <Collapse
              className='d-sm-inline-flex flex-sm-row-reverse'
              isOpen={isOpen}
              navbar
            >
              <ul className='navbar-nav flex-grow mx-auto'>
                {menu1.map(({ title, component }, idx) => (
                  <Item
                    key={idx}
                    title={title}
                    component={component}
                    onClickListener={() => {
                      setSelectedPage(title);
                    }}
                  
                  />

                ))}
              </ul>
            </Collapse>
                  <NavbarBrand tag={Link} to='/Authentication'>
                    <div className="navbarbrand">
                      <Button className={classes.buttonlogin} variant="contained">Sign In</Button>
                    </div>
                  </NavbarBrand></>
            )}
          </Container>
        </Navbar>
      </AppBar>
    );
  };
   
  const useStyles = makeStyles((theme) => ({
    title: {
      flexGrow: 1,
      fontWeight: "bold",
      fontSize: 25,
      color: COLORS.WHITE,
      fontFamily: "Pathway Gothic One",
    },
    buttonlogout: {
      color: COLORS.BLACK,
      backgroundColor: "lightgray",
    },
    buttonlogin: {
      color: COLORS.BLACK,
      backgroundColor: "lightgray",
    },
  }));
  export default NavMenu;