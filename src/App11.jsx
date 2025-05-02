/*
表頭 StudentTableHeader
表身 StudentTablebBody
表尾 StudentTableFooter
主表 StudentTable (組合表頭+表身+表尾)
*/
//子組件:表頭 StudentTableHeader
function StudentTableHeader(){
    return (
        <thead>
                <tr><th>ID</th><th>姓名</th><th>分數</th><th>及格</th></tr>
        </thead>
    )
}

//子組件:表身 StudentTablebBody
function StudentTableBody({students}){
    return(
         <tbody>
                {
                    students.map((student => {
                    const isPass = student.score >= 60;
                    return (
                        <tr key={student.id}> {/*key 是 React 在處理陣列渲染（例如 .map()）時，用來識別 每個元素唯一性 的屬性。 */}
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td align="right">{student.score}</td>
                            <td>{isPass ? "V" : "X"}</td> {/*三元運算子*/}
                        </tr>
                        )
                    }))
                }

        </tbody>
    )
}

//子組件:表尾 StudentTableFooter
function StudentTableFooter({avgScore}){
    return (
        <tfoot>
            <tr>
                <td colspan="2" align="right">平均</td>
                <td align="right">{avgScore.toFixed(1)}</td>
                <td></td>
            </tr>
        </tfoot>
    )
}

//子組件:主表 StudentTable (組合表頭+表身+表尾)
//需要一個「主組件」來組裝這些子組件，就像樂高的總拼圖。
function StudentTable({students, avgScore}){
    return (
        <table border="1">
            <StudentTableHeader/>
            <StudentTableBody students={students}/>
            <StudentTableFooter avgScore={avgScore}/>
        </table>
    )
}

//父組件
function App() {
    const students = [
        {id:1, name:'小明', score:55},
        {id:2, name:'小美', score:78},
        {id:3, name:'小華', score:92},
        {id:4, name:'阿強', score:40},
        {id:5, name:'小甜甜', score:80},
    ];

    // 計算平均 //array.reduce((累加器, 當前值) => {}, 初始值);
    //sum：累加器（上一次的計算結果）
    const avgScore = students.reduce((sum, student) => sum + student.score, 0) / students.length;

    return (
        <>
            <h1>學生成績表</h1>
            <StudentTable students={students} avgScore={avgScore} />
        </>
    )
}

export default App;

