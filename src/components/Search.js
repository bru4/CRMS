import React, { Component } from 'react';
import { Input, Button, Row, Col } from 'antd';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile: '',
        }
    }
    changeHandle = (e) => {
        this.setState({
            mobile: e.target.value,
        });
    }
    clickHandle = () => {
        let mobile = this.state.mobile.trim();
        if(mobile){
            this.props.search(mobile);
        }
    }
    render() {
        return (
            <Row className='search-bar'>
                <Col span={2} offset={2}>手机号:</Col>
                <Col span={4} ><Input onChange={this.changeHandle}/></Col>
                <Col span={2} offset={1}><Button onClick={this.clickHandle}>搜索</Button></Col>
            </Row>
        );
    }
}

export default Search;