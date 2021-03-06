import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from  'prop-types';

class ShoppingList extends Component{
    
    componentDidMount(){
        this.props.getItems(); // calls getItems
    }

    onDeleteClick = (id) => {
        this.props.deleteItem(id); // calls deleteItem
    }

    render (){
        const { items } = this.props.item;
        return (
            <Container>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({ _id, name }) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem className="text-success">
                                    <Button
                                        className="remove-btn text-white"
                                        color="warning"
                                        size="sm"
                                        onClick={this.onDeleteClick.bind(this, _id)}
                                    >&times;</Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

ShoppingList.propTypes = { // redux actions are stored as props
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({ // Item from declaration in reducer
    item: state.item
});

export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);