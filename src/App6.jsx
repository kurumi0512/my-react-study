//陣列

function App(){
    //陣列
    const items1 = ['Apple','Banana','Orange']
    //利用JSX來渲染陣列
    //key是幫助React來識別每個元素的唯一性
    const items2 = [
        <li key='1'>Apple</li>,
        <li key='2'>Banana</li>,
        <li key='3'>Orange</li>
    ]
    //使用map來渲染items1
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

export default App;