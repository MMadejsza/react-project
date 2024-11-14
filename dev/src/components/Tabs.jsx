function Tabs({children, buttons, containerType = 'menu'}) {
	// must start with upper case to be used as tag
	const ContainerType = containerType;
	return (
		<>
			<ContainerType>{buttons}</ContainerType>
			{children}
		</>
	);
}

export default Tabs;
