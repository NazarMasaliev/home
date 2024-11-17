import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Picture from "../Pages/Picture";
import { useEffect, useState } from "react";
import $ from 'jquery';
import { useParams } from 'react-router';
import axios from 'axios';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

function AdminShowAdv() {
  const params = useParams()
  const id = params.id



  ///







  const [house, setHouse] = useState()
  let getHouseF = async () => {
    let getHouseData = await axios({
      method: "get",
      url: `https://672db6fffd89797156435d34.mockapi.io/house/${id}`
    })
    if (getHouseData.status == 200) {
      setHouse(getHouseData.data)
      console.log(getHouseData)
      setlatitude(getHouseData.data.latitude)
      setlongitude(getHouseData.data.longitude)
    }
    else {
      setHouse([])
    }
  }


  let getHouseUpdateTrueF = async () => {
    let getHouseUpdateData = await axios({
      method: "put",
      url: `https://672db6fffd89797156435d34.mockapi.io/house/${id}`,
      data:{
        state: "true"
      }
    })
    if (getHouseUpdateData.status == 200) {
      console.log(getHouseUpdateData)
      window.location.href = '/Admin/AdminShowAdv/' + id
    }
  }
  let getHouseUpdateFalesF = async () => {
    let getHouseUpdateData = await axios({
      method: "put",
      url: `https://672db6fffd89797156435d34.mockapi.io/house/${id}`,
      data:{
        state: "false"
      }
    })
    if (getHouseUpdateData.status == 200) {
      console.log(getHouseUpdateData)
      window.location.href = '/Admin/AdminShowAdv/' + id
    }
  }


  const [latitude, setlatitude] = useState()
  const [longitude, setlongitude] = useState()




  const position = [latitude, longitude];
  function openpicture(id) {
    window.location.href= '/Pages/Picture/'+id


  }


  //


  //

  useEffect(() => {
    getHouseF();
  }, [])

  return (
    <div className="MainBlock">
      <div className="listingMainContainer2 mb-5">
        {house != null ?
          <>
            <div className="row">
              <div className="col-12">
                <span className=" rounded-pill listingspan listingspan1">{house.category}</span>
                <span className=" rounded-pill listingspan listingspan3">
                  <span className="listingicon">
                    <i class="fa-solid fa-tag text-white listingIconPrice"></i>
                  </span>
                  {house.pricenight}  сом - {house.priceday}
                </span>
              </div>
              <div className="col-12 mt-2">
                <span className="listinH1">{house.name}</span>
              </div>
              <div className="col-12 mt-1">
                <i class="fa-solid fa-location-dot fa-location-dot3 p-0 m-0"></i>
                <span className="text-secondary geodescritplisting">ЦО "{house.region}"</span>
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
                        <button className='rounded' onClick={getHouseUpdateTrueF}>
                          Одобрить объявления
                        </button>
                        &nbsp;
                        <button className='rounded' onClick={getHouseUpdateFalesF}>
                          Не одобрять объявление
                        </button>
                      </div>
                      <div className='col-12 mt-3'>
                        <div className="row">
                          <div className="col-6 text-center">
                            Статус:
                            &nbsp;<span className='bg-secondary text-white ps-3 pe-3 pt-1 pb-1 rounded'>{house.state}</span>
                          </div>
                          <div className="col-6">

                          </div>
                        </div>
                      </div>
                      <div className="col-12 mt-3">
                        <h4>Описание</h4>
                        <p>{house.description}</p>
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
          </>
          :
          <>
            no result
          </>
        }

      </div>
    </div>
  )
}
export default AdminShowAdv