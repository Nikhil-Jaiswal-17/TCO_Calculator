// // import './App.css'
// // import Footer from './landing_page/Footer.jsx'
// // import HomePage from './landing_page/home/HomePage.jsx'
// // import Navbar from "./landing_page/Navbar.jsx"


// // function App() {

// //   return (
// //     <div>
// //       <Navbar/>
// //       <HomePage/>
// //       <Footer/>
// //     </div>
// //   )
// // }

// // export default App


// import './App.css';
// import Footer from './landing_page/Footer.jsx';
// import Navbar from "./landing_page/Navbar.jsx";
// import HomePage from './landing_page/home/HomePage.jsx'; // Import HomePage

// import { useState } from 'react';

// function App() {
//   const [formData, setFormData] = useState(null); // To hold form inputs
//   const [results, setResults] = useState(null); // To hold calculated results

//   // Handler to calculate and set the results
//   const handleCalculate = (inputs) => {
//     // Perform your TCO calculations here based on the inputs
//     const calculatedResults = {
//       iceCost: parseFloat(inputs.icePrice || 0) + parseFloat(inputs.iceFuelCost || 0) * parseFloat(inputs.annualJourneyDistance || 0) / parseFloat(inputs.iceMileage || 1),
//       evCost: parseFloat(inputs.evPrice || 0) + parseFloat(inputs.evBatteryCapacity || 0) * parseFloat(inputs.evChargingCost || 0),
//       totalDistance: parseFloat(inputs.annualJourneyDistance || 0),
//     };

//     setFormData(inputs); // Save the inputs
//     setResults(calculatedResults); // Save the calculated results
//   };

//   return (
//     <div>
//       <Navbar />
//       <HomePage 
//         onCalculate={handleCalculate} 
//         formData={formData} 
//         results={results} 
//       />
//       <Footer />
//     </div>
//   );
// }

// export default App;

import './App.css';
import Footer from './landing_page/Footer.jsx';
import Navbar from "./landing_page/Navbar.jsx";
import HomePage from './landing_page/home/HomePage.jsx'; // Import HomePage
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState(null); // To hold form inputs
  const [results, setResults] = useState(null); // To hold calculated results

  // Handler to calculate and set the results
  const handleCalculate = async (inputs) => {
    try {
      // Make a POST request to the backend for calculation
      const response = await fetch('http://localhost:3002/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
      });

      // Handle response and set results
      const data = await response.json();
      setFormData(inputs); // Save the inputs
      setResults(data); // Save the calculated results
    } catch (error) {
      console.error('Error calculating TCO:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <HomePage 
        onCalculate={handleCalculate} 
        formData={formData} 
        results={results} 
      />
      <Footer />
    </div>
  );
}

export default App;
