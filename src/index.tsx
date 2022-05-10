import { createRoot } from 'react-dom/client';
import App from './App';

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/worker');
  worker.start();
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(<App />);
