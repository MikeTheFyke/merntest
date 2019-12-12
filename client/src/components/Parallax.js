import React, { Component } from 'react';
import chipmunk from './images/chipmunkBack01.png';

class Parallax extends Component {

    render(){
        return(
            <div>
                <div className="parallaxContainer">
                    <img className="chipmunkImg" src={chipmunk}  />
                </div>
            </div>
        );
    }

}



export default Parallax;