import React, { Component } from 'react'

class Contact extends Component {

    state = {
        cities: []
    }

    componentDidMount() {
        this.fetchItems("http://localhost:3005/cities")
    }

    fetchItems = url => {
        fetch(url)
        .then(result => result.json())
        .then(json => {
          this.setState({
            cities: json
          }, () => console.log(this.state.cities))
        })
    }


    render() {

        const { cities } = this.state

        const ludzie = cities.reduce( (sum, person) => sum + person.people, 0)

        const srednia = parseInt(ludzie/cities.length)

        const pierwsze = cities.find( item => item.people > 10000)

        const miastawieksze = cities.filter( item => item.people > srednia).map(item => {
            return (
                <div style={{fontSize: "1rem", marginTop: '.5rem'}}>{item.name}</div>
            )
        })

        const miastawieksze2 = cities.filter( item => item.people > 10000).map(item => {
            return (
                <div style={{fontSize: "1rem", marginTop: '.5rem'}}>{item.name}</div>
            )
        })

        const dyszkanaj = cities.sort( (a,b) => b.people - a.people)

        let porownanie = ""
        if(miastawieksze2.length && cities.length-miastawieksze2.length) {
            if(miastawieksze2.length > cities.length-miastawieksze2.length) {
                porownanie += "Mamy więcej miast z liczbą osób powyżej 10 000"
            } else {
                porownanie += "Mamy więcej miast z liczbą osób powyżej 10 000"
            }
        } else {
            porownanie += "oj tam"
        }

        console.log(dyszkanaj)


        return (
            <div className="contact">
                <span>Liczba miast: {cities.length}</span>
                <span> Liczba ludzi: {ludzie}</span>
                <span> Pierwsze miasto: {pierwsze ? pierwsze.name : null}</span>
                <span> Średnia mieszkańców: {pierwsze ? srednia : null}</span>
                <span> Miasta z większa liczbą osób: {miastawieksze}</span>
                <span> Miasta z liczbą osób > 10 000: {miastawieksze2}</span>
                <span>{porownanie}{dyszkanaj}</span>
            </div>
        )
    }

    
}

export default Contact