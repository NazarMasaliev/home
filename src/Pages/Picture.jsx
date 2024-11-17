import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router"

function Picture() {
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
    }
    else {
      setHouse([])
    }
  }
  const navigate = useNavigate();
  function goBack(){
    navigate(-1)
  }

  useEffect(() => {
    getHouseF();
  }, [])

  return (


    <div className="SlideImg">
      {house != null ?
        <>
          <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
            <div className="carousel-inner" onClick={goBack}>
              <div className="carousel-item active" style={{ display: "flex" }}>
                <img src={house.img1} className="d-block w-90 imgslide" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={house.img2} className="d-block w-90 imgslide" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={house.img3} className="d-block w-90 imgslide" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
              <span className="carousel-control-prev-icon bg-dark rounded-pill p-3" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
              <span className="carousel-control-next-icon bg-dark rounded-pill p-3" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </>
        :
        <>
        </>
      }



    </div>



  )
}
export default Picture