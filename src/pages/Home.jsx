import {Component} from 'react';
import {Link} from 'react-router-dom';
import Particles from 'react-tsparticles';
import homeParticles from '../particles/home.json';

import '../assets/css/Home.scss';

export default class Home extends Component {
  render() {
    return (
      <>
        <Particles options={homeParticles}/>

        <div className="center-block">
          <div className="page">
            <div className="home-welcome">
              <strong>Вас вітає CosmoTravel!</strong>
              <p className="subtitle">Ми зробимо все, щоб ви поринулися у атмосферу космічної подорожі!</p>
            </div>
            <div className="next-btn-wrapper">
              <Link to="/start" className="parallax-btn start-travel-btn">ПОЧАТИ МАНДРІВКУ</Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}