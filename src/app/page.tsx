import StatusLabel, { Status } from './components/status-label';

const Home = () => {
  return (
    <main>
      <h1 className='text-xl font-bold underline'>Home page</h1>
      <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>Not Active</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
    </main>
  );
};

export default Home;
