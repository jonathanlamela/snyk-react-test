
import './App.css'

function App() {

  const rawHtml = '<h1 onClick="alert(\'XSS Attack!\')">Hello, World!</h1>';
  return (
    <>
      <span dangerouslySetInnerHTML={{ __html: rawHtml }}></span>
    </>
  )
}

export default App
