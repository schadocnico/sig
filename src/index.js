import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App(props){
        return (
            <div className="container-fluid">
                <div className="game-board">
                    <p>Salut</p>
                </div>
            </div>
        );
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);