function TabButton({children: c, onSelect}) {
	return (
		<li>
			<button onClick={onSelect}>{c}</button>
		</li>
	);
}

export default TabButton;
