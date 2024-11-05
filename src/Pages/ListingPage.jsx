import Footer from "../attach/footer"
import Navblock4 from "../attach/navblock4"

function ListingPage() {
  return (
    <div className="MainBlock">
      <Navblock4 />
      <div className="listingMainContainer">
        <div className="row">
          <div className="col-12">
            <span className=" rounded-pill listingspan listingspan1">Недвижимость</span>
            <span className=" rounded-pill listingspan listingspan2">Квартира</span>
            <span className=" rounded-pill listingspan listingspan3">
              <span className="listingicon">
                <i class="fa-solid fa-tag text-white listingIconPrice"></i>
              </span>
              10 000  сом - 12 000  сом
            </span>
          </div>
          <div className="col-12 mt-2">
            <span className="listinH1">Квартира в ЦО «Palm Beach»</span>
          </div>
          <div className="col-12 mt-1">
            <i class="fa-solid fa-location-dot fa-location-dot3 p-0 m-0"></i>
            <span className="text-secondary geodescritplisting">ЦО "Palm Beach"</span>
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-6 mt-5">
                <div className="listingImgLeftContainer">
                  <img className="listimg" src="https://doma.kg/wp-content/uploads/2024/07/6bc50f63-f04d-4c39-92ab-825cf2812ecf.jpg" alt="" />
                </div>
              </div>
              <div className="col-6 mt-5">
                <div className="row">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-6">
                        <div className="listingImgLeftContainer">
                          <img className="listimg2" src="https://doma.kg/wp-content/uploads/2024/07/6bc50f63-f04d-4c39-92ab-825cf2812ecf.jpg" alt="" />
                        </div>
                      </div>
                      <div className="col-6">
                      <div className="listingImgLeftContainer">
                          <img className="listimg2" src="https://doma.kg/wp-content/uploads/2024/07/6bc50f63-f04d-4c39-92ab-825cf2812ecf.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mt-3">
                    <div className="row">
                      <div className="col-6">
                      <div className="listingImgLeftContainer">
                          <img className="listimg2" src="https://doma.kg/wp-content/uploads/2024/07/6bc50f63-f04d-4c39-92ab-825cf2812ecf.jpg" alt="" />
                        </div>
                      </div>
                      <div className="col-6">
                      <div className="listingImgLeftContainer">
                          <img className="listimg2" src="https://doma.kg/wp-content/uploads/2024/07/6bc50f63-f04d-4c39-92ab-825cf2812ecf.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 mt-4">
            <div className="row pt-4">
              <div className="col-8">
                <p className="listdescripthouse">ID 9529</p>
                <p className="listdescripthouse">Квартира в ЦО «Palm Beach»  вместительностью до 5и человек!</p>
                <p className="listdescripthouse">Сутки: Заезд 14.00 — Выезд 12.00</p>
                <p className="listdescripthouse">В коттедже имеется всё необходимое для комфортного проживания.</p>
                <p className="listdescripthouse">Цены могут варьироваться в зависимости от сезона и потока клиентов.</p>
              </div>
              <div className="col-4">
                <div className="bookApartment">
                  <b> Бронирование</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default ListingPage