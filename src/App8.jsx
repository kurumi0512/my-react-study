/*
商品資料如下:
{ id: 1, name: '蘋果', price: 40, category: '水果' },
{ id: 2, name: '洗髮精', price: 120, category: '日用品' },
{ id: 3, name: '香蕉', price: 55, category: '水果' },
{ id: 4, name: '牙膏', price: 45, category: '日用品' }
請利用 react 將上述商品資料透過 jsx + <table> 標籤呈現
*/

function App() {
    // 物件陣列
    const products = [
        { id: 1, name: '蘋果', price: 40, category: '水果', qty:2},
        { id: 2, name: '洗髮精', price: 120, category: '日用品', qty:4 },
        { id: 3, name: '香蕉', price: 55, category: '水果', qty:6 },
        { id: 4, name: '牙膏', price: 45, category: '日用品', qty:8 }
    ];

    //計算價格總和,reduce是歸納,sum代表前一次累計的紀錄,會做4次,sum+product.price第一次是40,第二次是40+120
    //array.reduce((累加器, 當前值) => {}, 初始值);
    //sum：累加器（上一次的計算結果）
    //product 是什麼？ 它是 products 陣列中「目前正在處理的那個物件」。
    //第一次	{ id: 1, name: '蘋果', ... }
    //這個 product 只是你自己幫「目前那一筆資料」取的參數名稱。

    const totalPrice = products.reduce((sum, product) => sum +product.price*product.qty, 0);
    return (
       <>
        <h1>商品列表</h1>
       <table border= "1">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>商品名稱</th>
                    <th>價格</th>
                    <th>數量</th>
                    <th>小計</th>
                    <th>類別</th>
                </tr>
            </thead>
            <tbody>
                {/*把 products 裡的每一個元素，逐一拿出來當作 product 使用一次。 
                在 map() 函數裡，(product) 是對 products 陣列中每一個元素的暫時命名
                product 是 map() 方法自動給定的每一個商品物件。
                你使用 product.id 來渲染每一筆資料的 ID，product.name 渲染商品名稱，以此類推。*/}
                {
                    products.map((product)=> {
                        const subtotal = product.price * product.qty;
                        return (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td align="right">{product.price}</td>
                                <td align="right">{product.qty}</td>
                                <td align="right">{subtotal}</td>
                                <td>{product.category}</td>
                            </tr>
                        );
                    })
                }

            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="4" align="right">總計</td>
                    <td align="right">{totalPrice}</td>
                    <td></td>
                </tr>
            </tfoot>
        </table>
        </>
    )
}

export default App;