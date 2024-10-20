import './App.css'
import Inbox from './components/Inbox'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='bg-[#f6f8fc]'>
      <Navbar/> 

      <div className='flex'>
        <Sidebar/>
        <Inbox/>
      </div>

    </div>
  )
}

export default App
