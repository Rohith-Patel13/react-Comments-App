// Write your code here
import './index.css'

const CommentItem = props => {
  const {initialContainerBackgroundClassNames} = props
  const randomIndex = Math.floor(Math.random() * 7)
  const styleBackground = initialContainerBackgroundClassNames[randomIndex]
  return (
    <li>
      <div className="upperBody">
        <div className={`profileSymbol ${styleBackground}`}>R</div>
        <div>
          <p className="nameOfPerson">
            Richard Branson <span className="time">2 minutes ago</span>
          </p>
          <p>
            Thanks for being so typically supportive and such a good
            friend,Elon. Great to be opening up space for all.
          </p>
        </div>
      </div>

      <div className="lowerBody">
        <div className="likesContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
            alt="like"
            className="likeImage"
          />
          <p>Like</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          alt="delete"
          className="deleteBtn"
        />
      </div>

      <hr className="horizontalLine" />
    </li>
  )
}
export default CommentItem
