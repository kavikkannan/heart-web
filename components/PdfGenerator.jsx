
import { html2pdf } from "html2pdf.js";

const PdfGenerator = (inputText) => {
  const generatePDF = (text) => {
    const element = document.createElement('div');
    element.innerHTML = `<p>${text}</p>`; // Modify this structure based on your PDF content

    html2pdf(element, {
      margin: 10,
      filename: 'generated_pdf.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    });
  };

  return <div>{generatePDF(inputText)}</div>;
};

export default PdfGenerator;
