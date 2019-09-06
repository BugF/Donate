import React from 'react'
import donateData from './donateData'

import { Table } from 'antd';
const { Column } = Table;



function DonateTables() {
    
    return (
        <div class="donateList">
        <Table dataSource={donateData} columnWidth="10px" size="small">
            <Column title="昵称" dataIndex="nickname" key={donateData.nickname} align="center" />
            <Column title="金额" dataIndex="value" key={donateData.value} align="center" />
            <Column title="时间" dataIndex="date" key={donateData.date} align="center" />
        </Table>
        </div>
    );
}

export default DonateTables

