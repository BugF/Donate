import React from 'react'
import donateData from './donateData'

import { Timeline, Tooltip } from 'antd'
import randomColor from 'randomcolor'
import TimeAgo from 'timeago-react';

class DonateTables extends React.Component {
    state = {
        isLoaded: false,
      }
    color = randomColor();
    donateComponents = donateData.map(item =>  <Timeline.Item key={item.id} color= {randomColor({ luminosity: 'bright', hue: 'blue'})} ><Tooltip title={item.text} placement="topLeft" arrowPointAtCenter trigger="hover click"><strong>{item.nickname}</strong> 捐赠了 <strong>{item.value}</strong> <br /><small><TimeAgo datetime={item.date} locale='zh_CN' /></small></Tooltip> </Timeline.Item>)

    componentDidMount() {
        fetch("https://v1.hitokoto.cn/?encode=json")
            .then(response => response.json())
            .then(data => this.setState({ isLoaded: true, hitokotoData: data.hitokoto, hitokotoAuthor: data.from, hitokotoSource: data.creator }))
        }
    render() {
        
        const { hitokotoData, hitokotoAuthor, hitokotoSource } = this.state
        let hitokotoCombine
        if ( [hitokotoSource,"原创","网络","其他"].indexOf(hitokotoAuthor) !== -1 ){
        hitokotoCombine = hitokotoData  }
        else {
            hitokotoCombine = hitokotoData + " ——" + hitokotoAuthor
        }

        return (
            <div className="donateList">
                <Timeline key="hitokoto" pending={hitokotoCombine} mode="alternate" reverse="true">
                {this.donateComponents}
                </Timeline>
            </div>
        )
    }
}

export default DonateTables

