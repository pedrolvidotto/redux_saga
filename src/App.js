import { BrowserRouter, Router } from 'react-router-dom'
import Header from './components/header';
import RoutesApp from './routes';
import { Provider } from 'react-redux'
import store from './store'
import history from './services/history';

function App() {
  return (
    <Provider store={store}>
      {/* <Router location={history.location} navigator={history}> */}
      <BrowserRouter>
        <Header/>
        <RoutesApp/>
      </BrowserRouter>
      
      {/* </Router> */}
    </Provider>
  );
}

export default App; 
