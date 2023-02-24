function Item() {
    const name = "ค่าขนม";
    const amount = 5000
    return <li className="item">{name} <span>-{amount}</span></li>
}
export default Item