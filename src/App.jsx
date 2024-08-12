import './App.css'
import CounterComponent from './Components/CounterComponent'
import CounterComponent2 from './Components/CounterComponent2'
import UserForm from './Components/UserForm'

function App() {

  return (
    <>
      {/* A Simple Example of Redux state management with 'counter' example */}
      <CounterComponent/>
      <CounterComponent2/>

      {/* It is a bit complex example of a Redux with user Form handling */}
      <UserForm/>

    </>
  )
}

export default App
