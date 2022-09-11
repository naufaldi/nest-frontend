import React, { Component } from 'react'

class componentName extends Component {
 constructor(super){
  super()
  this.state = {
   state: null
  }
  this.method = this.method.bind(this)
 }
 componentWillMount(){
  // runs before render
 }
 componentDidMount(){
  // runs after render
 }
 compoenntWillUnmount(){
  // runs before component is removed from DOM
 }

 render () {
  return (
   <div>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sequi quas corrupti voluptas autem perferendis perspiciatis nihil labore adipisci incidunt fugit, numquam blanditiis excepturi in itaque voluptate ipsum repellat recusandae.</h1>
   </div>
  )
 }
}

export default componentName