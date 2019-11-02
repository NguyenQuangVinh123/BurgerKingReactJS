import React from 'react'
import classes from './Modal.css'
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
    <React.Fragment>
        <Backdrop show={props.show}  clicked={props.modalClosed}/>
        <div className= {classes.Modal}
            style={{display: props.show ? 'block' : 'none',
            position : props.show ? 'fixed': 'relative' 
        }}>
            {props.children}
        </div>
    </React.Fragment>
    
);

export default modal;