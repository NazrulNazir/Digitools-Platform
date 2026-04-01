import { Suspense, useState } from 'react'
import './App.css'
import ActiveUser from './components/ActiveUser/ActiveUser'
// import Cards from './components/Content/Content'
import HeroArea from './components/HeroArea/HeroArea'
import Navbar from './components/Navbar/Navbar'
import Content from './components/Content/Content'


const userPromise = async()=> {
  const res = await fetch('data.json');
  const data = await res.json();
  return data;
}

function App() {
  const cardPromise = userPromise();

  const [cardLength, setCardLength] = useState(0);

  return (
    <>
      <Navbar cardLength = {cardLength}/>
      <HeroArea/>
      <ActiveUser/>

      <Suspense fallback = {<p>Loading..</p>}>
        <Content cardPromise = {cardPromise} setCardLength = {setCardLength}/>        
      </Suspense>
    </>
  )
}

export default App
