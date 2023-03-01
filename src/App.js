import './App.css';
import React from 'react';
import Item from './components/Item';
import {v4 as uuidv4} from 'uuid';
import FormComponent from './components/Form';
import { useContext, useEffect, useState , useReducer} from 'react';
import DataContext from './data/DataContext';
import ReportComponent from './components/reportComponent';
import { BrowserRouter as Router,Routes,Route,Link, BrowserRouter } from 'react-router-dom';


function Title() {
  return <h1 style={{color:"red",fontSize:'25px',textAlign:'center'}}>โปรแกรมบัญชีรายรับรายจ่าย</h1>
}

function Transactions(props) {
  const {items} = props
  return (
    <div>
      <ul className='item-list'>
        {items.map((elm)=>{
          return <Item title={elm.title} amount={elm.amount} key={uuidv4()}/>
        })}
      </ul>
    </div> 
  )
}
function App() {
  const initData = [
    {id:1,title:'ค่ารักษาพยาบาล',amount:-10000},
    {id:2,title:'ค่าอาหาร',amount:-3000}, 
    {id:3,title:'เงินเดือน',amount:1000},
    {id:4,title:'ค่าเดินทาง',amount:-3000},
    {id:5,title:'โบนัส',amount:2000}
  ]
  const [reportIncome, setreportIncome] = useState(0);
  const [reportExpense, setreportExpense] = useState(0);
  const [showReport, setshowReport] = useState(false)
  const [Items, setItems] = useState(initData)

  //useReducer
  const reducer = (state,action)=>{
    switch (action.type) {
      case "SHOW":
        return setshowReport(true)
      case "HIDE":
        return setshowReport(false)
    }
  }
  const [result,dispatch] = useReducer(reducer,showReport)

  function onAddNewItem(newItem) {
    setItems((oldItem)=>{
      return [...oldItem,newItem] //นำ Item ใหม่ที่รับมาไปต่อท้าย Item เดิมที่มีอยู่แล้ว
    })
  }
  useEffect(()=>{
    const amount = Items.map((Items)=>{
      return Items.amount
    }) //ได้เป็น array ของ amount มา
    const income = amount.filter((elm)=>{
      return elm>0 //เอา amout มากรองโดยเลือกเฉพาะที่มีค่าเป็น +
    }) //ได้เป็น array ของ amount มา (ค่า +)
    const expense = amount.filter((elm)=>{
      return elm<0 //เอา amout มากรองโดยเลือกเฉพาะที่มีค่าเป็น -
    }) //ได้เป็น array ของ amount มา (ค่า -)
    //หาผลรวมใน array income
    let sumIncome = income.reduce((total,elm)=>{
      let result = total + elm
      return result
    },0)
    //หาผลรวมใน array expense
    let sumExpense = expense.reduce((total,elm)=>{
      let result = total + elm
      return result
    },0)
    
    //เก็บค่าที่คำนวณได้ลงใน state reportIncome,reportExpense
    setreportIncome(sumIncome)
    setreportExpense(sumExpense)
  },[Items,reportIncome,reportExpense])

  return (
    <DataContext.Provider value={
      {
        income:reportIncome,
        expense:(Math.abs(reportExpense))
      }
    }>
        <div className="container">
          <Title/>
            <BrowserRouter>
            <div>
              <ul className='horizontal-menu'>
                <li><Link to="/">ข้อมูลบัญชี</Link></li>
                <li><Link to="/insert">บันทึกข้อมูล</Link></li>
              </ul>
              </div>
              <Routes>
                <Route path='/' element={<ReportComponent/>}/>
                <Route path='/insert' element={<div>
                  <FormComponent onAddItem={onAddNewItem}/>
                  <Transactions items={Items}/>
                </div>}/>
              </Routes>
            </BrowserRouter>
        </div>
    </DataContext.Provider>
  );
} 

export default App;

