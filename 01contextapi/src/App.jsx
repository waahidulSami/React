
import { useEffect, useState } from 'react'
import './App.css'
import  { ThemeProvider } from './context/theme'
import ThemeBtn from './components/themebtn'
import Card from './components/card'

function App() {
const [ theme, setheme ] = useState("light")

const lightMode = () => {
    setheme("light")
}
const darkMode = () => {
    setheme("dark")
}
useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light')
    document.querySelector('html').classList.add(theme)
   
}
, [theme])
 return (
<ThemeProvider value={{theme,darkMode, lightMode}}>


<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card />
                    </div>
                </div>
            </div>


</ThemeProvider>

 )
}

export default App
