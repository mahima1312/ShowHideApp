import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  firstNameShowHide = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  lastNameShowHide = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="show-hide-container">
          <div className="name-container">
            <button
              onClick={this.firstNameShowHide}
              type="button"
              className="show-hide-button"
            >
              Show/Hide Firstname
            </button>
            {firstName && <p className="name">Joe</p>}
          </div>
          <div className="name-container">
            <button
              onClick={this.lastNameShowHide}
              type="button"
              className="show-hide-button"
            >
              Show/Hide Lastname
            </button>
            {lastName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
