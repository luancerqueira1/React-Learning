
import {
   BrowserRouter,
   Route,
   Routes,
} from 'react-router-dom';
import { HomePage } from './pages/Home/HomePage';
import { MinhasPastasPage } from './pages/MinhasPastas/MInhasPastasPage';
import { HeaderPartial } from './Partials/HeaderPartial/HeaderPartial';
import { AppContext } from './store/AppContext';

const inicialState = {
   activePinId: null,
   mode: null,
   folders: [],
   type: null,
   pins:[]
};

function App() {

   return (
      <BrowserRouter>
         <div className='App'>
            <AppContext inicialState={inicialState}>
               <HeaderPartial />
               <Routes>
                  <Route path='/' element={<HomePage />} />
                  <Route path='/minhas-pastas' element={<MinhasPastasPage />} />
               </Routes>
            </AppContext>
         </div>
      </BrowserRouter>
   );
};

export default App;
