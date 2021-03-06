import React, { Component } from 'react'

import Featured from './comp/featured'
import Subscriptions from './comp/subscriptions'
import Blocks from './comp/blocks'
import Poll from './comp/poll'

const URL_HOME = 'http://localhost:3004/home'

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            home: ''
        }
    }

    componentDidMount() {
        fetch(URL_HOME, {method: 'GET'})
        .then(response => response.json())
        .then(json => {
            this.setState({
                home: json
            })
        })
    }

    render(){
        return (
            <div>
            <Featured slides={this.state.home.slider} />
            <Subscriptions />
            <Blocks blocks={this.state.home.blocks} />
            <Poll />
            </div>
        )
    }
}

export default Home