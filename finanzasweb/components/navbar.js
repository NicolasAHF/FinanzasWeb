"use client"

import {useState } from "react"

export default function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    return <nav>
        <a>Home</a>
        <a>About</a>
        {isLoggedIn ? <a>My Profile</a> : <a>Login</a>}
    </nav>
  }