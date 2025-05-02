//陣列

function App(){
    //陣列
    const items1 = ['Apple','Banana','Orange']
    //利用JSX來渲染陣列
    //key是幫助React來識別每個元素的唯一性
    //如果item1有新增東西的話要自己手寫
    const items2 = [
        <li key='1'>Apple</li>,
        <li key='2'>Banana</li>,
        <li key='3'>Orange</li>
    ]
    //使用map來渲染items1,map是遍立每一個item:Apple,index:0...
    //這裡的 .map() 是在遍歷陣列 items1 的每個元素，把每個項目轉換成一個 <li> 元素。
    //第一筆會印出0 0 Apple
    //如果item1修正的話items3會自己修改
    const items3 = items1.map((item, index) =>(
        <li key={index}>{index}-{item}</li>    
    ))

    return(
        <>
            {items1}
            {items2}
            {items3}
        </>
    )
}

{/*{items1} → 直接顯示陣列（會變成 Apple,Banana,Orange 的純文字）

{items2} → 顯示用手寫的 <li> 陣列

{items3} → 顯示用 .map() 渲染出來的 <li> 陣列 */}

export default App; //匯出,main才可以使用