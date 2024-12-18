import Footer from "../attach/footer"
import MessageBlock from "../attach/message"
import Navblock4 from "../attach/navblock4"
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import { useEffect } from "react";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

function ListingPage() {
  const params = useParams()
  const id = params.id
  const [latitude, setlatitude] = useState()
  const [longitude, setlongitude] = useState()
  const navigate = useNavigate()
  const [house, setHouse] = useState()
  let getHouseF = async () => {
    let getHouseData = await axios({
      method: "get",
      url: `https://672db6fffd89797156435d34.mockapi.io/house/${id}`
    })
    if (getHouseData.status == 200) {
      if (getHouseData.data.state == "true") {
        setHouse(getHouseData.data)
        setlatitude(getHouseData.data.latitude)
        setlongitude(getHouseData.data.longitude)
      }
      else {
        alert("Объявление еще не одобрено администратором!")
        navigate(-1)
      }

    }
    else {
      setHouse([])
    }
  }



  



  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  const position = [latitude, longitude];
  function ListingPage(id) {
    window.location.href = '/Pages/ListingPage/' + id
  }
  function openpicture(id) {
    window.location.href = '/Pages/Picture/' + id


  }

  useEffect(() => {
    getHouseF();
  }, [])
  return (
    <div className="MainBlock">
      <Navblock4 />
      {house != null ?
        <>
          <div className="listingMainContainer">
            <div className="row">
              <div className="col-12">
                <span className=" rounded-pill listingspan listingspan1">{house.category}</span>
                <span className=" rounded-pill listingspan listingspan3">
                  <span className="listingicon">
                    <i class="fa-solid fa-tag text-white listingIconPrice"></i>
                  </span>
                  {house.pricenight}  сом - {house.priceday}  сом
                </span>
              </div>
              <div className="col-12 mt-2">
                <span className="listinH1">  «{house.name}»</span>
              </div>
              <div className="col-12 mt-1">
                <i class="fa-solid fa-location-dot fa-location-dot3 p-0 m-0"></i>
                <span className="text-secondary geodescritplisting">"{house.region}"</span>
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="col-6 mt-5">
                    <div className="listingImgLeftContainer" onClick={() => openpicture(house.id)}>
                      <img className="listimg" src={house.img1} alt="" />
                    </div>
                  </div>
                  <div className="col-6 mt-5">
                    <div className="row">
                      <div className="col-12">
                        <div className="row">
                          <div className="col-6">
                            <div className="listingImgLeftContainer" onClick={() => openpicture(house.id)}>
                              <img className="listimg2" src={house.img2} alt="" />
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="listingImgLeftContainer" onClick={() => openpicture(house.id)}>
                              <img className="listimg2" src={house.img3} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 mt-3">
                        <div className="row">
                          <div className="col-6">
                            <div className="listingImgLeftContainer" onClick={() => openpicture(house.id)}>
                              <img className="listimg2" src={house.img4} alt="" />
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="listingImgLeftContainer" onClick={() => openpicture(house.id)}>
                              <img className="listimg2" src={house.img5} alt="" />
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
                    <div className="row">
                      <div className="col-12">
                        <h4>Описание</h4>
                      </div>
                      <div className="col-12">
                        <p className="listdescripthouse">{house.description}</p>
                      </div>
                      <div className="col-12 mt-5">
                        <span className="listingspan6 rounded-pill text-dark">
                          <i class="fa-solid fa-phone listphone"></i> <a href={"tel:+" + house.tel}>+{house.tel}</a>
                        </span>
                      </div>
                      <div className="col-12 mt-5">
                        <span className="listsocialnetwork listinstagram">
                          <a className='text-white' style={{ textDecoration: "none" }}>Instagram </a>
                        </span>
                        <span className="listsocialnetwork listwhatsapp">
                          <a className='text-white' style={{ textDecoration: "none" }} href={"https://wa.me/" + house.whatsapp}>whatsapp </a>
                        </span>
                      </div>
                      <div className="col-12 mt-3">
                        <span className="listinH1">Особенности</span>
                      </div>
                      <div className="col-12 mt-3">
                        <div className="FeaturesBlock">
                          <div className="Features">
                            {house.peculiarities}
                          </div>
                        </div>
                      </div>
                      <div className="col-12 mt-5">
                        <span className="listinH1">Расположение</span>
                      </div>
                      <div className="col-12 mt-5">
                        <div className="listmapblock">
                          <MapContainer className="mapposition" center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
                            <TileLayer
                              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <Marker position={position}>
                              <Popup>Это Ош!</Popup>
                            </Marker>
                          </MapContainer>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
        :
        <>
        </>
      }
      <Footer />
      <MessageBlock />
    </div >
  )
}
export default ListingPage