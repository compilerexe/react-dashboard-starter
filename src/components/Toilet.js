import React, { Component } from 'react'
import Menu from './Menu.jsx'
import Temperature from './toilets/Temperature.jsx'
import Humidity from './toilets/Humidity.jsx'
import Ammonia from './toilets/Ammonia.jsx'

export default class Location extends Component {

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
                      <Temperature/>
                    </div>
                    <div className="column">
                      <Humidity/>
                    </div>
                  </div>

                  <div className="columns">
                    <div className="column">
                      <Ammonia/>
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