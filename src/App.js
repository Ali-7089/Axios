import React, { Component , Fragment } from 'react'
import axios from 'axios'
import loader from './loader/loader.gif'

export default class App extends Component {

  state ={
    posts:[]
  }

  componentDidMount(){
    axios.get('/posts')
    .then(response=>{
      this.setState({posts:response})
      console.log(response)
    })
    .catch(error=>{
      console.log(error)
    })
  }

  ondeletepost=(id)=>{
    axios.delete('/posts/'+ id)
    .then(response=>{
      this.setState({posts:response})
      console.log(response)
    })
    .catch(error=>{
      console.log(error)
    })
  }

  render() {
    console.log(this.state.posts)
    let posts = (<img src={loader} alt="loading...." />)
    if(this.state.posts.length>0)
    posts = this.state.posts.map((post,index)=>(
      <div className="card mb-5" key={index} style={{width: "18rem"}}>
  <div className="card-body">
    <h5 className="card-title">{post.id}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{post.title}</h6>
    <p className="card-text">{post.body}</p>
    <button href="/" className="card-link bg-transparent border-0 text-primary" >More</button>
    <button onClick={this.ondeletepost.bind(this,post.id)} href="/" className="card-link bg-transparent border-0 text-danger">Delete</button>
  </div>
</div>
    )) 
    return (
      <Fragment>
        <div className="container mt-2 p-2 jumbotron d-flex flex-wrap justify-content-around" > 
        {posts}
        </div>
      </Fragment>
    )
  }
}
