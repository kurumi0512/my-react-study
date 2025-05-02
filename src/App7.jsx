// 物件陣列 map, filter 應用
function App() {
    // 物件陣列
    const items = [
        {id:1, name:'Apple', price:20},
        {id:2, name:'Banana', price:30},
        {id:3, name:'Orange', price:40},
    ]

    // 陣列過濾
    /*
    const filterItems = items.filter((item) => {
        return item.price > 25;
    })
    item 是你自己命名的參數名稱，代表 items 陣列中的每一個元素。你完全可以改成其他名稱，只要語意清楚、在函式內一致就好。
    */
    const filterItems = items.filter((item) => item.price > 25)

    // 陣列 map,React 要求每個列表元素要有 key 屬性
    //index 會由 .map() 自動生成，它代表目前元素在陣列中的「索引位置」（從 0 開始）。
    const items2 = filterItems.map((item, index) => (
                <div key={item.id}>
                    index={index}, id={item.id}, name={item.name}, price={item.price}
                </div>
    ))
    
    return (
        <>
            {items2}
            <hr />
            {
                filterItems.map((item, index) => (
                    //把 filterItems（一個陣列）中的每一筆資料都取出來，命名為 item
                    //同時取得它的陣列位置，命名為 index
                    <div key={item.id}>
                        index={index}, id={item.id}, name={item.name}, price={item.price}
                    </div>
                ))
            }
        </>
    )
}

export default App;