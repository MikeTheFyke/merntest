import React, { Component } from 'react';
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
import logoMini from './images/ScrappyMini.png';

class AppNavBar extends Component {
    state = {
        isOpen: false
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    // mb-5 = margin bottom 5, expand 'sm' = hamburger on smallscreens
    render(){
        return(
            <div>
                <Navbar className='mb-5' color='success' dark expand='lg'> 
                    <Container>
                        <img src={logoMini} style={{width: '40px', height: '50px'}} margin-right="2"/>
                        <NavbarBrand href='/'>BETTER'ER BYTES</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className='ml-auto' navbar>
                                <NavItem>
                                    <NavLink href="https://github.com/MikeTheFyke" target="_blank">
                                        GitHub
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}


export default AppNavBar;