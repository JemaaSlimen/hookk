
import React, { Component } from 'react'
import Dataa from './Dataa';
import memberInf from './membersInfo'

class MovieCard extends Component {  
constructor(){
    super()
    this.state= { memberInf :memberInf,
    members:[],
    counter:0,
    }

    this.eventHandler=this.eventHandler.bind(this)
}


eventHandler(){
if(this.state.counter<this.state.memberInf.length){    
   this.state.members.push(this.state.memberInf[this.state.counter]);
//    this.setState({counter:3})
    this.setState (function(so){
        return {counter:so.counter+1}
        })
//    console.log(this.state.members);

 this.newMembers = this.state.members.map(member=>{

       return <Dataa
key ={member.id}
image ={member.image}
rating={member.rating}
name={member.name}
date={member.date}
desc={member.desc}
/>
   })

}

}


//     mapping (x){  
     
//    const members= x.map(member => <Dataa
// key ={member.id}
// image ={member.image}
// rating={member.rating}
// name={member.name}
// date={member.date}
// desc={member.desc}
// />);
 
// return members
// }
  
render(){  

return (
        <div className='row'>
             <button className="btn btn-primary" onClick={this.eventHandler} >click</button>
           {/* {this.mapping(this.state.memberInf)} */}
          {this.newMembers}
        </div>
    )
}
}

export default MovieCard


















