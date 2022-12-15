import {Component} from 'react'

import FaqItem from '../FaqItem/index'

import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="bg-cont">
        <h1 className="heading">FAQS</h1>
        <hr className="line-1" />
        <ul>
          {faqsList.map(eachItem => (
            <FaqItem key={eachItem.id} eachItem={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Faqs
