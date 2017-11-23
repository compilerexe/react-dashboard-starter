import React, { Component } from 'react'
import Menu from './Menu.jsx'
import Temperature from './environments/Temperature.jsx'
import Humidity from './environments/Humidity.jsx'
import Sound from './environments/Sound.jsx'

export default class Environment extends Component {

  constructor (props) {
    super(props)
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
                    <p className='title has-text-link'>Environment</p>
                    <br/>
                  </div>

                  <div className="columns">
                    <div className="column">
                      <Temperature/>
                    </div>
                    <div className="column">
                      <Humidity/>
                    </div>
                  </div>

                  <div className="columns">
                    <div className="column">
                      <Sound/>
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