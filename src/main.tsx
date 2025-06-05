import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import './assets/styles/main.scss';
import './assets/styles/tailwind.css';

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
