import './App.css';
import Item from './components/Item';
function Title() {
  return <h1 style={{color:"red",fontSize:'25px',textAlign:'center'}}>โปรแกรมบัญชีรายรับรายจ่าย</h1>
}

function Transactions() {
  return (
    <ul className='item-list'>
      <Item/>
      <Item/>
      <Item/>
      <Item/>
      <Item/>
    </ul>
  )
}
function App() {
  return (
    <div className="container">
      <Title/>
      <Transactions/>
    </div>
  );
}

export default App;
