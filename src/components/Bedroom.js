import React, { Component } from 'react'
import Menu from './Menu.js'
import Temperature from './bedrooms/Temperature.jsx'
import Humidity from './bedrooms/Humidity.jsx'
import Sound from './bedrooms/Sound.jsx'
import Light from './bedrooms/Light.jsx'

export default class Bedroom extends Component {

  constructor (props) {
    super(props)
    this.state = {temp: [], humid: [], sound: [], light: []}
  }

  componentDidMount () {
    setInterval(() => {
      let generate = []
      for (let i = 0; i <= 100; i++) {
        generate.push(parseInt(Math.random().toFixed(2) * 100))
      }
      this.setState({
        temp: generate,
        humid: generate,
        sound: generate,
        light: generate
      })
    }, 2000)
  }

  render () {

    return (
      <div className='container'>
        <div className='section'>

          <div className='columns'>
            <div className="column is-2">
              <Menu url={this.props.location.pathname}/>
            </div>
            <div className="column is-10">
              <div className="card">
                <div className="card-content">

                  <div className='has-text-centered'>
                    <p className='title has-text-link'>Bedroom</p>
                    <br/>
                  </div>

                  <div className="columns">
                    <div className="column">
                      <Temperature data={this.state.temp}/>
                    </div>
                    <div className="column">
                      <Humidity data={this.state.humid}/>
                    </div>
                  </div>

                  <div className="columns">
                    <div className="column">
                      <Sound data={this.state.sound}/>
                    </div>
                    <div className="column">
                      <Light data={this.state.light}/>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}