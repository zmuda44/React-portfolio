
function Footer() {
  console.log('Footer rendered');
  return (
    <footer id='footer'>
      <div className='container'>
        <div className="left">
          <p>Contact information</p>
          <p>email: gregbailey617@gmail.com</p>
        </div>
        <div className="right">
          <p>github</p>
          <p>linkedin</p>
          <p>stack overflow</p>
        </div> 
      </div>       
    </footer>
  );
}

export default Footer;