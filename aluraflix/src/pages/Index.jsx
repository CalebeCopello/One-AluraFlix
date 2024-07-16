import axios from 'axios';
import { useState, useEffect } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import { IoMdCloseCircleOutline } from "react-icons/io";

import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';

function Index() {
	const [title, setTitle] = useState('');
	const [categories, setCategories] = useState('');
	const [image, setImage] = useState('');
	const [videoURL, setVideoURL] = useState('');
	const [description, setDescription] = useState('');
	const [videoCategories, setVideoCategories] = useState([]);
	const [videos, setVideos] = useState([]);
	const [editModal, setEditModal] = useState(false);
	const [videoId, setVideoId] = useState('');

	const URL = 'http://localhost:3000';

	useEffect(() => {
		const fetchData = async () => {
			try {
				const [categoriesResponse, videosResponse] = await Promise.all([axios.get(`${URL}/categorias`), axios.get(`${URL}/videos`)]);

				setVideoCategories(categoriesResponse.data);
				setVideos(videosResponse.data);
			} catch (error) {
				console.error('Error fetching data', error);
			}
		};

		fetchData();
	}, []);

	const handleDeleteVideo = (id) => {
		console.log(id);
	};
	const handleEditVideo = (id) => {
		console.log(videos[id]);
		setVideoId(() => id);
		setTitle(() => videos[id].titulo);
		const categoryType = videos[id].categoria == 0 ? 'Inteligencia Artificial (IA)' : videos[id].categoria == 1 ? 'Front End' : 'Back End';
		setCategories(() => categoryType);
		setVideoURL(() => videos[id].url);
		setImage(() => videos[id].thumbnail);
		setDescription(() => videos[id].description);
		setEditModal(true);
	};

	const handleUpdate = (e) => {
		e.preventDefault();
		if (!title && !categories && !image && videoURL && description) {
			alert('Complete todos os campos');
		} else {
			const categoryType = categories == 'Inteligencia Artificial (IA)' ? 0 : categories == 'Front End' ? 1 : 2;
			const formData = {
				id: videoId,
				titulo: title,
				categoria: categoryType,
				url: videoURL,
				thumbnail: image,
				description: description,
			};
			axios
				.put(`${URL}/videos/${videoId}`, formData)
				.then(function (response) {
					setEditModal(false)
					console.log(response);
				})
				.catch(function (error) {
					alert('Erro ao adicionar o Video');
					console.error(error);
				});
		}
	};

	const handleCleanForm = () => {
		setTitle('');
		setCategories('');
		setImage('');
		setVideoURL('');
		setDescription('');
	};

	return (
		<>
			{editModal && (
				<div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 text-white h-[550px] w-[450px] border-2 bg-black bg-opacity-60'>
				<IoMdCloseCircleOutline className='text-2xl mr-0 hover:cursor-pointer' onClick={() => setEditModal(false)}/>
					<div className='flex flex-col mx-auto py-6 text-white'>
						<h2 className='text-2xl font-bold mx-auto'>Editar Card</h2>
						<form
							onSubmit={handleUpdate}
							className='flex flex-col my-10'
						>
							<div className='flex mx-auto m-3'>
								<label
									htmlFor='titulo'
									className='font-bold text-xl my-auto mx-3'
								>
									Título
								</label>
								<input
									className='form-style'
									type='text'
									id='titulo'
									value={title}
									onChange={(e) => setTitle(e.target.value)}
									required
								/>
							</div>
							<div className='flex mx-auto m-3'>
								<label
									htmlFor='categoria'
									className='font-bold text-xl my-auto mx-3'
								>
									Categoria
								</label>
								<select
									className='form-style'
									id='categoria'
									value={categories}
									onChange={(e) => setCategories(e.target.value)}
									required
								>
									<option value=''>Selecione uma categoria</option>
									{videoCategories.map((category) => (
										<option
											key={category.id}
											value={category.nome}
										>
											{category.nome}
										</option>
									))}
								</select>
							</div>
							<div className='flex mx-auto m-3'>
								<label
									htmlFor='imagem'
									className='font-bold text-xl my-auto mx-3'
								>
									Imagem
								</label>
								<input
									className='form-style'
									type='text'
									id='image'
									value={image}
									onChange={(e) => setImage(e.target.value)}
									required
								/>
							</div>
							<div className='flex mx-auto m-3'>
								<label
									htmlFor='video link'
									className='font-bold text-xl my-auto mx-3'
								>
									Video Link
								</label>
								<input
									className='form-style'
									type='text'
									id='video link'
									value={videoURL}
									onChange={(e) => setVideoURL(e.target.value)}
									required
								/>
							</div>
							<div className='flex mx-auto m-3'>
								<label
									htmlFor='descrição'
									className='font-bold text-xl my-auto mx-3'
								>
									Descrição
								</label>
								<textarea
									className='form-style'
									type='textarea'
									id='description'
									value={description}
									onChange={(e) => setDescription(e.target.value)}
									required
								/>
							</div>
							<div className='flex mx-auto'>
								<button
									className='btn-default'
									type='submit'
								>
									Guardar
								</button>
								<button
									className='btn-white'
									type='button'
									onClick={handleCleanForm}
								>
									Limpar
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
			<Header />
			<main className='flex-row w-full bg-black py-3'>
				<Banner />
				<div className='relative h-auto mt-6 m-6'>
					{videoCategories.map((category) => (
						<div
							key={category.id}
							className='mb-8'
						>
							<h2
								className='text-2xl font-bold mb-3 border-2 w-fit p-2 rounded'
								style={{ color: category.cor, borderColor: category.cor }}
							>
								{category.nome}
							</h2>
							<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
								{videos
									.filter((video) => video.categoria === category.id)
									.map((video) => (
										<div
											key={video.id}
											className=''
										>
											<div
												className={`h-[200px] w-[400px] bg-white bg-cover rounded-t shadow`}
												style={{ backgroundImage: `url(${video.thumbnail})` }}
											></div>
											<div className='flex w-[400px] h-[40px] bg-white bg-opacity-20 rounded-b shadow'>
												<div className='flex w-1/2'>
													<MdDelete
														className='mx-auto my-auto text-xl text-white hover:cursor-pointer'
														onClick={() => handleDeleteVideo(video.id)}
													/>
												</div>
												<div className='flex w-1/2'>
													<MdEdit
														className='mx-auto my-auto text-xl text-white hover:cursor-pointer'
														onClick={() => handleEditVideo(video.id)}
													/>
												</div>
											</div>
										</div>
									))}
							</div>
						</div>
					))}
				</div>
			</main>
			<Footer />
		</>
	);
}

export default Index;
