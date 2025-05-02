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
    // 物件陣列
    const students = [
        {id:1, name:'小明', score:55},
        {id:2, name:'小美', score:78},
        {id:3, name:'小華', score:92},
        {id:4, name:'阿強', score:40},
    ];

    //計算平均分數
    const AverageScore = students.reduce((score, students) => sum +product.price*product.qty, 0);
    return (
       <>
        <h1>學生列表</h1>
       <table border= "1">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Score</th>
                    <th>Pass</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map((students)=> {
                        return (
                            <tr key={students.id}>
                                <td>{students.id}</td>
                                <td>{students.name}</td>
                                <td align="right">{students.score}</td>
                                <td align="right">{students.pass}</td>
                            </tr>
                        );
                    })
                }

            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="4" align="right">全班平均</td>
                    <td align="right">{AverageScore}</td>
                    <td></td>
                </tr>
            </tfoot>
        </table>
        </>
    )
}

export default App;

