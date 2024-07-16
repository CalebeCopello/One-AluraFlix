import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../components/Header';
import Footer from '../components/Footer';

import '../index.css';

function AddVideo() {
	const [title, setTitle] = useState('');
	const [categories, setCategories] = useState('');
	const [image, setImage] = useState('');
	const [videoURL, setVideoURL] = useState('');
	const [description, setDescription] = useState('');
	const [videoCategories, setVideoCategories] = useState([]);
	const [videos, setVideos] = useState([]);

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

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!title && !categories && !image && videoURL && description) {
			alert('Complete todos os campos');
		} else {
			const categoryType = categories == 'Inteligencia Artificial (IA)' ? 0 : categories == 'Front End' ? 1 : 2;
			const formData = {
				id: videos.length,
				titulo: title,
				categoria: categoryType,
				url: videoURL,
				thumbnail: image,
				description: description,
			};
			axios
				.post(`${URL}/videos`, formData)
				.then(function (response) {
					alert('Video adicionado com sucesso')
					console.log(response);
				})
				.catch(function (error) {
					alert('Erro ao adicionar o Video')
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
			<Header />
			<main className='flex-row w-full bg-black'>
				<div className='flex flex-col mx-auto py-6 text-white'>
					<h1 className='text-3xl font-bold mx-auto'>Novo Vídeo</h1>
					<h2 className='text-xl font-bold mx-auto'>Complete o formulário para criar um novo card de vídeo.</h2>
					<h2 className='text-2xl font-bold mx-auto mt-8'>Criar Card</h2>
					<form
						onSubmit={handleSubmit}
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
			</main>
			<Footer />
		</>
	);
}

export default AddVideo;
