import {Component} from 'react';
import {Link} from 'react-router-dom';
import Particles from 'react-tsparticles';
import startParticles from '../particles/start.json';
import loadingParticles from '../particles/loading.json';

import '../assets/css/PlanetPage.scss';
import Image1 from '../assets/images/earth_1.jpg';
import Image2 from '../assets/images/earth_2.jpg';
import Image3 from '../assets/images/earth_3.png';
import Image4 from '../assets/images/earth_4.jpg';
import Image5 from '../assets/images/earth_5.jpg';

export default class Start extends Component {
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
        <div className="app">
          <Particles options={loadingParticles}/>

          <div className="center-block">
            <div className="loading-text parallax-btn" onClick={this.load.bind(this)}>
              Встановлюємо зв'язок з космічною станцією!
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="app">
        <Particles options={startParticles}/>

        <div className="page">
          <div className="page-text">
            <b>Поехали ©!</b>
            <p>Перша зупинка - наша рідна Земля</p>
            <div className="page-image"><img src={Image1} alt="earth" /></div>
            <p>Земля, як планета з'явилась понад 4,5 мільярдів років тому. До появи життя на планеті від народження Землі пройшло ще декілька тисяч мільйонів років і відносно недавно, за геологічними мірками, близько чотирьох мільйонів років тому з'явились люди.</p>
            <div className="page-image"><img src={Image2} alt="earth" /></div>
            <p>Земля займає найбільш вдале місце в космосі для зародження і підтримання життя. Навколосонячна орбіта Землі знаходиться в межах зони з оптимальною температурою для існування води у рідкому вигляді, а це є обов'язковою умовою для існування форм життя.</p>
            <div className="page-image"><img src={Image3} alt="earth" /></div>
            <p>Якщо б у нас не було Місяця, день на Землі тривав би не більше шести годин.</p>
            <div className="page-image"><img src={Image4} alt="earth" /></div>
            <p>70% поверхні планети займає вода. Земля має ще й іншу назву — Блакитна планета. Інші 30% площі є континентальною корою. Її товщина від 35 до 45 км.</p>
            <div className="page-image"><img src={Image5} alt="earth" /></div>
            <p>Нажаль, за останню сотню років екологічний стан на нашій планеті рухається не в кращу сторону. Сподіваємось людство вирішить свої проблеми. А ми рухаємось далі!</p>
          </div>
          <div className="next-btn-wrapper">
            <Link to="/mars" className="parallax-btn next-btn">НАСТУПНА СТАНЦІЯ</Link>
          </div>
        </div>
      </div>
    );
  }
}