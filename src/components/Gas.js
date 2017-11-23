import React, { Component } from 'react'
import Menu from './Menu.jsx'
import Battery from './gass/Battery.jsx'
import Co from './gass/Co.jsx'
import Co2 from './gass/Co2.jsx'
import H2O from './gass/H2O.jsx'

export default class Gas extends Component {

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
                    <p className='title has-text-link'>Gas</p>
                    <br/>
                  </div>

                  <div className="columns">
                    <div className="column">
                      <Battery/>
                    </div>
                  </div>

                  <div className="columns">
                    <div className="column">
                      <Co2/>
                    </div>
                    <div className="column">
                      <Co/>
                    </div>
                  </div>

                  <div className="columns">
                    <div className="column">
                      <H2O/>
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