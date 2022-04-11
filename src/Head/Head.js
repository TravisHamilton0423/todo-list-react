import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  Link
} from 'react-router-dom';

import './styles.scss';

const Head = () => {
  const history = useHistory();
  return (
    <div className='head-app'>
      <div className='head-logo' onClick={() => history.push("/")}>
        <img src="https://reactjsexample.com/assets/favicon.png" alt=" React.js Examples" width="38" height="38" />
        <span>React Example</span>
      </div>
      <div className='nav-items'>
        <Link className='nav-item' to="/" >Members</Link>
        <Link className='nav-item' to="/teams" >Teams</Link>
        <Link className='nav-item' to="/todos" >Todo</Link>
      </div>
    </div>
  )
}

export default Head;