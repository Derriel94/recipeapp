import { useEffect } from 'react';

const Popular = () => {

	useEffect(()=> {
		getPopular();
	},[])

	const getPopular = async () => {
		console.log(import.meta.env.VITE_SPOON_APP_API_KEY);
		const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_SPOON_APP_API_KEY}&number=9`);
		const data = await api.json();
		console.log(data)
	};

	return (<div>
		Popular
	</div>)
}

export default Popular;