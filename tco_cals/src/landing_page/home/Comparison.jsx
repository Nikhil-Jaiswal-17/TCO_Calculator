import React, { useState } from 'react';

function TCOCalculator() {
  // State variables to store input values
  const [iceTCO, setIceTCO] = useState('');
  const [iceRunningCost, setIceRunningCost] = useState('');
  const [evTCO, setEvTCO] = useState('');
  const [evRunningCost, setEvRunningCost] = useState('');

  // Calculate the TCO or other values (example calculation)
  const calculateResults = () => {
    // Example calculation logic - replace with actual formula
    const iceTotal = parseFloat(iceTCO) + parseFloat(iceRunningCost); 
    const evTotal = parseFloat(evTCO) + parseFloat(evRunningCost);

    // You can add more logic to set these values or display them directly
    return {
      iceTotal,
      evTotal,
    };
  };

  const results = calculateResults();

  return (
    <div className='container-sm pt-5'>
      <div className="row text-center p-1" style={{ width: "100%", margin: "0 auto", borderRadius: "5px", backgroundColor: "#19AEA5", color: "white" }}>
        <h4>Comparison</h4>
      </div>
      <div className="row">
        <div className="col">
          <div className="text-center mt-4 p-1" style={{ width: "100%", margin: "0 auto", borderRadius: "5px", backgroundColor: "red", color: "white" }}>
            <h4>ICE Vehicle</h4>
          </div>
          <div className="row p-2 m-2">
            <div className="col">TCO</div>
            <div className="col">
              <input
                type="number"
                name="KWH"
                style={{ width: "70%" }}
                value={iceTCO}
                onChange={(e) => setIceTCO(e.target.value)}
              />
              <button style={{ width: "60px", backgroundColor: "#cd3333", color: "white", borderColor: "#cd3333", fontWeight: "700" }}>₹/KM</button>
            </div>
          </div>
          <div className="row p-2 m-2">
            <div className="col">Avg. Running Cost</div>
            <div className="col">
              <input
                type="number"
                name="KWH"
                style={{ width: "70%" }}
                value={iceRunningCost}
                onChange={(e) => setIceRunningCost(e.target.value)}
              />
              <button style={{ width: "60px", backgroundColor: "#cd3333", color: "white", borderColor: "#cd3333", fontWeight: "700" }}>₹/KM</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="text-center mt-4 p-1" style={{ width: "100%", margin: "0 auto", borderRadius: "5px", backgroundColor: "#19AEA5", color: "white" }}>
            <h4>Electric Vehicle</h4>
          </div>
          <div className="row p-2 m-2">
            <div className="col">TCO</div>
            <div className="col">
              <input
                type="number"
                name="KWH"
                style={{ width: "70%" }}
                value={evTCO}
                onChange={(e) => setEvTCO(e.target.value)}
              />
              <button style={{ width: "60px", backgroundColor: "#19AEA5", color: "white", borderColor: "#19AEA5", fontWeight: "700" }}>₹/KM</button>
            </div>
          </div>
          <div className="row p-2 m-2">
            <div className="col">Avg. Running Cost</div>
            <div className="col">
              <input
                type="number"
                name="KWH"
                style={{ width: "70%" }}
                value={evRunningCost}
                onChange={(e) => setEvRunningCost(e.target.value)}
              />
              <button style={{ width: "60px", backgroundColor: "#19AEA5", color: "white", borderColor: "#19AEA5", fontWeight: "700" }}>₹/KM</button>
            </div>
          </div>
        </div>
      </div>

      {/* Display results */}
      <div className="row text-center p-3">
        <div className="col">
          <p>ICE Total: ₹{results.iceTotal}</p>
        </div>
        <div className="col">
          <p>EV Total: ₹{results.evTotal}</p>
        </div>
      </div>
    </div>
  );
}

export default TCOCalculator;
