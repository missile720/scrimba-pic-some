import {useContext, useState} from "react"
import {Context} from "../Context"
import PropTypes from "prop-types"

function CartItem({item}) {
    const {removeFromCart} = useContext(Context);
    const [hovered, setHovered] = useState(false);

    const trashIcon = hovered ? "fill" : "line"

    function onHover(){
        setHovered(true);
    }

    function offHover(){
        setHovered(false);
    }

    return (
        <div className="cart-item">
            <i onClick={() =>removeFromCart(item.id)} onMouseEnter={onHover} onMouseLeave={offHover} className={`ri-delete-bin-${trashIcon}`}></i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes
}

export default CartItem