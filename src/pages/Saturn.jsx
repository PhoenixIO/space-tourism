import {Component} from 'react';
import {Link} from 'react-router-dom';
import Particles from 'react-tsparticles';
import saturnParticles from '../particles/saturn.json';
import loadingParticles from '../particles/loading.json';

import '../assets/css/PlanetPage.scss';
import Image1 from '../assets/images/saturn_1.jpg';
import Image2 from '../assets/images/saturn_2.png';
import Image3 from '../assets/images/saturn_3.jpg';
import Image4 from '../assets/images/saturn_4.jpg';
import Image5 from '../assets/images/saturn_5.jpeg';

export default class Saturn extends Component {
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
              У Всесвіті близько 2.000.000.000.000 галактик
            </div>
          </div>
        </>
      );
    }
    return (
      <>
        <Particles options={saturnParticles}/>

        <div className="page">
          <div className="page-text">
            <b>Вжууух! Наша зупинка -  Сатурн!</b>
            <div className="page-image"><img src={Image1} alt="saturn" /></div>
            <p>Сатурн – шоста планета від Сонця і друга за величиною планета в нашій Сонячній системі. Як і Юпітер, планета Сатурн є газовим гігантом.</p>
            <div className="page-image"><img src={Image2} alt="saturn" /></div>
            <p>Вітри у верхніх шарах атмосфери Сатурна можуть досягати швидкості 500 метрів в секунду, що в поєднанні з теплом, що піднімається зсередини планети, спричиняє появу жовтих та золотих смуг.</p>
            <div className="page-image"><img src={Image3} alt="saturn" /></div>
            <p>У Сатурна найширші кільця в Сонячній системі. У Сатурна кільця складаються в основному з шматків льоду і невеликої кількості пилу. Кільця знаходяться понад 120700 км від планети, але надзвичайно тонкі: товщина всього близько 20 метрів.</p>
            <div className="page-image"><img src={Image4} alt="saturn" /></div>
            <p>Титан – це супутник зі складною та щільною атмосферою. Він складається в основному з водного льоду та гірських порід. На його замерзлій поверхні є озера рідкого метану та пейзажі, вкриті замерзлим азотом. Планетарні вчені вважають Титан є можливою гаванню для неземного життя.</p>
            <div className="page-image"><img src={Image5} alt="saturn" /></div>
            <p>Сатурн – остання найвідалленіша планета, яку можна побачити неозброєним оком. Але ми вирушаємо далі!</p>
          </div>
          <Link to="/andromeda" className="parallax-btn next-btn">НАСТУПНА СТАНЦІЯ</Link>
        </div>
      </>
    );
  }
}