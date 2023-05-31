import {useContext} from "react"
import {Context} from "../Context"
import PropTypes from "prop-types"
import useHover from "../hooks/useHover";

function CartItem({item}) {
    const {removeFromCart} = useContext(Context);
    const [hover, ref] = useHover();

    const trashIcon = hover ? "fill" : "line";

    return (
        <div className="cart-item">
            <i onClick={() =>removeFromCart(item.id)} ref={ref} className={`ri-delete-bin-${trashIcon}`}></i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes
}

export default CartItem