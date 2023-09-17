// Write your code here
import './index.css'

const CommentItem = props => {
  const {eachObjectProp, deleteButtonProp, likeBtnProp} = props

  const {id, name, para, color, date, isLikeActive} = eachObjectProp

  const clickedOnDeleteButton = () => {
    deleteButtonProp(id)
  }

  const likeBtnClicked = () => {
    likeBtnProp(id)
  }

  const imgUrl = isLikeActive
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const likeColor = isLikeActive ? 'likeTextStyle' : ''

  return (
    <li>
      <div className="upperBody">
        <div className={`profileSymbol ${color}`}>{name[0].toUpperCase()}</div>
        <div>
          <p className="nameOfPerson">
            {name} <span className="time">{date}</span>
          </p>
          <p>{para}</p>
        </div>
      </div>

      <div className="lowerBody">
        <div className="likesContainer">
          <img src={imgUrl} alt="like" className="likeImage" />
          <button
            type="button"
            className={`likeButton ${likeColor}`}
            onClick={likeBtnClicked}
          >
            Like
          </button>
        </div>

        <button
          type="button"
          className="btnElement"
          data-testid="delete"
          onClick={clickedOnDeleteButton}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="deleteBtn"
          />
        </button>
      </div>

      <hr className="horizontalLine" />
    </li>
  )
}
export default CommentItem
