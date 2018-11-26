import React, { Component } from 'react';

import { Tab, Button } from '@icedesign/base';

function mockCentent() {
  return Array.from({ length: 1 }).map(() => {
    return {
      title: '数据名称',
      cover:
        'https://img.alicdn.com/tfs/TB1sbkkXmBYBeNjy0FeXXbnmFXa-280-498.png',
      url: '#',
      detail: [
        {
          label: '数据所有者',
          desc: '北京航空航天大学',
        },
        {
          label: '数据介绍',
          desc: '本数据关于航空的关键实验参数',
        },
        {
          
        }
      ],
    };
  });
}

export default class PostCategory extends Component {
  static displayName = 'PostCategory';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const tabs = [
      {
        tab: '帖子',
        icon: require('./images/post.png'),
        key: 'home',
        content: mockCentent(),
      },
      {
        tab: '短视频',
        icon: require('./images/video.png'),
        key: 'doc',
        content: mockCentent(),
      },
      {
        tab: '搭配',
        icon: require('./images/collect.png'),
        key: 'collect',
        content: mockCentent(),
      },
      {
        tab: '单品',
        icon: require('./images/item.png'),
        key: 'item',
        content: mockCentent(),
      },
      {
        tab: '问答',
        icon: require('./images/ask.png'),
        key: 'ask',
        content: mockCentent(),
      },
      {
        tab: '转发',
        icon: require('./images/fiy.png'),
        key: 'fiy',
        content: mockCentent(),
      },
    ];

    return (
      <div>
        <Tab
          navStyle={{ backgroundColor: '#fff' }}
          contentStyle={{ backgroundColor: '#fff', marginTop: 20 }}
        >
          {tabs.map((item) => (
            <Tab.TabPane
              tabStyle={{ height: 60, padding: '0 15px' }}
              key={item.key}
              tab={
                <div style={styles.navItemWraper}>
                  <img
                    alt={item.tab}
                    src={item.icon}
                    style={{ width: 30, marginRight: 8 }}
                  />
                  {item.tab}
                </div>
              }
            >
              <div style={styles.postCategoryList}>
                {item.content.map((item) => {
                  return (
                    <div style={styles.postCategoryItem}>
                      <div style={styles.coverWrapper}>
                        <img
                          alt={item.title}
                          style={{ width: 140, display: 'block' }}
                          src={item.cover}
                        />
                      </div>
                      <div style={styles.blockDetail}>
                        <h3 style={styles.blockTitle}>{item.title}</h3>

                        {item.detail.map((desc) => {
                          return (
                            <div style={styles.blockItem}>
                              <label style={styles.blockLable}>
                                {desc.label}
                              </label>
                              <div
                                style={styles.blockDesc}
                                dangerouslySetInnerHTML={{ __html: desc.desc }}
                              />
                            </div>
                          );
                        })}
                        <Button
                          style={styles.blockBtn}
                          type="primary"
                          component="a"
                          href={item.url}
                        >
                          申请授权
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Tab.TabPane>
          ))}
        </Tab>
      </div>
    );
  }
}

const styles = {
  titleWrapper: {
    backgroundColor: '#fff',
    height: 54,
    lineHeight: '54px',
    padding: '0 16px',
  },
  navItemWraper: {
    display: 'flex',
    alignItems: 'center',
    height: 60,
    lineHeight: '60px',
  },
  postCategoryList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  postCategoryItem: {
    width: '100%',
    flex: '0 0 100%',
    boxSizing: 'border-box',
    backgroundColor: '#f6f6f6',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
  },
  coverWrapper: {
    paddingRight: 14,
  },
  blockDetail: {
    position: 'relative',
  },
  blockTitle: {
    position: 'relative',
    left: '200px',
    fontSize: 20,
    padding: '6px 0',
  },
  blockItem: {
    display: 'flex',
  },
  blockLable: {
    
    flex: '0 0 120px',
    fontSize: 18,
    lineHeight: '35px',
  },
  blockDesc: {
    
    flex: '120 0 500px',
    fontSize: 18,
    color: '#999',
    lineHeight: '35px',
  },
  blockBtn: {
    position: 'absolute',
    right: '10px',
    bottom: '10px',
    borderRadius: '3px',
    background: '#6af',
    color: '#fff',
  },
};
