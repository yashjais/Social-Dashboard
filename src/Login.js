import React from "react"
import axios from "axios"
// import { Link } from "react-router-dom"
// import validator from 'validator'

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            users: []
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleClick(e){
        // console.log(e.target.name,e.target.value)
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault()
        const formData = {
            email: this.state.email,
            password: this.state.password
        }
        const user = this.state.users.find(ele => ele.email === formData.email)
        
        if(user){
            window.sessionStorage.setItem('userData', JSON.stringify(this.state))
            this.props.history.push('/dashboard')
        }else{
            alert('invalid user')
        }
    }

    componentDidMount() {
        axios.get("http://jsonplaceholder.typicode.com/users")
            .then((response) => {
                const users = response.data
                this.setState({users})
                console.log(users)
            })
    }

    render() {
        return (
            <div>
                <h2>Welcome to Login Page</h2>
                <br/>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email
                        <input type="text" name="email" onChange={this.handleClick} value={this.state.email} />
                    </label>
                    <br/>
                    <label>
                        Password
                        <input type="password" name="password" onChange={this.handleClick} value={this.state.password} />
                    </label>
                    <br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default Login