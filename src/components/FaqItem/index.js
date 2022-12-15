import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {
    isItPlus: true,
  }

  toggleButton = () => {
    const {isItPlus} = this.state
    this.setState({isItPlus: !isItPlus})
  }

  render() {
    const {eachItem} = this.props
    const {isItPlus} = this.state

    const renderPlus = () => (
      <li className="bg-cont-2">
        <h1 className="head">{eachItem.questionText}</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
          alt="plus"
          className="icon"
          onClick={this.toggleButton}
        />
      </li>
    )

    const minus = () => (
      <li className="bg-cont">
        <div className="bg-cont-2">
          <h1 className="head">{eachItem.questionText}</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png "
            alt="minus"
            className="icon"
            onClick={this.toggleButton}
          />
        </div>
        <hr className="line" />
        <p className="para">{eachItem.answerText}</p>
      </li>
    )

    return <div>{isItPlus ? renderPlus() : minus()}</div>
  }
}

export default FaqItem
