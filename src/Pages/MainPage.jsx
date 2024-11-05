import Navblock from "../attach/navblock"
import Navblock2 from "../attach/navblock2"
import { useEffect, useState } from "react";
import $ from 'jquery';
import Footer from "../attach/footer";
import MessageBlock from "../attach/message";
function MainPage() {

  //


  function Quey() {
    $('.block51').fadeIn()
  }
  function Quey2() {
    $('.block52').fadeOut()
    $('.block50').css({ "background-color": "rgba(0, 0, 0, 0.3)", "transition": "500ms" })
  }
  function Quey3() {
    $('.block52').fadeIn()
  }
  function Quey4() {
    $('.block51').fadeOut()
    $('.block50').css({ "background-color": "rgba(0, 0, 0, 0.6)", "transition": "500ms" })
  }

  function ListingPageF(){
    window.location.href='/Pages/ListingPage'
  }
  



  ///
  function CategoryPage() {
    window.location.href = '/Pages/CategoryPage'
  }



  const [hovered, setHovered] = useState(true);
  if (hovered == true) {
    Quey2()
    setTimeout(Quey, 500)
  }
  else {
    Quey4()
    setTimeout(Quey3, 500)
  }


  return (
    <div className="MainBlock">
      <div className="Block1">
        <div className="onBlockCover">
          <Navblock />
          <Navblock2 />
          <div className="LocationBlock">
            <div className="locationInBlock rounded p-4">
              <div className="row">
                <div className="col-12">
                  <h2>Найдем, где остановится!</h2>
                  <h4 className="descriptfloat">Квартиры, отели, гостевые дома 3000 вариантов</h4>
                </div>
                <div className="col-12 text-center">
                  <div className="inplocationblock ">
                    <input className="inplocation ps-3" type="text" name="" id="" placeholder="Куда едем" />
                    <i className="fa-solid fa-location-dot fa-location-dot2"></i>
                  </div>
                  <div className="inplocationblock2 mt-4">
                    <input className="inplocation2 ps-3" disabled type="text" name="" id="" placeholder="Заезд-Отъезд" />
                    <i class="fa-solid fa-calendar-days"></i>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-danger rounded-pill mt-4 btnlocation2 ps-4 pe-4">ПОИСК</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="Block2">
        <div className="row">
          <div className="col-12 text-center mt-3">
            <p className="descripthouse">Поиск по типу размещения</p>
          </div>
          <div className="col-12 d-flex redlinecol">
            <div className="redLine"></div>
          </div>
          <div className="col-12 mt-2 text-center">
            <p className="descripthouse2">Основные типы недвижимости</p>
          </div>
          <div className="col-12 d-flex redlinecol mt-3 mb-5 categoryRealEstatecol">
            <div className="categoryRealEstate" onClick={CategoryPage}>
              <i className="fa-regular fa-building iconREstate m-2"></i>
              <span className="NameHouse m-2">Дом</span>
              <span className="rounded-pill ps-3 pe-3 m-2 lightGray">
                30
              </span>
            </div>
            <div className="categoryRealEstate" onClick={CategoryPage}>
              <i class="fa-solid fa-building-user iconREstate m-2"></i>
              <span className="NameHouse m-2">Квартира</span>
              <span className="rounded-pill ps-3 pe-3 m-2 lightGray" >
                30
              </span>
            </div>
            <div className="categoryRealEstate" onClick={CategoryPage}>
              <i class="fa-solid fa-person-shelter iconREstate m-2"></i>
              <span className="NameHouse m-2">Комната</span>
              <span className="rounded-pill ps-3 pe-3 m-2 lightGray">
                30
              </span>
            </div>
            <div className="categoryRealEstate" onClick={CategoryPage}>
              <i class="fa-solid fa-hotel iconREstate m-2"></i>
              <span className="NameHouse m-2 ">Хостел</span>
              <span className="rounded-pill ps-3 pe-3 m-2 lightGray">
                30
              </span>
            </div>
            <div className="categoryRealEstate" onClick={CategoryPage}>
              <i class="fi fi-sr-home iconREstate"></i>
              <span className="NameHouse m-2">Юрта</span>
              <span className="rounded-pill ps-3 pe-3 m-2 lightGray">
                30
              </span>
            </div>
          </div>
          <div className="col-12 text-center mt-5">
            <p className="descripthouse">Последние поступления</p>
          </div>
          <div className="col-12 d-flex redlinecol">
            <div className="redLine"></div>
          </div>
          <div className="col-12 mt-2 text-center">
            <p className="descripthouse2">Недавно добавленные объявления</p>
          </div>
          <div className="col-12 main2">
            <div className="ShowHouseBlock">
              <div className="HouseBlock rounded" onClick={ListingPageF}>
                <div className="DarkHouseBlock rounded">
                  <div className="row">
                    <div className="col-12 pt-3">
                      <span className="bg-white ps-1 pe-3 rounded-pill text-secondary p-1">
                        <i class="fa-solid fa-unlock-keyhole text-white bg-success p-1 rounded-pill"></i> 4 500  сом - 7 500  сом
                      </span>
                      <button className="btn btn-danger mt-5 pt-0 pb-0 rounded-pill"> недвижимость</button>
                    </div>
                    <div className="col-12 text-white mt-5" >
                      <div className="row">
                        <div className="col-8">
                          <span className="descripthouse2">Отель в с. Сары Ой</span><br />
                          <span className="descripthouse3">Сары Ой, Иссык Куль</span>
                        </div>
                        <div className="col-4">
                          <button className="rounded-pill btnlike2 border">
                            <i class="fa-solid fa-heart text-white"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="HouseBlock rounded" onClick={CategoryPage}>
                <div className="DarkHouseBlock rounded" ></div>
              </div>
              <div className="HouseBlock rounded" onClick={CategoryPage}>
                <div className="DarkHouseBlock rounded" ></div>
              </div>
            </div>
          </div>
          <div className="col-12 text-center mt-5 mb-5">
            <button className="btn btn-danger rounded-pill ps-4 pe-4 pt-2 pb-2 btnSee" onClick={CategoryPage}>СМОТРЕТЬ ВСЕ</button>
          </div>
          <div className="col-12 text-center mt-5">
            <p className="descripthouse">Наши направления</p>
          </div>
          <div className="col-12 d-flex redlinecol">
            <div className="redLine"></div>
          </div>
          <div className="col-12 d-flex redlinecol mt-5 mb-5 categoryRealEstatecol">
            <div className="categoryRealEstate" onClick={CategoryPage}>
              <i className="fa-regular fa-building iconREstate m-2"></i>
              <span className="NameHouse m-2">Бишкек</span>
              <span className="rounded-pill ps-3 pe-3 m-2 lightGray">
                30
              </span>
            </div>
            <div className="categoryRealEstate" onClick={CategoryPage}>
              <i className="fa-regular fa-building iconREstate m-2"></i>
              <span className="NameHouse m-2">Токмак</span>
              <span className="rounded-pill ps-3 pe-3 m-2 lightGray" >
                30
              </span>
            </div>
            <div className="categoryRealEstate" onClick={CategoryPage}>
              <i className="fa-regular fa-building iconREstate m-2"></i>
              <span className="NameHouse m-2">Чуй</span>
              <span className="rounded-pill ps-3 pe-3 m-2 lightGray">
                30
              </span>
            </div>
          </div>
          <div className="col-12 mt-5 mb-5">
            <div className="onBlock4">
              <div className="block4 rounded">
                <div className="row">
                  <div className="col-12 mt-3">
                    <h2>
                      Сдавайте жильё на Doma.kg
                    </h2>
                  </div>
                  <div className="col-12">
                    <p>Добавляйте свои объекты бесплатно и зарабатывайте вместе с нами!</p>
                  </div>
                  <div className="col-12 mt-3">
                    <span className="telBlock ps-3 pe-3 pt-2 pb-2 rounded-pill">Узнать подробнее по тел: (996) 507 10 30 50</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 mb-5">
            <div className="infotel">
              <div className="inInfotel text-center text-white">
                <div
                  className="block50"
                  onMouseEnter={() => setHovered(false)}
                  onMouseLeave={() => setHovered(true)}
                >
                  <div className="block51">
                    Добавляйте свои объекты бесплатно и зарабатывайте вместе с нами!
                  </div>
                  <div className="block52">
                    Узнать подробнее по тел: (996) 507 10 30 50
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <MessageBlock />
    </div>
  )
}
export default MainPage