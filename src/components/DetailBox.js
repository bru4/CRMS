import React from 'react'
import {Modal, Button, Collapse, Row, Col} from 'antd'
import moment from 'moment'
import {averagespend, profession, shoptype} from 'containers/constants'
import PointAdd from './PointAdd'
import CouponTake from './CouponTake'

class DetailBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showBig: false,
        }
    }
    addPonintHandle = (points) => {
        const { data } = this.props;
        let entity = {};
        entity.openid = data.record.openid;
        entity.points = points;
        entity.reason = `手动增加${points}分`;
        entity.mobile = data.record.mobile;
        entity.name = data.record.truename;
        this.props.addPoint(entity);
    }
    takeCouponHandle = (couponid) => {
        const { data } = this.props;
        let entity = {};
        entity.groupid = couponid;
        entity.openid = data.record.openid;
        this.props.takeCoupon(entity);
    }
    showBig = (e) => {
		this.setState({
			showBig: !this.state.showBig,
			img: e.target.src
		})
	}
    render() {
        let {show, toggleDetail, data, model, toggleCheckbox, addPoint, coupon} = this.props;
        let footer = [];
        if(model === 'review' && (data.type === 'trial' && data.record.state === 2 || data.type === 'member')){
            footer = [
                <Button key="back" onClick={()=>toggleDetail(null)}>返回</Button>,
                <Button key="pass" onClick={()=>{toggleDetail(null);toggleCheckbox({index:data.index, record:data.record, type:data.type, result: 1})}}>通过</Button>,
                <Button key="submit" onClick={()=>{toggleDetail(null);toggleCheckbox({index:data.index, record:data.record, type:data.type, result: 0})}}>拒绝</Button>
            ]
        } else {
            footer = [<Button key = "back" onClick={()=>toggleDetail(null)}>返回</Button>];
        }
        let shopnamepic,
            kitchenpic,
            cookbookpic,
            pics = data.record && data.record.picture
            ? data
                .record
                .picture
                .split(';')
            : '';
        let openKeys = model === 'review'?['1', '2', '3', '4']:[];
        if (pics) {
            pics.length -= 1;
            shopnamepic = pics.filter(val => val.search(/shopname/g) > 0
                ? true
                : false);
            kitchenpic = pics.filter(val => val.search(/kitchen/g) > 0
                ? true
                : false);
            cookbookpic = pics.filter(val => val.search(/cookbook/g) > 0
                ? true
                : false);
        }
        return(
        <div className='detailwrap'>
            {this.state.showBig?<div className='imgbox' onClick={this.showBig} ><img src={this.state.img} /></div>:null}
            <Modal
                wrapClassName='detailcontent'
                title="申请内容"
                width={800}
                visible={show}
                footer={footer}
                onCancel={()=>toggleDetail(null)}
            >
            {
                data.record &&
                <div>
                <div className='detailBaseinfo'>
                    <Row className='detailItem'>
                        <Col span={12}>
                            <span className='itemTitle'>申请人:</span>
                            {data.record.truename}
                        </Col>
                        <Col span={12}>
                            <span className="itemTitle">手机号码:</span>
                            {data.record.mobile}
                        </Col>
                    </Row>
                    <p className='detailItem'>
                        <span className="itemTitle">申请类型:</span>{model==='all'?'查看全部':'审核申请'}
                    </p>
                    <Row className='detailItem'>
                        <Col span={12}>
                            <span className='itemTitle'>当前积分:</span>
                            {data.points?data.points:'查询中...'}
                        </Col>
                        {
                            addPoint && model === 'all'
                            ? <Col span={12}>
                                <span className="itemTitle">赠送积分:</span>
                                <PointAdd
                                    add = {this.addPonintHandle}
                                    iptStyle = {{width: '45%', marginRight: '3%'}}
                                />
                            </Col>
                            : null
                        }
                        
                    </Row>
                    <Row className='detailItem'>
                        <Col span={12}>
                            <span className='itemTitle'>申请理由:</span>
                            {data.record.reason || '无'}
                        </Col>
                        {
                            coupon && model === 'all'
                            ? <Col span={12}>
                                <span className="itemTitle">赠送优惠券:</span>
                                <CouponTake
                                    data = {coupon}
                                    take = {this.takeCouponHandle}
                                    iptStyle = {{width: '45%', marginRight: '3%'}}
                                />
                            </Col>
                            : null
                        }
                    </Row>
                    <p className='detailItem'>
                        <span className="itemTitle">申请时间:</span>
                        {moment(data.record.createtime).format('YYYY-MM-DD HH:mm:ss')}
                    </p>
                </div>
                <Collapse defaultActiveKey={openKeys} bordered={false}>
                    <Collapse.Panel className='detailTT' key='1' header="餐饮信息">
                        <Row className='detailItem'>
                            <Col span={12}>
                                <span className="itemTitle">餐厅名称:</span>
                                {data.record.restaurantname}
                            </Col>
                            <Col span={12}>
                                <span className="itemTitle">职位:</span>
                                {(typeof data.record.position) === 'number' && profession.find(item => item.value === data.record.position).label}
                            </Col>
                        </Row>
                        <Row className='detailItem'>
                            <Col span={12}>
                                <span className="itemTitle">业态:</span>
                                {(typeof data.record.mode) === 'number' && shoptype.find(item => item.value === data.record.mode).label}
                            </Col>
                            <Col span={12}>
                                <span className="itemTitle">人均:</span>
                                {(typeof data.record.price) === 'number' && averagespend.find(item => item.value == data.record.price).label}
                            </Col>
                        </Row>
                        <Row className='detailItem'>
                            <span className="itemTitle">地址:</span>
                            {data.record.restaurantaddress}
                        </Row>
                    </Collapse.Panel>
                    {
                        pics ?
                        <Collapse.Panel className='detailTT' key='2' header="餐厅招牌照片">
                        <Row className='detailPic' type='flex'>
                            {
                                shopnamepic && shopnamepic.length > 0
                                ? shopnamepic.map((item, index) =>
                                <Col key = {index} span = {6} >
                                    <img src={item} alt="店招" onClick={this.showBig}/>
                                </Col>)
                                : null
                            }
                        </Row>
                        </Collapse.Panel>
                        : null
                    }
                    {
                        pics ?
                        <Collapse.Panel className = 'detailTT' key = '3' header = "餐厅后厨照片" >
                        <Row className='detailPic' type='flex'>
                            {
                                kitchenpic && kitchenpic.map((item, index) => <Col key={index} span={6}><img src={item} alt="后厨" onClick={this.showBig}/></Col>)
                            }
                        </Row>
                        </Collapse.Panel>
                        : null
                    }
                    {
                        pics ?
                        <Collapse.Panel className='detailTT' key='4' header="餐厅菜单照片">
                        <Row className='detailPic' type='flex'>
                            {
                                cookbookpic&&cookbookpic.map((item,index)=><Col key={index} span={6}><img src={item} alt="菜单" onClick={this.showBig}/></Col>)
                            }
                        </Row>
                        </Collapse.Panel>
                        : null
                    }
                </Collapse>
                </div>
            }
            </Modal>
        </div>)
    }
}

export default DetailBox