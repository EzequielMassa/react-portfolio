import { motion } from 'framer-motion'
import { TbWorld } from 'react-icons/tb'
import { TiDocumentText } from 'react-icons/ti'
import { PROJECTS, PROYECTOS } from '../constants'
import { useLenguageContext } from '../context/LanguageContext'

function Projects() {
	const { language } = useLenguageContext()
	let projects = language === 'esp' ? PROYECTOS : PROJECTS
	return (
		<div className='border-b border-neutral-900 pb-4'>
			<motion.h2
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -100 }}
				transition={{ duration: 0.5 }}
				className='my-20 text-center text-4xl'>
				{language === 'esp' ? 'Proyectos' : 'Projects'}
			</motion.h2>
			<div>
				{projects.map((project, index) => (
					<div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
						<motion.div
							whileInView={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: -100 }}
							transition={{ duration: 1 }}
							className='w-full lg:w-1/4'>
							<img
								src={project.image}
								alt={project.title}
								width={250}
								height={250}
								className='mb-6 rounded'
							/>
						</motion.div>
						<motion.div
							whileInView={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: 100 }}
							transition={{ duration: 1 }}
							className='w-full max-w-xl lg:w-3/4'>
							<h6 className='mb-2 font-semibold'>{project.title}</h6>
							<p className='mb-4 text-neutral-400'>{project.description}</p>
							{project.technologies.map((tech, index) => (
								<span
									key={index}
									className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-teal-300'>
									{tech}
								</span>
							))}
							<div className='flex my-2'>
								{project.liveLink ? (
									<a
										href={project.liveLink}
										className='flex justify-start items-center w-32 text-purple-700 hover:text-purple-500 text-sm mt-2'
										target='_blank'>
										Live demo
										<TbWorld className='inline ms-2 text-base' />
									</a>
								) : (
									<></>
								)}
								{project.documentationLink ? (
									<a
										href={project.documentationLink}
										className='flex justify-start items-center w-32 text-purple-700 hover:text-purple-500 text-sm mt-2'
										target='_blank'>
										Docs
										<TiDocumentText className='inline ms-2 text-base' />
									</a>
								) : (
									<></>
								)}
							</div>
						</motion.div>
					</div>
				))}
			</div>
		</div>
	)
}
export default Projects
