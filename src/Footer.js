import React from 'react'

import { Layout } from 'antd';

const { Footer } = Layout;

class Footers extends React.Component {
    state = {
        isLoaded: false,
    }

    componentDidMount() {
        fetch("https://raw.githubusercontent.com/asgrim/year/master/en/currentYear")
            .then(resp => resp.json())
            .then(data => this.setState({ isLoaded: true, currentYear: data}))
    }

    render() {
        const { currentYear } = this.state
        return (
            <Footer style={{ textAlign: 'center' }}>
                Copyright © 2015 - {currentYear} <a href="https://uv.uy" target="_blank" rel="external noopener noreferrer">Edison Jwa</a>. All rights reserved.
            </Footer>
        )
    }

}

export default Footers