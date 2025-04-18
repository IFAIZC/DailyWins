import './App.css'
import Greet from './components/greet/Greet'
import Input from './components/input/Input'
import Button from './components/button/Button'

function App() {

  return (
    <>
      <p>DailyWins</p>
      <Greet name="Irfan"/>
      <Input title="One Thing I Learned"/>
      <Input title="One Win"/>
      <Input title="One Thing To "/>
      <Button title="Log"/>
    </>
  )
}

export default App
