import { Route, Routes } from 'react-router-dom';
import App from './App';


function Rotas() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<App/>}/>
      </Routes>
    </div>
  );
}

export default Rotas;
