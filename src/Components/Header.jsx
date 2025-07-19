import { Link } from "react-router-dom";

import React from 'react'

const Header = () => {
  return (
    <div>
        <Link to='/' > Home</Link>
        <Link to='/login' > Login</Link>
        <Link to='/browse' > Browse</Link>
    </div>
  )
}

export default Header