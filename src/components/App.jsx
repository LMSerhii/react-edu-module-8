import { useEffect } from 'react';
import Layout from './Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../redux/operations';
import AppBar from './AppBar/AppBar';
import TaskForm from './TaskForm/TaskForm';
import TaskList from './TaskList/TaskList';
import { getError, getisLoading } from '../redux/selectors';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getisLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <Layout>
      <AppBar />
      <TaskForm />
      {isLoading && !error && <p>Request in progress...</p>}
      <TaskList />
    </Layout>
  );
}
