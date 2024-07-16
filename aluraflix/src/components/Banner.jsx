/* eslint-disable react/no-unescaped-entities */
import '../index.css';

const Banner = () => {
	return (
		<div className='relative w-full h-[600px] border-b-4 border-alblue'>
			<div className="absolute inset-0 bg-[url('https://i3.ytimg.com/vi/O68y0yRZL1Y/maxresdefault.jpg')] bg-cover"></div>
			<div className='absolute inset-0 bg-black opacity-75'></div>
			<div className='relative z-10 p-4'>
				<div className='flex w-full px-5 mt-20'>
					<div className='w-full'>
						<div className='box-cat-yellow w-fit'>Inteligencia Artificial (IA)</div>
						<div className='mt-5'>
							<span className='block text-white'>Quais são os limites da atual tecnologia de transformadores generativos pré-treinados, vulgo GPT?</span>
							<span className='block text-white'>O que são os tais "modelos" que eles usam? </span>
							<span className='block text-white'>O que são os tais "parâmetros". </span>
							<span className='block text-white'>Porque as IAs parecem humanas nas respostas? </span>
							<span className='block text-white'>IAs vão substituir programadores??</span>
							<span className='block text-white'>Como é possível conseguir rodar um clone de ChatGPT na sua própria máquina, totalmente offline?</span>
						</div>
					</div>
					<iframe
                        className='rounded-sm mx-10'
						width='560'
						height='315'
						src='https://www.youtube.com/embed/O68y0yRZL1Y?si=zeobBo4Q6qL75Plx'
						title='YouTube video player'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						referrerPolicy='strict-origin-when-cross-origin'
						allowfullscreen
					></iframe>
				</div>
			</div>
		</div>
	);
};

export default Banner;
