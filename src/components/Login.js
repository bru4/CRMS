import React from 'react';
import { Form, Icon, Modal, Input } from 'antd';
const FormItem = Form.Item;

export default class Login extends React.Component {
	constructor(props) {
	super(props);
	console.log(props);
	this.state={
		user:'',
		pwd:''
	}
	}
	checkIn = () => {
		let { user, pwd } = this.state;
		let { router } = this.props;
		if(user==='admin'&&pwd==='123456'){
			sessionStorage.tokenInfo='check';
			router.replace('/crmsadmin');
		}
	}
	render() {
		return (
			<div className='login'>
			<Modal
				closable={false}
				visible={true}
				title='有点火会员管理系统'
				okText='登陆'
				onOk={this.checkIn}
				cancelText='退出'
				onCancel={()=>{window.open(location, '_self').close();}}
			>
				<Form>
					<FormItem>
						<Input
							className='checkitem' maxLength='10'
							addonBefore={<Icon type="user" />}
							onPressEnter={this.checkIn}
							value={this.state.user}
							onChange={(e)=>this.setState({user:e.target.value})}
						/>
					</FormItem>
					<FormItem>
						<Input
							className='checkitem' type='password' maxLength='18'
							addonBefore={<Icon type="lock" />}
							onPressEnter={this.checkIn}
							value={this.state.pwd}
							onChange={(e)=>this.setState({pwd:e.target.value})}
						/>
					</FormItem>
				</Form>
			</Modal>
			</div>
		);
	}
}
