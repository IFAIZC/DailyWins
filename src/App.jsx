import './App.css'
import Greet from './components/greet/Greet'
import Input from './components/input/Input'
import Button from './components/button/Button'

function App() {

  return (
    <>
      <p className='dailywins'>DailyWins</p>
      <Greet name="IRFAN"/>

      <div className='input-container'>
        <Input title="One Thing I Learned"/>
        <Input title="One Win"/>
        <Input title="One Thing To Improve"/>
        <Button title="Log"/>
      </div>
    </>
  )
}

export default App
