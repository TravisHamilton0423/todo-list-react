import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
  Link
} from 'react-router-dom';

import './styles.scss';

const Head = () => {
  const history = useHistory();
  const [visible, setVisible] = useState(true);

  const handleResize = () =>  {
    if(window.innerWidth < 767) {
      setVisible(false);
    }
    else {
      setVisible(true);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return (
    <div className='head-app'>
      <div className='head-main-btn'>
        <div className='head-logo' onClick={() => history.push("/")}>
            <img src="https://reactjsexample.com/assets/favicon.png" alt=" React.js Examples" width="38" height="38" />
            <span>React Example</span>
        </div>
        <button className='mobile-menu' onClick={() => setVisible(!visible)}>Menu</button>
      </div>
      <div className={`nav-items ` + (visible ? `active` : '')}>
        <Link className='nav-item' to="/" >Members</Link>
        <Link className='nav-item' to="/teams" >Teams</Link>
        <Link className='nav-item' to="/todos" >Todo</Link>
      </div>
    </div>
  )
}

export default Head;