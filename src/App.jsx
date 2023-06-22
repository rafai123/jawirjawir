
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';
import ultah from './assets/ultah.svg'
import { useNavigate } from 'react-router-dom';


const App = () => {

  const [like, setLike] = useState("none")
  const [aosLike , setAosLike] = useState(false)
  const [hehe, setHehe] = useState(false)
  const [text1, setText1] = useState(true)
  const [text2, setText2] = useState(false)
  const [bingung, setBingung] = useState(false)
  const [text3, setText3] = useState(false)
  const [text4, setText4] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  // let like = "block"

  useEffect(() => {
    setTimeout(() => {
      setLike("block")
      console.log(like)
    }, 1000);
  }, [like]);

  useEffect(() => {
    setTimeout(() => {
      setAosLike(true)
    }, 1500);
  }, [aosLike]);

  {setTimeout(() => {
    setHehe(true)
  }, 2500)}

  useEffect(() => {
    setTimeout(() => {
      setText1(false)
    }, 3000);
  }, [text1]);

  useEffect(() => {
    setTimeout(() => {
      setText2(true)
    }, 3000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setBingung(true)
    }, 3500);
  }, [bingung]);

  useEffect(() => {
    setTimeout(() => {
      setText3(true)
    }, 5000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setText2(false)
    }, 5000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setText3(false)
    }, 8000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setText4(true)
    }, 8000);
  }, []);

  setTimeout(() => {
    navigate('/epilepsi')
  }, 10000);



  return (
    <>
    {(text1) ?
      <div className="container mx-auto mt-[30vh]">
        <h1 className='text-8xl' data-aos="zoom-in" data-aos-duration="2000">Hi Nurul Ismawati</h1>
        {(aosLike) ? 
        <h6 {...console.log(like)} style={{display: like}} data-aos="fade" data-aos-duration="2000" className='mt-5'>i really like your name btw {(hehe)? ":3" : "" }</h6>
        : <></>}
      </div>
    : <></>}
    {/* End Text 1 */}
    {(text2) ?
    <div className="container mx-auto mt-[30vh]">
      <p className='text-6xl' data-aos="flip-right" data-aos-duration="2000">Selamat Ultah Jawa</p>
      {(bingung) ?
      <h6 data-aos="fade-left" data-aos-duration="2000" className='mt-5'>Ku bingung mau ngetik apa :v</h6>
      : <></>}
    </div>
    : <></>}
    {/* End Text 2 */}
    {(text3) ?
    <div className="container mx-auto mt-[30vh]">
      <p className='text-6xl' data-aos="flip-down" data-aos-duration="2000">Semoga Panjang Umur</p>
      <h6 data-aos="fade-left" data-aos-duration="2000" className='mt-5'>Semoga sehat selalu</h6>
      <h6 data-aos="fade-left" data-aos-duration="2000" className=''>Makan 3 hari sekali sih</h6>
    </div>
      : <></>}
    {/* End Text 3 */}
    {(text4) ?
    <div className="container mx-auto mt-[30vh]">
      <p className='text-6xl' data-aos="zoom-in" data-aos-duration="2000">Sekali lagi Selamat <span className='line-through'>Ultah </span> Epilepsi</p>
      <img src={ultah} width={300} data-aos="fade-left" data-aos-duration="2000" className='mt-5 mx-auto'/>
    </div> 
      : <></>}
    </>
  )
}

export default App