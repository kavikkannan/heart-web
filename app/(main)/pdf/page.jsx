import InputForm from '@/components/InputForm';
import PdfGenerator from '@/components/PdfGenerator';

const Home = () => {
  const handleGeneratePDF = (inputText) => {
    PdfGenerator(inputText);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">PDF Generator</h1>
      <InputForm generatePDF={handleGeneratePDF} />
    </div>
  );
};

export default Home;
