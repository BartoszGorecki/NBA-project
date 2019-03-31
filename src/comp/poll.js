import React, { Component } from 'react'


class Poll extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pollTeams: []
        }
    }

    fetchPoll() {
        console.log('fetchPoll() start')
        fetch('http://localhost:3004/teams?poll=true&_sort=count&_order=desc', {method: 'GET'})
        .then(response => response.json())
        .then(json => {
            this.setState({
                pollTeams: json
            })
        })
    }

    componentDidMount() {
        console.log('didMount start')
        this.fetchPoll()
        console.log('didMount did all job')
    }

    addCount = (count, id) => {
        console.log('addCount - ta co aktualizuje json - start')
        fetch(`http://localhost:3004/teams/${id}`, {
            method: 'PATCH',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({count: count + 1})
        })
        .then( () => {
            console.log('addCount() prawie koniec wlasnie wywoluje fetchPoll()')
            this.fetchPoll()
        })
    }


    renderPoll = () => {
        console.log('renderPoll() - ta w srodku render() -  start')
        const position = ['1ST', '2ND', '3RD']
        return this.state.pollTeams.map( (item, index) => {
            return (
                <div key={item.id} className="poll_item" onClick={ () => this.addCount(item.count, item.id)}>
                    <img alt={item.name} src={`/images/teams/${item.logo}`} />
                    <h4>{position[index]}</h4>
                    <div>{item.count} Votes</div>
                </div>
            )
        })
    }

    render() {
        console.log('render start')
        return (
            <div className="poll">
                <h3>Who will be the next Champion?</h3>
                <div className="poll_cont">
                    {this.renderPoll()}
                </div>
            </div>
        )
    }
}

export default Poll