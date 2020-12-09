import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App(props){
    const urlParams = new URLSearchParams(window.location.search)
    if(urlParams.has('idSalle')){
        var x = urlParams.get('idSalle');
    }else{
        var x = "pas de paramètre";
    }

        return (
            <div className="container-fluid">
                <div className="game-board">
                    <p>vous etes devant la salle {x}</p>
                </div>
            </div>
        );
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);