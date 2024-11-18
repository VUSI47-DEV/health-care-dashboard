import './App.css'
import DiagnosisHistory from './components/DiagnosisHistory'
import Header from './components/Header'
import Patients from './components/Patients'
import UserSideInformation from './components/UserSideInformation'

function App() {

  return (
    <div className='main-container'>
      <Header/>
      <div className="" style={{padding:"20rem"}}>
        <Patients/>
        <div className="" style={{display:'flex' ,gap:'2rem',marginTop:'2rem'}}>
          <DiagnosisHistory/>
          <UserSideInformation/>
        </div>
      </div>
    </div>
  )
}

export default App
