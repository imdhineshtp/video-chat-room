import { Navigate, useRoutes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import BoomRoom from './Pages/BoomRoom';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <LandingPage />,
    },
    {
      path: '/boom-room',
      children: [{ path: ':room_id', element: <BoomRoom /> }],
    },
    { path: '*', element: <Navigate to='/' replace /> },
  ]);
}
