import {Component} from 'react'

import CommentItem from '../CommentItem/index'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  render() {
    return (
      <div className="bg">
        <div>
          <h1 className="mainHead">Comments</h1>
          <div className="firstCard">
            <div className="commentsMainContentContainer">
              <p className="paraBelowImage">
                Say something about 4.0 Technologies
              </p>
              <div className="inputContainer">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="nameTextInput"
                />
                <textarea rows="6" cols="40" placeholder="Your Comment" />
              </div>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="img"
            />
          </div>
          <button type="button" className="btnEl" data-testid="delete">
            Add Comment
          </button>
          <hr className="horizontalLine" />

          <div className="numContainer">
            <div className="countBox">0</div>
            <p>Comments</p>
          </div>

          <ul className="ulContainer">
            <CommentItem
              initialContainerBackgroundClassNames={
                initialContainerBackgroundClassNames
              }
            />
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
