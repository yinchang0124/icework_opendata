import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Grid } from '@icedesign/base';

const { Row, Col } = Grid;

/**
 * 渲染详情信息的数据
 */
const dataSource = {
  title: '集盒家居旗舰店双十一活动',
  shopName: '集盒家居旗舰店',
  amount: '1000.00',
  bounty: '200.00',
  orderTime: '2017-10-18 12:20:07',
  deliveryTime: '2017-10-18 12:20:07',
  phone: '15612111213',
  address: '杭州市文一西路',
  status: '进行中',
  remark: '暂无',
};

export default class BasicDetailInfo extends Component {
  static displayName = 'BasicDetailInfo';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <IceContainer>
        <h2 style={styles.basicDetailTitle}>订单详情</h2>

        <div style={styles.infoColumn}>
          <h5 style={styles.infoColumnTitle}>基本信息</h5>
          <Row wrap style={styles.infoItems}>
            <Col xxs="24" l="12" style={styles.infoItem}>
              <span style={styles.infoItemLabel}>商品名称：</span>
              <span style={styles.infoItemValue}>{dataSource.title}</span>
            </Col>
            <Col xxs="24" l="12" style={styles.infoItem}>
              <span style={styles.infoItemLabel}>店铺名称：</span>
              <span style={styles.infoItemValue}>{dataSource.shopName}</span>
            </Col>
            <Col xxs="24" l="12" style={styles.infoItem}>
              <span style={styles.infoItemLabel}>金额：</span>
              <span style={styles.infoItemValue}>¥ {dataSource.amount}</span>
            </Col>
            <Col xxs="24" l="12" style={styles.infoItem}>
              <span style={styles.infoItemLabel}>请求时间：</span>
              <span style={styles.infoItemValue}>{dataSource.requestTime}</span>
            </Col>
            <Col xxs="24" l="12" style={styles.infoItem}>
              <span style={styles.infoItemLabel}>回复时间：</span>
              <span style={styles.infoItemValue}>
                {dataSource.replyTime}
              </span>
            </Col>
          </Row>
        </div>
        <div style={styles.infoColumn}>
          <h5 style={styles.infoColumnTitle}>更多信息</h5>
          <Row wrap style={styles.infoItems}>
            <Col xxs="24" l="12" style={styles.infoItem}>
              <span style={styles.infoItemLabel}>联系方式：</span>
              <span style={styles.infoItemValue}>{dataSource.phone}</span>
            </Col>
            <Col xxs="24" l="12" style={styles.infoItem}>
              <span style={styles.infoItemLabel}>收货地址：</span>
              <span style={styles.infoItemValue}>{dataSource.address}</span>
            </Col>
            <Col xxs="24" l="12" style={styles.infoItem}>
              <span style={styles.infoItemLabel}>任务状态：</span>
              <span style={styles.infoItemValue}>{dataSource.status}</span>
            </Col>
            <Col xxs="24" l="12" style={styles.infoItem}>
              <span style={styles.infoItemLabel}>备注：</span>
              <span style={styles.infoItemValue}>{dataSource.remark}</span>
            </Col>
          </Row>
        </div>
      </IceContainer>
    );
  }
}

const styles = {
  basicDetailTitle: {
    margin: '10px 0',
    fontSize: '16px',
  },
  infoColumn: {
    marginLeft: '16px',
  },
  infoColumnTitle: {
    margin: '20px 0',
    paddingLeft: '10px',
    borderLeft: '3px solid #3080fe',
  },
  infoItems: {
    padding: 0,
    marginLeft: '25px',
  },
  infoItem: {
    marginBottom: '18px',
    listStyle: 'none',
    fontSize: '14px',
  },
  infoItemLabel: {
    minWidth: '70px',
    color: '#999',
  },
  infoItemValue: {
    color: '#333',
  },
  attachLabel: {
    minWidth: '70px',
    color: '#999',
    float: 'left',
  }
};
