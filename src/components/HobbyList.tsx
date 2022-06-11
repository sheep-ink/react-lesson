const HobbyList = ({ propsA }: any) => {
	return (
		<div>
			<h3>趣味</h3>
			<p>{propsA}</p>
			<ul>
				<li>読書</li>
				<li>温泉</li>
				<li>魚たべる</li>
			</ul>
		</div>
	);
};

export default HobbyList;
