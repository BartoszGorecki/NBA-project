import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { CSSTransitionGroup } from 'react-transition-group'


const fadeAnimation = {
    transitionName: "fade",
    transitionAppear: true,
    transitionAppearTimeout: 500,
    transitionEnter: true,
    transitionEnterTimeout: 500,
    transitionLeave: true,
    transitionLeaveTimeout: 500.
}

class Teams extends Component {
    constructor(props){
        super(props)

        this.state = {
            teams: [],
            filtered: [],
            keyword: '',
            inpu: false
        }
    }

    componentDidMount() {
        fetch('http://localhost:3004/teams', {method: 'GET'})
        .then(response => response.json())
        .then(json => {
            this.setState({
                filtered: json,
                teams: json
            })
        })
    }

    searchTerms = event => {
        const keyword = event.target.value
        if (keyword !== '') {
            const list = this.state.teams.filter( item => {
                return item.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1
            })
            this.setState({
                filtered: list,
                keyword
            })
        } else {
            this.setState({
                filtered: this.state.teams,
                keyword
            })
        }
    }

    renderList = ({filtered}) => {
        return filtered.map( item => {
            return (
                <Link to={`/team/${item.name}`} key={item.id} className="teams_item">
                    <img alt={item.name} src={`/images/teams/${item.logo}`} />
                </Link>
            )
        })
    }

    toggleClassInput = () => (
        this.setState({
            inpu: !this.state.inpu
        })
    )

    render() {

        var classbtn = this.state.inpu ? 'clicked' : '';
        var classbtnbtn = this.state.inpu ? 'close' : ''

        return (
            <div className="teams">

                <div className="teams_input">
                    <input                       
                        type="text" 
                        value={this.state.keyword} 
                        onChange={ e => this.searchTerms(e)}
                        className={classbtn}
                    />
                    <button onClick={this.toggleClassInput} className={`btninput ${classbtnbtn}`}></button>
                </div>

                <div className="teams_container">
                    <CSSTransitionGroup {...fadeAnimation}>
                        {this.renderList(this.state)}
                    </CSSTransitionGroup>   
                </div>           
            </div>
        )
    }
}

export default Teams