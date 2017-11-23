import React, { Component } from 'react'
import Menu from './Menu.jsx'
import Temperature from './bedrooms/Temperature.jsx'
import Humidity from './bedrooms/Humidity.jsx'
import Sound from './bedrooms/Sound.jsx'
import Light from './bedrooms/Light.jsx'

export default class Bedroom extends Component {

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
                    <p className='title has-text-link'>Bedroom</p>
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
                    <div className="column">
                      <Light/>
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