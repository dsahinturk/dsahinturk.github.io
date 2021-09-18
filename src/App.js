import './App.scss';
import './assets/style/global.scss'
import ContextWrapper from './components/ContextWrapper/ContextWrapper';
import AppRouter from './components/router/AppRouter';

function App() {
  return (
    <ContextWrapper>
      <AppRouter />
    </ContextWrapper>
  );
}

export default App;
