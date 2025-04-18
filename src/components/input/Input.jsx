import './Input.css';

export default function Input({title}){
  return (
    <div className='main-input-container'>
      <label className="label-style">{title}</label>
      <input className="input-style" type="text" placeholder="Type your input here"/>
    </div>
  )
}