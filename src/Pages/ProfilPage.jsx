import axios from "axios"
import { useEffect, useState } from "react"


function ProfilPage() {
  const [asadvertisement, setadvertisements] = useState(true)
  function asadvertisementOn() {
    setadvertisements(true)
  }
  function asadvertisementOff() {
    setadvertisements(false)
  }
  function MainPage() {
    localStorage.removeItem('id')
    window.location.href = '/Pages/RegistPage'
  }


  const [name, setName] = useState()
  const [img, setimg] = useState()
  const [address, setaddress] = useState()
  const [description, setdescription] = useState()
  const [peculiarities, setpeculiarities] = useState()
  const [region, setregion] = useState()
  const [priceday, setpriceday] = useState()
  const [pricenight, setpricenight] = useState()
  const [tel, settel] = useState()
  const [whatsapp, setwhatsapp] = useState()
  const [instagram, setinstagram] = useState()
  const [telegram, settelegram] = useState()
  const [locationlink, setlocationlink] = useState()
  const [category, setcategory] = useState()
  const [state, setstate] = useState(false)
  function addPost() {
    if (name != '' && address != '' && description != null && peculiarities != '' && region != null && priceday != '' && priceday != null
      && pricenight != '' && pricenight != null && tel != null && tel != '' && whatsapp != null && whatsapp != '' && instagram != null && instagram != ''
      && telegram != '' && telegram != null && locationlink != null && locationlink != '' && category != null && category != '') {
      postHouseF()
      setName('');
      setaddress('');
      setdescription('');
      setpeculiarities('');
      setregion('');
      setpriceday('');
      settel('');
      setwhatsapp('');
      setinstagram('');
      settelegram('');
      setlocationlink('');
      setcategory('');
      alert('Объявление было отправлено. Объявление будет отображаться в течении 24 часов после проверки!')
    }
    else {
      alert('!Заполните все поля')
    }
  }

  //
  let postHouseF = async () => {
    let form = new FormData();
    form.append("name", name)
    form.append("address", address)
    form.append("description", description)
    form.append("peculiarities", peculiarities)
    form.append("region", region)
    form.append("priceday", priceday)
    form.append("pricenight", pricenight)
    form.append("tel", tel)
    form.append("whatsapp", whatsapp)
    form.append("instagram", instagram)
    form.append("telegram", telegram)
    form.append("locationlink", locationlink)
    form.append("category", category)
    form.append("house_id", localStorage.getItem('id'))
    form.append("state", "false")
    form.append('latitude', location.latitude)
    form.append('longitude', location.longitude)
    let postHouseData = await axios({
      method: "post",
      url: "https://672db6fffd89797156435d34.mockapi.io/house",
      data: form,
      headers: {
        "Content-Type": "application/json"
      }
    })
    console.log(postHouseData)
  }
  const local = localStorage.getItem('id')

  //
  const [profil, setProfil] = useState()
  let GetProfilF = async () => {
    let getPostData = await axios({
      method: "get",
      url: `https://672db6fffd89797156435d34.mockapi.io/Email/${local}`,
    })
    if (getPostData.status == 200) {
      setProfil(getPostData.data)
      console.log(profil)
    }
    else {
      setProfil([])
    }
  }

  //
  const [filterhouse, setfilterhouse] = useState([])
  const [house, setHouse] = useState()
  let getHouseF = async () => {
    let getHouseData = await axios({
      method: "get",
      url: "https://672db6fffd89797156435d34.mockapi.io/house"
    })
    if (getHouseData.status == 200) {
      setHouse(getHouseData.data)
      const filteredHouse = getHouseData.data.filter((i) => i.house_id == local)
      if (filteredHouse.length > 0) {
        setfilterhouse(filteredHouse)
      }
    }
    else {
      setHouse([])
    }
  }


  //
  let deletHouseF = async (id) => {
    let getHouseDataDelete = await axios({
      method: "delete",
      url: `https://672db6fffd89797156435d34.mockapi.io/house/${id}`
    })
    if (getHouseDataDelete.status == 200) {
      updateWindow()
    }
  }


  function ListPage(id) {
    window.location.href = 'ListingPage/' + id
  }
  function updateWindow() {
    window.location.href = '/Pages/ProfilPage'
  }


  //
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  //
  const getGeoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Сохраняем координаты в состоянии
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (err) => {
          // В случае ошибки сохраняем информацию об ошибке
          setError(err.message);
        }
      );
    } else {
      setError('Геолокация не поддерживается этим браузером');
    }
  };


  useEffect(() => {
    if (local == null) {
      window.location.href = '/Pages/RegistPage'
    }

    GetProfilF()
    getHouseF()
    getGeoLocation();

  }, [])

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-3 border" style={{ height: "100vh" }}>
              <div className="row">
                <div className="col-12 text-center pt-5 pb-5">
                  <div className="row">
                    <div className="col-12">
                      <img className="rounded-pill imgprofil" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNNoIWahOInrFgR9MCjJZ5-PZ9YIovVpD40w&s" alt="" />
                    </div>
                    <div className="col-12 mt-3">
                      <b className="emailprofil text-dark">
                        {profil != null ?
                          <>
                            {profil.email}
                          </>
                          :
                          <>
                            no result</>}
                      </b>
                    </div>
                  </div>
                </div>
                <div className="col-12 ps-4  mt-3">
                  <h3>Разделы</h3>
                </div>
                <div className="col-12 ps-4 mt-4 Sections" onClick={asadvertisementOn}>
                  <span >Мои объявления</span>
                </div>
                <div className="col-12 ps-4 mt-4 Sections" onClick={asadvertisementOff}>
                  <span> Добавить объявления</span>
                </div>
                <div className="col-12 ps-4 mt-4 Sections" onClick={MainPage}>
                  <span>Выход</span>
                </div>
              </div>
            </div>
            <div className="col-9 mt-2">
              <div className="row">
                <div className="col-12 border-bottom pt-3 ps-5 mb-2">
                  <h3 style={{ fontWeight: "400", color: "brown" }}>Объявление будет отображаться после одобрения администратора !</h3>
                </div>
                {asadvertisement ?
                  <>
                    {filterhouse != null ?
                      <>
                        <div className="col-12 mt-5 blockads2">

                          {filterhouse.map((i) =>
                            <>
                              <div className="Advscroll border rounded mt-1 p-2">
                                <div className="row">
                                  <div className="col-1">
                                    <img width={50} src={i.img1} alt="" />
                                  </div>

                                  <div className="col-9">
                                    <div className="row">
                                      <div className="col-4">
                                        {i.name}
                                      </div>
                                      <div className="col-4">
                                        {i.region}
                                      </div>
                                      <div className="col-4">
                                        активность:
                                        &nbsp;{i.state}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-1 pt-3">
                                    <i class="fa-solid fa-trash fa-2xs" onClick={() => deletHouseF(i.id)}></i>
                                    <i class="fa-solid fa-eye fa-2xs ms-2" onClick={() => ListPage(i.id)}></i>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
                        </div>

                      </>
                      : <>
                        <h1 className="text-dark">
                          no result

                        </h1>
                      </>

                    }

                  </>
                  :
                  <>
                    <div className="col-12 ps-5 blockads">
                      <div className="row">
                        <div className="col-12 mt-5">
                          <h4>1. Название</h4>
                        </div>
                        <div className="col-12 mt-2">
                          <input style={{ outline: "none", height: "40px" }} className="ps-3 w-50 rounded border" type="text" name="" id="" placeholder="Название" value={name} onChange={(e) => setName(e.target.value)} /> &nbsp; <i class="fa-solid fa-check text-success"></i>
                        </div>
                        <div className="col-12 mt-5">
                          <h4 >2. Укажите точный адрес</h4>
                        </div>
                        <div className="col-12 mt-2">
                          <input style={{ outline: "none", height: "40px" }} value={address} onChange={(e) => setaddress(e.target.value)} className="ps-3 rounded border w-50" type="text" name="" id="" placeholder="Область, Регион, Город, Адрес" /> <i class="fa-solid fa-check text-success"></i>
                          <br /><small className=" ps-3">
                            (Область, регион, город, адрес)
                          </small>
                        </div>
                        <div className="col-12 mt-5">
                          <h4 >
                            3. Загрузите фото
                          </h4><span className="text-secondary">(минимум 4 фотографи)</span>
                          <div className="col-12 mt-2">
                            <div className="row">
                              <div className="col-12">
                                <input disabled value={img} onChange={(e) => setimg(e.target.value)} className="rounded border" type="file" name="files" /> <i class="fa-solid fa-check text-success"></i>
                              </div>
                              {/* <div className="col-12 mt-1">
                                <input value={img} onChange={(e) => setimg(e.target.value)} className="rounded border" type="file" name="files" />
                              </div>
                              <div className="col-12 mt-1">
                                <input value={img} onChange={(e) => setimg(e.target.value)} className="rounded border" type="file" name="files" />
                              </div>
                              <div className="col-12 mt-1">
                                <input value={img} onChange={(e) => setimg(e.target.value)} className="rounded border" type="file" name="files" />
                              </div> */}
                            </div>
                          </div>
                          <div className="col-12 mt-5">
                            <h4 >4. Описание</h4>
                          </div>
                          <div className="col-12 mt-2">
                            <textarea value={description} onChange={(e) => setdescription(e.target.value)} style={{ outline: "none" }} className="descripthouseprofilPage border ps-2 rounded pt-2" placeholder="Описание" name="" id="" cols="30" rows="10"></textarea>  <i class="fa-solid fa-check text-success"></i>
                          </div>
                          <div className="col-12 mt-5">
                            <h4 >5. Особенности</h4>
                          </div>
                          <div className="col-12 mt-2 mb-5">
                            <textarea value={peculiarities} onChange={(e) => setpeculiarities(e.target.value)} style={{ outline: "none" }} className="descripthouseprofilPage border ps-2 rounded pt-2" placeholder="Описание" name="" id="" cols="30" rows="10"></textarea>  <i class="fa-solid fa-check text-success"></i>
                            <br />
                            <small className="text-secondary">
                              (Например: Бесплатный wi-fi, парковка, фитнес-центр, 3-х разовое питание)
                            </small>
                          </div>
                          <div className="col-12 mt-5">
                            <h4 >6. Регионы</h4>
                          </div>
                          <div className="col-12 mt-3 mb-5">
                            <select className="border rounded" style={{ outline: "none", height: "40px" }} onChange={(e) => setregion(e.target.value)} name="" id=""> 
                              <option value="Чуй">Чуй</option>
                              <option value="Ош">Ош</option>
                              <option value="Джалалабад">Джалалабад</option>
                              <option value="Иссык-куль">Иссык-куль</option>
                              <option value="Талас">Талас</option>
                              <option value="Баткен">Баткен</option>
                              <option value="Наарын">Наарын</option>
                            </select> <i class="fa-solid fa-check text-success"></i>
                          </div>
                          <div className="col-12 mt-5">
                            <h4 >7. Категории</h4>
                          </div>
                          <div className="col-12 mt-3 mb-5">
                            <select className="border rounded" style={{ outline: "none", height: "40px" }} onChange={(e) => setcategory(e.target.value)} name="" id="">
                              <option value="Дом">Дом</option>
                              <option value="Квартира">Квартира</option>
                              <option value="Комната">Комната</option>
                              <option value="Хостел">Хостел</option>
                              <option value="Юрта">Юрта</option>
                            </select>  <i class="fa-solid fa-check text-success"></i>
                          </div>
                          <div className="col-12 mt-5">
                            <h4 >8. Цены</h4>
                          </div>
                          <div className="col-12">
                            <small className="text-secondary">(Укажите цены в сомах)</small>
                          </div>
                          <div className="col-12 mt-2">
                            день: <input style={{ height: "35px", outline: "none", width: "100px" }} value={priceday} onChange={(e) => setpriceday(e.target.value)} className="rounded border ps-2" type="number" placeholder="....." />  <i class="fa-solid fa-check text-success"></i>
                          </div>
                          <div className="col-12 mt-2 mb-5">
                            ночь: <input style={{ height: "35px", outline: "none", width: "100px" }} value={pricenight} onChange={(e) => setpricenight(e.target.value)} className="rounded border ps-2" type="number" placeholder="....." />  <i class="fa-solid fa-check text-success"></i>
                          </div>
                          <div className="col-12 mt-5">
                            <h4>9. Контакты</h4>
                          </div>
                          <div className="col-12 mt-2">
                            <div className="row">
                              <div className="col-2 text-end"> <small>Телефон для связи :</small></div>
                              <div className="col-9"><input style={{ fontSize: "15px", height: "35px" }} value={tel} onChange={(e) => settel(e.target.value)} className="rounded border ps-2" type="text" placeholder="......." /> <i class="fa-solid fa-check text-success"></i><br /><small className="text-secondary">(код страны +996)</small></div>
                            </div>
                          </div>
                          <div className="col-12 mt-2">
                            <div className="row">
                              <div className="col-2 text-end"> <small >whatsapp :</small></div>
                              <div className="col-9"><input style={{ fontSize: "15px", height: "35px" }} value={whatsapp} onChange={(e) => setwhatsapp(e.target.value)} className="rounded border ps-2" type="text" placeholder="......." /> <i class="fa-solid fa-check text-success"></i><br /><small className="text-secondary">(код страны +996)</small></div>
                            </div>
                          </div>
                          <div className="col-12 mt-2">
                            <div className="row">
                              <div className="col-2 text-end"> <small >Телаграм :</small></div>
                              <div className="col-9"><input style={{ fontSize: "15px", height: "35px" }} value={telegram} onChange={(e) => settelegram(e.target.value)} className="rounded border ps-2" type="text" placeholder="......." /> <i class="fa-solid fa-check text-success"></i><br /><small className="text-secondary">(номер с кодом страны или логин)</small></div>
                            </div>
                          </div>
                          <div className="col-12 mt-2">
                            <div className="row">
                              <div className="col-2 text-end"> <small >Instagram :</small></div>
                              <div className="col-9"><input style={{ fontSize: "15px", height: "35px" }} value={instagram} onChange={(e) => setinstagram(e.target.value)} className="rounded border ps-2" type="text" placeholder="ссылка..." />  <i class="fa-solid fa-check text-success"></i><br /><small className="text-secondary">(ссылку на страницу профиля)</small></div>
                            </div>
                          </div>
                          <div className="col-12 mt-5">
                            <h4 >10. Местоположение в Google Maps</h4>
                          </div>
                          <div className="col-12 mt-2">
                            <small className="text-secondary">Вставьте ссыку на адрес из Google Maps:</small><br /><input style={{ height: "35px", outline: "none" }} value={locationlink} className="rounded border mt-2 ps-2" onChange={(e) => setlocationlink(e.target.value)} type="text" placeholder="ссылка на адрес..." /> <i class="fa-solid fa-check text-success"></i>
                          </div>
                          <div className="col-12 mt-5">
                            <button className="btn btn-success" onClick={addPost}>Отправить</button>
                          </div>
                        </div>
                      </div>
                    </div>

                  </>
                }
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
export default ProfilPage