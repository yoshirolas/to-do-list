import React, { Component } from 'react';
import './Main.css';
import CategoryField from './CategoryField';
import TaskField from './TaskField';


class Main extends Component {

  render() {
    return (
    	<main>
    		<CategoryField className="categoryField" />	
        <TaskField className="taskField" />
    	</main>
    );
  }
}

export default Main;