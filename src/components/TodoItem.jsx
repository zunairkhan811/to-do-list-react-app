import { useState } from 'react';
import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import PropTypes from 'prop-types'

const TodoItem = ({ itemProp, handleChange, delTodo, setUpdate}) => {
    const [updateInput, setUpdateInput] = useState(itemProp.title);
    const [editing, setEditing] = useState(false);
    const handleEditing = () => {
        setEditing(true);
      };
      let viewMode = {};
      let editMode = {};
      if (editing) {
        viewMode.display = 'none';
      } else {
        editMode.display = 'none';
      }
      const handleUpdatedDone = (event) => {
        if (event.key === 'Enter') {
          setUpdate(updateInput, itemProp.id);
          setEditing(false);
        }
      };
      const completedStyle = {
        fontStyle: 'italic',
        color: '#595959',
        opacity: 0.4,
        textDecoration: 'line-through',
      };

    return (
        <li className='list'>
         <div style={viewMode}>
            <input
            type="checkbox"
            checked={itemProp.completed}
            onChange={() => handleChange(itemProp.id)}
          />
          <button className = 'delete' onClick={() => delTodo(itemProp.id)}><FaTrash /></button>
          <button className = 'edit' onClick={handleEditing}><AiFillEdit /></button>
          <span style={itemProp.completed ? completedStyle : null}>
          {updateInput}
          </span>
         </div>
          
          <input
            type="text"
            value={updateInput}
            className = 'textInput'
            style={editMode}
            onChange={(e) => setUpdateInput(e.target.value)}
            onKeyDown={handleUpdatedDone}
          />
        </li>
      );
  };

  TodoItem.propTypes = {
    handleChange : PropTypes.string
  }
  TodoItem.propTypes = {
    delTodo : PropTypes.string
  }
  TodoItem.propTypes = {
    setUpdate : PropTypes.string
  }
  TodoItem.propTypes = {
    itemProp : PropTypes.object
  }
  export default TodoItem;
  