import React, { useState } from 'react'
import "./App.css";
import Form from './compnents/form/Form';
import List from './compnents/list/List';
import Alert from './compnents/alert/Alert';

const App = () => {

    const [charges , setCharges] = useState([])
    const [expenditure, setExpenditure] = useState('');
    const [charge , setCharge] = useState('');
    const [alert, setAlert] = useState({show : false});
    const [edit , setEdit] = useState(false);
    const [id , setId] = useState('');

    const handleDelete = (id) => {
      const newCharges = charges.filter(item => item.id !== id);
      setCharges(newCharges)
      handleAlert({type : 'danger' , text : '선택 항목이 삭제됐습니다'})
    }

    const handleExpend = (e) => {
        setExpenditure(e.target.value);
    }

    const handleCharge = (e) => {
        setCharge(e.target.valueAsNumber);
       
    }
    const hadleEdit = (id) => {
        const newCharges = charges.find(item => item.id === id);
        const {charge, expenditure} = newCharges;
        setId(id);
        setCharge(charge);
        setExpenditure(expenditure);
        setEdit(true);
    }

    const handleClear = () => {
        setCharges([]);
    }
    
    const handleAlert = ({type, text }) => {
        setAlert({show: true, type : type , text : text});

        setTimeout(() => {
            setAlert({show: false});
        }, 5000);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(expenditure !== "" && charge > 0) {
            if(edit) {
                const newCharges = charges.map(item=> {
                    return item.id === id? {...item, charge, expenditure} : item;
                });
                setCharges(newCharges);
                setEdit(false);
                setExpenditure('');
                setCharge('');
                handleAlert({type : 'success' , text : '지출 항목이 수정되었습니다.'})
            }else {
                const newCharge = {id : crypto.randomUUID(), expenditure, charge}
                const newCharges = [...charges , newCharge];
                setCharges(newCharges);
                setExpenditure('');
                setCharge('');
                handleAlert({type : 'success' , text : '지출 항목이 추가되었습니다.'})
            }
        } else {
            handleAlert({type : 'danger' , text : '필수 항목을 전부 입력해주세요.'})
        }
    }
  
        return (
            <main className="main-container">
                <h1 >가계부</h1>
                {alert.show ? <Alert type={alert.type} text={alert.text}/> : null}
                <div style={{width :'100%', backgroundColor:'white', padding:'1rem', borderRadius:'15px'}}>
                <Form
                charge = {charge}
                handleCharge={handleCharge}
                expenditur={expenditure}
                handleExpend={handleExpend}
                handleSubmit={handleSubmit}
                edit={edit}/>
                <List 
                charges={charges} 
                handleDelete={handleDelete}
                hadleEdit={hadleEdit}
                handleClear={handleClear}/>
                </div>

                <div style={{display : 'flex' , justifyContent:'end' , marginTop : '1.2rem'}}>
                <p style={{fontSize:'1.5rem', marginRight: '16px'}}>
                    총 지출 :&nbsp;&nbsp;&nbsp;
                    {charges.reduce((acc, cur) => {
                        return (acc += cur.charge)
                    },0) }
                    <span > 원</span>
                </p>
                </div>  
            </main>
        )
    }

export default App;