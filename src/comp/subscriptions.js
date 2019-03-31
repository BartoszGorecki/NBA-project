import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Subscriptions extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            error: false,
            success: false
        }
    }

    onChangeInput = event => {
        this.setState({
            email: event.target.value
        })
    }

    saveSubscription = email => {
        const URL_EMAIL ='http://localhost:3004/subcriptions';

        fetch(URL_EMAIL, {
            method: 'post',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({email})
        }).then(res => res.json())
        .then( () => {
            this.setState({
                email: '',
                success: true
            })
        })
    }

    clearMessages = () => {
        return (
            setTimeout( () => {
                this.setState({
                    success: false,
                    error: false
                })
            }, 3000)
        )
    }

    handleSubmit = event => {
        event.preventDefault();
        let email = this.state.email;
        let regex = /\S+@\S+\.\S+/;

        if(regex.test(email)) {
            this.saveSubscription(email)
        } else {
            this.setState({
                error: true
            })
        }
        this.clearMessages()
    }

    render() {
        return (
            <div className="sub_panel">

                <FontAwesomeIcon icon="marker" className="mark"/>

                <h3>Subscribe to us</h3>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            type="text"
                            placeholder="youremail@email.com"
                            value={this.state.email} 
                            onChange={this.onChangeInput}
                        />
                        <div className={this.state.error ? "error show" : "error"}>
                            Check your email
                        </div>
                        <div className={this.state.success ? "success show" : "success"}>Thank You</div>
                    </form>
                </div>
                <span>
                    Find Out More. We are here to answer any questions you
                    may have about our CRM and Sales Force Automation Solutions.
                    Want to see a demo? Find out more about our products? Or learn 
                    how other companies use our software? Call, email or fill in 
                    your contact information with a short message and we’ll get 
                    back to you as soon as possible.
                </span>

            </div>
        )
    }
}

export default Subscriptions