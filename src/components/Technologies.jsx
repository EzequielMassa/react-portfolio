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
					className='rounded-2xl border-4 border-neutral-800 p-4'>
					<RiReactjsLine className='text-7xl text-cyan-400' />
				</motion.div>
				<motion.div
					variants={iconVariants(3)}
					initial='initial'
					animate='animate'
					className='rounded-2xl border-4 border-neutral-800 p-4'>
					<FaNode className='text-7xl text-green-600' />
				</motion.div>
				<motion.div
					variants={iconVariants(5)}
					initial='initial'
					animate='animate'
					className='rounded-2xl border-4 border-neutral-800 p-4'>
					<SiExpress className='text-7xl' />
				</motion.div>
				<motion.div
					variants={iconVariants(2)}
					initial='initial'
					animate='animate'
					className='rounded-2xl border-4 border-neutral-800 p-4'>
					<SiMongodb className='text-7xl text-green-500' />
				</motion.div>
				<motion.div
					variants={iconVariants(6)}
					initial='initial'
					animate='animate'
					className='rounded-2xl border-4 border-neutral-800 p-4'>
					<SiTypescript className='text-7xl text-blue-600' />
				</motion.div>
				<motion.div
					variants={iconVariants(4)}
					initial='initial'
					animate='animate'
					className='rounded-2xl border-4 border-neutral-800 p-4'>
					<FaAngular className='text-7xl text-rose-700' />
				</motion.div>
				<motion.div
					variants={iconVariants(3)}
					initial='initial'
					animate='animate'
					className='rounded-2xl border-4 border-neutral-800 p-4'>
					<FaJava className='text-7xl text-red-600' />
				</motion.div>
				<motion.div
					variants={iconVariants(2.5)}
					initial='initial'
					animate='animate'
					className='rounded-2xl border-4 border-neutral-800 p-4'>
					<SiSpring className='text-7xl text-lime-600' />
				</motion.div>
				<motion.div
					variants={iconVariants(5)}
					initial='initial'
					animate='animate'
					className='rounded-2xl border-4 border-neutral-800 p-4'>
					<SiMysql className='text-7xl text-amber-500' />
				</motion.div>
				<motion.div
					variants={iconVariants(4)}
					initial='initial'
					animate='animate'
					className='rounded-2xl border-4 border-neutral-800 p-4'>
					<SiJest className='text-7xl text-pink-700' />
				</motion.div>
				<motion.div
					variants={iconVariants(2)}
					initial='initial'
					animate='animate'
					className='rounded-2xl border-4 border-neutral-800 p-4'>
					<FaGit className='text-7xl' />
				</motion.div>
				<motion.div
					variants={iconVariants(6)}
					initial='initial'
					animate='animate'
					className='rounded-2xl border-4 border-neutral-800 p-4'>
					<SiTailwindcss className='text-7xl text-cyan-400' />
				</motion.div>
				<motion.div
					variants={iconVariants(2)}
					initial='initial'
					animate='animate'
					className='rounded-2xl border-4 border-neutral-800 p-4'>
					<SiMui className='text-7xl text-blue-600' />
				</motion.div>
				<motion.div
					variants={iconVariants(4)}
					initial='initial'
					animate='animate'
					className='rounded-2xl border-4 border-neutral-800 p-4'>
					<RiBootstrapFill className='text-7xl text-violet-700' />
				</motion.div>
			</motion.div>
		</div>
	)
}
export default Technologies
