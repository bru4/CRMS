import React from 'react'
import { connect } from 'react-redux'
import DetailBox from 'components/DetailBox'
import Toolbar from 'components/Toolbar'
import { Modal } from 'antd'

//import * as constants from './constants';
import * as actions from './actions';
import reducer from './reducer';
//import * as selectors from './selectors';
//console.log(actions);

class Content extends React.Component {
    constructor(props){
        super(props);
    }
    
    componentWillMount() {
        console.log(this.props)
        this.props.loadList({
            title: this.props.title,
            subtitle: this.props.subtitle,
        });
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
        const type = this.props.params.subtitle.includes('all')?'all':'review';
        return (
            <div className='contentwrap'>
                <Toolbar
                    type = {type}
                    title = {this.props.title}
                    exportTable = {this.props.exportTable}
                    change = {this.props.changeData}
                    pass = {this.clickHandleCheckbox}
                    listtype = {this.props.userlist.listtype}
                    selected = {this.props.selected}
                />
                {
                    this.props.children && React.cloneElement(this.props.children, {
                        list: this.props.userlist.list,
                        total: this.props.userlist.total,
                        type: type,
                        toggleDetail: this.props.toggleDetail,
                        toggleCheckbox: this.clickHandleCheckbox,
                        selectRows: this.props.selectRows,
                    })
                }
                <DetailBox
                    show={this.props.base.detail}
                    toggleDetail={this.props.toggleDetail}
                    data={this.props.cur}
                    model={type}
                    toggleCheckbox={this.clickHandleCheckbox}
                />
            </div>
        );
    }
}
const mapStateToProps = ({ content, nav }) => ({
    ...content,
    ...nav,
});

export default connect(
    mapStateToProps, {
        ...actions,
    }
    // Implement map dispatch to props
)(Content);

export {
	actions,
    //constants,
    reducer,
    //selectors
};
