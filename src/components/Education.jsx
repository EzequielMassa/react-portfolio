import { motion } from 'framer-motion'
import { TbCertificate } from 'react-icons/tb'
import { EDUCATIONS } from '../constants'
import { useLenguageContext } from '../context/LanguageContext'
function Education() {
	const { language } = useLenguageContext()
	return (
		<div className='border-b border-neutral-900 pb-4'>
			<motion.h2
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -100 }}
				transition={{ duration: 0.5 }}
				className='my-20 text-center text-4xl'>
				{language === 'esp' ? 'Educacion' : 'Education'}
			</motion.h2>
			<div>
				{EDUCATIONS.map((education, index) => (
					<div
						key={index}
						className='mb-8 flex flex-wrap items-center lg:justify-center'>
						<motion.div
							whileInView={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: -100 }}
							transition={{ duration: 1 }}
							className='w-full lg:w-1/4'>
							<p className='mb-2 text-sm text-neutral-400'>{education.year}</p>
						</motion.div>
						<motion.div
							whileInView={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: 100 }}
							transition={{ duration: 1 }}
							className='w-full max-w-xl lg:w-3/4'>
							<h6 className='mb-2 font-semibold'>
								{education.institution} -{' '}
								<span className='text-sm text-purple-100'>
									{education.certificate}
								</span>
							</h6>
							<p className='mb-4 text-neutral-400'>{education.description}</p>

							{education.technologies.map((tech, index) => (
								<span
									key={index}
									className='mr-2 mt-4  rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-teal-300'>
									{tech}
								</span>
							))}
							{education.link ? (
								<a
									href={education.link}
									className='flex justify-center items-center w-32 text-purple-700 hover:text-purple-500 text-sm mt-2'
									target='_blank'>
									View certificate
									<TbCertificate className='inline ms-2 text-base' />
								</a>
							) : (
								<></>
							)}
						</motion.div>
					</div>
				))}
			</div>
		</div>
	)
}
export default Education
