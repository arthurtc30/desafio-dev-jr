import './App.css';
import Header from './components/Header';
import Content from './components/Content';

function App() {
  return (
    <div className='content'>
      <Header>
        Task Planner
      </Header>
      <Content />
    </div>
  );
}

export default App;
