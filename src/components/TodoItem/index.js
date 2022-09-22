import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  render() {
    const {todoDetails, onDelete} = this.props
    const {id, title} = todoDetails

    const onDeleteBtnClick = () => {
      onDelete(id)
    }

    return (
      <li className="list-container">
        <p className="todo">{title}</p>
        <button
          type="button"
          className="delete-button"
          onClick={onDeleteBtnClick}
        >
          Delete
        </button>
      </li>
    )
  }
}
export default TodoItem
