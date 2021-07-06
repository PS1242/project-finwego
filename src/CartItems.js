import React from "react";

function CartItems({ data, setCartCount, setRenderCart, setCartItems }) {
  function goBack() {
    setRenderCart(false);
  }

  function incrementItem(item) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].obj.id === item.obj.id) {
        data[i].obj.quantity++;
        data[i].obj.totalPrice += item.obj.price;
        setCartItems((prev) => [...prev]);
        break;
      }
    }
  }

  function decrementItem(item) {
    setCartCount((prev) => prev - 1);
    if (item.obj.quantity === 1) {
      let arr = data.filter(
        (i) => i.obj.quantity > 0 && i.obj.id !== item.obj.id
      );
      setCartItems(arr);
      return;
    }
    for (let i = 0; i < data.length; i++) {
      if (data[i].obj.id === item.obj.id) {
        data[i].obj.totalPrice -= item.obj.price;
        data[i].obj.quantity--;
        setCartItems((prev) => [...prev]);
        break;
      }
    }
  }

  return (
    <>
      <button type="button" onClick={goBack}>
        Back
      </button>
      {data.map((item) => {
        return (
          <div key={item.obj.id}>
            <h5>{item.obj.title}</h5>
            <p>{item.obj.totalPrice}</p>
            <p>quantity : {item.obj.quantity}</p>
            <button type="button" onClick={() => incrementItem(item)}>
              +
            </button>
            <button type="button" onClick={() => decrementItem(item)}>
              -
            </button>
          </div>
        );
      })}
    </>
  );
}

export default CartItems;
