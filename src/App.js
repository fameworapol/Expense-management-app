import './App.css';
import Item from './components/Item';
import {v4 as uuidv4} from 'uuid';
import FormComponent from './components/Form';
import { useState } from 'react';


function Title() {
  return <h1 style={{color:"red",fontSize:'25px',textAlign:'center'}}>โปรแกรมบัญชีรายรับรายจ่าย</h1>
}

function Transactions(props) {
  const {items} = props
  return (
    <ul className='item-list'>
      {items.map((elm)=>{
        return <Item title={elm.title} amount={elm.amount} key={uuidv4()}/>
      })}
    </ul>
  )
}
function App() {
  const initData = [
    {id:1,title:'ค่ารักษาพยาบาล',amount:10000},
    {id:2,title:'ค่าอาหาร',amount:3000},
    {id:3,title:'เงินเดือน',amount:1000},
    {id:4,title:'ค่าเดินทาง',amount:3000}
  ]

  const [Items, setItems] = useState(initData)

  function onAddNewItem(newItem) {
    setItems((oldItem)=>{
      return [...oldItem,newItem] //นำ Item ใหม่ที่รับมาไปต่อท้าย Item เดิมที่มีอยู่แล้ว
    })
  }

  return (
    <div className="container">
      <Title/>
      <FormComponent onAddItem={onAddNewItem}/>
      <Transactions items={Items}/>
    </div>
  );
} 

export default App;
