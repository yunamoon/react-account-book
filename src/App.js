import React, { Component } from 'react'
import "./App.css";
import Form from './compnents/form/Form';
import List from './compnents/list/List';

class App extends Component {

    initialCharges = [
        {id : 1, expenditure : "뭔데" , charge :10000},
        {id : 2, expenditure : "난데" , charge :53000},
        {id : 3, expenditure : "근데" , charge :40000}
    ]

    handleDelete = (id) => {
      const newCharges = this.initialCharges.filter(item => item.id !== id);
      console.log(newCharges);
    }

    render() {
        return (
            <main className="main-container">
                <h1 >가계부</h1>
                <div style={{width :'100%', backgroundColor:'white', padding:'1rem'}}>
                <Form/>
                <List initialCharges={this.initialCharges} handleDelete={this.handleDelete}/>
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