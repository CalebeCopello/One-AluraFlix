import logo from '../../public/imgs/logo.png';
import '../index.css';
const Header = () => {
	return (
		<>
			<nav className='flex items-center px-5 bg-black bg-opacity-70 h-[125px] border-b-4 border-alblue shadow-md shadow-alblue'>
				<div className='flex flex-row w-full'>
					<div>
						<img
							src={logo}
							alt='aluraflix'
							className='w-[168px] h-[40px]'
						/>
					</div>
					<div className='flex-grow flex justify-end'>
						<button className='btn-default w-[180px]'>Home</button>
						<button className='btn-white w-[180px]'>Novo Vídeo</button>
					</div>
				</div>
			</nav>
			
		</>
	);
};

export default Header;
