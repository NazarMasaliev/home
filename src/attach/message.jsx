import $ from 'jquery';
function MessageBlock() {
  function fadeicon() {
    $('.messagebtn2').fadeIn()
    $('.messagebtn3').fadeIn()
    $('.messagebtn4').fadeIn()
    $('.messagebtn5').fadeIn()
  }
  function fadeicon2() {
    $('.messagebtn').fadeIn()
    $('.messagebtn3').fadeOut()
    $('.messagebtn4').fadeOut()
    $('.messagebtn5').fadeOut()
  }

  function messageicon() {
    $('.messagebtn').fadeOut()
    $('.messageicon').css({ "transform": "rotate(180deg)", "transition": "transform 0.5s" })
    $('.messageicon2').css({ "transform": "rotate(0deg)" })
    setTimeout(fadeicon, 500)

  }
  function messageicon2() {
    $('.messagebtn2').fadeOut()
    $('.messageicon2').css({ "transform": "rotate(180deg)", "transition": "transform 0.5s" })
    $('.messageicon').css({ "transform": "rotate(0deg)" })
    setTimeout(fadeicon2, 500)
  }

  return (
    <div className="Mainblock4">
      <button className="btncontact rounded-pill messagebtn" onClick={messageicon}>
        <i class="fa-solid fa-message text-white messageicon rounded" ></i>
      </button>
      <button className="btncontact rounded-pill messagebtn2" onClick={messageicon2}>
        <i class="fa-solid fa-circle-xmark text-white messageicon2 rounded"></i>
      </button>
      <button className="btncontact rounded-pill messagebtn3">
        <i class="fa-solid fa-paper-plane text-white messageicon3 rounded contaciconfade"></i>
      </button>
      <button className="btncontact rounded-pill messagebtn4">
        <a href="https://wa.me/996708310099"><i class="fa-brands fa-whatsapp text-white messageicon4 rounded contaciconfade"></i></a>
      </button>
      <button className="btncontact rounded-pill messagebtn5">
        <a href="tel:+996708310099"><i class="fa-solid fa-phone text-white messageicon5 rounded contaciconfade"></i></a>

      </button>
    </div>
  )
}
export default MessageBlock