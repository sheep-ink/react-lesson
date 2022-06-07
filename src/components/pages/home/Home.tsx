import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<>
			<header>
				<h1>羊インク</h1>
			</header>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="page1">Page1</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Home;
