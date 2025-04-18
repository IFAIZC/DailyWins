import './Button.css';

export default function Button({title, ...props}) {
  return (
    <button {...props} className="button-style">{title}</button>
  )
}