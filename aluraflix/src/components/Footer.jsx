import logo from '../../public/imgs/logo.png';
import '../index.css';

const Footer = () => {
	return (
		<>
			<footer className='flex items-center bg-black bg-opacity-70 h-[125px] border-t-4 border-alblue top-shadow '>
				<div className='mx-auto'>
						<img
							src={logo}
							alt='aluraflix'
							className='w-[168px] h-[40px] object-center'
						/>
				</div>
			</footer>
			
		</>
	);
};

export default Footer;
