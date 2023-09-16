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
  state = {
    commenterName: '',
    commentPara: '',
    commentCount: 0,
    btnClicked: false,
  }

  inputName = event => {
    const enteredValue = event.target.value

    this.setState({commenterName: enteredValue})
  }

  textPara = event => {
    const enteredValue = event.target.value

    this.setState({commentPara: enteredValue})
  }

  buttonClicked = () => {
    this.setState({btnClicked: true, commenterName: '', commentPara: ''})
    this.setState(prevState => ({commentCount: prevState.commentCount + 1}))
  }

  render() {
    const {commenterName, commentPara, commentCount, btnClicked} = this.state

    const renderAuth = () => {
      if (btnClicked) {
        return (
          <CommentItem
            initialContainerBackgroundClassNames={
              initialContainerBackgroundClassNames
            }
          />
        )
      }
      return null
    }

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
                  value={commenterName}
                  onChange={this.inputName}
                />
                <textarea
                  rows="6"
                  cols="40"
                  placeholder="Your Comment"
                  value={commentPara}
                  onChange={this.textPara}
                />
              </div>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="img"
            />
          </div>
          <button
            type="button"
            className="btnEl"
            data-testid="delete"
            onClick={this.buttonClicked}
          >
            Add Comment
          </button>
          <hr className="horizontalLine" />

          <div className="numContainer">
            <div className="countBox">{commentCount}</div>
            <p>Comments</p>
          </div>

          <div className="ulContainer">{renderAuth()}</div>
        </div>
      </div>
    )
  }
}

export default Comments
