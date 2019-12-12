import React, { Component } from 'react';
import chipmunk from './images/chipmunk.png';

class Parallax extends Component {

    render(){
        return(
            <div>
                <img src={chipmunk} style={{width: '200px', height: '200px'}} />
            </div>
        );
    }

}



export default Parallax;