import ecommerceProject from "../assets/projects/ecommerce-project.png";
import fullstackPortfolioAngular from "../assets/projects/fullstack-portfolio-angular.png";
import hangmanProject from "../assets/projects/hangman-project.png";
import hotelReservation from "../assets/projects/hotel-reservation-project.png";
import shoeshopImg from "../assets/projects/ShoeShop.png";
import soccerfieldComplexImg from "../assets/projects/soccerfield-complex-project.png";
import invoiceAppImg from "../assets/projects/invoiceapp-project.png";

export const HERO_CONTENT = `Hello, my name is Ezequiel Massa, I am a FullStack Developer.
The main technology stack I use is: React Js, Node Js, Express Js, Mongo DB. I have experience in creating websites and rest APIs. Also participate in team projects.
`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and easy-to-use web applications. I've worked with a variety of technologies, including React, Node.js, Express, MongoDB, Angular, Java, Spring Boot, and MySQL. I continually strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open source projects.`;

export const EDUCATIONS = [
	{
		year: "2024",
		institution: "Mercado Pago Developers",
		certificate: "Mercado Pago Partner",
		link: "https://drive.google.com/file/d/17QUcl8KpaWSSVFcJieQZLnAwE-YCyGX1/view?usp=drive_link",
		technologies: ["Checkout Pro"],
	},
	{
		year: "2023 - 2024",
		institution: "Bootcamp Rolling Code School",
		certificate: "Full Stack Developer",
		link: "https://certs.rollingcodeschool.com//ZXplcXVpZWxtYXNzYTg3QGdtYWlsLmNvbQ==-1716297657210-1.png",
		technologies: ["ReactJS", "NodeJS", "Express", "MongoDB"],
	},
	{
		year: "2021 - 2022",
		institution: "Bootcamp Oracle One",
		certificate: "Frontend / Backend Developer Jr",
		link: "https://drive.google.com/file/d/1IfqRmhqOP_cxIET4hDNmzgZwjuyxy9b1/view",
		technologies: ["Html", "Css", "Javascript", "java", "mysql"],
	},
	{
		year: "2021 - 2022",
		institution: "Bootcamp Argentina Programa",
		certificate: "Full Stack Developer",
		link: "https://drive.google.com/file/d/1J6qkGXrmZqlgdMZVd-T5CG6_yCIX28b8/view",
		technologies: ["Angular", "Java", "Spring Boot", "Mysql"],
	},
];

export const PROJECTS = [
	{
		title: "FULL STACK Invoice App",
		image: invoiceAppImg,
		description: "Invoices App which includes a dashboard , emails and more.",
		technologies: [
			"Next.js",
			"AuthJS",
			"PostgreSQL",
			"Prisma",
			"Resend Email",
			"Tailwind",
			"ShadcnUI",
		],
		liveLink: "https://invoice-app-jade-rho.vercel.app",
		documentationLink: "https://github.com/EzequielMassa/InvoiceApp",
	},
	{
		title: "FULL STACK Ecommerce ShoeShop",
		image: shoeshopImg,
		description:
			"E-Commerce Store which has an admin dashboard and a storefront.",
		technologies: [
			"Next.js",
			"Kinde-Auth",
			"PostgreSQL",
			"Prisma",
			"Stripe",
			"Tailwind",
			"ShadcnUI",
			"Upstash",
		],
		liveLink: "https://shoeshop-cyan.vercel.app/",
		documentationLink: "https://github.com/EzequielMassa/shoeshop",
	},
	{
		title: "FULL STACK M.E.R.N Soccer Field Complex",
		image: soccerfieldComplexImg,
		description:
			"Final project for the “RollingCode” bootcamp, where it was requested to create a fullstack app for a soccer field complex that allows both reservations and the purchase of the complex's own products. in addition to a C.R.U.D of both the courts and the products for the site administrators.",
		technologies: ["ReactJS", "NodeJS", "Express", "MongoDB"],
		liveLink: "https://alangulo.onrender.com/",
		documentationLink: "https://github.com/EzequielMassa/AlAnguloFrontend",
	},
	{
		title: "FULL STACK PORTFOLIO CREATOR ANGULAR",
		image: fullstackPortfolioAngular,
		description:
			'Final project for the "Argentina Programa" bootcamp where it was requested to develop a fullstack web portfolios creator using Angular.',
		technologies: ["Angular", "Java", "Spring Boot", "Mysql"],
		liveLink: "https://portfolio-emdev.firebaseapp.com/emdev",
		documentationLink:
			"https://github.com/EzequielMassa/Frontend-Angular-Portfolio-ArgentinaPrograma",
	},
	{
		title: "VANILLA E-COMMERCE WEB C.R.U.D",
		image: ecommerceProject,
		description:
			"Challenge for the 'Oracle ONE' bootcamp where it was requested to create an Ecommerce capable of creating, reading, updating and deleting products, following certain validations as well as a design provided in 'figma'",
		technologies: ["HTML", "CSS", "Javascript"],
		liveLink:
			"https://ezequielmassa.github.io/Challenge-Ecommerce-C.R.U.D-Oracle-ONE/",
		documentationLink:
			"https://github.com/EzequielMassa/Challenge-Ecommerce-C.R.U.D-Oracle-ONE",
	},
	{
		title: "VANILLA HANGMAN GAME WEB",
		image: hangmanProject,
		description:
			"Challenge for the 'Oracle ONE' bootcamp where it was requested to create the classic hangman game following certain validations as well as a design provided in 'figma'.",
		technologies: ["HTML", "CSS", "Javascript"],
		liveLink: "https://ezequielmassa.github.io/Challenge-HangMan-ORACLE-one/",
		documentationLink:
			"https://github.com/EzequielMassa/Challenge-HangMan-ORACLE-one",
	},
	{
		title: "APP DESKTOP HOTEL RESERVATIONS",
		image: hotelReservation,
		description:
			"Challenge for the 'Oracle ONE' bootcamp where it was requested to create a desktop application in Java and a Mysql database, which is capable of storing data in it and allows the creation, editing and deletion of said data, after certain validations.",
		technologies: ["Java", "Mysql"],
		documentationLink:
			"https://github.com/EzequielMassa/Challenge-Oracle-ONE-Hotel-Alura-JAVA-DB",
	},
];

