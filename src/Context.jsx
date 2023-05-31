import React from "react"
import PropTypes from "prop-types"

const Context = React.createContext()

function ContextProvider({children}) {
    const [photos, setPhotos] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);

    React.useEffect(() => {
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
            .then(response => response.json())
            .then(data => setPhotos(data))
    },[]);

    function toggleFavorite(id){
        setPhotos(prevPhotos => prevPhotos.map(photo => {
            if(photo.id === id){
                return {...photo, isFavorite : !photo.isFavorite};
            }
            else{
                return photo;
            }
        }))
    }

    function addToCart(img){
        setCartItems(prevCartItems => ([...prevCartItems, img]));
    }

    function removeFromCart(id){
        setCartItems(prevCartItems => prevCartItems.filter(item => (
            item.id !== id
        )));
    }

    return (
        <Context.Provider value={{photos, cartItems, toggleFavorite, addToCart, removeFromCart}}>
            {children}
        </Context.Provider>
    )
}

ContextProvider.propTypes = {
    children: PropTypes
}

export {ContextProvider, Context}