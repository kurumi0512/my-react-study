import { useState } from "react";

function Cart() {
  const [productPrice, setProductPrice] = useState('');
  const [productName, setProductName] = useState('');
  const [cartItems, setCartItems] = useState([]); // 用來儲存購物車的商品

  const handleNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setProductPrice(e.target.value);
  };

  const handleCartAdd = () => {
    const newId = cartItems.length > 0 ? Math.max(...cartItems.map(item => item.id)) + 1 : 1;
    const newItem = { id: newId, name: productName, price: productPrice };
    setCartItems([...cartItems, newItem]);
    setProductName('');
    setProductPrice('');
  };

  return (
    <>
      <h1>My Cart</h1>
      <div>
        <input type='text' placeholder="商品名稱" value={productName} onChange={handleNameChange} />
        <input type='text' placeholder="商品價格" value={productPrice} onChange={handlePriceChange} />
        <button onClick={handleCartAdd}>新增商品</button>
      </div>
      <h3>購物車內容</h3>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>{item.name} - ${item.price}</li>
        ))}
      </ul>
    </>
  );
}

export default Cart;