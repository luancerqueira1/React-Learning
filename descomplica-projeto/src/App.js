
import {
   BrowserRouter,
   Route,
   Routes,
} from 'react-router-dom';
import { HomePage } from './pages/Home/HomePage';
import { MinhasPastasPage } from './pages/MinhasPastas/MInhasPastasPage';
import { HeaderPartial } from './Partials/HeaderPartial/HeaderPartial';
import { saveFolder , savePinInFolder} from './services/PinService';

function App() {
   // saveFolder('luan');
   savePinInFolder('2345-554','luan')
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
   )
};

export default App;
