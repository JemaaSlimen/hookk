










import React, { Component } from 'react'
import Filtre from './comppo/Filtre'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Listes from './comppo/Listes'
import MovieCard from './comppo/MovieCard'
import  {Container,Navbar,Form,FormControl,Button}  from 'react-bootstrap';

 class  App extends Component{
  constructor(){
    super();
    this.state = { 
    number:0
    }
    this.eventHandler = this.eventHandler.bind(this);
}

eventHandler(){
  // this.setState({
  //   number : 1
  // })

  this.setState(function(addition){
    return  { number : addition.number+1 }
  })



}


   render(){    
  return (
    <div className='container' >
       
    <Container>
  <Navbar expand="lg" variant="light" bg="light">
    <Container>
      <Navbar.Brand href="#">Picture</Navbar.Brand>

      <h1> {this.state.number} </h1>
      <button className="btn btn-primary" onClick={this.eventHandler} >click</button>
      

    </Container>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>

  </Navbar>
</Container>
   

     {/* <Listes/>  */}
   <MovieCard/>
  <Filtre/>

    </div>
  )
}}

export default App

















// import React, { useState } from 'react';
// import Filtre from './comppo/Filtre';
// import Listes from './comppo/Listes';
// // import MovieCard from './comppo/MovieCard';
// import "./style.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Data} from './Data'
// function App ()  {
//   const [movies, setMovies] = useState(Data)
//   return (
//     <div >
//       <h1>Films Cartoon</h1>
//       {/* <MovieCard/> */}
//       <Listes  films={movies}/>
//       <Filtre/>
//     </div>
//   )
// }

// export default App
