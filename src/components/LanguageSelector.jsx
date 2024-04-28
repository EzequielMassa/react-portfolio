import espFlag from '../assets/spain.png'
import engFlag from '../assets/united-kingdom.png'
import { useLenguageContext } from '../context/LanguageContext'

function LanguageSelector() {
	const { language, handleLanguageChange } = useLenguageContext()

	const handleChange = (lang) => {
		handleLanguageChange(lang)
	}

	return (
		<div className='flex gap-4'>
			<button
				className={` ${language === 'eng' ? 'opacity-100' : 'opacity-45'}`}
				onClick={() => handleChange('eng')}>
				<img src={engFlag} alt='English' width={20} />
			</button>
			<button
				className={`language-button ${
					language === 'esp' ? 'opacity-100' : 'opacity-45'
				}`}
				onClick={() => handleChange('esp')}>
				<img src={espFlag} alt='Spanish' width={20} />
			</button>
		</div>
	)
}

export default LanguageSelector
