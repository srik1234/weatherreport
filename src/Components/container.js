import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';


function container(props) {
    return (
        <div className='Container'>
          {props.children}
        </div>
    );

}

export default container;
