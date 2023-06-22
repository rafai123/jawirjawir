import { useState } from "react"
import ultah from '../assets/ultah.svg'

const Epilepsi = () => {
    const [color, setColor] = useState('')

    // random color
    for (let i = 1; i <= 100; i++) {
        setTimeout(() => {
          setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`)
        }, 100 * i )
    }
    
    return (
        <div style={{backgroundColor: color}} className="mx-auto w-screen h-screen flex justify-center items-center bg-red-300">
            <p className="text-5xl font-bold animate-spin">Selamat <span className="line-through animate-bounce"> Ultah</span> Epilepsi </p>
            <br />
                <img src={ultah} width={250} className="animate-spin" />
            <p className="animate-spin text-8xl">Aaowkoawkoakwoakwaw</p>
            <div>
            </div>
        </div>
    )
}

export default Epilepsi