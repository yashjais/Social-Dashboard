import React from 'react'
import axios from 'axios'

class DashBoard extends React.Component{
    constructor() {
        super()
        this.state = {
            user: {},
            post: []
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        delete 'userData'
        this.props.history.push('/login')
    }
    componentDidMount() {
        const userData = JSON.parse(window.sessionStorage.getItem('userData'))
        // console.log(userData)
        const id = this.props.match.params.id
        axios.get(`http://jsonplaceholder.typicode.com/users/`)
            .then(response => {
                const users = response.data
                const user = users.find(user => user.email == userData.email)
                this.setState({user})
                const post_userId = user.id
                axios.get('http://jsonplaceholder.typicode.com/posts')
                    .then(response => {
                        const posts = response.data
                        const post = posts.filter(post => post.userId == post_userId)
                        this.setState({post})
                    })
            })
    }
    render() {
        // console.log(this.state)
        return (
            <div>
                <h1>Successfully Logged IN</h1>
                <h3>Welcome <em>{this.state.user.name}</em></h3>
                <h3>Post written: {this.state.post.length}</h3>
                <ul>
                    {
                        this.state.post.map(post => {
                            return <li key={post.id}>{post.body}</li>
                        })
                    }
                </ul>
                <h3><button onClick={this.handleClick}>Logout</button></h3>
            </div>
        )
    }
}

export default DashBoard