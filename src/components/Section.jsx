function Section({children, title, ...attrs}) {
	// attrs name is yours
	return (
		<section {...attrs}>
			<h2>{title}</h2>
			{children}
		</section>
	);
}

export default Section;
