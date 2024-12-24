
const Square = (props) => {
  return (
    <div onClick={props.onClick} className='square border-slate-50 border p-10 h-[100px] flex items-center justify-center text-center'>
        <h5>{props.value}</h5>
    </div>
  )
}

export default Square