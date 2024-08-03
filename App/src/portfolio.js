import logo from './logo.svg';
import './App.css';
import './svg.css';
import Cards from './cards'
import RandomChoice from './random-choice'
import Greeter from './greeter.js'
import RollDie from './roll-die.js'
import Projects from './db/projects'

function Portfolio() {
  return (
    <div className='portfolio'>

      <section className='adv'>
      <div className='container'>

          <div className='left'>
            <h2>Welcome to my portfolio</h2>
            <h2>See below for my portfolio of projects that I have designed</h2>


          </div>
          <div className='right'>
          <div id="adv-header">
            <h4>full stack</h4>
            <h4>desktop and mobile design</h4>
            <h4>graphic design</h4>
          </div>          

            <div className="phone-container">
            <img src="./images/cell phone.png" />   
            <img src="./images/computer mointor.png" />   
              <div className="phone-page">
                <div className="phone-viewport">
                  <div className="scroll-header"></div>
                  <div className="scroll-body"></div>
                </div>
              </div>
              
            </div>    
          </div>
      </div>
      </section>

      <section className='projects'>
      <div className='container'>
        <Cards projects={Projects}/>
        <RandomChoice />
        <Greeter name="greret"
        ddd="meff" />
        <RollDie sides={20}/>
      </div>        
      </section>
    </div>

  );
}

export default Portfolio;