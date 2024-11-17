import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import axios from "axios"

function AdminRequestUpdate() {
  const navigate = useNavigate()
  function goBack() {
    navigate(-1)
  }
  const params = useParams()
  const id = params.id
  const [house, setHouse] = useState()
  let getHouseF = async () => {
    let getHouseData = await axios({
      method: "get",
      url: `https://672db6fffd89797156435d34.mockapi.io/house/${id}`
    })
    if (getHouseData.status == 200) {
      setHouse(getHouseData.data)
      console.log(getHouseData)
      setName2(getHouseData.data.name)
      setaddress2(getHouseData.data.address)
      setdescription2(getHouseData.data.description)
      setpeculiarities2(getHouseData.data.peculiarities)
      setregion2(getHouseData.data.region)
      setpriceday2(getHouseData.data.priceday)
      setpricenight2(getHouseData.data.pricenight)
      settel2(getHouseData.data.tel)
      setwhatsapp2(getHouseData.data.whatsapp)
      setinstagram2(getHouseData.data.instagram)
      settelegram2(getHouseData.data.telegram)
      setlocationlink2(getHouseData.data.locationlink)
      setcategory2(getHouseData.data.category)
    }
    else {
      setHouse([])
    }
  }

  const [name2, setName2] = useState()
  const [address2, setaddress2] = useState()
  const [description2, setdescription2] = useState()
  const [peculiarities2, setpeculiarities2] = useState()
  const [region2, setregion2] = useState()
  const [priceday2, setpriceday2] = useState()
  const [pricenight2, setpricenight2] = useState()
  const [tel2, settel2] = useState()
  const [whatsapp2, setwhatsapp2] = useState()
  const [instagram2, setinstagram2] = useState()
  const [telegram2, settelegram2] = useState()
  const [locationlink2, setlocationlink2] = useState()
  const [category2, setcategory2] = useState()

  const [name, setName] = useState(name2)
  const [address, setaddress] = useState(address2)
  const [description, setdescription] = useState(description2)
  const [peculiarities, setpeculiarities] = useState(peculiarities2)
  const [region, setregion] = useState(region2)
  const [priceday, setpriceday] = useState(priceday2)
  const [pricenight, setpricenight] = useState(pricenight2)
  const [tel, settel] = useState(tel2)
  const [whatsapp, setwhatsapp] = useState(whatsapp2)
  const [instagram, setinstagram] = useState(instagram2)
  const [telegram, settelegram] = useState(telegram2)
  const [locationlink, setlocationlink] = useState(locationlink2)
  const [category, setcategory] = useState(category2)

  
  let getHouseUpdateTrueF = async () => {
    let getHouseUpdateData = await axios({
      method: "put",
      url: `https://672db6fffd89797156435d34.mockapi.io/house/${id}`,
      data:{
        name:name,
        address:address,
        description:description,
        peculiarities:peculiarities,
        region:region,
        priceday:priceday,
        pricenight:pricenight,
        tel:tel,
        whatsapp:whatsapp,
        instagram:instagram,
        telegram:telegram,
        locationlink:locationlink,
        category:category
      }
    })
    if (getHouseUpdateData.status == 200) {
      window.location.href = '/Admin/AdminShowAdv/'+id
    }
  }




  useEffect(() => {
    getHouseF()
  }, [])

  return (
    <div className="container-fluid">
      {house != null ?
        <>
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-12 mt-2">
                  <div className="row">
                    <div className="col-12 border-bottom pb-3 pt-3 ps-5">
                      <div className="row">
                        <div className="col-6">
                          <h1>Страница обновления объявления</h1>
                        </div>
                        <div className="col-6 text-end pe-5">
                          <button className="btn btn-secondary" onClick={goBack}>
                            Вернуться назад
                          </button>
                        </div>
                        <div className="col-12 mt-3 ps-5">
                          <h3>Название жилья:&nbsp;<span style={{ color: "red" }}>"{house.name}"</span></h3>
                        </div>
                      </div>

                    </div>
                    <div className="col-12 ps-5 blockads">
                      <div className="row">
                        <div className="col-12 mt-5">
                          <h4>Название</h4>
                        </div>
                        <div className="col-12 mt-2">
                          <input onChange={(e) => setName(e.target.value)} className="rounded border" type="text" name="" id="" placeholder="Название" />
                        </div>
                        <div className="col-12 mt-5">
                          <h4>Укажите точный адрес</h4>
                        </div>
                        <div className="col-12 mt-2">
                          <input onChange={(e) => setaddress(e.target.value)} className="rounded border w-50" type="text" name="" id="" placeholder="Область/регион/город/адрес" />
                        </div>
                        <div className="col-12 mt-5">
                          <h4>
                            Загрузите фото <span className="text-secondary">(минимум 4 фотографи)</span>
                          </h4>
                          <div className="col-12 mt-2">
                            <input className="rounded border" type="file" name="files" multiple disabled />
                          </div>
                          <div className="col-12 mt-5">
                            <h4>Описание</h4>
                          </div>
                          <div className="col-12 mt-2">
                            <textarea onChange={(e) => setdescription(e.target.value)} className="descripthouseprofilPage" placeholder="Описание" name="" id="" cols="30" rows="10"></textarea>
                          </div>
                          <div className="col-12 mt-5">
                            <h4>Особенности</h4>
                          </div>
                          <div className="col-12 mt-2 mb-5">
                            <textarea onChange={(e) => setpeculiarities(e.target.value)} className="descripthouseprofilPage" placeholder="Описание" name="" id="" cols="30" rows="10"></textarea>
                            <br />
                            <small className="text-secondary">
                              (Например: Бесплатный wi-fi, парковка, фитнес-центр, 3-х разовое питание)
                            </small>
                          </div>
                          <div className="col-12 mt-5">
                            <h4>Регионы</h4>
                          </div>
                          <div className="col-12 mt-2 mb-5">
                            <select onChange={(e) => setregion(e.target.value)} name="" id="">
                              <option value="">Чуй</option>
                              <option value="">Ош</option>
                              <option value="">Жалалабад</option>
                              <option value="">Иссык-куль</option>
                              <option value="">Талас</option>
                              <option value="">Баткен</option>
                              <option value="">Наарын</option>
                            </select>
                          </div>
                          <div className="col-12 mt-5">
                            <h4>Категории</h4>
                          </div>
                          <div className="col-12 mt-2 mb-5">
                            <select onChange={(e) => setcategory(e.target.value)} name="" id="">
                              <option value="Дом">Дом</option>
                              <option value="Квартира">Квартира</option>
                              <option value="Комната">Комната</option>
                              <option value="Хостел">Хостел</option>
                              <option value="Юрта">Юрта</option>
                            </select>
                          </div>
                          <div className="col-12 mt-5">
                            <h4>Цены</h4>
                          </div>
                          <div className="col-12">
                            Укажите цены в сомах
                          </div>
                          <div className="col-12 mt-2">
                            день: <input onChange={(e) => setpriceday(e.target.value)} className="rounded border" type="number" />
                          </div>
                          <div className="col-12 mt-2 mb-5">
                            ночь: <input onChange={(e) => setpricenight(e.target.value)} className="rounded border" type="number" />
                          </div>
                          <div className="col-12 mt-5">
                            <h4>Контакты</h4>
                          </div>
                          <div className="col-12 mt-2">
                            Телефон для связи: <input onChange={(e) => settel(e.target.value)} className="rounded border" type="text" placeholder="tel" />
                          </div>
                          <div className="col-12 mt-2 ">
                            whatsapp: <input onChange={(e) => setwhatsapp(e.target.value)} className="rounded border" type="text" placeholder="whatsapp" />
                          </div>
                          <div className="col-12 mt-2">
                            instagram: <input onChange={(e) => setinstagram(e.target.value)} className="rounded border" type="text" placeholder="instagram" />
                          </div>
                          <div className="col-12 mt-2">
                            telegram: <input onChange={(e) => settelegram(e.target.value)} className="rounded border" type="text" placeholder="telegram" />
                          </div>
                          <div className="col-12 mt-5">
                            <h4>Местоположение в Google Maps</h4>
                          </div>
                          <div className="col-12 mt-2">
                            Вставьте из Google Maps: <input onChange={(e) => setlocationlink(e.target.value)} className="rounded border" type="text" placeholder="ссылка на адрес" />
                          </div>
                          <div className="col-12 mt-5 mb-5">
                            <button className="btn btn-success" onClick={getHouseUpdateTrueF}>Обновить</button>
                          </div>
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

    </div>
  )
}
export default AdminRequestUpdate