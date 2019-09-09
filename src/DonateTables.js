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
        fetch("https://api.lwl12.com/hitokoto/v1?encode=realjson")
            .then(response => response.json())
            .then(data => this.setState({ isLoaded: true, hitokotoData: data.text, hitokotoAuthor: data.author, hitokotoSource: data.source }))
        }
    render() {
        
        const { hitokotoData, hitokotoAuthor, hitokotoSource } = this.state
        let hitokotoCombine
        if (hitokotoAuthor || hitokotoSource){
        hitokotoCombine = hitokotoData + " ——" + hitokotoAuthor + hitokotoSource }
        else {
            hitokotoCombine = hitokotoData
        }

        return (
            <div className="donateList">
                <Timeline pending={hitokotoCombine} mode="alternate">
                {this.donateComponents}
                </Timeline>
            </div>
        )
    }
}

export default DonateTables

