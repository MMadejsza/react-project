function TabButton({children: c, onSelect, isSelected}) {
	return (
		<li>
			<button
				className={isSelected ? 'active' : undefined}
				onClick={onSelect}>
				{c}
			</button>
		</li>
	);
}

export default TabButton;
