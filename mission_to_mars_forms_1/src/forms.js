import React, { Component } from 'react'
import countries from './countries.js'
import Name from './name.js'
import Birthdate from './birthdate.js'



class Forms extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      month: '',
      day: '',
      year: '',
      country: '',
      diet: '',
      reason: '',
      message:'',
      breathe: '',
      step: 1,
      submit1: false,
      submit2: false
    }
    this.displayCountries=this.displayCountries.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.confirmSubmit = this.confirmSubmit.bind(this)
    this.resetForm = this.resetForm.bind(this)
  }

  handleChange = (event) => {
    this.setState({ [event.target.name] : event.target.value})
  }

  displayDate() {
    return(
      <>
      <div className = 'date'>
      <p className='label'>Please Enter Your Date of Birth</p>
      <select name='day'>
      <option>Days</option>
      {this.displayRange(1,31)}
      </select>
      <select name='year'>
        <option>Years</option>
        {this.displayRange(1900,2019)}
      </select>
      <select name = 'month'>
        <option disable>Months</option>
        {this.displayMonth()}
      </select>
      </div>
      </>

    )
  }

  // displayCountry(){
  //   return(
  //   <>
  //   <p>Country of Origin</p>
  //   <select name='country'>
  //     <option>Countries</option>
  //     {this.displayCountries()}
  //   </select>
  //   </>
  //   )
  // }

  displayRange(min, max) {
    let nums = []
    for(let i = min; i <= max; i++){
      nums.push(i)
    }
    return nums.map(num =>{
      return <option value ={num}>
      {num}
      </option>
    })
  }

  displayMonth(months) {
    let monthsArray = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
      return monthsArray.map(month => {
        return <option value={month}>{month}</option>
      })
  }

  displayCountries(event) {
    // debugger
    let result =countries.map(country => {
      return <option>{country.name}</option>
    })
    return result
  }

  handleSubmit(event){
    event.preventDefault();
    this.setState({
      message: 'form completed',
      step: 2,
      submit1: true
    })
  }

  confirmSubmit() {
    this.setState({
      message: 'Your form has been submitted',
      submit1: false,
      submit2: true,
      step: 3
    })
  }

  resetForm(){
    this.setState({
      step:1
    })
  }


  render(){
    console.log(this.state)
    let {name, month, day, year, country, diet, reason, message, thankYouMessage, step} = this.state
    let theCountry = this.displayCountries()

    if(this.state.step === 1){
    return(

      <div className='all'>
      <>


        <form onChange={this.handleChange} >

        <Name name={this.state.name} handleChange={this.handleChange}
        />

        <Birthdate year={this.state.year}
        day={this.state.day} month={this.state.month} displayDate={this.displayDate}
        displayRange={this.displayRange}
        displayMonth={this.displayMonth}
        />

          <br />
        <label className='label' htmlFor = 'country'> What is your country of Origin?
        </label>
        <select name='country' handleChange= {this.handleChange}>
          {theCountry}
        </select>

          <br />
        <label className='label' htmlFor="diet">
         What is your dietary preference
         </label>
          <select name="diet" onChange={this.handleChange}>
            <option disabled>Choose your diet</option>
            <option name="diet" value='omnivore'>omnivore</option>
            <option name="diet" value='vegetarian'>vegetarian</option>
            <option name="diet" value='vegan'>vegan</option>
          </select>

          <br />
      <label className='label' htmlFor="reason">What is your reason to be A mars explorer </label>
      <input className='inputBox' onChange={this.handleChange} type="text" name="reason" value={this.reason}></input>

      <br />

      <p className='label'>Can you breathe under water for longer than 1 min?</p>
          <input type='radio' name='breathe' value='yes'/>
          <label className='label' htmlFor='breathe'>Yes</label>
          <input type='radio' name='breathe' value='no'/>
          <label className='label' htmlFor='breathe'>No</label>
          <br />

      <input onClick={this.handleSubmit} className='btn' type = 'submit' checked = {'checked'}  value='SUBMIT'/>

        </form>
      </>
      </div>
    )
  } else if(this.state.step === 2){
    return(
      <>
      <p>your name is: {name}</p>
    <p>your date of birth is {month} {day} {year}</p>
    <p>your country is {country}</p>
    <p>your diet is {diet}</p>
    <p>your reason to go to mars is: {reason}</p>
    <p>your message is {message}</p>
    <p>is the information here correct?</p>
    <button onClick={this.confirmSubmit}>submit</button>

    </>
    )
  }
  else if(this.state.step === 3){
    return(
      <>
      <h2>{this.state.message}</h2>
      <button onClick={this.resetForm}> Click to reset </button>
      </>
    )
  }
}
}



export default Forms
