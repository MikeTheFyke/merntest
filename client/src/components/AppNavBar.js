import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

class AppNavBar extends Component {
    state = {
        isOpen: false
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    // mb-5 = margin bottom 5, expand 'sm' = hamburger on smallscreens
    render(){
        return(
            <div>
                <NavBar className="mb-5" color="dark" dark expand="sm"> 
                <Container>
                    <NavBarBrand href="/">Shopping List</NavBarBrand>
                    <NavBarToggler onClick={this.toggle}></NavBarToggler>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://github.com/MikeTheFyke">
                                    GitHub
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
                </NavBar>
            </div>
        );
    }
}


export default AppNavBar;