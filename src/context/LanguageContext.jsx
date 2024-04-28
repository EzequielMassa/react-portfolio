import { createContext, useContext, useState } from 'react'

export const LanguageContext = createContext()

export const LanguageContextProvider = ({ children }) => {
	const [language, setLanguage] = useState('esp')
	const handleLanguageChange = (selectedLanguage) => {
		setLanguage(selectedLanguage)
	}
	return (
		<LanguageContext.Provider value={{ language, handleLanguageChange }}>
			{children}
		</LanguageContext.Provider>
	)
}

export const useLenguageContext = () => {
	const context = useContext(LanguageContext)
	if (!context) {
		throw new Error(
			'LanguageContext must be used within a LenguageContextProvider'
		)
	}
	return context
}
