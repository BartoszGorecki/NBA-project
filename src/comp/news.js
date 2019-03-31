import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { CSSTransitionGroup } from 'react-transition-group'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const fadeAnimation = {
    transitionName: "fade",
    transitionAppear: true,
    transitionAppearTimeout: 500,
    transitionEnter: true,
    transitionEnterTimeout: 500,
    transitionLeave: true,
    transitionLeaveTimeout: 500.
}

class News extends Component {

    state = {
        teams: [],
        items: [],
        start: 0,
        end: 4,
        amount: 4
    }
    
    componentWillMount() {
        this.request(this.state.start, this.state.end)
    }


    request = (start, end) => {

        if(this.state.teams.length < 1) {
            axios.get('http://localhost:3004/teams')
            .then( response => {
                this.setState({
                    teams: response.data
                })
            })
        }
        axios.get(`http://localhost:3004/articles?_start=${start}&_end=${end}`)
        .then( response => {
            this.setState({
                items: [...this.state.items, ...response.data],

            })
        })
    }

    loadMore = () => {
        let end = this.state.end + this.state.amount
        this.request(this.state.end, end)
        this.setState({
            start: this.statestart + this.state.amount,
            end: this.state.end + this.state.amount
        })
    }


    teamName = (teams, team) => {
        let data = teams.find( (item) => {
            return item.id === team
        })

        if(data) {
            return data.name
        }
    }

    trimByWord = text => (
         text.split(" ").slice(0, 10).join(" ")+" ..."
    )

    renderNews = () => {
        return this.state.items.map( (item, i) => (
             
            <div key={item.id} className="news_item">
                <Link to={`news/${item.id}`}>
                    <div className="news_header">
                        <span>
                            {this.teamName(this.state.teams, item.team)}
                        </span>
                        <span className="icon_date">
                            <FontAwesomeIcon icon="clock" className="clock"/>
                            {item.date}
                        </span>
                    </div>
                    <h2>{item.title}</h2>
                    <p>{this.trimByWord(item.body)}</p>
                </Link>
            </div>
        ))
    }

    render () {
        return (
            <React.Fragment>
                <div className="news_container">
                <CSSTransitionGroup {...fadeAnimation}>
                    {this.renderNews()}
                </CSSTransitionGroup>
                </div>
                {this.state.items.length < 18 ? (
                <button className="news_button" onClick={this.loadMore} >
                Load More
                </button> ) : null }
                {console.log(this.state.items.length, this.state.teams.length)}
            </React.Fragment>  
        )
    }
}

export default News