import './App.css'
import Api from './Components/API_Integration/Api'
import ApiRTKQueryWay from './Components/API_Integration/ApiRTKQueryWay'
import CounterComponent from './Components/CounterComponent'
import CounterComponent2 from './Components/CounterComponent2'
import UserForm from './Components/UserForm'

function App() {

  return (
    <>
      {/* ---------------------------- Redux Topics ---------------------------- */}

      {/* A Simple Example of Redux state management with 'counter' example */}
      <CounterComponent/>
      <CounterComponent2/>

      {/* It is a bit complex example of a Redux with user Form handling */}
      <UserForm/>

      {/* ---------------------------- API Integration ---------------------------- */}

      {/* 1. Using old method of API integration i,.e axios library */}
      <Api/>

      {/* 2. Using New method of API integration i,.e Redux RTK Query library */}
      <ApiRTKQueryWay/>
      
    </>
  )
}

export default App
