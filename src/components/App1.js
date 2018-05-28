import React, { Component } from 'react';
import UserList from '../components/ejemplo/UserList';
import UserForm from '../components/ejemplo/UserForm';
import logo from '../assets/logo.svg';
import '../assets/App.css';
//import '../assets/css/bootstrap/bootstrap.css';
import { Alert } from 'reactstrap';
import Bananas from '../components/shopping-cart/login'
import { Button } from 'reactstrap';

class App extends Component {
constructor() {
    super();
    this.state = {
      users: [
        {id: 1, name: "miguel", email: "test@miguelgomez.io"},
        {id: 2, name: "test", email: "test@test.es"}
      ]
    };
  }
  
   handleOnAddUser (event) {
    event.preventDefault();
    let user = {
      name: event.target.name.value,
      email: event.target.email.value
    };
    this.setState({
      users: this.state.users.concat([user])
    });
  }

  render() {
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <p className="App-intro">
          !!!...... Bienvenido a React ......!!!
           <UserList users={this.state.users} />
           <UserForm onAddUser={this.handleOnAddUser.bind(this)} />
        </p>
        
         !!!...... Bienvenido a mi shopping cart de react redux......!!!
        <Bananas />


        <Button color="danger">Danger!</Button>

         <div>

    </div>
 </div>

        







      
    );
  }
}




export default App;
