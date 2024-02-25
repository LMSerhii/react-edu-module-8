import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import NotFound from '../pages/NotFound';
// import Login from '../pages/Login';
// import Register from '../pages/Register';

const HomePage = lazy(() => import('../pages/Home'));

export default function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchTasks());
  // }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        {/* <Route path="" element={<Login />} /> */}
        {/* <Route path="" element={<Register />} /> */}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
