import { createBrowserRouter } from 'react-router-dom';
import { paths } from './paths';
import Home from '../pages/Home';

export const router = createBrowserRouter([
    {
        path: paths.home,
        element: <Home />,
    }
]);
