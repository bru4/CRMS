import React, { Component } from 'react';
import { Input, Button, Row, Col, Form } from 'antd';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile: {
                value: '',
                status: '',
            },
        }
    }
    changeHandle = (e) => {
        let val = e.target.value.substr(0, 11);
        if(val.length === 11 || val.length === 0){
            this.setState({
                mobile: {
                    value: val,
                    status: '',
                },
            });
            e.target.value = val;
        } else {
            this.setState({
                mobile: {
                    value: val,
                    status: 'warning',
                },
            });
            e.target.value = val;
        }

    }
    clickHandle = () => {
        if(this.state.mobile.status==='warning'||this.state.mobile.value==='')return;
        let mobile = Number(this.state.mobile.value);
        console.log(mobile);
        this.props.search(mobile);
    }
    render() {
        return (
            <Row className='search-bar'>
                <Col span={2} offset={2}>手机号:</Col>
                <Col span={4} >
                    <Form className='search-bar-form'>
                    <Form.Item
                        hasFeedback
                        validateStatus={this.state.mobile.status}
                    >
                    <Input className='search-bar-input' type='number' onChange={this.changeHandle}/>
                    </Form.Item>
                    </Form>
                </Col>
                <Col span={2} offset={1}><Button onClick={this.clickHandle}>搜索</Button></Col>
            </Row>
        );
    }
}

export default Search;