import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
 function Home() {
  return (
    <div className='flex flex-col items-center gap-4'>
      <h1 className="text-center text-4xl md:text-6xl font-black tracking-tight max-w-4xl leading-tight mt-10 text-pink-500 drop-shadow-md [text-shadow:0_4px_12px_rgba(59,130,246,0.8)]">

                HOME</h1>
      <Link
        to="/sobre"
        className="px-5 py-2 bg-gradient-to-tr from-pink-500 to-purple-900 text-white rounded-lg shadow-lg shadow-blue-500/40 transition-all duration-300 hover:scale-105 hover:shadow-xl"
      >
        Ir para Sobre
      </Link>
    </div>
  )
}

function Sobre() {
  return (
    <div className='flex flex-col items-center gap-4'>
    <h1 className="text-center text-4xl md:text-6xl font-black tracking-tight max-w-4xl leading-tight mt-10 text-pink-500 drop-shadow-md [text-shadow:0_4px_12px_rgba(59,130,246,0.8)]">
                Espaço Sobre </h1>
      <Link to="/" className='px-5 py-2 bg-gradient-to-tr from-pink-500 to-purple-900 text-white rounded-lg shadow-lg shadow-blue-500/40 transition-all duration-300 hover:scale-105 hover:shadow-xl'>Voltar</Link>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  )
}