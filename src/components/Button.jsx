function Button(props) {
  return (
    <div className="btn-container">
      <button onClick={props.action} className="btn-dl">
        {props.label}
      </button>
    </div>
  )
}

export default Button