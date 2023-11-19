"use client";
import Link from 'next/link';
import React from 'react';

export default function Body() {
  return (
    <div className="bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold tracking-tight text-black sm:text-5xl">
          Predicting Heart Disease
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-black">
          Heart disease prediction made easy. Check your risk factors and take control of your health.
        </p>
        <div className="mt-10">
          <h3 className="text-2xl font-bold mb-4 text-black">Key Factors Considered:</h3>
          <ul className="list-disc list-inside text-black">
            <li>Cholesterol levels</li>
            <li>Blood pressure</li>
            <li>Family history</li>
            <li>Physical activity</li>
            <li>Age and gender</li>
          </ul>
        </div>
        <div className="mt-10 flex-col">
          <p className="text-lg text-black">
            Our advanced machine learning algorithms analyze various health parameters and historical data to assess the risk of heart disease.
            Input your details for a preliminary assessment.
          </p>
          </div>
          <div className='flex justify-center'><Link href='/try' className="mt-6 inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-md text-black bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Check Your Risk
          </Link></div>
          
        
        <div className="mt-16">
          <h3 className="text-3xl font-bold mb-6 text-black">Preventive Measures:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-black rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4 text-blue-500">Maintain a Healthy Diet</h4>
              <p className="text-blue-300">
                Consume more fruits, vegetables, and whole grains. Limit saturated fats and sugars.
              </p>
            </div>
            <div className="bg-black rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4 text-blue-500">Regular Exercise</h4>
              <p className="text-blue-300">
                Engage in at least 30 minutes of moderate exercise most days of the week.
              </p>
            </div>
            <div className="bg-black rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4 text-blue-500">Manage Stress</h4>
              <p className="text-blue-300">
                Practice relaxation techniques like meditation or yoga to reduce stress levels.
              </p>
            </div>
            <div className="bg-black rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4 text-blue-500">Regular Check-ups</h4>
              <p className="text-blue-300">
                Visit your healthcare provider for routine check-ups and screenings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

