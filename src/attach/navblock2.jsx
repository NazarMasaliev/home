import AOS from "aos";
import { useEffect } from "react";
import $ from 'jquery';

function Navblock2() {
  function AboutUsPage() {
    window.location.href = '/Pages/Contact'
  }
  function HomePage() {
    window.location.href = '/'
  }

  function RegistWindow(){
   window.location.href='/Pages/RegistPage'
  }

  $(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 70) {
      $('.NavBlock').css({ "position": "absolute", "top": "0px", "position": "fixed", "background-color": "#fff", "transition": "0.5s" });
      $('.NavBlock2').css({ "display": "none" });

    } else {
      $('.NavBlock').css({ "position": "absolute", "top": "-110px", "transition": "1s" });
      $('.NavBlock2').css({ "display": "block" });
    }
  });
  return (
    <div className="NavBlock2 pt-3">
      <div className="row p-0">
        <div className="col-6 text-center">
          <img className="imglogo" src="https://doma.kg/wp-content/uploads/2024/04/logo-new.webp" alt="" />
          <button className="btn rounded-pill btn-danger btnNav" onClick={HomePage}>ГЛАВНАЯ</button>
          <button className="btn rounded-pill btn-danger btnNav">О НАС</button>
          <button className="btn rounded-pill btn-danger btnNav" onClick={AboutUsPage}>КОНТАКТЫ</button>
        </div>
        <div className="col-6 text-end pt-2">
          <button className="btn btn-light btnNavright rounded-pill" onClick={RegistWindow}>
            <i class="fa-solid fa-arrow-right-to-bracket"></i> Войти
          </button>
        </div>
      </div>
    </div>
  )
}
export default Navblock2