import React, { useState } from 'react'

const Hero = ({ onCalculate }) => {
    const [inputs, setInputs] = useState({
        evPrice: '',
        icePrice: '',
        evBatteryCapacity: '',
        evChargingCost: '',
        evVehicleRange: '',
        annualJourneyDistance: '',
        iceMileage: '',
        iceFuelCost: '',
    });

    const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onCalculate(inputs);
    };


    const states = [
        "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
        "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
        "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
        "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
        "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
        "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands",
        "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
        "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
    ];
    const fuel = ["Petrol", "Diseal"];
    const vehicleType = ["Two Wheeler", "Four Wheeler"];
    const frequency = ["Daily", "Weekly", "Monthly"];

    return (
        <form className='container' onSubmit={handleSubmit} style={{backgroundColor:"#e0ffff"}}>
            <div className='container-sm pt-5'>
                <h2 className='mb-4' style={{
                    color: "#19AEA5", fontFamily: "Poppins", fontSize: "36px", fontWeight: "700", lineHeight: "54px", textAlign: "left", textUnderlinePosition: "from-font",
                    textDecorationSkipInk: "none"
                }}>TCO Calculator</h2>
                <div className='row p-1 m-1'>
                    <div className='col'>
                        <h5>Private (Self-Owned)</h5>
                        <hr />
                    </div>
                    <div className="col">
                        <h5>Commercial (Public Use)</h5>
                    </div>
                </div>
                <div className='text-center'>
                    <i class="fa-solid fa-car-rear" style={{ fontSize: "60px", color: "#19AEA5", margin: "15px" }}></i>
                    <i class="fa-solid fa-motorcycle" style={{ fontSize: "60px", color: "grey", margin: "15px" }}></i>
                </div>

                <div className="row text-center p-1" style={{ width: "100%", margin: "0 auto", borderRadius: "5px", backgroundColor: "#19AEA5", color: "white" }}>
                    <h4>TCO Details</h4>
                </div>

                <div className="row p-2 m-2">
                    <div className="col ">
                        <label htmlFor="state" style={{ fontWeight: "700" }}>Choose State</label>
                        <select id="state" name="state" style={{ width: "40%", height: "100%", marginLeft: "150px" }}>
                            <option value="" disabled selected>
                                -- Select State --
                            </option>
                            {states.map((state) => (
                                <option key={state} value={state}>
                                    {state}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col" style={{ fontWeight: "700" }}>
                        Average Travel Range* <input type="number" name="KM" required style={{ width: "40%", marginLeft: "70px" }} />
                        <button style={{ backgroundColor: "#19AEA5", color: "white", borderColor: "#19AEA5", fontWeight: "700" }}>KM</button>
                    </div>
                </div>
                <div className="row p-2 m-2">
                    <div className="col" style={{ fontWeight: "700" }}>
                        Calculation Duration <input type="number" name="KM" style={{ width: "30%", marginLeft: "88px" }} />
                        <button style={{ backgroundColor: "#19AEA5", color: "white", borderColor: "#19AEA5", fontWeight: "700" }}>Years</button>

                    </div>
                    <div className="col" style={{ fontWeight: "700" }}>
                        <input type="radio" name="Calculation" id="Calculation" /> Calculation Range
                    </div>
                </div>
            </div>

            {/* 2nd Details to be start */}
            <div className='container-sm pt-5'>

                <div className="row text-center p-1" style={{ width: "100%", margin: "0 auto", borderRadius: "5px", backgroundColor: "#cd3333", color: "white" }}>
                    <h4>ICE Details</h4>
                </div>

                <div className="row p-2 m-2">
                    <div className="col ">
                        <label htmlFor="state" style={{ fontWeight: "700" }}>Fuel Type</label>
                        <select id="fuel" name="fuel" style={{ width: "47%", height: "100%", marginLeft: "194px" }}>
                            <option value="" disabled selected>
                                -- Select type --
                            </option>
                            {fuel.map((fuel) => (
                                <option key={fuel} value={fuel}>
                                    {fuel}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col" style={{ fontWeight: "700" }}>
                        Vehicle Mileage* <input type="number" name="iceMileage" value={inputs.iceMileage} onChange={handleChange} required style={{ width: "36%", marginLeft: "134px" }} />
                        <button style={{ width: "60px", backgroundColor: "#cd3333", color: "white", borderColor: "#cd3333", fontWeight: "700" }}>KM</button>
                    </div>
                </div>
                <div className="row p-2 m-2">
                    <div className="col">
                        <div className="row">
                            <div className="col" style={{ fontWeight: "700" }}>
                                Insurance Cost
                            </div>
                            <div className="col">
                                <input type="number" name="insuranceCost" style={{ width: "75%" }} />
                                <button style={{ width: "60px", backgroundColor: "#cd3333", color: "white", borderColor: "#cd3333", fontWeight: "700" }}>RS</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col " style={{ fontWeight: "700" }}>
                                ICE Price*
                            </div>
                            <div className="col">
                                <input type="number" name="icePrice" style={{ width: "75%" }} value={inputs.icePrice} onChange={handleChange} required />
                                <button style={{ width: "60px", backgroundColor: "#cd3333", color: "white", borderColor: "#cd3333", fontWeight: "700" }}>RS</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row p-2 m-2">
                    <div className="col">
                        <label htmlFor="state" style={{ fontWeight: "700" }}>Vehicle Type</label>
                        <select id="vehicleType" name="vehicleType" style={{ width: "47%", height: "100%", marginLeft: "174px" }}>
                            <option value="" disabled selected>
                                -- Select type --
                            </option>
                            {vehicleType.map((vehicleType) => (
                                <option key={vehicleType} value={vehicleType}>
                                    {vehicleType}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col" style={{ fontWeight: "700" }}>
                        Fuel Cost per Liter* <input type="number" name="iceFuelCost" style={{ width: "36%", marginLeft: "115px" }} value={inputs.iceFuelCost} onChange={handleChange} required />
                        <button style={{ width: "60px", backgroundColor: "#cd3333", color: "white", borderColor: "#cd3333", fontWeight: "700" }}>RS</button>
                    </div>
                </div>
            </div>

            {/*3rd Detail  EV Details  */}
            <div className='container-sm pt-5'>
                <div className=" row text-center p-1" style={{ width: "100%", margin: "0 auto", borderRadius: "5px", backgroundColor: "#19AEA5", color: "white" }}>
                    <h4> EV Details</h4>
                </div>
                <div className="row p-2 m-2">
                    <div className="col">
                        <div className="row">
                            <div className="col" style={{ fontWeight: "700" }}>
                                EV Price*
                            </div>
                            <div className="col">
                                <input type="number" name="evPrice" style={{ width: "75%" }} value={inputs.evPrice} onChange={handleChange} required />
                                <button style={{ width: "60px", backgroundColor: "#19AEA5", color: "white", borderColor: "#19AEA5", fontWeight: "700" }}>RS</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col " style={{ fontWeight: "700" }}>
                                Insurance Cost
                            </div>
                            <div className="col">
                                <input type="number" name="insuranceCost" style={{ width: "75%" }} />
                                <button style={{ width: "60px", backgroundColor: "#19AEA5", color: "white", borderColor: "#19AEA5", fontWeight: "700" }}>RS</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row p-2 m-2">
                    <div className="col">
                        <div className="row">
                            <div className="col" style={{ fontWeight: "700" }}>
                                Battery Capacity*
                            </div>
                            <div className="col">
                                <input type="number" name="evBatteryCapacity" style={{ width: "75%" }} value={inputs.evBatteryCapacity} onChange={handleChange} required />
                                <button style={{ width: "60px", backgroundColor: "#19AEA5", color: "white", borderColor: "#19AEA5", fontWeight: "700" }}>KWH</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col " style={{ fontWeight: "700" }}>
                                Charging Cost*
                            </div>
                            <div className="col">
                                <input type="number" name="evChargingCost" style={{ width: "75%" }} value={inputs.evChargingCost} onChange={handleChange} required />
                                <button style={{ width: "60px", backgroundColor: "#19AEA5", color: "white", borderColor: "#19AEA5", fontWeight: "700" }}>RS</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row p-2 m-2">
                    <div className="col">
                        <div className="row">
                            <div className="col " style={{ fontWeight: "700" }}>
                                Vehicle Range
                            </div>
                            <div className="col">
                                <input type="number" name="evVehicleRange" style={{ width: "75%" }} value={inputs.evVehicleRange} onChange={handleChange} />
                                <button style={{ width: "60px", backgroundColor: "#19AEA5", color: "white", borderColor: "#19AEA5", fontWeight: "700" }}>KWH</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col " style={{ fontWeight: "700" }}>
                                Journey Frequency
                            </div>
                            <div className="col">
                                <select id="state" name="state" style={{ width: "100%", height: "34px" }}>
                                    <option value="" disabled selected>
                                        -- Select Frequency --
                                    </option>
                                    {frequency.map((frequency) => (
                                        <option key={frequency} value={frequency}>
                                            {frequency}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row p-2 m-2">
                    <div className="col">
                        <div className="row">
                            <div className="col " style={{ fontWeight: "700" }}>
                                Journey Distance*
                            </div>
                            <div className="col">
                                <input type="number" name="journeyDistance" style={{ width: "75%" }} required />
                                <button style={{ width: "60px", backgroundColor: "#19AEA5", color: "white", borderColor: "#19AEA5", fontWeight: "700" }}>KM</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col " style={{ fontWeight: "700" }}>
                                Annual Journey Distance*
                            </div>
                            <div className="col">
                                <input type="number" name="annualJourneyDistance" style={{ width: "75%" }} value={inputs.annualJourneyDistance} onChange={handleChange} required />
                                <button style={{ width: "60px", backgroundColor: "#19AEA5", color: "white", borderColor: "#19AEA5", fontWeight: "700" }}>KM</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-end mt-4">
                <button type="reset" className="btn" style={{ width: "10%", backgroundColor: "white", color: "#19AEA5", borderColor: "#19AEA5", fontWeight: "700" }}>
                    Clear
                </button>
                <button type="submit" className="btn ms-4" style={{ width: "10%", backgroundColor: "#19AEA5", color: "white", borderColor: "#19AEA5", fontWeight: "700" }}>
                    Calculate
                </button>
            </div>
        </form >
    )
}

export default Hero;
