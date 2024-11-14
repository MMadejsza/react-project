import {useState, Fragment} from 'react';
import {EXAMPLES} from '../data.js';
import TabButton from './TabButton.jsx';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';

function Examples() {
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
		<Section
			title='Examples'
			id='examples'>
			<Tabs
				// containerType='menu'
				buttons={
					<>
						{/* {selectedTopic === 'components'} returns true/false */}
						<TabButton
							isSelected={selectedTopic === 'components'}
							onClick={() => handleSelection('components')}>
							Components
						</TabButton>
						<TabButton
							isSelected={selectedTopic === 'jsx'}
							onClick={() => handleSelection('jsx')}>
							JSX
						</TabButton>
						<TabButton
							isSelected={selectedTopic === 'props'}
							onClick={() => handleSelection('props')}>
							Props
						</TabButton>
						<TabButton
							isSelected={selectedTopic === 'state'}
							onClick={() => handleSelection('state')}>
							State
						</TabButton>
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
					</>
				}>
				{tabContent}
			</Tabs>
		</Section>
	);
}

export default Examples;
