import React from 'react'
import axios from 'axios'

export default class Login extends React.Component {

    constructor( props ) {
        super( props )

        this.state = {
            emailError: false,
            passwordError: false
        }

        this.gmailValidation = this.gmailValidation.bind( this )
    }

    gmailValidation( e ) {
        e.preventDefault()
        const [ email, password ] = e.target

        let goodToGo = true

        if( email.value === '' || email.value === undefined ) {
            this.setState( { emailError: true } )
            goodToGo = false
        } else {
            this.setState( { emailError: false } )
        }
        
        if( password.value === '' || password.value === undefined ) {
            this.setState( { passwordError: true } )
            goodToGo = false
        } else {
            this.setState( { passwordError: false } )
        }
    
        if( ! goodToGo ) {
            return
        }
        
        const baseUrl = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json';
        // /positions.json?description=python&location=new+york
        
        axios.get(baseUrl, {
            markdown: false,
            params: { search: 'node' }
        })
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
                    <div className="row">
                        <input type="text" name="gmail" placeholder="Gmail" />
                        { this.state.emailError && <span className="error">Error with email</span> }
                    </div>
                    <div className="row">
                        { /* don't worry. i'll change this to type=password */ }
                        <input type="text" name="password" placeholder="password" />
                        { this.state.passwordError && <span className="error">Error with password</span> }
                    </div>
                    <button>Login</button>
                </form>
            </div>
    )
    }
}