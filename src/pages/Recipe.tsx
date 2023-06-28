import styled from "styled-components";
import {motion} from "framer-motion";
import {Link, useParams} from "react-router-dom";
import {useState, useEffect} from "react";



const Recipe = () => {

	const [details, setDetails] = useState<Array<string>>([]);
	let params = useParams();
	const fetchDetails = async (name) => {
		const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${import.meta.env.VITE_SPOON_APP_API_KEY}`);
		const detailData = await data.json();
		setDetails(detailData);

	};

	useEffect(()=>{
		fetchDetails(params.name)
	},[params.name])

	return (
		<DetailWrapper>
					<Card key={details.id}>
						<img src={details.image} alt={details.title} />
						<h4>{details.title}</h4>
						<h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
						<h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
					</Card>
			
		</DetailWrapper>
		);
}

const DetailWrapper = styled.div`
	margin-top: 10rem;
	margin-bottom: 5rem;
	display: flex;
	.active {

	}
	grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
	grid-gap: 3rem;
`;

const Card = styled.div`
	img {
		width: 100%;
		border-radius: 2rem;
	}
	a {
		text-decoration: none;
	}
	h4 {
		text-align: center;
		padding: 1rem;
	}
`;

export default Recipe;