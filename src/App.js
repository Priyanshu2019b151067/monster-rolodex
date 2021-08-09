import { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cardlist from './components/cardlist/cardlist';
import Search from './components/search/search';

class App extends Component {
  constructor()
  {
    super();
    this.state = {
      citizens : [],
      search: '',
    }
  }
  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({citizens : users}))
  }
  render()
  {
    const {citizens , search } =this.state;
    const filtered_citizens = citizens.filter((member) => (
      member.username.toLowerCase().includes(search.toLowerCase()) ||  member.email.toLowerCase().includes(search.toLowerCase())
    ))
    const change_handler = (e) =>{
      this.setState({search : e})
    } 
    return (
      <div className="">
        <h1 className="text-center mt-5 mb-3">Monsters Rolodex</h1>
        <Search change_handler ={change_handler}/>
        <Cardlist citizens = {filtered_citizens} />
      </div>
    );
  }
 
}

export default App;
