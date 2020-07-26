import React from 'react'
import axios from 'axios'

export default class Login extends React.Component {

    constructor( props ) {
        super( props )

        this.gmailValidation = this.gmailValidation.bind( this )
    }

    gmailValidation( e ) {
        e.preventDefault()
        
        // const baseUrl = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json';
        const baseUrl = 'http://localhost:3001/'
        
        axios.post( baseUrl )
        .then(function (res) {
            console.log('res');
            console.log(res);
        })
        .catch(function (error) {
            console.log('error');
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
        
    }

    render() {
        return (
            <div className="container">
                <h1>Login</h1>
                <p>Do you need an impractical way of checking to see if Chipotle has emailed you for any reason?</p>
                <p>Login with your Gmail below!</p>
                <form method="POST" onSubmit={ this.gmailValidation }>
                    <button>Login</button>
                </form>
            </div>
    )
    }
}