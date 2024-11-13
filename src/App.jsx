import {useState} from 'react';
import {CORE_CONCEPTS, EXAMPLES} from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
	// names are yours
	const [selectedTopic, setSelectedTopic] = useState('');

	function handleSelection(selectedButton) {
		setSelectedTopic(selectedButton);
	}

	let tabContent = 'Please select a topic.';
	if (selectedTopic) {
		tabContent = (
			<div id='tab-content'>
				{/* thats why identifier in tab btn function must by like key in dataset*/}
				<h3>{EXAMPLES[selectedTopic].title}</h3>
				<p>{EXAMPLES[selectedTopic].description}</p>
				<pre>
					<code>{EXAMPLES[selectedTopic].code}</code>
				</pre>
			</div>
		);
	}

	return (
		<div>
			<Header />
			<main>
				<section id='core-concepts'>
					<h2>Core concepts</h2>
					<ul>
						{CORE_CONCEPTS.map((conceptItem) => (
							<CoreConcept
								key={conceptItem.title}
								{...conceptItem}
							/>
						))}
						{/* 
						<CoreConcept {...CORE_CONCEPTS[0]} />
						<CoreConcept {...CORE_CONCEPTS[1]} />
						<CoreConcept {...CORE_CONCEPTS[2]} />
						<CoreConcept {...CORE_CONCEPTS[3]} /> */}
					</ul>
				</section>
				<section id='examples'>
					<h2>Examples</h2>
					<menu>
						{/* {selectedTopic === 'components'} returns true/false */}
						<TabButton
							isSelected={selectedTopic === 'components'}
							onSelect={() => handleSelection('components')}>
							Components
						</TabButton>
						<TabButton
							isSelected={selectedTopic === 'jsx'}
							onSelect={() => handleSelection('jsx')}>
							JSX
						</TabButton>
						<TabButton
							isSelected={selectedTopic === 'props'}
							onSelect={() => handleSelection('props')}>
							Props
						</TabButton>
						<TabButton
							isSelected={selectedTopic === 'state'}
							onSelect={() => handleSelection('state')}>
							State
						</TabButton>
					</menu>

					{/* {!selectedTopic && <p>Please select a topic.</p>} */}
					{/* {!selectedTopic ? (
						<p>Please select a topic.</p>
					) : (
						<div id='tab-content'> */}
					{/* thats why identifier in tab btn function must by like key in dataset*/}
					{/* <h3>{EXAMPLES[selectedTopic].title}</h3>
							<p>{EXAMPLES[selectedTopic].description}</p>
							<pre>
								<code>{EXAMPLES[selectedTopic].code}</code>
							</pre>
						</div>
					)} */}
					{tabContent}
				</section>
			</main>
		</div>
	);
}

export default App;
