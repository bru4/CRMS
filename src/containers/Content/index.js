import React from 'react'
//import { connect } from 'react-redux'
//import DetailBox from 'components/DetailBox'
//import Toolbar from 'components/Toolbar'
import { Modal } from 'antd'
import { selectors as navSelectors } from '../Nav'
//import * as constants from './constants';
import * as actions from './actions';
import reducer from './reducer';
//import * as selectors from './selectors';
console.log(navSelectors);

class Content extends React.Component {
    constructor(props){
        super(props);
    }
    
    componentWillMount() {
        //console.log(this.props)
        /*this.props.loadList({
            title: this.props.title,
            subtitle: this.props.subtitle,
        });*/
    }
    clickHandleCheckbox = res => {
        let text = res.result==='1'?'是否确定 通过 此用户的申请?':'是否确定 拒绝 此用户的申请?'
        Modal.confirm({
            title: '操作确认',
            content: text,
            onOk: ()=>{
                console.log('ok')
                this.props.uploadResult(res);
            },
            onCancel: ()=>{},
        })
        //this.props.toggleCheckbox
    }
    render(){
        return (
            <div className='contentwrap'>
                {this.props.children}
                {/*<Toolbar
                    type = {this.props.type}
                    title = {this.props.title}
                    exportTable = {this.props.exportTable}
                    change = {this.props.changeData}
                    pass = {this.clickHandleCheckbox}
                    listtype = {this.props.userlist.listtype}
                    selected = {this.props.selected}
                />
                {
                    this.props.children && this.props.title==='member' || this.props.title==='trial' || this.props.title==='feedback'
                    ? React.cloneElement(this.props.children, {
                        fetching: this.props.userlist.fetching,
                        list: this.props.userlist.list,
                        total: this.props.userlist.total,
                        type: this.props.type,
                        toggleDetail: this.props.toggleDetail,
                        toggleCheckbox: this.clickHandleCheckbox,
                        selectRows: this.props.selectRows,
                    })
                    : this.props.children
                }*/}

                {/*<DetailBox
                    show={this.props.base.detail}
                    toggleDetail={this.props.toggleDetail}
                    data={this.props.cur}
                    model={this.props.type}
                    toggleCheckbox={this.clickHandleCheckbox}
                />*/}
            </div>
        );
    }
}
/*const mapStateToProps = (state) => ({
    type: navSelectors.typeSelector(state),
    ...state.content,
    ...state.nav,
});

export default connect(
    mapStateToProps, {
        ...actions,
    }
    // Implement map dispatch to props
)(Content);*/
export default Content;
export {
	actions,
    //constants,
    reducer,
    //selectors
};
