import { useState } from "react"
import $ from 'jquery';
import axios from "axios";
import { useEffect } from "react";
import moment from "moment";


function AdminRequest() {

  function Advertisements() {
    window.location.href = '/Admin/AdminPage'
  }
  function AdminCategoryPage() {
    window.location.href = '/Admin/AdminCategory'
  }
  function AdminRegionPage() {
    window.location.href = '/Admin/AdminRegion'
  }
  function MainPage() {
    window.location.href = '/'
  }
  function AdminRequestPage() {
    window.location.href = '/Admin/AdminRequest'
  }

  const [filtered, setfiltered] = useState()
  const [house, setHouse] = useState()
  let getHouseF = async () => {
    let getHouseData = await axios({
      method: "get",
      url: "https://672db6fffd89797156435d34.mockapi.io/house"
    })
    if (getHouseData.status == 200) {
      setHouse(getHouseData.data)
      const filteredHouse = getHouseData.data.filter((i) => i.state == "false")
      if (filteredHouse.length > 0) {
        setfiltered(filteredHouse)
      }
    }
    else {
      setHouse([])
    }
  }


  let deletHouseF = async (id) => {
    let getHouseDataDelete = await axios({
      method: "delete",
      url: `https://672db6fffd89797156435d34.mockapi.io/house/${id}`
    })
    if (getHouseDataDelete.status == 200) {
      updateWindow()
    }
  }

  function updateWindow(id) {
    window.location.href = '/Admin/AdminRequest/' + id
  }
  function UpdateRequest(id) {
    window.location.href = '/Admin/AdminUpdateRequest/' + id
  }
  function ShowAdv(id) {
    window.location.href = '/Admin/AdminShowAdv/' + id
  }




  useEffect(() => {
    getHouseF();
  }, [])



  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-3 border" style={{ height: "100vh" }}>
              <div className="row">
                <div className="col-12 text-center  border-bottom pt-5 pb-4">
                  <div className="row">
                    <div className="col-12">
                      <img className="rounded-pill imgprofil" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNNoIWahOInrFgR9MCjJZ5-PZ9YIovVpD40w&s" alt="" />
                    </div>
                    <div className="col-12 mt-3">
                      <b className="emailprofil">Mamasalievnazarbek@gmail.com</b>
                    </div>
                  </div>
                </div>
                <div className="col-12 ps-4  mt-3">
                  <h3>Разделы</h3>
                </div>
                <div className="col-12 ps-4 mt-4 Sections" onClick={Advertisements}>
                  <span>Все</span>
                </div>
                <div className="col-12 ps-4 mt-2 Sections" onClick={AdminRegionPage}>
                  <span>Регионы</span>
                </div>
                <div className="col-12 ps-4 mt-2 Sections" onClick={AdminCategoryPage}>
                  <span>Категории</span>
                </div>
                <div className="col-12 ps-4 mt-2 Sections" onClick={AdminRequestPage}>
                  <span>Запросы</span>
                </div>
                <div className="col-12 ps-4 mt-2 Sections" onClick={MainPage}>
                  <span>Выход</span>
                </div>
              </div>
            </div>
            <div className="col-9 mt-2">
              <div className="row">
                <div className="col-12 border-bottom pb-3 pt-3 ps-5">
                  <h1>Запросы на добавления</h1>
                </div>
                <div className="col-12 showAllAdvertisementsBlock">
                  <div className="showAllAdvertisements p-3">
                    <div className="col-12 mt-5 d-flex" style={{ overflow: "scroll", height: "400px" }}>
                      <table class="table table-hover">
                        <thead>
                          <tr >
                            <th className="p-3"><input type="checkbox" /> &nbsp;1</th>
                            <th className="pe-5 pt-3 pb-3">Название</th>
                            <th className="p-3">Создано</th>
                            <th className="p-3">Обновлено</th>
                            <th className="p-3">Регион</th>
                            <th className="p-3">Категория</th>
                            <th className="p-3">Опции</th>
                            <th className="p-3">Состояние</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filtered != null ?
                            <>
                              {filtered.map((i) =>
                                <>
                                  <tr>
                                    <th className="p-3"><input type="checkbox" /><small>&nbsp;{i.id}</small></th>
                                    <th className="pt-3 pb-3"><small>{i.name}</small></th>
                                    <th className="p-3"> <small>{moment().subtract(i.createdAt).calendar()}</small> </th>
                                    <th className="p-3"> <small>{moment().subtract(i.createdAt).calendar()}</small> </th>
                                    <th className="p-3"> <small>{i.region}</small> </th>
                                    <th className="p-3"> <small>{i.category}</small> </th>
                                    <th className="p-3">
                                      <small><i class="fa-solid fa-trash fa-2xs" onClick={() => deletHouseF(i.id)}></i></small>
                                      <small> <i class="fa-solid fa-pen fa-2xs ms-1" onClick={() => UpdateRequest(i.id)}></i></small>
                                      <small><i class="fa-solid fa-eye fa-2xs ms-1" onClick={() => ShowAdv(i.id)}></i></small>
                                    </th>
                                    <th>
                                      {i.state}
                                    </th>
                                  </tr>
                                </>
                              )}

                            </>
                            :
                            <>
                            </>
                          }
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
export default AdminRequest