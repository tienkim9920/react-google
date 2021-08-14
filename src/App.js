import { useState } from "react";

function App() {
  // state load_map
  const [load_map, set_load_map] = useState(true);
  const [from, set_from] = useState('155 Sư Vạn Hạnh, Phường 13, District 10, Ho Chi Minh City, Vietnam')
  const [to, set_to] = useState('')

  return (
    <div className="App">
      {load_map && (
        <div>

          <div className="checkout-form-list">
            <label>
              From <span className="required">*</span>
            </label>
            <input type="text" name="from" id="from_places" disabled="true" value={from} />
            <input id="origin" name="origin" required="" type="hidden" value={from}
            />
          </div>


          <div className="checkout-form-list">
            <label>To <span className="required">*</span></label>
              <input type="text" id="to_places" placeholder="Enter A Location" value={to} onChange={(e) => set_to(e.target.value)} />
              <input id="destination" type="text" name="destination" required="" type="hidden" />
          </div>


          <div className="checkout-form-list">
            <div className="form-group">
              <label>
                Travel Mode
                </label>
                <select id="travel_mode" name="travel_mode">
                  <option value="DRIVING">DRIVING</option>
                </select>
            </div>
          </div>


          <div className="order-button-payment">
            <input value="CHECKING" type="submit" id="distance_form" />
          </div>


          <div id="result" className="hide">
            <div>
              <label htmlFor="Kilometers">Kilometers: </label>&nbsp;
              <label id="in_kilo"></label>
            </div>
            <div>
              <label htmlFor="Duration">Duration: </label>&nbsp;
              <label id="duration_text"></label>
            </div>
            <div>
              <label htmlFor="Price">Shipping Cost: </label>&nbsp;
              <label id="price_shipping"></label>
              &nbsp;<label>VNĐ</label>
            </div>
          </div>

          <div className="col-lg-6 col-12">
            <div id="map" style={{ height: "400px", width: "500px" }}></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
