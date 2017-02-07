import React from 'react';
import { Modal, Button, Menu, Row, Col } from 'antd';

export default class DetailBox extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='detailwrap'>
      <Modal
        wrapClassName='detailcontent'
        title="申请内容"
        visible={this.props.show}
        onCancel={this.props.showDetail}
      >
        <p>aaaaaaaa</p>
      </Modal>
      </div>
    );
  }
}
