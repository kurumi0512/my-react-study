//JSX = javascript +HTML
//App() 表示是一個react組件,字首字母要大寫
//所有自訂的 React 組件名字都要「字母開頭大寫」，否則 React 會把它當成 HTML 標籤處理。

function App() {
    return (
        <div>
            <h1>Hello React</h1>
            <h2>micro-service</h2>
        </div>
    );
}

export default App;
//將這個 App 組件「匯出（export）」，讓其他地方可以使用它（例如在 main.jsx 裡匯入使用）。
