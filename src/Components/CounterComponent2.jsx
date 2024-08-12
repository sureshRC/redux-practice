import { useSelector } from 'react-redux'

const CounterComponent2 = () => {

    const count=useSelector((state)=>{
        return state.counter.count;
    });

  return (
    <div>
        <h3>{count}</h3>
    </div>
  )
}

export default CounterComponent2