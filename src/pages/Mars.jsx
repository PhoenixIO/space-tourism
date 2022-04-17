import {Component} from 'react';
import {Link} from 'react-router-dom';
import Particles from 'react-tsparticles';
import marsParticles from '../particles/mars.json';
import loadingParticles from '../particles/loading.json';

import '../assets/css/PlanetPage.scss';
import Image1 from '../assets/images/mars_1.png';
import Image2 from '../assets/images/mars_2.png';
import Image3 from '../assets/images/mars_3.jpg';
import Image4 from '../assets/images/mars_4.jpg';
import Image5 from '../assets/images/mars_5.jpg';

export default class Mars extends Component {
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
              Наші нано-хом'ячки налаштовують двигуни!
            </div>
          </div>
        </>
      );
    }
    return (
      <>
        <Particles options={marsParticles}/>

        <div className="page">
          <div className="page-text">
            <b>Наша наступна зупинка - Марс!</b>
            <div className="page-image"><img src={Image1} alt="mars" /></div>
            <p>Марс – четверта планета від Сонця (після Меркурія, Венери і Землі)</p>
            <div className="page-image"><img src={Image2} alt="mars" /></div>
            <p>У Марса деякі риси схожі з нашою рідною Землею. Його клімат має сезонний характер, тут є полярні шапки, вулкани, каньйони та атмосфера.</p>
            <div className="page-image"><img src={Image3} alt="mars" /></div>
            <p>Температура на Марсі може досягати +20 °C і опускатися до -153 °C. Все залежить від часу доби і року. Клімат на Марсі значно холодніший і більш сухий (на відміну від земного). Основною причиною різниці є відстань від Сонця до четвертої планети.</p>
            <div className="page-image"><img src={Image4} alt="mars" /></div>
            <p>Гравітація на поверхні Марса є меншою, ніж на Землі. Якби ви стояли на марсіанській поверхні, ви б відчували тільки третину земної гравітації. У зв'язку з цим, людина могла б, наприклад, підстрибнути в 3 рази вище, ніж на Землі.</p>
            <div className="page-image"><img src={Image5} alt="mars" /></div>
            <p>Популярною є ідея колонізації цієї планети, оскільки її умови є найбільш комфортними для нас серед інших планет. Побажаємо удачі Ілону Маску та іншим вченим, а ми рухаємось далі!</p>
          </div>
          <Link to="/saturn" className="parallax-btn next-btn">НАСТУПНА СТАНЦІЯ</Link>
        </div>
      </>
    );
  }
}