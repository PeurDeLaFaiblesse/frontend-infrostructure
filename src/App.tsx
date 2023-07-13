import Counter from "./components/Counter/Counter";
import './global/cssReset.scss'
import Success from './assets/success.svg';

const App = () => {
    return (
        <div className='app'>
            <Counter/>
            <Counter/>
            <Counter/>
            <Success />
        </div>
    );
};

export default App;