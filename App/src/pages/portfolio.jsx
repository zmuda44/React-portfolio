

import Projects from '../components/projects'



function Portfolio() {
  return (
    <section id='portfolio'>

      <div className='top'>
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

            {/* <div className="phone-container">
              <img src="./images/cell phone.png" />   
              <img src="./images/computer mointor.png" />   
              <div className="phone-page">
                <div className="phone-viewport">
                  <div className="scroll-header"></div>
                  <div className="scroll-body"></div>
                </div>
              </div>            
            </div>     */}
          </div>
      </div>
              
      <div className="bottom">
              <Projects />


      </div>
    
    </section>



  );
}

export default Portfolio;