import React, { Component } from 'react';
import Card from './Card';
//import BarChart from './BarChart';
import PostCategory from './PostCategory';
import axios from 'axios';

export default class LatestActivity extends Component {
  static displayName = 'LatestActivity';

  static propTypes = {};

  static defaultProps = {};

  constructor(props){
    super(props);
    this.state={
      data:[]
    };
  }

  componentDidMount() {
    axios
      .get('/mock/grant_list.json')
      .then((response) => {
        console.log(response.data.data);
        this.setState({
          data: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      }); 
  }

  render() {
    const dataSource = this.state.data;
    const columns = [
      {
        title: '时间',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '购买者',
        dataIndex: 'num',
        key: 'num',
      },
    ];

    return (
      <Card
        //title="详细信息"
        subTitle="授权列表"
        // summary={[
        //   { label: '本周发布活动数', value: '123' },
        //   { label: '上周发布活动数', value: '349' },
        //   { label: '累计发布活动数', value: '23,239' },
        // ]}
        //link={{ text: '发布活动明细', href: '#' }}
        dataSource={dataSource}
        columns={columns}
        //content={<BarChart />}
        content = {<PostCategory />}
      />
    );
  }
}
