import React, { Component } from 'react'
import Menu from './Menu.jsx'
import Temperature from './toilets/Temperature.jsx'
import Humidity from './toilets/Humidity.jsx'
import Ammonia from './toilets/Ammonia.jsx'

export default class Location extends Component {

  constructor (props) {
    super(props)
    this.state = {temp: [], humid: [], ammonia: []}
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
        ammonia: generate
      })
    }, 2000)
  }

  render () {
    return (
      <div className='container'>
        <div className='section'>

          <div className='columns'>
            <div className="column is-2">
              {Menu}
            </div>
            <div className="column is-10">
              <div className="card">
                <div className="card-content">

                  <div className='has-text-centered'>
                    <p className='title has-text-link'>Toiler</p>
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
                      <Ammonia data={this.state.ammonia}/>
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