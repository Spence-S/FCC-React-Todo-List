import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoListItem from './TodoListItem';
import axios from '../helpers/axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {todos: []};
  }

componentWillMount(){
  axios.get()
    .then(
      todos => {
        this.setState({todos});
      }
    ).catch(
      err => {
        console.log('there was an error', err);
      }
    );

    // axios.get(URL)
    //   .then(
    //     todos => {
    //       this.setState({todos: todos.data.todos});
    //     }
    //   ).catch(
    //     err => {
    //       console.log('there was an error', err);
    //     }
    //   );
  }

  refreshState = () => {
    axios.get(URL)
      .then(
        todos => {
          this.setState({todos});
        }
      ).catch(
        err => {
          console.log('there was an error', err);
        }
      );
  }



  render() {
    return (
      <div>
        <TodoForm callBack={this.refreshState}/>
        <ul className='list-group'>
        {this.state.todos.map( (todo, ind) => {
          return(
              <TodoListItem
                          key={ind}
                          item={todo.text}
                          id={ind}
                          callBack={this.refreshState}/>
            )
          }
        )
      }
      </ul>
      </div>
    )
  }
}

export default App;
