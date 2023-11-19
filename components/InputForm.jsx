'use client';
import React, { useState } from 'react';
import html2pdf from 'html2pdf.js';

const InputForm = () => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const generatePDF = () => {
    const element = document.createElement('div');
    element.innerHTML = `<p>${inputText}</p>`; // Modify this structure based on your PDF content

    html2pdf(element, {
      margin: 10,
      filename: 'generated_pdf.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generatePDF();
  };

  return (
    <form onSubmit={handleSubmit} className="py-4">
      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text for PDF"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        rows={6}
      ></textarea>
      <button type="submit" className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Generate PDF
      </button>
    </form>
  );
};

export default InputForm;
