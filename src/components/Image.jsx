import {useContext} from "react"
import {Context} from "../Context"
import PropTypes from "prop-types"
import useHover from "../hooks/useHover"
function Image({className, img}) {
    const [hover, ref] = useHover();
    const {toggleFavorite, addToCart, cartItems, removeFromCart} = useContext(Context);

    const heartIcon = img.isFavorite ? 
        <i onClick={() => toggleFavorite(img.id)} className="ri-heart-fill favorite"></i> :
        hover && <i onClick={() => toggleFavorite(img.id)} className="ri-heart-line favorite"></i>;

    function cartIcon() {
        if(cartItems.some((items) => items.id === img.id)){
            return <i onClick={() =>removeFromCart(img.id)} className="ri-shopping-cart-fill cart"></i>
        }
        else if(hover){
            return <i onClick={() => addToCart(img)} className="ri-add-circle-line cart"></i>
        }
    }

    return (
        <div className={`${className} image-container`} ref={ref}>
            <img src={img.url} className="image-grid"/>
            {heartIcon}
            {cartIcon()}
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image