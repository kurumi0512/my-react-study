/*
{id:1, name:'小明', score:55},
{id:2, name:'小美', score:78},
{id:3, name:'小華', score:92},
{id:4, name:'阿強', score:40},

顯示 table 樣式
id | name | score | pass
 1   小明    55      X 
 2   小美    78      V 
 3   小華    92      V 
 4   阿強    40      X 
全班平均: XX

試著拆分父子組件
*/

function App() {
    const students = [
        {id:1, name:'小明', score:55},
        {id:2, name:'小美', score:78},
        {id:3, name:'小華', score:92},
        {id:4, name:'阿強', score:40},
    ];

    // 計算平均
    //array.reduce((累加器, 當前值) => {}, 初始值);
    //sum：累加器（上一次的計算結果）
    //reduce() 是 JavaScript 陣列（Array）的方法之一，它會對陣列中的每一個元素執行一個指定的「累加」或「歸納」操作，並最終返回一個單一的結果。
    const avgScore = students.reduce((sum, student) => sum + student.score, 0) / students.length;

    return (
        //<></> 是 React 的 Fragment 簡寫，作用是讓你可以包裹多個元素，保證返回一個父元素而不會在 DOM 中額外創建節點。
        <>
            <h1>學生成績表</h1>
            <table border="1">
                <thead>
                    <tr><th>ID</th><th>姓名</th><th>分數</th><th>及格</th></tr>
                </thead>
                <tbody>
                    {/*key 是 React 在處理陣列渲染（例如 .map()）時，用來識別 每個元素唯一性 的屬性。 */}
                    {
                        students.map((student => {
                            const isPass = student.score >= 60;
                            return (
                                <tr key={student.id}>
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td align="right">{student.score}</td>
                                    <td>{isPass ? "V" : "X"}</td>
                                </tr>
                            )
                        }))
                    }

                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="2" align="right">平均</td>
                        <td align="right">{avgScore.toFixed(1)}</td> {/*計算到小數點1位 */}
                        <td></td>
                    </tr>
                </tfoot>
            </table>
        </>
    )
}

export default App;
//將這個 App 組件「匯出（export）」，讓其他地方可以使用它（例如在 main.jsx 裡匯入使用）。

