import React from 'react'
import { connect } from 'react-redux'
import DetailBox from 'components/DetailBox'
import Toolbar from 'components/Toolbar'

//import * as constants from './constants';
import * as actions from './actions';
import reducer from './reducer';
//import * as selectors from './selectors';
//console.log(constants);

class Content extends React.Component {
    constructor(props){
        super(props);
    }
    
    componentWillMount() {
        console.log(this.props)
        this.props.loadList();
    }
    
    render(){
        const type = this.props.params.subtitle.includes('all')?'all':'review';        
        return (
            <div className='contentwrap'>
            <Toolbar
                type = {type}
                title = {this.props.params.title}
                exportTable = {this.props.exportTable}
                change = {this.props.changeData}
                pass = {this.props.passAll}
                listtype = {this.props.listtype}
            />
            { 
                this.props.children && React.cloneElement(this.props.children, {
                    list: this.props.list,
                    total: this.props.total,
                    type: type,
                    title: this.props.params.title,
                    exportTable: this.props.exportTable,
                    change: this.props.changeData,
                    pass: this.props.pass,
                    passAll: this.props.passAll,
                    reject: this.props.reject,
                    listtype: this.props.listtype,
                    toggleDetail: this.props.toggleDetail,
                    toggleCheckbox: this.props.toggleCheckbox,
                })
            }
            <DetailBox
                    show={this.props.detail}
                    toggleDetail={this.props.toggleDetail}
                    data={this.props.cur}
                    model={type}
                />
            </div>
        );
    } 
}
const mapStateToProps = ({ content }) => content;

export default connect(
    mapStateToProps, {
        ...actions
    }
    // Implement map dispatch to props
)(Content);

export {
	actions,
    //constants,
    reducer,
    //selectors
};
