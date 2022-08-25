import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './component/Header'
import Table from './component/Table'
import Form from './component/Form'


function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Header/>} />
        <Route exact path='/table' element={<Table/>} />
        <Route exact path='/form' element={<Form/>} />
      </Routes>
    </div>
    </Router>
  );
}
export default App;
