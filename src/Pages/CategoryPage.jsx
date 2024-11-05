import MessageBlock from "../attach/message";
import Navblock from "../attach/navblock"
import Navblock2 from "../attach/navblock2"
import Navblock4 from "../attach/navblock4"
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});


function CategoryPage() {
  const position = [40.528521, 72.796912];
  return (
    <div className="MainBlock">
      <Navblock4 />
      <div className="LeftBlockCategory">
        <div className="row">
          <div className="col-12 leftblockinp text-center">
            <div className="inpBlockcategory">
              <input className="inpdescript" placeholder="Месторасположение" type="text" name="" id="" />
              <i className="fa-solid fa-location-dot fa-location-dot2"></i>
            </div>
          </div>
          <div className="col-12 text-center mb-5 pt-4">
            <button className="btnCategory">
              <b>Категории</b> <i class="fa-solid fa-angle-down text-danger iconCategory mt-1"></i>
            </button>
            <button className="btnCategory">
              <b>Больше фильтров</b> <i class="fa-solid fa-angle-down text-danger iconCategory mt-1"></i>
            </button>
            <button className="btnCategory">
              <b>Фильтр по цене</b> <i class="fa-solid fa-angle-down text-danger iconCategory mt-1"></i>
            </button>
            <button className="btnCategory">
              <b> Рейтинг</b> <i class="fa-solid fa-angle-down text-danger iconCategory mt-1"></i>
            </button>
          </div>
          <div className="col-12 showimg text-center">
            <div className="row">
              <div className="col-12 d-flex onblockimg2 mt-5">
                <div className="showimg2 border">
                  <div className="inshowimg2">
                    <button className="btndescriptcategory">
                      Недвижимость
                    </button>
                  </div>
                  <div className="inshowimg2descript">
                    <div className="showimg2descriptleft">
                      <h4>Особняк превосходным видом</h4>
                      <p>17 Садовая, Бишкек, Кыргызстан</p>
                    </div>
                    <div className="showimg2descriptright">
                      <button className="rounded-pill btnlikeCategory border">
                        <i class="fa-solid fa-heart iconbtnlikeCategory"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 d-flex onblockimg2 mt-5">
                <div className="showimg2 border">
                  <div className="inshowimg2">
                    <button className="btndescriptcategory">
                      Недвижимость
                    </button>
                  </div>
                  <div className="inshowimg2descript">
                    <div className="showimg2descriptleft">
                      <h4>Особняк превосходным видом</h4>
                      <p>17 Садовая, Бишкек, Кыргызстан</p>
                    </div>
                    <div className="showimg2descriptright">
                      <button className="rounded-pill btnlikeCategory border">
                        <i class="fa-solid fa-heart iconbtnlikeCategory"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 d-flex onblockimg2 mt-5">
                <div className="showimg2 border">
                  <div className="inshowimg2">
                    <button className="btndescriptcategory">
                      Недвижимость
                    </button>
                  </div>
                  <div className="inshowimg2descript">
                    <div className="showimg2descriptleft">
                      <h4>Особняк превосходным видом</h4>
                      <p>17 Садовая, Бишкек, Кыргызстан</p>
                    </div>
                    <div className="showimg2descriptright">
                      <button className="rounded-pill btnlikeCategory border">
                        <i class="fa-solid fa-heart iconbtnlikeCategory"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 text-center mt-5 mb-3">
                <b>
                  © All Rights Reserved. Все права защищены. Doma.kg
                </b>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="RightBlockCategory">
        <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>Это Ош!</Popup>
          </Marker>
        </MapContainer>
      </div>
      <MessageBlock/>
    </div>
  )
}
export default CategoryPage