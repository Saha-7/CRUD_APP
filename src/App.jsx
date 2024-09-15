import bg5 from './assets/bg5.jpg'
import Card from './components/Card'


function App() {
  
  return (
    <>
      <div className='w-full h-screen' 
        style={{backgroundImage: `url(${bg5})`}}>
        <div className='mx-auto flex justify-center items-center h-screen'>
          <Card />
        </div>
      </div>
    </>
  )
}

export default App
