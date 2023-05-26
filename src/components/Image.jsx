import {useState, useContext} from "react"
import {Context} from "../Context"
import PropTypes from "prop-types"

function Image({className, img}) {
    const [hovered, setHovered] = useState(false);
    const {toggleFavorite, addToCart, cartItems} = useContext(Context);

    function onHover(){
        setHovered(true);
    }

    function offHover(){
        setHovered(false);
    }

    const heartIcon = img.isFavorite ? 
        <i onClick={() => toggleFavorite(img.id)} className="ri-heart-fill favorite"></i> :
        hovered && <i onClick={() => toggleFavorite(img.id)} className="ri-heart-line favorite"></i>;

    function cartIcon() {
        if(cartItems.some((items) => items.id === img.id)){
            return <i className="ri-shopping-cart-fill cart"></i>
        }
        else if(hovered){
            return <i onClick={() => addToCart(img)} className="ri-add-circle-line cart"></i>
        }
    }

    return (
        <div className={`${className} image-container`} onMouseEnter={onHover} onMouseLeave={offHover}>
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