function TabButton({children: c, isSelected, ...props}) {
	return (
		<li>
			<button
				className={isSelected ? 'active' : undefined}
				{...props}>
				{c}
			</button>
		</li>
	);
}

export default TabButton;
