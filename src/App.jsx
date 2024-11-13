import {useState} from 'react';
import {CORE_CONCEPTS, EXAMPLES} from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
	// names are yours
	const [selectedTopic, setSelectedTopic] = useState('components');

	function handleSelection(selectedButton) {
		setSelectedTopic(selectedButton);
	}

	return (
		<div>
			<Header />
			<main>
				<section id='core-concepts'>
					<h2>Core concepts</h2>
					<ul>
						<CoreConcept {...CORE_CONCEPTS[0]} />
						<CoreConcept {...CORE_CONCEPTS[1]} />
						<CoreConcept {...CORE_CONCEPTS[2]} />
						<CoreConcept {...CORE_CONCEPTS[3]} />
					</ul>
				</section>
				<section id='examples'>
					<h2>Examples</h2>
					<menu>
						<TabButton onSelect={() => handleSelection('components')}>
							Components
						</TabButton>
						<TabButton onSelect={() => handleSelection('jsx')}>JSX</TabButton>
						<TabButton onSelect={() => handleSelection('props')}>Props</TabButton>
						<TabButton onSelect={() => handleSelection('state')}>State</TabButton>
					</menu>
					<div id='tab-content'>
						{/* thats why identifier in tab btn function must by like key in dataset*/}
						<h3>{EXAMPLES[selectedTopic].title}</h3>
						<p>{EXAMPLES[selectedTopic].description}</p>
						<pre>
							<code>{EXAMPLES[selectedTopic].code}</code>
						</pre>
					</div>
				</section>
			</main>
		</div>
	);
}

export default App;
