import {useContext, useState} from "react"
import {Context} from "../Context"
import CartItem from "../components/CartItem"

function Cart() {
    const {cartItems, emptyCart} = useContext(Context);
    const totalCost = (cartItems.length * 5.99).toLocaleString("en-US", {style: "currency", currency: "USD"});
    const [textButton, setTextButton] = useState("Place Order");

    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    function handleOrder(){
        setTextButton('Ordering...');

        setTimeout(() => {
            console.log("Order Placed!");
            emptyCart();
            setTextButton("Place Order");
        }, 3000)
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCost}</p>
            <div className="order-button">
                {cartItems.length > 0 && <button onClick={handleOrder}>{textButton}</button>}
            </div>
        </main>
    )
}

export default Cart