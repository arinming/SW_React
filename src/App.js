import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { RecoilRoot } from 'recoil';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Convert from './pages/Convert';
import SheetList from './pages/SheetList';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/convert' element={<Convert />} /> 
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sheet-list' element={<SheetList />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
