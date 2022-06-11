const JobList = ({ propsA, propsB, children }: any) => {
	return (
		<div>
			<h3>仕事</h3>
			<p>{propsA}</p>
			<p>{propsB}</p>
			<p>{children}</p>
			<ul>
				<li>元ブロガー・ライター</li>
				<li>現在はスーパーの店員</li>
				<li>あとは家事・育児など</li>
			</ul>
		</div>
	);
};

export default JobList;
