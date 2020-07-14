import React from "react"
import "./App.css"
import ChatApp from "./components/ChatApp"

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Never chat app</h1>
            </header>
            <main className="container">
                <ChatApp />
            </main>
        </div>
    )
}

export default App
