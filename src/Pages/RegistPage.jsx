function RegistPage() {
  function MainPage(){
    window.location.href='/'
  }
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
            <b className="textlogin">Log in</b> &nbsp; <b className="textlogin">Register
            </b>
          </div>
          <div className="col-12 inpdiv mt-5">
            <div className="inpblock">
              <div className="inInpblock1">
                <i class="fa-regular fa-user"></i>
              </div>
              <div className="inInpblock2">
                <input className="registinp" type="text" name="" id="" placeholder="UserName/Email" />
              </div>
            </div>
          </div>
          <div className="col-12 inpdiv mt-3">
            <div className="inpblock">
              <div className="inInpblock1">
                <i class="fa-solid fa-lock"></i>
              </div>
              <div className="inInpblock2">
                <input className="registinp" type="text" name="" id="" placeholder="Password" />
              </div>
            </div >
          </div>
          <div className="col-12 p-4">
            &nbsp;&nbsp;<span className="passwordlost">Lost Your Password?</span>
          </div>
          <div className="col-12 ps-4">
            <button className="btn btn-danger rounded-pill ms-1" >
              <b className="ps-3 pe-3">Login</b>
            </button>
          </div>
          <div className="col-12 ps-4 mt-4">
            <input className="inpcheckbox" type="checkbox" name="" id="" />&nbsp;&nbsp;<b>Remember me</b>
          </div>
        </div>
      </div>
    </div>
  )
}
export default RegistPage