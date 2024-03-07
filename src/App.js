import "./App.css";
const { Component } = require("react");

class App extends Component {
    render() {
        return (
            <main className="main-container">
                <h1 >가계부</h1>
                <div style={{width :'100%', backgroundColor:'white', padding:'1rem'}}>
                <p>입력</p>
                </div>

                <div style={{display : 'flex' , justifyContent:'end' , marginTop : '1rem'}}>
                <p style={{fontSize:'2rem'}}>
                    총합:
                    <span>원</span>
                </p>
                </div>  
            </main>
        )
    }
}

export default App;