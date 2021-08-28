import '../styles/index.scss';
import RandomObjects from './RandomObjects';
import polaroidImg from '../images/code.png';
import someObj from '../images/someObj.svg';

function App() {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Hello, React!</h1>
        </section>
        <img src={polaroidImg} alt="t-img" width="250" />
        <img src={someObj} alt="t-img" width="250" />
        <RandomObjects />
      </main>
    </>
  );
}

export default App;
