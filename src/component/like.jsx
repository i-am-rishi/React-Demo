import React, { Component } from 'react';

export default class Like extends Component {
    render() { 
       let classes= this.props.property===true? "fa fa-heart" : "fa fa-heart-o";
        return  <i style={{cursor: "pointer"}} onClick={this.props.onClick} className={classes} aria-hidden="true"></i> ;
    }
}
 