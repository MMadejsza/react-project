import './CoreConcept.css';

// function CoreConcept(props) {
// 	return (
// 		<li>
// 			<img
// 				src={props.image}
// 				alt={props.title}
// 			/>
// 			<h3>{props.title}</h3>
// 			<p>{props.description}</p>
// 		</li>
// 	);
// }
export default function CoreConcept({image: img, title, description: desc}) {
	console.log('concept rendered');
	return (
		<li>
			<img
				src={img}
				alt={title}
			/>
			<h3>{title}</h3>
			<p>{desc}</p>
		</li>
	);
}
