
import './App.css'
import img from './assets/chao.jpg';
import pic1 from './assets/chao-ca-song.jpg';
import pic2 from './assets/chao-chim.jpg';
import pic3 from './assets/chao-luon.jpg';
import pic4 from './assets/chao-sun-nam.jpg';
import { TabButton } from './components/TabButton.jsx';
import { useState } from 'react';
import { ThongTin } from './data.js';

function MainContent(props) {
  return (
    <li className="main-list-item">
      <img src={props.img} alt={props.title} />
      <p>{props.title}</p>
    </li>
  )
}


function AlertBox () {
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [isActivated, setIsActivated] = useState(false);

  function activateHandler() {
    setIsActivated(true);
    setIsAlertVisible(true);
  }

  function confirmHandler() {
    setIsAlertVisible(false);
    setIsActivated(true);
  }

  function cancelHandler() {
    setIsActivated(false);
    setIsAlertVisible(false);
  }

  return (
    <>
      {!isActivated && !isActivated && (<button className='action-btn' onClick={activateHandler}> Activate</button>)}
      {isAlertVisible && (
                <div className='alert-box'>
          <h2>Warning</h2>
          <p>Are you sure you want to activate?</p>
          <button className='confirm-btn' onClick={confirmHandler}>Confirm</button>
          <button className='cancel-btn' onClick={cancelHandler}>Cancel</button>
        </div>
      )}

      {isActivated && (
        <h3 className='success-message'>Mode Activate!</h3>
      )}


    </>
  );
}



function Header() {
  const [selectedButton, setSelectedButton] = useState();
  const handleButtonClick = (selectedButton1) => {
    setSelectedButton(selectedButton1);
  };
  return (
    <>
      <header>
        <img src={img} alt="quangcao" />
        <h1 className="header-title">Cháo dinh dưỡng cao cấp</h1>
        <p className="header-description">Chúng tôi cung cấp các loại cháo dinh dưỡng cao cấp, được chế biến từ nguyên liệu tươi ngon nhất.</p>
      </header>

      <main>
        <h2 className="main-title">Các loại cháo</h2>
        <ul className="main-list">
          <MainContent
            img={pic1}
            title="Cháo cá song"
          />
          <MainContent
            img={pic2}
            title="Cháo chim"
          />
          <MainContent
            img={pic3}
            title="Cháo lươn"
          />
          <MainContent
            img={pic4}
            title="Cháo sụn nấm"
          />
        </ul>

        <menu>
          <TabButton isActive={selectedButton === "chaocasong"} onClick={() => {handleButtonClick("chaocasong")}}>Cháo cá song</TabButton>
          <TabButton isActive={selectedButton === "chaochim"} onClick={() => {handleButtonClick("chaochim")}}>Cháo chim</TabButton>
          <TabButton isActive={selectedButton === "chaoluon"} onClick={() => {handleButtonClick("chaoluon")}}>Cháo lươn</TabButton>
          <TabButton isActive={selectedButton === "chaosunnam"} onClick={() => {handleButtonClick("chaosunnam")}}>Cháo sụn nấm</TabButton>
        </menu>

        {!selectedButton ? (<p>Vui lòng chọn một loại cháo để xem thông tin chi tiết.</p>) : (
          <div className="main-content">
            <h3>{ThongTin[selectedButton].title}</h3>
            <p>{ThongTin[selectedButton].desc}</p>
          </div>
        )}

        <AlertBox />
      </main>
    </>
  )
}

function App() {

  return (
    <>
      <Header />
    </>
  )
}

export default App
