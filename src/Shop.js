import React, { useState } from "react";
import { shopData } from "./ecommerce.js";
import CartItems from "./CartItems.js";

function Shop() {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [renderCart, setRenderCart] = useState(false);

  function addItemToCart(item) {
    let flag = 0;

    setCartCount((prev) => prev + 1);

    let obj = {
      id: item.id,
      title: item.title,
      price: item.price,
      totalPrice: item.price,
      quantity: 1,
    };

    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].obj.id === item.id) {
        cartItems[i].obj.quantity++;
        cartItems[i].obj.totalPrice += cartItems[i].obj.price;
        setCartItems((prev) => [...prev]);
        flag = 1;
        break;
      }
    }
    if (flag === 0) setCartItems((prev) => [...prev, { obj }]);
  }

  return (
    <>
      {renderCart ? (
        <CartItems
          data={cartItems}
          setRenderCart={setRenderCart}
          setCartItems={setCartItems}
          setCartCount={setCartCount}
        />
      ) : (
        <div>
          <h3 onClick={() => setRenderCart(true)}>Cart : {cartCount}</h3>

          {shopData.map((item) => {
            return (
              <div
                onClick={() => addItemToCart(item)}
                className="shop-item-image"
                key={item.id}
              >
                <img src={item.image} alt="item"></img>
                <h3>{item.title}</h3>
                <p>Price {item.price}</p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default Shop;
