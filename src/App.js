import HomeView from './views/Home';
import FormView from './views/Form';

import {
  BrowserRouter,
  Link,
  Routes,
  Route
} from 'react-router-dom';

import {
  KeepAlive,
  keepAliveTransfer
} from './KeepAlive';

const AliveHomeView = keepAliveTransfer(HomeView, 'home');
const AliveFormView = keepAliveTransfer(FormView, 'form');

function App () {
  return (
    <BrowserRouter>
      <KeepAlive>
        <div>
          <ul>
            <li>
              <Link to={ '/' }>Home</Link>
            </li>
            <li>
              <Link to={ '/form' }>Form</Link>
            </li>
          </ul>
          <div>
            <Routes>
              <Route path="/" element={ <AliveHomeView /> } />
              <Route path="/form" element={ <AliveFormView /> } />
            </Routes>
          </div>
        </div>
      </KeepAlive>
    </BrowserRouter>
  );
}

export default App;



