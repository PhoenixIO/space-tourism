import {Component} from 'react';
import {Link} from 'react-router-dom';
import Particles from 'react-tsparticles';
import startParticles from '../particles/start.json';
import loadingParticles from '../particles/loading.json';

import '../assets/css/PlanetPage.scss';
import Image1 from '../assets/images/andromeda_1.jpg';
import Image2 from '../assets/images/andromeda_2.jpg';
import Image3 from '../assets/images/andromeda_3.jpg';
import Image4 from '../assets/images/andromeda_4.jpg';

export default class Andromeda extends Component {
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
              Щоб космічний корабель летів швидко, наші нано-хом'ячки п'ють чай!
            </div>
          </div>
        </>
      );
    }
    return (
      <>
        <Particles options={startParticles}/>

        <div className="page">
          <div className="page-text">
            <b>2.520млн світлових років! Наша зупинка - Галактика Андромеда!</b>
            <div className="page-image"><img src={Image1} alt="andromeda" /></div>
            <p>Галактика Андромеди або Туманність Андромеди є найближчою великою галактикою до Чумацького Шляху, а також одна з небагатьох галактик, яку можна спостерігати з Землі.</p>
            <div className="page-image"><img src={Image2} alt="andromeda" /></div>
            <p>За підрахунками вчених, приблизно через чотири мільярди років Андромеда і наша галактика зіткнуться та утвориться нова гігантська еліптична галактика.</p>
            <div className="page-image"><img src={Image3} alt="andromeda" /></div>
            <p>Чумацький Шлях може містити від 100 до 400 мільярдів зірок. Але це ніщо в порівнянні з Андромедою, в якій може міститися близько одного трильйона.</p>
            <div className="page-image"><img src={Image4} alt="andromeda" /></div>
            <p>Колись галактика Андромеди вважалася туманністю. Туманності представляють собою величезні скупчення газу, пилу, водню, гелію і плазми, в яких народжуються нові зірки. Дуже віддалені від нас галактики нерідко помилково приймалися за ці масивні скупчення. У 1924 році астроном Едвін Хаббл оголосив, що спіральна туманність Андромеди насправді є галактикою і Чумацький Шлях не є єдиною галактики у Всесвіті.</p>
          </div>
          <div className="next-btn-wrapper">
            <Link to="/end" className="parallax-btn next-btn">ПРИЗЕМЛИТИСЯ</Link>
          </div>
        </div>
      </>
    );
  }
}