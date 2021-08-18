import React, { Component } from 'react'

 class Dataa extends Component {
     render(){

    
    return (
        
<div className ="col-md-4 col-sm-6 border" style={{padding:"5%"}}>
<div className='card'style={{background:this.props.name?"":"black"}}>
<div className= 'card-header'> 
 <img style={{maxWidth:'100%', height:"50%" }} src={this.props.image} alt={this.props.name}/>  

 </div> 
<div className="card-body">
    
    <h1>{this.props.name}</h1>
    <h1>{this.props.desc}</h1>
    <h1>{this.props.rating}</h1>
    <h1>{this.props.date}</h1>
    </div>  
 </div> 

 </div>
 
    )
} }

export default Dataa
