import TodoItem from '@/components/TodoItem';
import PropTypes from 'prop-types'
const TodosList = ({ todosProps, handleChange, delTodo, setUpdate }) => {
    return (
      <ul>
        {todosProps.map((todo) => (
          <TodoItem key={todo.id} itemProp={todo} handleChange = {handleChange} delTodo={delTodo} setUpdate={setUpdate} />
        ))}
      </ul>
    );
  };

  TodosList.propTypes = {
    handleChange : PropTypes.string
  }
  TodosList.propTypes = {
    delTodo : PropTypes.string
  }
  TodosList.propTypes = {
    setUpdate : PropTypes.string
  }
  TodosList.propTypes = {
    todosProps : PropTypes.array
  }
  export default TodosList;
  