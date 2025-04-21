import { useState, useEffect } from 'react';
import './App.css';
import Greet from './components/greet/Greet';
import Input from './components/input/Input';
import Button from './components/button/Button';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import ViewLogs from './pages/ViewLogs';
import Login from './pages/Login';
import supabase from './config/supabaseClient';

function App() {
  const [firstQ, setFirstQ] = useState('');
  const [secondQ, setSecondQ] = useState('');
  const [thirdQ, setThirdQ] = useState('');
  const [viewLog, setViewLog] = useState(false);


  // TO STUDY AGAIN!
  // React Router
  const location = useLocation(); // Get the current route

  // Update the viewLog state based on the current route
  useEffect(() => {
    if (location.pathname === '/ViewLogs') {
      setViewLog(true);
    } else {
      setViewLog(false);
    }
  }, [location.pathname]); // Runs whenever the route changes
  // React Router


  // pushing the input to supabase
  async function handleLog(e) {
    e.preventDefault();

    if (!firstQ || !secondQ || !thirdQ) {
      alert('Please fill out all fields before submitting.');
      return;
    }

    const logData = {
      learned: firstQ,
      win: secondQ,
      improve: thirdQ,
    };

    try {
      const { data, error } = await supabase
        .from('daily_logs')
        .insert([logData]);

      if (error) {
        console.error('Error inserting data:', error.message);
      } else {
        console.log('Data inserted successfully:', data);
        setFirstQ('');
        setSecondQ('');
        setThirdQ('');
        alert('You have successfully logged your wins!');
      }
    } catch (error) {
      console.error('Unexpected error:', error);
    }
  }

  return (
    <>
      <div className="navbar">
        <p className="dailywins">DailyWins</p>
        <Link to={viewLog ? '/' : '/ViewLogs'} className="view-logs">
          <Button onClick={() => setViewLog(!viewLog)}>
            {viewLog ? 'Home' : 'View Logs'}
          </Button>
        </Link>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Greet />
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
          }
        />
        <Route path="/ViewLogs" element={<ViewLogs />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
