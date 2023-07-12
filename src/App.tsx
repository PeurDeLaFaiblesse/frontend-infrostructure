import Counter from "./components/Counter/Counter";
import './global/cssReset.scss'

const App = () => {
    return (
        <div className='app'>
            <Counter/>
            <Counter/>
            <Counter/>
        </div>
    );
};

export default App;