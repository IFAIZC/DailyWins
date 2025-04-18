import './Input.css';

export default function Input({ title, value, onChange }) {
  return (
    <div className="main-input-container">
      <label className="label-style">{title}</label>
      <input
        className="input-style"
        type="text"
        placeholder="Type your input here"
        value={value}
        onChange={onChange} 
      />
    </div>
  );
}