import { Toaster } from 'sonner'
import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Hero from './components/Hero'
import LanguageSelector from './components/LanguageSelector'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Technologies from './components/Technologies'

function App() {
	return (
		<div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
			<Toaster richColors position='bottom-center' />
			<div className='absolute top-32 md:top-40 right-10 z-10'>
				<LanguageSelector />
			</div>
			<div className='fixed top-0 -z-10 h-full w-full'>
				<div className='absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'></div>
			</div>

			<div className='container mx-auto px-8'>
				<Navbar />
				<Hero />
				<About />
				<Technologies />
				<Education />
				<Projects />
				<Contact />
			</div>
		</div>
	)
}

export default App
