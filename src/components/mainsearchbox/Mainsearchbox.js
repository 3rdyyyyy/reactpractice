import React, { Component } from 'react'
import './searchboxstyles.css'

export default class Mainsearchbox extends Component {
  render() {
    return (
        <div class='main-searchbarCont'>
        <div className= "search-bar-title-cont">
          <h1 class="search-bar-title-font">Search</h1>
        </div>
            <div className='search-bar-cont'>
              <input className='mainsearchBar'></input>
            </div>
        
      </div>
    )
  }
};

// add routing papuntang resultspage kapag nag type si user


