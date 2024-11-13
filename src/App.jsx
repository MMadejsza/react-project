import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';

const headerDescs = ['Core', 'Unique', `Good`];

function getRandomInt(max) {
	return Math.floor(Math.random() * (max + 1));
}

function Header() {
	const startWord = headerDescs[getRandomInt(2)];
	return (
		<header>
			<img
				src={reactImg}
				alt='Stylized atom'
			/>
			<h1>React Essentials</h1>
			<p>
				{startWord} React concepts you will need for almost any app you are going to build!
			</p>
		</header>
	);
}

function CoreConcept(props) {
	return (
		<li>
			<img
				src={props.img}
				alt={props.title}
			/>
			<h3>{props.title}</h3>
			<p>{props.description}</p>
		</li>
	);
}

function App() {
	return (
		<div>
			<Header />
			<main>
				<section id='core-concepts'>
					<h2>Core concepts</h2>
					<ul>
						<CoreConcept
							title='Components'
							description='The Core UI building block'
							img={componentsImg}
						/>
						<CoreConcept
							title='Components'
							description='The Core UI building block'
							img={componentsImg}
						/>
						<CoreConcept
							title='Components'
							description='The Core UI building block'
							img={componentsImg}
						/>
						<CoreConcept
							title='Components'
							description='The Core UI building block'
							img={componentsImg}
						/>
					</ul>
				</section>
			</main>
		</div>
	);
}

export default App;
