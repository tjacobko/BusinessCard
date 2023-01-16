import React from "react"

import Profile from "./components/Profile"
import Header from "./components/Header"
import Buttons from "./components/Buttons"
import Main from "./components/Main"
import Footer from "./components/Footer"

function App() {
    return (
        <div className="card">
            <Profile />
            <Header />
            <Buttons />
            <Main />
            <Footer />
        </div>
    )
}

export default App