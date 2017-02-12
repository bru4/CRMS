import React, { Component } from 'react';

const List = (props, Wrapped) => class extends Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return <Wrapped />
    }
}

export default List;