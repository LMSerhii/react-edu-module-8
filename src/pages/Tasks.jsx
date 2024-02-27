import { useDispatch, useSelector } from 'react-redux';
import { selectLoading } from '../redux/selectors';
import TaskList from '../components/TaskList/TaskList';
import { useEffect } from 'react';
import { fetchTasks } from '../redux/operations';
import TaskEditor from '../components/TaskEditor/TaskEditor';
import { Helmet } from 'react-helmet-async';

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your tasks</title>
      </Helmet>
      <TaskEditor />
      <div>{isLoading && 'Request in progress...'}</div>
      <TaskList />
    </>
  );
}
