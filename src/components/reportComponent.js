import { useContext } from "react";
import DataContext from "../data/DataContext";
import './reportcomponent.css'

function ReportComponent() {
    const {"income":income,"expense":expense} = useContext(DataContext) //ใช้ useContext ดึงค่าจาก DataContext มาใช้
    return (
        <div>
            <h4>ยอดคงเหลือ (Bath)</h4>
            <h1>฿{income-expense}</h1>
            <div className="report-container">
                <div>
                    <h4>ยอดรายรับ</h4>
                    <p className="report plus">{income}</p>
                </div>
                <div>
                    <h4>ยอดรายจ่าย</h4>
                    <p className="report minus">{expense}</p>
                </div>
            </div>
        </div>
    )
}
export default ReportComponent