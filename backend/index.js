require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());

// POST route for TCO calculation
app.post('/calculate', (req, res) => {
    // Destructure user inputs from the request body
    const {
      evPrice,
      icePrice,
      evBatteryCapacity,
      evChargingCost,
      evVehicleRange,
      annualJourneyDistance,
      iceMileage,
      iceFuelCost,
    } = req.body;

     // Validate inputs 
  if (
    !evPrice ||
    !icePrice ||
    !evBatteryCapacity ||
    !evChargingCost ||
    !evVehicleRange ||
    !annualJourneyDistance ||
    !iceMileage ||
    !iceFuelCost
  ) {
    return res.status(400).json({ error: 'All fields are required' });
  }

   // Calculate Annual Costs
 const evAnnualChargingCost =
   (annualJourneyDistance / evVehicleRange) * (evBatteryCapacity * evChargingCost);

 const iceAnnualFuelCost =
   (annualJourneyDistance / iceMileage) * iceFuelCost;

 // Calculate Total Costs (1-year TCO)
 const evTotalCost = parseFloat(evPrice) + evAnnualChargingCost;
 const iceTotalCost = parseFloat(icePrice) + iceAnnualFuelCost;

 const result = {
    evTotalCost,
    iceTotalCost,
    pieValues: {
      ev: [parseFloat(evPrice), evAnnualChargingCost],
      ice: [parseFloat(icePrice), iceAnnualFuelCost],
    },
  };

  // Send the result back to the client
  res.json(result);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
  });

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
    mongoose.connect(uri);
    console.log("DB Connected");
});