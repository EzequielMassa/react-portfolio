import { motion } from 'framer-motion'
import { FaAngular, FaGit, FaJava, FaNode } from 'react-icons/fa'
import { RiBootstrapFill, RiReactjsLine } from 'react-icons/ri'
import {
	SiExpress,
	SiJest,
	SiMongodb,
	SiMui,
	SiMysql,
	SiSpring,
	SiTailwindcss,
	SiTypescript,
} from 'react-icons/si'
import { useLenguageContext } from '../context/LanguageContext'

const iconVariants = (duration) => ({
	initial: { y: -10 },
	animate: {
		y: [10, -10],
		transition: {
			duration: duration,
			ease: 'linear',
			repeat: Infinity,
			repeatType: 'reverse',
		},
	},
})

function Technologies() {
	const { language } = useLenguageContext()

	return (
		<div className='border-b border-neutral-800 pb-24'>
			<motion.h2
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -100 }}
				transition={{ duration: 1.5 }}
				className='my-20 text-center text-4xl'>
				{language === 'esp' ? 'Tecnologias' : 'Technologies'}
			</motion.h2>
			<motion.div
				whileInView={{ opacity: 1, x: 0 }}
				initial={{ opacity: 0, x: -100 }}
				transition={{ duration: 1.5 }}
				className='flex flex-wrap items-center justify-center gap-4'>
				<motion.div
					variants={iconVariants(2.5)}
					initial='initial'
					animate='animate'
					className='rounded-2xl border-4 border-neutral-800 p-4 flex flex-col justify-center'>
					<RiReactjsLine className='text-7xl text-cyan-400' />
					<span className='text-center text-sm  text-cyan-400 '>React JS</span>
				</motion.div>
				<motion.div
					variants={iconVariants(3)}
					initial='initial'
					animate='animate'
					className='rounded-2xl border-4 border-neutral-800 p-4 flex flex-col justify-center'>
					<FaNode className='text-7xl text-green-600' />
					<span className='text-center text-sm text-green-600 '>Node JS</span>
				</motion.div>
				<motion.div
					variants={iconVariants(5)}
					initial='initial'
					animate='animate'
					className='rounded-2xl border-4 border-neutral-800 p-4 flex flex-col justify-center'>
					<SiExpress className='text-7xl' />
					<span className='text-center text-sm  '>Express JS</span>
				</motion.div>
				<motion.div
					variants={iconVariants(2)}
					initial='initial'
					animate='animate'
					className='rounded-2xl border-4 border-neutral-800 p-4 flex flex-col justify-center'>
					<SiMongodb className='text-7xl text-green-500' />
					<span className='text-center text-sm  text-green-500'>MongoDB</span>
				</motion.div>
				<motion.div
					variants={iconVariants(6)}
					initial='initial'
					animate='animate'
					className='rounded-2xl border-4 border-neutral-800 p-4 flex flex-col justify-center'>
					<SiTypescript className='text-7xl text-blue-600' />
					<span className='text-center text-sm  text-blue-600'>Typescript</span>
				</motion.div>
				<motion.div
					variants={iconVariants(4)}
					initial='initial'
					animate='animate'
					className='rounded-2xl border-4 border-neutral-800 p-4 flex flex-col justify-center'>
					<FaAngular className='text-7xl text-rose-700' />
					<span className='text-center text-sm  text-rose-700'>Angular</span>
				</motion.div>
				<motion.div
					variants={iconVariants(3)}
					initial='initial'
					animate='animate'
					className='rounded-2xl border-4 border-neutral-800 p-4 flex flex-col justify-center'>
					<FaJava className='text-7xl text-red-600' />
					<span className='text-center text-sm  text-red-600'>Java</span>
				</motion.div>
				<motion.div
					variants={iconVariants(2.5)}
					initial='initial'
					animate='animate'
					className='rounded-2xl border-4 border-neutral-800 p-4 flex flex-col justify-center'>
					<SiSpring className='text-7xl text-lime-600' />
					<span className='text-center text-sm text-lime-600'>Spring Boot</span>
				</motion.div>
				<motion.div
					variants={iconVariants(5)}
					initial='initial'
					animate='animate'
					className='rounded-2xl border-4 border-neutral-800 p-4 flex flex-col justify-center'>
					<SiMysql className='text-7xl text-amber-500' />
					<span className='text-center text-sm  text-amber-500'>Mysql</span>
				</motion.div>
				<motion.div
					variants={iconVariants(4)}
					initial='initial'
					animate='animate'
					className='rounded-2xl border-4 border-neutral-800 p-4 flex flex-col justify-center'>
					<SiJest className='text-7xl text-pink-700' />
					<span className='text-center text-sm text-pink-700'>Jest</span>
				</motion.div>
				<motion.div
					variants={iconVariants(2)}
					initial='initial'
					animate='animate'
					className='rounded-2xl border-4 border-neutral-800 p-4 flex flex-col justify-center'>
					<FaGit className='text-7xl' />
					<span className='text-center text-sm'>Git</span>
				</motion.div>
				<motion.div
					variants={iconVariants(6)}
					initial='initial'
					animate='animate'
					className='rounded-2xl border-4 border-neutral-800 p-4 flex flex-col justify-center'>
					<SiTailwindcss className='text-7xl text-cyan-400' />
					<span className='text-center text-sm text-cyan-400'>Tailwind</span>
				</motion.div>
				<motion.div
					variants={iconVariants(2)}
					initial='initial'
					animate='animate'
					className='rounded-2xl border-4 border-neutral-800 p-4 flex flex-col justify-center'>
					<SiMui className='text-7xl text-blue-600' />
					<span className='text-center text-sm text-blue-600'>Material UI</span>
				</motion.div>
				<motion.div
					variants={iconVariants(4)}
					initial='initial'
					animate='animate'
					className='rounded-2xl border-4 border-neutral-800 p-4 flex flex-col justify-center'>
					<RiBootstrapFill className='text-7xl text-violet-700' />
					<span className='text-center text-sm text-violet-700'>Bootstrap</span>
				</motion.div>
			</motion.div>
		</div>
	)
}
export default Technologies
