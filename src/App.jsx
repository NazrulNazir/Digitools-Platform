import { Suspense, useState } from 'react'
import './App.css'
import ActiveUser from './components/ActiveUser/ActiveUser'
import HeroArea from './components/HeroArea/HeroArea'
import Navbar from './components/Navbar/Navbar'
import Content from './components/Content/Content'
import Started3Step from './components/Started3Step/Started3Step'
import TransparentPricing from './components/TransparentPricing/TransparentPricing'
import Workflow from './components/Workflow/Workflow'
import Footer from './components/Footer/Footer'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";


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
        <Content cardPromise = {cardPromise} setCardLength = {setCardLength} cardLength = {cardLength}/>        
      </Suspense>
      <Started3Step/>
      <TransparentPricing/>
      <Workflow/>
      <Footer/>
      <ToastContainer 
        position="top-center"
        autoClose={3000}
        theme="light"
      />
    </>
  )
}

export default App
