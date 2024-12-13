import { motion } from "framer-motion";
import { FaFileDownload } from "react-icons/fa";
import cv from "../assets/docs/Ezequiel Massa Full Stack Developer.pdf";
import resume from "../assets/docs/Ezequiel Massa Full Stack Developer Resume.pdf";
import profilePic from "../assets/ezequiel-massa.png";
import { CONTENIDO_HERO, HERO_CONTENT } from "../constants";
import { useLenguageContext } from "../context/LanguageContext";

const container = (delay) => ({
	hidden: { x: -100, opacity: 0 },
	visible: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			delay: delay,
		},
	},
});

function Hero() {
	const { language } = useLenguageContext();

	return (
		<div className="border-b border-neutral-900 pb-4 lg:mb-35">
			<div className="flex flex-wrap">
				<div className="w-full lg:w-1/2">
					<div className="flex flex-col items-center lg:items-start">
						<motion.h1
							variants={container(0)}
							initial="hidden"
							animate="visible"
							className="pb-8 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
						>
							Ezequiel Massa
						</motion.h1>
						<motion.span
							variants={container(0.5)}
							initial="hidden"
							animate="visible"
							className="bg-gradient-to-r from-teal-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
						>
							Full Stack Developer
						</motion.span>
						<motion.p
							variants={container(1)}
							initial="hidden"
							animate="visible"
							className="my-2 max-w-xl py-6 font-light tracking-tighter"
						>
							{language === "esp" ? CONTENIDO_HERO : HERO_CONTENT}
						</motion.p>
						<a
							className="flex justify-center items-center  text-purple-700 hover:text-purple-500 text-sm pb-2"
							href={language === "esp" ? cv : resume}
							download="Ezequiel Massa Full Stack Developer.pdf"
						>
							{language === "esp" ? "Descargar CV" : "Download Resume"}
							<FaFileDownload className="inline ms-2 text-base" />
						</a>
					</div>
				</div>
				<div className="w-full lg:w-1/2 lg:p-8">
					<div className="flex justify-center">
						<motion.img
							initial={{ x: 100, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 1, delay: 1.2 }}
							src={profilePic}
							alt="Ezequiel Massa Profile Image"
							className="filter drop-shadow-sm grayscale"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Hero;
