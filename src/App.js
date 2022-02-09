import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Details } from './pages/Details';
import { HomePage } from './pages/HomePage';
import { NotFound } from './pages/NotFound';

const App = () => {

  const [countries, setCountries] = useState([]);

  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
          <Route exact path='/' element={<HomePage countries={countries} setCountries={setCountries} />} />
          <Route path='/country/:name' element={<Details />} />
          <Route element={<NotFound />} />
        </Routes>
      </Main>
    </BrowserRouter>
  );
};

export default App;
