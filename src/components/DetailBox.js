import React from 'react'
import {Modal, Button, Menu, Row, Col} from 'antd'
const SubMenu = Menu.SubMenu;
import moment from 'moment'
import {averagespend, profession, shoptype} from 'containers/constants'

function showBig() {}
export const DetailBox = ({show, showDetail, data, model}) => {
    const openKeys = ['1'];
    let shopnamepic,
        kitchenpic,
        cookbookpic,
        pics = data.record && data.record.picture
            ? data
                .record
                .picture
                .split(';')
            : '';
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
    console.log(model)
    const footer = model === 'all'
        ? [ <Button key = "back" onClick = {
                () => showDetail(null)
            } > 返回 </Button>]:[
					<Button key="back" onClick={()=>showDetail(null)}>返回</Button>,
					<Button key="pass" onClick={()=>{this.handleCancel();/*pass()*/}}>通过</Button>,
					<Button key="submit" onClick={()=>{this.handleCancel();/*reject()*/}}>拒绝</Button>
				];
    return(
<div className='detailwrap'>
    <Modal
        wrapClassName='detailcontent'
        title="申请内容"
        width={800}
        visible={show}
        footer={footer}
        onCancel={()=>showDetail(null)}
    >
    {
        data.record?
        <div>
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
            <span className="itemTitle">申请类型:</span>{model}
        </p>
        <p className = 'detailItem'>
            <span className="itemTitle">申请理由:</span>
            {data.record.reason || model}
        </p>
        <p className='detailItem'>
            <span className="itemTitle">申请时间:</span>
            {moment(data.record.createtime).format('YYYY-MM-DD HH:mm:ss')}
        </p>
        <Menu defaultOpenKeys={openKeys} mode="inline">
            <SubMenu className='detailTT' key='1' title="餐饮信息">
                <Row className='detailItem'>
                    <Col span={12}>
                        <span className="itemTitle">餐厅名称:</span>
                        {data.record.restaurantname}
                    </Col>
                    <Col span={12}>
                        <span className="itemTitle">职位:</span>
                        {data.record.position && profession.find(item => item.value == data.record.position).label}
                    </Col>
                    {/* 这里因为需要mock数据所以采用了 "==" 应该试用 */}
                </Row>
                <Row className='detailItem'>
                    <Col span={12}>
                        <span className="itemTitle">业态:</span>
                        {data.record.mode && shoptype.find(item => item.value == data.record.mode).label}
                    </Col>
                    {/*这里因为需要mock数据所以采用了"=="应该试用*/}
                    <Col span={12}>
                        <span className="itemTitle">人均:</span>
                        {data.record.price && averagespend.find(item => item.value == data.record.price).label}
                    </Col>
                    {/*这里因为需要mock数据所以采用了"=="应该试用*/}
                </Row>
                <Row className = 'detailItem'>
                    <span className="itemTitle">地址:</span>
                    {data.record.restaurantaddress}
                </Row>
            </SubMenu>
            <SubMenu className='detailTT' key='2' title="餐厅招牌照片">
                <Row className='detailPic' type='flex'>
                    {
                        shopnamepic && shopnamepic.length > 0
                        ? shopnamepic.map((item, index) =>
                        <Col key = {index} span = {6} >
                            <img src={item} alt="店招" onClick={showBig}/>
                        </Col>)
                        : <Menu.Item></Menu.Item>
                    }
                </Row>
            </SubMenu>
            <SubMenu className = 'detailTT' key = '3' title = "餐厅后厨照片" >
                <Row className='detailPic' type='flex'>
                    {
                        kitchenpic && kitchenpic.map((item, index) => <Col key={index} span={6}><img src={item} alt="后厨" onClick={showBig}/></Col>)
                    }
                </Row>
            </SubMenu>
            <SubMenu className='detailTT' key='4' title="餐厅菜单照片">
                <Row className='detailPic' type='flex'>
                    {
                        cookbookpic&&cookbookpic.map((item,index)=><Col key={index} span={6}><img src={item} alt="菜单" onClick={showBig}/></Col>)
                    }
                </Row>
            </SubMenu>
        </Menu>
        </div>
        :null
    }
    </Modal> </div>)
}

export default DetailBox