import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { useLenguageContext } from '../context/LanguageContext'
function Contact() {
	const { language } = useLenguageContext()
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm()

	const onSubmit = handleSubmit(async (data) => {
		const serviceID = 'service_5wkx0yr'
		const templateID = 'template_oe74axf'
		const publicKey = 'W6bVxHAksKSUGd9Vo'

		const formTemplate = {
			from_name: data.email,
			subject: data.subject,
			message: data.message,
		}

		emailjs.send(serviceID, templateID, formTemplate, publicKey).then(
			() => {
				const msg =
					language === 'esp'
						? 'Email enviado correctamente'
						: 'Email sent successfully'
				toast.success(msg)
				reset()
			},
			() => {
				const errorMsg =
					language === 'esp'
						? 'Ocurrio un error, intentalo de nuevo'
						: 'Something went wrong. Please try again later.'
				toast.error(errorMsg)
			}
		)
	})

	return (
		<div className='border-b border-neutral-900 pb-20'>
			<motion.h2
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -100 }}
				transition={{ duration: 0.5 }}
				className='my-10 text-center text-4xl'>
				{language === 'esp' ? 'Contacto' : 'Contact'}
			</motion.h2>
			<motion.form
				onSubmit={onSubmit}
				whileInView={{ opacity: 1, x: 0 }}
				initial={{ opacity: 0, x: -100 }}
				transition={{ duration: 1 }}
				className='flex flex-col gap-8 justify-center items-center'>
				<label htmlFor='email' className='w-4/5 md:w-1/2'>
					<input
						type='email'
						placeholder='Email'
						className='bg-transparent border-b shadow border-gray-300 focus:border-b-teal-300 focus:outline-0  py-2 px-4 block w-full appearance-none leading-normal'
						{...register('email', {
							required: {
								value: true,
								message: {
									esp: 'Email es requerido',
									eng: 'Email is required',
								}[language],
							},
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: {
									esp: 'Email no es valido',
									eng: 'Email is not valid',
								}[language],
							},
						})}
					/>
				</label>
				{errors.email && <p className='text-red-500'>{errors.email.message}</p>}
				<label htmlFor='subject' className='w-4/5 md:w-1/2'>
					<input
						type='text'
						placeholder={language === 'esp' ? 'Asunto' : 'Subject'}
						className='bg-transparent border-b  shadow border-gray-300 focus:border-b-teal-300 focus:outline-0  py-2 px-4 block w-full appearance-none leading-normal mb-4'
						{...register('subject', {
							required: {
								value: true,
								message: {
									esp: 'Asunto es requerido',
									eng: 'Subject is required',
								}[language],
							},
							minLength: {
								value: 3,
								message: {
									esp: 'Asunto debe tener al menos 3 caracteres',
									eng: 'Subject must be at least 3 characters',
								}[language],
							},
							maxLength: {
								value: 150,
								message: {
									esp: 'Asunto no puede superar los 150 caracteres',
									eng: 'Subject cannot exceed 150 characters',
								}[language],
							},
						})}
					/>
				</label>
				{errors.subject && (
					<p className='text-red-500'>{errors.subject.message}</p>
				)}
				<label htmlFor='message'>
					<textarea
						name='message'
						id='message'
						cols='70'
						rows='15'
						placeholder={language === 'esp' ? 'Mensaje' : 'Message'}
						className='bg-transparent border rounded-lg shadow border-gray-300 focus:border-teal-300 focus:ring-2 focus:ring-teal-300 focus:outline-purple-700 py-2 px-4 block w-full appearance-none leading-normal'
						{...register('message', {
							required: {
								value: true,
								message: {
									esp: 'Mensaje es requerido',
									eng: 'Message is required',
								}[language],
							},
							minLength: {
								value: 5,
								message: {
									esp: 'Mensaje debe tener al menos 5 caracteres',
									eng: 'Message must be at least 5 characters',
								}[language],
							},
							maxLength: {
								value: 1000,
								message: {
									esp: 'Mensaje no puede superar los 1000 caracteres',
									eng: 'Message cannot exceed 1000 characters',
								}[language],
							},
						})}></textarea>
				</label>
				{errors.message && (
					<p className='text-red-500'>{errors.message.message}</p>
				)}
				<button
					type='submit'
					className='rounded bg-neutral-900 px-10 py-2 font-medium text-teal-300 hover:text-purple-600'>
					{language === 'esp' ? 'Enviar' : 'Send'}
				</button>
			</motion.form>
		</div>
	)
}
export default Contact
