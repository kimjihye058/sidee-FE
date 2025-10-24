import { createRoot } from 'react-dom/client'
import './index.css'
import RootRouter from './routers/RootRouter'
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
      <RootRouter/>
  </BrowserRouter>
)
