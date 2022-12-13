import { createContext, useContext, useState } from "react";
import { ShoppingCart } from "../components/Shoppingcart";

export const ShoppingCartContext = createContext({});

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])

    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity, 0
    )
    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)

    function getItemQuantity(id) {
        return (
            cartItems.find(item => item.id === id)?.quantity || 0
        )
    }
    function increaseCartQuantity(id) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id) == null) {
                return [...currItems, { id, quantity: 1 }]
            }
            else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
        return (
            cartItems.find(item => item.id === id)?.quantity || 0
        )
    }
    function decreaseCartQuantity(id) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id)?.quantity === 1) {
                return currItems.filter(item => item.id !== id)
            }
            else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
        return (
            cartItems.find(item => item.id === id)?.quantity || 0
        )
    }
    function removeFromCart(id) {
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }


    {/*Phần Phương */ }
    const [userData, setUserData] = useState([
        {
            name: 'Quốc',
            password: '123456',
            email: 'quoc@gmail.com',
            tel: '0912345678'
        },
        {
            name: 'Linh',
            password: '123456',
            email: 'linh@gmail.com',
            tel: '0912345679'
        },
        {
            name: 'Phương',
            password: '123456',
            email: 'phuong@gmail.com',
            tel: '0912345680'
        }
    ])
    const [userLogin, setUserLogin] = useState()

    const value = {
        userData,
        setUserData,
        userLogin,
        setUserLogin

    }

    return (
        <ShoppingCartContext.Provider value={{
            getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart,
            openCart, closeCart, cartItems, cartQuantity, value
        }}>
            {children}
            <ShoppingCart isOpen={isOpen} />
        </ShoppingCartContext.Provider>

    )
};


export default ShoppingCartProvider;
