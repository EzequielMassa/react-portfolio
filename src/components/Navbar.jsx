import { FaGithub, FaLinkedin } from 'react-icons/fa'
import logo from '../assets/EMdev.png'
function Navbar() {
	return (
		<nav className=' flex items-center justify-between '>
			<div className='flex flex-shrink-0 items-center'>
				<img src={logo} alt='logo' className='mx-2 w-24' />
			</div>
			<div className='m-4 flex items-center justify-center gap-4 text-2xl'>
				<a
					href='https://www.linkedin.com/in/ezequiel-massa-dev/'
					target='_blank'>
					<FaLinkedin className='hover:text-teal-300' />
				</a>
				<a href='https://github.com/EzequielMassa' target='_blank'>
					<FaGithub className='hover:text-teal-300' />
				</a>
			</div>
		</nav>
	)
}
export default Navbar
