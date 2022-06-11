import { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
const root = ReactDOMClient.createRoot(rootElement);

root.render(
	<StrictMode>
		<App />
	</StrictMode>,
);

// import { createRoot } from 'react-dom/client';
// import App from './App';
// import './index.scss';

// const container = document.getElementById('root');
// const root = createRoot(container!);
// root.render(<App />);
