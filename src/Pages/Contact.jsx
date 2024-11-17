import Footer from "../attach/footer"
import MessageBlock from "../attach/message"
import Navblock from "../attach/navblock"
import Navblock2 from "../attach/navblock2"
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

function ContactPage() {

  const position = [40.528521, 72.796912];
  return (
    <div className="MainBlock">
      <div className="blockforNav">
       
        <Navblock2 />
      </div>
      <div className="BodyBlockContactPage">
        <div className="MapBlockContactPage">
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
        <div className="ContactBlockContactPage bg-dark">
          <h1>КОНТАКТЫ</h1>
          <div className="redLineContactPage mb-4 mt-3"></div>
          <span>г.Бишкек, ул. Ибраимова 103</span>
          <span className="text-danger">
            doma.kg1@gmail.com
          </span>
          <span>+996 507 103050</span>
        </div>
      </div>
      <Footer />
      <MessageBlock />
    </div>
  )
}
export default ContactPage