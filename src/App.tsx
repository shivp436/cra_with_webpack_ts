import './styles/styles.css';
import './styles/styles.scss';
import IMAGE from './assets/logo.png';
import REACT from './assets/react.svg';
// prefer using import for static assets like images, fonts, etc.
// import will be handled by webpack and will be optimized for production build
// direct source path will be copied to the build folder as it is, files will not be optimized

import Counter from './components/Counter';

const App = () => {
  // document.title = `React Webpack Typescript Starter Template - ${process.env.NODE_ENV} Mode`;
  // process.env.NODE_ENV is set by webpack mode variable in the build process
  // we can also declare a custom environment variable in the webpack config file
  const name = 'shivp436';

  return (
    <div className='container'>
      <img src='./assets/logo.png' alt='Logo Direct Source Path' />
      <img src={IMAGE} alt='Logo Import' />
      <h1>React TS Starter Template using Webpack</h1>
      <h2>
        Running in <u>{process.env.NODE_ENV}</u> Mode
      </h2>
      {process.env.NODE_ENV === 'development' ? (
        <h3>author: {process.env.author} </h3>
      ) : (
        <h3>author: {name}</h3>
      )}
      <img src={REACT} alt='React Logo' />
      <Counter />
      <h3>Just testing a subheading</h3>
    </div>
  );
};

export default App;
