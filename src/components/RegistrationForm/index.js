// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    isOpen: true,
    firstName: '',
    lastName: '',
    isFirstNameEmpty: false,
    isLastNameEmpty: false,
  }

  checkFirstName = event => {
    if (event.target.value === '') {
      this.setState({isFirstNameEmpty: true, firstName: event.target.value})
    } else {
      this.setState({isFirstNameEmpty: false, firstName: event.target.value})
    }
  }

  checkLastName = event => {
    const value = event.target.value === ''
    this.setState({isLastNameEmpty: value, lastName: event.target.value})
  }

  formRegistration = () => {
    const {isFirstNameEmpty, isLastNameEmpty} = this.state

    return (
      <div className="form-container">
        <h1 className="heading">Registration</h1>
        <form className="form" onSubmit={this.formSubmit}>
          <div className="form-name">
            <label className="label-name" htmlFor="firstname">
              FIRST NAME
            </label>
            <input
              placeholder="First name"
              className="input-element"
              type="text"
              id="firstname"
              onBlur={this.checkFirstName}
            />
            {isFirstNameEmpty && <p className="require">Required</p>}
          </div>
          <div className="form-name">
            <label className="label-name" htmlFor="lastname">
              LAST NAME
            </label>
            <input
              placeholder="Last name"
              className="input-element"
              type="text"
              id="lastname"
              onBlur={this.checkLastName}
            />
            {isLastNameEmpty && <p className="require">Required</p>}
          </div>
          <div className="button-container">
            <button className="submit-btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }

  submitAnotherForm = () => {
    this.setState({isOpen: true, firstName: '', lastName: ''})
  }

  formSubmit = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName === '' && lastName === '') {
      this.setState({isFirstNameEmpty: true, isLastNameEmpty: true})
      console.log(1)
    } else if (firstName === '') {
      this.setState({isFirstNameEmpty: true})
      console.log(2)
    } else if (lastName === '') {
      this.setState({isLastNameEmpty: true})
      console.log(3)
    } else {
      this.setState({isOpen: false})
      console.log(4)
    }
  }

  submitFormSuccess = () => (
    // const {isOpen} = this.state

    <div className="second-container">
      <div className="submit-form">
        <h1 className="heading head">Registration</h1>

        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          alt="success"
        />
        <p>Submitted Successfully</p>
        <button
          type="button"
          className="button"
          onClick={this.submitAnotherForm}
        >
          Submit Another Response
        </button>
      </div>
    </div>
  )

  render() {
    const {isOpen} = this.state

    return <>{isOpen ? this.formRegistration() : this.submitFormSuccess()}</>
  }
}

export default RegistrationForm
