import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import {formatDistanceToNow} from 'date-fns'

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
const commentList = []

class Comments extends Component {
  state = {
    list: commentList,
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
    const {list, commenterName, commentPara} = this.state
    const randomIndex = Math.floor(Math.random() * 7)
    const styleBackground = initialContainerBackgroundClassNames[randomIndex]
    const newListObject = {
      id: uuidv4(),
      name: commenterName,
      para: commentPara,
      color: styleBackground,
      date: formatDistanceToNow(new Date()),
      isLikeActive: false,
    }
    this.setState(prevState => ({
      commentCount: prevState.commentCount + 1,
      btnClicked: true,
      list: [...list, newListObject],
      commenterName: '',
      commentPara: '',
    }))
  }

  deleteButton = idNum => {
    const {list} = this.state
    const deletedList = list.filter(
      eachObjectFilter => eachObjectFilter.id !== idNum,
    )

    this.setState(prevState => ({
      list: deletedList,
      commentCount: prevState.commentCount - 1,
    }))
  }

  likeBtn = idNum => {
    this.setState(prevState => ({
      list: prevState.list.map(eachObject => {
        if (eachObject.id === idNum) {
          return {...eachObject, isLikeActive: !eachObject.isLikeActive}
        }
        return eachObject
      }),
    }))
  }

  render() {
    const {
      list,
      commenterName,
      commentPara,
      commentCount,
      btnClicked,
    } = this.state

    const renderAuth = () => {
      if (btnClicked) {
        return list.map(eachObject => (
          <CommentItem
            initialContainerBackgroundClassNames={
              initialContainerBackgroundClassNames
            }
            eachObjectProp={eachObject}
            deleteButtonProp={this.deleteButton}
            likeBtnProp={this.likeBtn}
            key={eachObject.id}
          />
        ))
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
              <form className="inputContainer">
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
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="img"
            />
          </div>
          <button type="button" className="btnEl" onClick={this.buttonClicked}>
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