export const CONTENIDO_HERO = `Hola, me llamo Ezequiel Massa, soy un Programador FullStack. El principal stack tecnológico que uso es : React Js, Node Js, Express Js, Mongo DB. tengo experiencia en la creación de sitios web y API rest. También participe en proyectos de equipo.
`;

export const TEXTO_ABOUT = `Soy un desarrollador full stack dedicado y versátil con pasión por crear aplicaciones web eficientes y fáciles de usar. He trabajado con una variedad de tecnologías, incluidas React, Node.js, Express , MongoDB , Angular , Java , Spring Boot y MySQL. Me esfuerzo continuamente por aprender y adaptarme a nuevos desafíos. Prospero en entornos colaborativos y disfruto resolviendo problemas complejos para ofrecer soluciones de alta calidad. Aparte de la codificación, disfruto mantenerme activo, explorar nuevas tecnologías y contribuir a proyectos de código abierto.`;

export const PROYECTOS = [
	{
		title: "FULL STACK Invoice App",
		image: invoiceAppImg,
		description:
			"Invoices App que incluye un dashboard, envió de emails y más.",
		technologies: [
			"Next.js",
			"AuthJS",
			"PostgreSQL",
			"Prisma",
			"Resend Email",
			"Tailwind",
			"ShadcnUI",
		],
		liveLink: "https://invoice-app-jade-rho.vercel.app",
		documentationLink: "https://github.com/EzequielMassa/InvoiceApp",
	},
	{
		title: "FULL STACK Ecommerce ShoeShop",
		image: shoeshopImg,
		description: "E-Commerce Store con panel de administración y una tienda.",
		technologies: [
			"Next.js",
			"Kinde-Auth",
			"PostgreSQL",
			"Prisma",
			"Stripe",
			"Tailwind",
			"ShadcnUI",
			"Upstash",
		],
		liveLink: "https://shoeshop-cyan.vercel.app/",
		documentationLink: "https://github.com/EzequielMassa/shoeshop",
	},
	{
		title: "FULL STACK M.E.R.N Complejo canchas de futbol",
		image: soccerfieldComplexImg,
		description:
			"Proyecto final para el bootcamp “RollingCode”, donde se solicitó crear una app fullstack para un complejo de campos de fútbol que permita tanto reservas como la compra de productos propios del complejo. además de un C.R.U.D tanto de los canchas como de los productos para los administradores del sitio.",
		technologies: ["ReactJS", "NodeJS", "Express", "MongoDB"],
		liveLink: "https://alangulo.onrender.com/",
		documentationLink: "https://github.com/EzequielMassa/AlAnguloFrontend",
	},

	{
		title: "FULL STACK PORTFOLIO CREATOR ANGULAR",
		image: fullstackPortfolioAngular,
		description:
			'Proyecto final para el bootcamp "Argentina Programa" donde se solicitó desarrollar un creador de portafolios web fullstacks.',
		technologies: ["Angular", "Java", "Spring Boot", "Mysql"],
		liveLink: "https://portfolio-emdev.firebaseapp.com/emdev",
		documentationLink:
			"https://github.com/EzequielMassa/Frontend-Angular-Portfolio-ArgentinaPrograma",
	},
	{
		title: "VANILLA E-COMMERCE WEB C.R.U.D",
		image: ecommerceProject,
		description:
			"Proyecto para el bootcamp 'Oracle ONE' donde se solicitaba crear un Ecommerce capaz de crear, leer, actualizar y eliminar productos, siguiendo ciertas validaciones así como un diseño proporcionado en 'figma'",
		technologies: ["HTML", "CSS", "Javascript"],
		liveLink:
			"https://ezequielmassa.github.io/Challenge-Ecommerce-C.R.U.D-Oracle-ONE/",
		documentationLink:
			"https://github.com/EzequielMassa/Challenge-Ecommerce-C.R.U.D-Oracle-ONE",
	},
	{
		title: "VANILLA HANGMAN GAME WEB",
		image: hangmanProject,
		description:
			"Proyecto para el bootcamp 'Oracle ONE' donde se solicitaba crear el clásico juego del ahorcado siguiendo ciertas validaciones así como un diseño proporcionado en 'figma'.",
		technologies: ["HTML", "CSS", "Javascript"],
		liveLink: "https://ezequielmassa.github.io/Challenge-HangMan-ORACLE-one/",
		documentationLink:
			"https://github.com/EzequielMassa/Challenge-HangMan-ORACLE-one",
	},
	{
		title: "APP DESKTOP HOTEL RESERVATIONS",
		image: hotelReservation,
		description:
			"Proyecto para el bootcamp 'Oracle ONE' donde se solicitó crear una aplicación de escritorio en Java y una base de datos Mysql, que sea capaz de almacenar datos en ella y permita la creación, edición y eliminación de dichos datos, luego de ciertas validaciones.",
		technologies: ["Java", "Mysql"],
		documentationLink:
			"https://github.com/EzequielMassa/Challenge-Oracle-ONE-Hotel-Alura-JAVA-DB",
	},
];
