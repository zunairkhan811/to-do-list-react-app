import { useState } from 'react';
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

    return (
        <li className='list'>
            <div style={viewMode}>
            <input
            type="checkbox"
            checked={itemProp.completed}
            onChange={() => handleChange(itemProp.id)}
          />
        <button className = 'edit' onClick={handleEditing}>Edit</button>
        <button className = 'delete' onClick={() => delTodo(itemProp.id)}>Delete</button>
          {updateInput}
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
  export default TodoItem;
  