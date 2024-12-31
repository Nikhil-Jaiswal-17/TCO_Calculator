import React from 'react';
import Hero from './Hero';
import Comparison from './Comparison';
import FAQ from './FAQ';
import Charts from './Charts';

export default function HomePage({ onCalculate, formData, results }) {
  return (
    <>
      <Hero onCalculate={onCalculate} /> {/* Pass the calculate handler */}
      
      {results && (
        <>
          <Comparison formData={formData} results={results} />
          <Charts formData={formData} results={results} />
        </>
      )}
      <FAQ />
    </>
  );
}
