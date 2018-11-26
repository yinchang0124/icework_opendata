import React, { Component } from 'react';
import Card from './Card';
//import BarChart from './BarChart';
import PostCategory from './PostCategory';
import axios from 'axios';


const getData = () => {
  return Array.from({ length: 10 }).map((item, index) => {
    return {
      name: `${index + 1}.造物节`,
      num: parseInt(Math.random() * 1000),
    };
  });
};

componentWillMount(){
  axios.get('/mock/services.json').then((response) =>{


  });
}

export default class LatestActivity extends Component {
  static displayName = 'LatestActivity';

  static propTypes = {};

  static defaultProps = {};

  constructor(props){
    super(props);
    this.state={
      date:'',
      name:''
    };
  }

  getData(){

  }

  render() {
    const dataSource = getData();
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
