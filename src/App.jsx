import { useState } from 'react';
import './App.css';
import Greet from './components/greet/Greet';
import Input from './components/input/Input';
import Button from './components/button/Button';
import { Routes, Route, Link } from 'react-router-dom';
import ViewLogs from './pages/ViewLogs';

function App() {
  const [firstQ, setFirstQ] = useState('');
  const [secondQ, setSecondQ] = useState('');
  const [thirdQ, setThirdQ] = useState('');
  const [viewLog, setViewLog] = useState(false);

  function toggleButton() {
    setViewLog((log) => !log); // Toggle the current state
  }

  function handleLog(e) {
    e.preventDefault();
    console.log('One Thing I Learned:', firstQ);
    console.log('One Win:', secondQ);
    console.log('One Thing To Improve:', thirdQ);
    setFirstQ("");
    setSecondQ("");
    setThirdQ("");
  };

  return (
    <>
      <div className='navbar'>
        <p className="dailywins">DailyWins</p>
        <Link to={viewLog ? "/" : "/ViewLogs"} className="view-logs">
          <Button onClick={toggleButton}>{viewLog ? "Home" : "View Logs"}</Button>
        </Link>
      </div>

      <Routes>
        <Route path="/" element={
          <>
            <Greet name="IRFAN" />
            <form onSubmit={handleLog}>
              <div className="input-container">
                <Input
                  title="One Thing I Learned"
                  value={firstQ}
                  onChange={(e) => setFirstQ(e.target.value)}
                />
                <Input
                  title="One Win"
                  value={secondQ}
                  onChange={(e) => setSecondQ(e.target.value)}
                />
                <Input
                  title="One Thing To Improve"
                  value={thirdQ}
                  onChange={(e) => setThirdQ(e.target.value)}
                />
                <Button type="submit">Log</Button>
              </div>
            </form>
          </>
        } />
        <Route path="/ViewLogs" element={<ViewLogs />} />
      </Routes>
    </>
  );
}

export default App;
