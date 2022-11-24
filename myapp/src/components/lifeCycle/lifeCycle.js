import React from 'react';
import ReactDOM from 'react-dom'; 


class LifeCycle extends React.Component { 
  constructor(props) 
  { 
      super(props); 
      this.state = { hello : "World!" }; 
      console.log("LifeCycle constructor started"); 
  } 

  UNSAFE_componentWillMount() 
  { 
      console.log("Component Will Mount1"); 
  } 

  componentDidMount() 
  { 
      console.log("Component Did Mount"); 
  } 

  changeState() 
  { 
      this.setState({ hello : "Geek!" }); 
  } 

  render() 
  
  { console.log("Life cycle renderd");
      return ( 
          <div className="col-sm-8"> 
            <h1>This is lifeCycle page</h1>
          <h1>GeeksForGeeks.org, Hello{ this.state.hello }</h1> 
          <h2> 
          <a onClick={this.changeState.bind(this)}>Press Here!</a> 
          </h2> 
          </div>); 
  } 

  shouldComponentUpdate(nextProps, nextState) 
  { 
      console.log("shouldComponentUpdate()"); 
      return true; 
  } 

  UNSAFE_componentWillUpdate() 
  { 
      console.log("componentWillUpdate()"); 
  } 

  UNSAFE_componentDidUpdate() 
  { 
      console.log("componentDidUpdate()"); 
  } 
} 

export default LifeCycle;
