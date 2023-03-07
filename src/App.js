import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ROUTES from "./routes/route"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const router = createBrowserRouter(ROUTES)

  return (
    <div >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
