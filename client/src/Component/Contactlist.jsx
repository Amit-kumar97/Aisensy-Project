import React from 'react';
import './Contactlist.css';
import { Link } from 'react-router-dom';

const Contactlist = () => {
  return (
    <div>
      <header className="App-header">
        <div className="project-title">
          <h1>
            Aisensy Project
            <span>Group Four</span>
          </h1>
        </div>
      </header>
      
      <section>
        <div className='div-main'>
          <div className='flex-container'>
            <div className='flex-items'>
              <div className="line"></div>
              <button className='button'>
                <Link to={'/import'}>Import Contact</Link>
              </button>
            </div>
            <div className='flex-items'>
              <div className="line"></div>
              <button className='button'>
                <Link to={'/download'}>Download Contact</Link>
              </button>
            </div>
            <div className='flex-items'>
              <div className="line"></div>
              <button  className='button'>
                <Link to={'/filter'}>Filet Contact</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
    
  )
}

export default Contactlist
