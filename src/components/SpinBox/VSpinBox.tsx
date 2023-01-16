interface VSpinBoxProps {
  value : number,
  onDecrease : () => void,
  onIncrease : () => void
}


//vac 컴포넌트 생성
const VSpinBox = ({value,onDecrease,onIncrease}:VSpinBoxProps) => {
  return (
    <div>
      <button onClick={onDecrease}>-</button>
      <span>{value}</span>
      <button onClick={onIncrease}>+</button>
    </div>
  )
}

export default VSpinBox;