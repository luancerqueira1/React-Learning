
import {
   BrowserRouter,
   Route,
   Routes,
} from 'react-router-dom';
import { saveFolder } from './services/PinService';
import { HomePage } from './pages/Home/HomePage';
import { MinhasPastasPage } from './pages/MinhasPastas/MInhasPastasPage';
import { HeaderPartial } from './Partials/HeaderPartial/HeaderPartial';

function App() {
   saveFolder('luan');
   return (
      <BrowserRouter>
         <div className='App'>
            <HeaderPartial />
            <Routes>
               <Route path='/' element={<HomePage />} />
               <Route path='/minhas-pastas' element={<MinhasPastasPage/>} />
            </Routes>
         </div>
      </BrowserRouter>
   );
}

export default App;
