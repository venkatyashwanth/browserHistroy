import './index.css'

const HistoryItem = props => {
  const {details, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = details
  const onClickDelete = () => {
    deleteItem(id)
  }

  return (
    <li className="listItems">
      <div className="details">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} className="logo-image" alt="domain logo" />
        <p className="title">{title}</p>
        <p className="url">{domainUrl}</p>
      </div>
      <button
        type="button"
        testid="delete"
        className="del-btn"
        onClick={onClickDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
