import logo from './logo.svg';
import './App.css';
import './scss/test_scss.scss';
import useEffectDemo from './hooks/UseEffectDemo.js';
function App() {
  return (
          <>
            <div> <h1> Testing Bootstrap , css, scss </h1> 
                <button className='btn btn-success'>send</button>
                <button className='btn btn-primary'>test</button>
                <button className='btn btn-danger'>delete</button>

                <hr></hr>

              <div className='scss-body'>SASS
              <br></br>
              <button className='btn btn-success'>send</button>
                <button className='btn btn-primary'>test</button>
                <button className='btn btn-danger'>delete</button>
                </div>
                <hr></hr>

              <useEffectDemo></useEffectDemo>

            </div>
        </>
  );
}

export default App;


