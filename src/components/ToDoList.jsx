import React, {Component} from 'react';

class ToDoList extends Component {

        render(){

            let taskList = this.props.taskList.map(task =>{
                return(
                    <li className="collection-item " key={task.text} style={{height: "75px"}}>

                        <span className="title">
                            {task.text}
                        </span>

                        <button onClick={this.props.onDelete.bind(this, task)} className="secondary-content btn-floating red" >
                            <i className="material-icons">close</i>
                        </button>

                    </li>

                )}
            )
            return (
                <div className="todolist">
                <ul className="collection">
            {taskList.length===0 ? <h3>There is no items to display</h3>: taskList }
                    {console.log(taskList.length===0)}
                    </ul>
                </div>
             );
        }
    }

export default ToDoList;