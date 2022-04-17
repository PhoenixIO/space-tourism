import {Component} from 'react';
import {Link} from 'react-router-dom';
import Particles from 'react-tsparticles';
import endParticles from '../particles/end.json';
import loadingParticles from '../particles/loading.json';

import '../assets/css/PlanetPage.scss';
import Image1 from '../assets/images/nano-hamsters.jpg';
import Image2 from '../assets/images/mivina.png';
import Image3 from '../assets/images/proxima-century.jpg';

export default class End extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    setTimeout(this.load.bind(this), 4000);
  }

  load() {
    this.setState({
      isLoading: false,
    });
  }

  render() {
    const {isLoading} = this.state;
    if (isLoading) {
      return (
        <>
          <Particles options={loadingParticles}/>

          <div className="center-block">
            <div className="loading-text parallax-btn" onClick={this.load.bind(this)}>
              Всесвіту близько 13.798 млрд років! Так що ми завжди будемо молодими :)
            </div>
          </div>
        </>
      );
    }
    return (
      <>
        <Particles options={endParticles}/>

        <div className="page">
          <div className="page-text">
            <b>Ухухух! Нажаль, наші нано-хом'ячки втомилися. Вони зупинилися на найближчій екзопланеті Проксимо Центавра b. Дамо їм змогу перепочити та підкріпитися мівіною. Сподіваємось, вам сподобалась наша подорож!</b>
            <div className="page-image"><img src={Image1} alt="нано хом'ячки :)" /></div>
            <div className="page-image"><img src={Image2} alt="мівіна для олі" /></div>
            <div className="page-image"><img src={Image3} alt="проксимо центавра" /></div>
          </div>
          <Link to="/" className="parallax-btn next-btn">ПОЧАТИ ПОДОРОЖ СПОЧАТКУ</Link>
        </div>
      </>
    );
  }
}