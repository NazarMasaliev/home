import { useEffect, useState } from "react"
import $ from 'jquery';
import axios from "axios";

function RegistPage() {
  function MainPage() {
    window.location.href = '/'
  }
  function OIBlock() {
    $('.registrationblock').fadeIn()
  }
  function OIBlock2() {
    $('.emailblock').fadeIn()
  }
  function outInBlock() {
    $('.textlogin1').css({ "background-color": "white"  })
    $('.textlogin2').css({ "background-color": "lightgray"})
    $('.emailblock').fadeOut()
    $('.emailblock').css({ "transition": "0s" })
    setTimeout(OIBlock, 500)
  }
  function outInBlock2() {
    $('.textlogin1').css({ "background-color": "lightgray"  })
    $('.textlogin2').css({ "background-color": "white"  })
    $('.registrationblock').fadeOut({ "transition": "0s" })
    $('.registrationblock').css({ "transition": "0s" })
    setTimeout(OIBlock2, 500)
  }





  const [registemail, setregistemail] = useState()
  const [registnickName, setregistnickName] = useState()
  const [registpassword, setregistpassword] = useState()
  const [registrepeatpassword, setregistrepeatpassword] = useState()
  function registPost() {
    if (registemail != null && registemail != '' && registnickName != '' && registnickName != null && registpassword != '' && registpassword != null
      && registrepeatpassword != '' && registrepeatpassword != null && registpassword == registrepeatpassword
    ) {
      registPostF()
      alert('Вы успешно зарегистрировались!')
      window.location.href = '/Pages/RegistPage'
      setregistemail('')
      setregistnickName('')
      setregistpassword('')
      setregistrepeatpassword('')
    }
    else {
      alert('Вы не заполнили поле или неправильно повторили пароль!')
    }
  }

  let registPostF = async () => {
    let form = new FormData();
    form.append("email", registemail)
    form.append("nickname", registnickName)
    form.append("password", registpassword)
    let registPostData = await axios({
      method: "post",
      url: "https://672db6fffd89797156435d34.mockapi.io/Email",
      data: form,
      headers: {
        "Content-Type": "application/json"
      }
    })
    console.log(registPostData)
  }

  const [local, setlocal] = useState()
  let storageGetF = async () => {
    let getPostData = await axios({
      method: "get",
      url: "https://672db6fffd89797156435d34.mockapi.io/Email",
    })
    if (getPostData.status == 200) {
      setlocal(getPostData.data)
      console.log(getPostData.data)
    }
    else {
      setlocal([])
    }
  }


  const [name, setname] = useState()
  const [password, setpasword] = useState()

  function btnfilteredF() {
    if (name != '' && name != null && password != null && password != '') {
      filterlogin()
      setname('')
      setpasword('')
    }
    else{
      alert('Вы не заполнили поле!')
    }
  }
  function filterlogin() {
    const filteredUsers = local.filter((i) => i.email == name && i.password == password)
    if (filteredUsers.length > 0) {
      localStorage.setItem('id', filteredUsers[0].id)
      console.log(filteredUsers[0].id)
      window.location.href = '/Pages/ProfilPage'
    }
    else {
      alert('Неправильный логин и пароль!')
    }

  }


  useEffect(() => {
    storageGetF()
    localStorage.removeItem('id')
  }, [])



  return (
    <div className="registBlockDark">
      <div className="registBlock rounded p-4">
        <div className="row p-0">
          <div className="col-12 border-bottom pb-3">
            <div className="row">
              <div className="col-6">
                <span style={{ fontSize: "35px" }}>
                  Sign In
                </span>
              </div>
              <div className="col-6 text-end">
                <span className="rounded-pill iconregist">
                  <i class="fa-solid fa-xmark iconregisticon" onClick={MainPage}></i>
                </span>
              </div>
            </div>
          </div>
          <div className="col-12 mt-5 border-bottom pb-3">
            <b className="textlogin textlogin1 rounded" onClick={outInBlock2}>Log in</b> &nbsp; <b className="textlogin textlogin2 rounded" onClick={outInBlock}>Register
            </b>
          </div>
          <div className="col-12 emailblock" style={{ transition: "500ms" }}>
            <div className="row">
              <div className="col-12 inpdiv mt-5">
                <div className="inpblock">
                  <div className="inInpblock1">
                    <i class="fa-regular fa-user"></i>
                  </div>
                  <div className="inInpblock2">
                    <input value={name} onChange={(e) => setname(e.target.value)} className="registinp" type="text" name="" id="" placeholder="UserName" />
                  </div>
                </div>
              </div>
              <div className="col-12 inpdiv mt-3">
                <div className="inpblock">
                  <div className="inInpblock1">
                    <i class="fa-solid fa-lock"></i>
                  </div>
                  <div className="inInpblock2">
                    <input  value={password} onChange={(e) => setpasword(e.target.value)} className="registinp" type="text" name="" id="" placeholder="Password" />
                  </div> 
                </div >
              </div>
              <div className="col-12 p-4">
                &nbsp;&nbsp;<span className="passwordlost">Lost Your Password?</span>
              </div>
              <div className="col-12 ps-4">
                <button className="btn btn-danger rounded-pill ms-1" >
                  <b className="ps-3 pe-3" onClick={btnfilteredF}>Login</b>
                </button>
              </div>
            </div>
          </div>

          <div className="col-12 registrationblock" style={{ transition: "500ms" }}>
            <div className="row">
              <div className="col-12 inpdiv mt-4">
                <div className="inpblock">
                  <div className="inInpblock1">
                    <i class="fa-solid fa-envelope text-secondary"></i>
                  </div>
                  <div className="inInpblock2">
                    <input value={registemail} onChange={(e) => setregistemail(e.target.value)} className="registinp" type="text" name="" id="" placeholder="Email" />
                  </div>
                </div>
              </div>
              <div className="col-12 inpdiv mt-3">
                <div className="inpblock">
                  <div className="inInpblock1">
                    <i class="fa-regular fa-user"></i>
                  </div>
                  <div className="inInpblock2">
                    <input value={registnickName} onChange={(e) => setregistnickName(e.target.value)} className="registinp" type="text" name="" id="" placeholder="Nick Name" />
                  </div>
                </div>
              </div>
              <div className="col-12 inpdiv mt-3">
                <div className="inpblock">
                  <div className="inInpblock1">
                    <i class="fa-solid fa-lock"></i>
                  </div>
                  <div className="inInpblock2">
                    <input value={registpassword} className="registinp" onChange={(e) => setregistpassword(e.target.value)} type="text" name="" id="" placeholder="Password" />
                  </div>
                </div >
              </div>
              <div className="col-12 inpdiv mt-3">
                <div className="inpblock">
                  <div className="inInpblock1">
                    <i class="fa-solid fa-lock"></i>
                  </div>
                  <div className="inInpblock2">
                    <input value={registrepeatpassword} onChange={(e) => setregistrepeatpassword(e.target.value)} className="registinp" type="text" name="" id="" placeholder="Repeat password" />
                  </div>
                </div >
              </div>
              <div className="col-12 mt-5 text-center">
                <button className="btn btn-danger rounded-pill" >
                  <b className="ps-3 pe-3" onClick={registPost}>Registration</b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default RegistPage