import React, { useState } from "react";
import { makeStyles, AppBar } from "@material-ui/core";
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from "reactstrap";
import { Link } from "react-router-dom";
import { COLORS } from "../../Styles/colors";
import Item from "./Item";
import "./Navmenu.css";
import IconClinic from "../../assets/images/sdmc.png";

const menu =[
    {
        title: "Home",
        component: "/Home"
    },
    {
        title: "AboutUs",
        component: "/AboutUs"
    },
    {
        title: "ContactUs",
        component: "/ContactUs"
    },
    {
        title: "BookNow",
        component: "/BookNow"
    },
]

const NavMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedPage, setSelectedPage] = useState("Home");
    const classes = useStyles();
    return (
      <AppBar
        elevation={0}
        position='relative'
        style={{ boxShadow: "none", background: COLORS.RED, }}
      >
        <Navbar
          className='navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow w-100'
          dark
        >
          <Container>
            <NavbarBrand tag={Link} to='/'>
              <div className="navbarbrand">
                <img src={IconClinic} alt='logo' height="50px" width="60px" />
              </div>
            </NavbarBrand>
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
  }));
  export default NavMenu;