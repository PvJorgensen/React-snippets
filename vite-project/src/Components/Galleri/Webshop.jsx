import React, { useState } from 'react';
import styles from './Galleri.module.scss';

export const Galleri = () => {
    const uniqueProducts = [
        { name: 'Coca-Cola', price: 100 },
        { name: 'Pepsi', price: 200 },
        { name: 'Fanta', price: 300 },
        { name: 'Sprite', price: 400 },
        { name: 'Faxe-Kondi', price: 500 },
        { name: 'Redbull', price: 600 },
        { name: 'Pepsi-Max', price: 700 },
        { name: 'Cocio', price: 800 },
        { name: 'Saftevand', price: 900 },
        { name: 'Juice', price: 1000 }
    ];

    const [cart, setCart] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [cartOpen, setCartOpen] = useState(false);

    const addToCart = (item) => {
        const existingItem = cart.find(cartItem => cartItem.name === item.name);
        if (existingItem) {
            const updatedCart = cart.map(cartItem => {
                if (cartItem.name === item.name) {
                    return { ...cartItem, quantity: cartItem.quantity + 1 };
                }
                return cartItem;
            });
            setCart(updatedCart);
        } else {
            const updatedCart = [...cart, { ...item, quantity: 1 }];
            setCart(updatedCart);
        }
        const updatedTotalAmount = totalAmount + item.price;
        setTotalAmount(updatedTotalAmount);
    };

    const removeFromCart = (item) => {
        const updatedCart = cart.map(cartItem => {
            if (cartItem.name === item.name && cartItem.quantity > 1) {
                return { ...cartItem, quantity: cartItem.quantity - 1 };
            }
            return cartItem;
        }).filter(cartItem => cartItem.quantity >= 1); // Filter out items with quantity less than 1
        setCart(updatedCart);
        const updatedTotalAmount = totalAmount - (item.price * item.quantity);
        setTotalAmount(updatedTotalAmount);
    };

    const increaseQuantity = (item) => {
        const updatedCart = cart.map(cartItem => {
            if (cartItem.name === item.name) {
                return { ...cartItem, quantity: cartItem.quantity + 1 };
            }
            return cartItem;
        });
        setCart(updatedCart);
        const updatedTotalAmount = totalAmount + item.price;
        setTotalAmount(updatedTotalAmount);
    };

    const toggleCart = () => {
        setCartOpen(!cartOpen);
    };

    return (
        <div className={styles.webshopContainer}>
            <button onClick={toggleCart} className={styles.cartToggleBtn}>
                Cart ({cart.reduce((acc, curr) => acc + curr.quantity, 0)})
            </button>
            {cartOpen && (
                <div className={styles.cartModal}>
                    <h2>Cart</h2>
                    <div className={styles.cartItems}>
                        {cart.map((item, index) => (
                            <div key={index} className={styles.cartItem}>
                                <p>{item.name} {item.quantity > 1 && `(x${item.quantity})`}</p>
                                <p>${item.price * item.quantity}</p>
                                <button onClick={() => removeFromCart(item)}>-</button>
                                <button onClick={() => increaseQuantity(item)}>+</button>
                            </div>
                        ))}
                    </div>
                    <p>Total Items: {cart.reduce((acc, curr) => acc + curr.quantity, 0)}</p>
                    <p>Total Amount: ${totalAmount}</p>
                </div>
            )}
            <div className={styles.products}>
                {/* Product list */}
                {uniqueProducts.map((product, index) => (
                    <div key={index} className={styles.product}>
                        <h2>{product.name}</h2>
                        <p>Price: ${product.price}</p>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};
