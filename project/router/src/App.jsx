import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/ThemeBtn'
import ThemeBtn from './components/Card'
import { ThemeProvider } from './context/theme'
ThemeProvider
function App() {
  const [themeMode, setThemeMode] = useState("light")
  function lightTheme(){
    setThemeMode("light")
  }
  function darkTheme(){
    setThemeMode("dark")
  }
  useEffect(()=>{
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])
  return (
    
   < ThemeProvider  value={{themeMode,lightTheme,darkTheme}}> 
   <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                      <Card/> 
                    </div>
                </div>
            </div>
            </ ThemeProvider > 
   
  )
}

export default App
