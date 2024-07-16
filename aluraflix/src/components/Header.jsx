import logo from '../../public/imgs/logo.png';
import '../index.css';

const Header = () => {
	return (
		<>
			<nav className='flex items-center px-5 bg-black bg-opacity-70 h-[125px] border-b-4 border-alblue bottom-shadow'>
				<div className='flex flex-row w-full'>
					<div>
						<img
							src={logo}
							alt='aluraflix'
							className='w-[168px] h-[40px]'
						/>
					</div>
					<div className='flex-grow flex justify-end'>
						<a
							href='/'
							className='flex btn-default w-[180px]'
						>
							<span className='mx-auto'>Home</span>
						</a>
						<a
							href='/addVideo'
							className='flex btn-white w-[180px]'
						>
							<span className='mx-auto'>Novo Vídeo </span>
						</a>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Header;
