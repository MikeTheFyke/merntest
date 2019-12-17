import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';

class ItemModal extends Component {
    state = {
        modal: false,
        name: ''
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            name: this.state.name
        }
        // Add Item via addItem Action
        this.props.addItem(newItem);

        // Close Modal
        this.toggle();
    }

    render (){
        return(
            <div>
                <div className="text-center">
                    <Button
                        color="success"
                        style={{marginBottom: '2rem'}}
                        onClick={this.toggle}
                    >Add Item</Button>
                </div>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    >
                    <div className="d-flex justify-content-center">
                        <ModalHeader toggle={this.toggle} > Add to Shopping List     </ModalHeader>
                    </div>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item">Enter an item please</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="item"
                                    placeholder="Add shopping item"
                                    autoComplete="off"
                                    onChange={this.onChange}
                                />
                                <Button
                                    color="success"
                                    style={{marginTop: '2rem'}}
                                    block
                                >Add Item</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    item: state.item
});


export default connect(mapStateToProps, { addItem })(ItemModal);