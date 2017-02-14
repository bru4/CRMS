import React, { PropTypes } from 'react'
import { Button, Input } from 'antd'

class PointAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            point: 0,
        }
    }
    onChangeHandle = (e) => {
        this.setState({
            point: e.target.value
        });
    }
    addPoint = () => {
        if(this.state.point!==-1){
            this.props.add(this.state.point);
            this.setState({
                point: 0,
            });
        }
    }
    render() {
        return(
            <span className={this.props.className}>
                <Input
                    value = {this.state.point}
                    onPressEnter = {this.addPoint}
                    onChange = {this.onChangeHandle}
                    type = 'number'
                    style = {this.props.iptStyle}
                />
                <Button onClick={this.addPoint}>确定</Button>
            </span>
        )
    }
}

PointAdd.propTypes = {
    iptStyle: PropTypes.object,
    add: PropTypes.func,
};

export default PointAdd;