import React, { Component } from 'react';
import Toolbar from './Toolbar';
const List = (props, Wrapped) => class extends Component {
    constructor(props){
        super(props);
    }
    
    componentDidMount() {
        console.log(props, this.props);
        this.props.loadList({
            title: this.props.title,
            subtitle: this.props.subtitle
        });
    }
    
    render(){
        return (
            <div>
                <h2>{props.title}</h2>
                <Toolbar
                    type = {this.props.type}
                    title = {this.props.title}
                    exportTable = {this.props.exportTable}
                    change = {this.props.changeData}
                    pass = {this.clickHandleCheckbox}
                    listtype = {this.props.userlist.listtype}
                    selected = {this.props.selected}
                />
                <Wrapped
                    fetching = {this.props.userlist.fetching}
                    list = {this.props.userlist.list}
                    total = {this.props.userlist.total}
                    type = {this.props.type}
                    toggleDetail = {this.props.toggleDetail}
                    toggleCheckbox = {this.props.toggleCheckbox}
                    selectRows = {this.props.selectRows}
                />
            </div>
        )
    }
}

export default List;