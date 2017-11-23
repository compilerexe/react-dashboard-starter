import React from 'react'
import { Link } from 'react-router-dom'
import 'font-awesome/css/font-awesome.css'

export default (
  <aside className='menu'>
    <p className='menu-label'>
      General
    </p>
    <ul className='menu-list'>
      <Link to='/environment'>
        <li><span style={{ fontWeight: 'bold'}}><i className='fa fa-envira'/> Environment</span></li>
      </Link>
      <Link to='/gas'>
        <li><span style={{ fontWeight: 'bold'}}><i className='fa fa-flask'/> Gas</span></li>
      </Link>
      <Link to='/toilet'>
        <li><span style={{ fontWeight: 'bold'}}><i className='fa fa-shower'/> Toilet</span></li>
      </Link>
      <Link to='/bedroom'>
        <li><span style={{ fontWeight: 'bold'}}><i className='fa fa-bed'/> Bedroom</span></li>
      </Link>
    </ul>
  </aside>
)