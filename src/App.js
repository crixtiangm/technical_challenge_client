import './App.css';
import { Route, Routes } from 'react-router-dom'
import { CardPhone } from './components';
import PhoneDetail from './components/PhoneDetail/PhoneDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<CardPhone />} />
        <Route path='/phone/:id' element={<PhoneDetail />} />
      </Routes>
    </div>
  );
}

export default App;
