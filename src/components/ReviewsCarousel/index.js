// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {count: 0}
  onClickLeftArrow = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 1}))
    }
  }

  onClickRightArrow = () => {
    const {reviewsList} = this.props
    const reviewLength = reviewsList.length
    const {count} = this.state
    if (count < reviewLength - 1) {
      this.setState(prevState => ({count: prevState.count + 1}))
    }
  }

  render() {
    const {count} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[count]
    return (
      <div className="review-main-container">
        <h1 className="heading">Reviews</h1>
        <div className="review-container">
          <button
            type="button"
            className="button"
            testid="leftArrow"
            onClick={this.onClickLeftArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="left-arrow"
            />
          </button>
          <div className="review-details-conatiner">
            <img src={imgUrl} className="user-image" alt={username} />
            <p className="user-name">{username}</p>
            <p className="company-name">{companyName}</p>
            <p className="review">{description}</p>
          </div>
          <button
            type="button"
            testid="rightArrow"
            onClick={this.onClickRightArrow}
            className="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="right-arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel