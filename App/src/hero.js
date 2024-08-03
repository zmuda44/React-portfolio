import logo from './logo.svg';
import './App.css';

function Hero() {
  return (
    <div className='hero'>
      <div className='container'>
        <div className='left'>
          <h2>Hello, my name is Greg and I am a web designer</h2>
        </div>
        <div className='right'>
          <h3>this is a picture of me</h3>
          <img id="self-photo" src="./images/me and shadow placeholder.jpg" />

        </div>
      </div>
    </div>
  );
}

export default Hero;