//把App8的內容分成子父組件
//子組件:表頭
function ProductTableHeader(){
    return (
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
    )
}

//子組件:表身 帶入products參數
function ProductTableBody({products}){
    return(
        <tbody>
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
    )
}
//子組件:表尾
function ProductTableFooter({totalPrice}){
    return (
        <tfoot>
            <tr>
                <td colSpan="4" align="right">總計</td>
                <td align="right">{totalPrice}</td>
                <td></td>
            </tr>
        </tfoot>
    )
}
//子組件:主表
function ProductTable({products, totalPrice}){
    return (
        <table border="1">
            <ProductTableHeader />
            <ProductTableBody products={products} />
            <ProductTableFooter totalPrice={totalPrice} />
        </table>
    )
}

//父組件
function App() {
    const products = [
        { id: 1, name: '蘋果', price: 40, category: '水果', qty:2},
        { id: 2, name: '洗髮精', price: 120, category: '日用品', qty:4 },
        { id: 3, name: '香蕉', price: 55, category: '水果', qty:6 },
        { id: 4, name: '牙膏', price: 45, category: '日用品', qty:8 }
    ];

    //計算價格總和,reduce是歸納,sum代表前一次累計的紀錄,會做4次,sum+product.price第一次是40,第二次是40+120
    const totalPrice = products.reduce((sum, product) => sum +product.price*product.qty, 0);

    return(
        <>
            <h1>商品列表</h1>
            <ProductTable products={products} totalPrice={totalPrice} />
        </>
    )
}

export default App