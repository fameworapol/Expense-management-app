import './Form.css'
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid';
import { useEffect } from 'react';

function FormComponent(props) {
    const [Title, setTitle] = useState('')
    const [Amount, setAmount] = useState(0)
    const [FormValid, setFormValid] = useState(false) //เก็บค่าเปิดปิดปุ่ม

    function inputTitle(event) {
        setTitle(event.target.value)
    }

    function inputAmount(event) {
        setAmount(event.target.value) 
    }

    useEffect(() => {
      if(Amount!==0 && Title.trim().length>0){
        setFormValid(true)
      }else{
        setFormValid(false)
      }
    }, [Title,Amount])
    

    function SaveItem(event) {
        event.preventDefault()
        const ItemData = {
            id:uuidv4(),
            title:Title,
            amount:Number(Amount)
        }
        console.log(ItemData);
        props.onAddItem(ItemData);
        setTitle('')
        setAmount(0)
    }
    
    return (
        <div>
            <form onSubmit={SaveItem}>
                <div className='form-control'>
                    <label>ชื่อรายการ</label>
                    <input type='text' placeholder='ระบุชื่อรายการของคุณ' onChange={inputTitle} value={Title}></input>
                </div>
                <div className='form-control'>
                    <label>จำนวนเงิน</label>
                    <input type='number' placeholder='(+ รายรับ , - รายจ่าย)' onChange={inputAmount} value={Amount}></input>
                </div>
                <div className='form-control'>
                    <button type="submit" className='btn' disabled={!FormValid}>เพิ่มข้อมูล</button>
                </div>
            </form>
        </div> 
    )
}

export default FormComponent