function Footer(){
  function MainPage(){
    window.location.href = '/'
  }
  function CategoryPage(){
    window.location.href = '/Pages/CategoryPage'
  }
  return(
    <div className="Block3 border-top mt-5">
        <div className="inBlock3">
          <div className="row">
            <div className="col-6">
              <img className="imglogo" src="https://doma.kg/wp-content/uploads/2024/04/logo-new.webp" alt="" />
              <br />
              <p className="descripthouse4">Квартиры, отели, гостевые дома — 3000 вариантов жилья для поездок по Кыргызстану у тебя в телефоне с возможностью забронировать за 3 клика.</p>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-6 footerNav">
                  <span style={{ fontSize: "30px", color: "black" }}>Навигация</span>
                  <ul className="mt-3 footerul1">
                    <li className="footerulli" onClick={MainPage}>Главная</li>
                    <li className="footerulli" onClick={MainPage}>О нас</li>
                    <li className="footerulli" onClick={CategoryPage}>Контакты</li>
                  </ul>
                </div>
                <div className="col-6 footerNav">
                  <span style={{ fontSize: "30px", color: "black" }}>Контакты</span>
                  <ul className="mt-3 footerul2">
                    <li>г. Бишкек, ул. Ибраимова 103</li>
                    <li>Тел: +996507103050</li>
                    <li>E-Mail: &nbsp;<span style={{ color: "red", cursor: "pointer" }}>doma.kg1@gmail.com</span></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 mt-5 pt-4 pb-4 rounded" style={{ background: "#F6F6F6" }}>
              <div className="row">
                <div className="col-6" style={{ color: "gray" }}>
                  © All Rights Reserved. Все права защищены. Doma.kg
                </div>
                <div className="col-6 iconfooterblock">
                  <i class="fa-brands fa-whatsapp iconfooter"></i>
                  <i class="fa-brands fa-square-facebook iconfooter"></i>
                  <i class="fa-brands fa-instagram iconfooter"></i>
                  <i class="fa-brands fa-adn iconfooter"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
export default Footer