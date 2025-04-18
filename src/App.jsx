import { useState } from 'react';
import './App.css';
import Greet from './components/greet/Greet';
import Input from './components/input/Input';
import Button from './components/button/Button';

function App() {
  const [firstQ, setFirstQ] = useState('');
  const [secondQ, setSecondQ] = useState('');
  const [thirdQ, setThirdQ] = useState('');

  const handleLog = () => {
    console.log('One Thing I Learned:', firstQ);
    console.log('One Win:', secondQ);
    console.log('One Thing To Improve:', thirdQ);
    setFirstQ("")
    setSecondQ("")
    setThirdQ("")
  };

  return (
    <>
      <p className="dailywins">DailyWins</p>
      <Greet name="IRFAN" />

      <div className="input-container">
        <Input
          title="One Thing I Learned"
          value={firstQ}
          onChange={(e) => setFirstQ(e.target.value)} // Update firstQ
        />
        <Input
          title="One Win"
          value={secondQ}
          onChange={(e) => setSecondQ(e.target.value)} // Update secondQ
        />
        <Input
          title="One Thing To Improve"
          value={thirdQ}
          onChange={(e) => setThirdQ(e.target.value)} // Update thirdQ
        />
        <Button title="Log" onClick={handleLog} />
      </div>
    </>
  );
}

export default App;
