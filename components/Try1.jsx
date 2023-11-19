'use client';
import { useState } from "react";
import Header from "./Header_LPage";
export default function Home() {
    const [isChecked, setIsChecked] = useState(false);
    const [isChecked1, setIsChecked1] = useState(false);
    const [issubmit, setIsSubmit] = useState(false);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();
    const [systolic, setSystolic] = useState();
    const [diastolic, setDiastolic] = useState();
    const [ch, setCh] = useState();
    const [su, setSu] = useState();
    const [smoking, setSmoking] = useState('');
    const [drinking, setDrinking] = useState('');

    const [bp1, setBp1] = useState('');
    const [ch1, setCh1] = useState('');
    const [su1, setSu1] = useState('');
    const [bmi, setBmi1] = useState('');

    const [bp2, setBp2] = useState(false);
    const [ch2, setCh2] = useState(false);
    const [su2, setSu2] = useState(false);
    const [bmi2, setBmi2] = useState(false);
    const [risk, setRisk] = useState(0);
  
    
    
  const handleInputChange = () => {
    setIsChecked(!isChecked);
    if (isChecked1){
        setIsChecked1(!isChecked1);
    } 
  };
  const handleInputChange1 = () => {
    setIsChecked1(!isChecked1);
    if (isChecked){
        setIsChecked(!isChecked);
    }
  };
  const BMI = () =>{
    const b= weight/(height*0.01*height*0.01);
    if (b < 18.5) {
        return "Underweight";
      } else if (b >= 18.5 && b <= 24.9) {
        return "Normal";
      } else if (b >= 25 && b <= 29.9) {
        if (age>45){
            setBmi2('true');
        }
        return "Overweight";
      } else {
        setBmi2('true');
        return "Obesity";
        
      }

  }
  function checkch2Cholesterol() {
    if (ch < 100) {
      return "Optimal";
    } else if (ch >= 100 && ch <= 129) {
      return "Near Optimal";
    } else if (ch >= 130 && ch <= 159) {
        setCh2('true');
      return "Borderline High";
    } else if (ch >= 160 && ch <= 189) {
        setCh2('true');
      return "High";
    } else {
        setCh2('true');
      return "Very High";
    }
  }
  function checksu() {
    if (su < 100) {
      return "Normal";
    } else if (su >= 100 && su <= 125) {
      return "Prediabetes";
    } else {
        setSu2('true');
      return "Diabetes";
    }
  }
  
  function checkBloodPressure() {
    if (systolic < 120 && diastolic < 80) {
      return "Normal";
    } else if (systolic >= 120 && systolic <= 129 && diastolic < 80) {
      return "Elevated";
    } else if (systolic >= 130 && systolic <= 139 && diastolic >= 80 && diastolic <= 89) {
        if(age>45){
            setBp2('true');
        }
      return "Hypertension Stage 1";
    } else if (systolic >= 140 || diastolic >= 90) {
        if(age<45){
            setBp2('true');
        }
      return "Hypertension Stage 2";
    } else {
      return "Other";
    }
  }
  function calculateRiskPercentage() {
    let riskPercentage = 0;
  
    if (bp2 && !ch2 && !su2 && !bmi2) {
      riskPercentage = 50;
    } else if (!bp2 && ch2 && !su2 && !bmi2) {
      riskPercentage = 70;
    } else if (!bp2 && !ch2 && su2 && !bmi2) {
      riskPercentage = 30;
    } else if (!bp2 && !ch2 && !su2 && bmi2) {
      riskPercentage = 50;
    } else if (bp2 && ch2 && !su2 && !bmi2) {
      riskPercentage = 100;
    } else if (bp2 && !ch2 && su2 && !bmi2) {
      riskPercentage = 60;
    } else if (!bp2 && ch2 && su2 && !bmi2) {
      riskPercentage = 80;
    } else if (bp2 && ch2 && su2 && !bmi2) {
      riskPercentage = 100;
    } else if (ch2 && bp2 && !su2 && bmi2) {
      riskPercentage = 75;
    } else if (bp2 && !ch2 && !su2 && bmi2) {
      riskPercentage = 65;
    } else if (!bp2 && su2 && bmi && !bmi2) {
      riskPercentage = 30;
    } else if (ch2 && bp2 && su2 && bmi2) {
      riskPercentage = 100;
    }
  
    return riskPercentage;
  }
  

  const handelsubmit =()=>{
    setBmi1(BMI());
    setCh1(checkch2Cholesterol());
    setSu1(checksu());
    setBp1(checkBloodPressure());
    if(name !='' && age !='' && gender !='' && height !='' && weight !='' && bp !='' && ch !='' && su !='' ){
        
        setRisk(calculateRiskPercentage());
        setIsSubmit('true');
    }
    
  };

  return (
    <div>
    <Header/>
        <section id='details' className='w-full min-h-screen  '>
<div className="absolute  top-[25%]">
    <img className="" src="/images/heartD.jpg" alt="fhs" />
</div>
    <div className="  w-full h-screen flex items-center justify-center">
        <div className="flex flex-no-wrap  justify-start">
        <input type="checkbox" id="toggle" className="sr-only" checked={isChecked} onChange={handleInputChange}/>
          <label htmlFor="toggle" style={{
    backgroundImage: `url(${isChecked ? '/images/pe2.jpeg' : '/images/pe2.jpeg'})`,
  }} className={`card ${isChecked ? '  w-[600px]-+ rounded-xl bg-cover bg-center cursor-pointer overflow-hidden  transition-all duration-600 ease-in-out shadow-xl mx-4 shadow-black bg-black  ' : ' w-48 rounded-xl bg-cover cursor-pointer overflow-hidden flex items-end transition-all duration-600 ease-in-out shadow-xl mx-4 shadow-black'}`}>            
       
       <div className=" font-bold text-black p-1 text-lg " ><h1>PERSONAL DETAILS</h1></div>
            <div className="text-white flex flex-no-wrap">
            
              {/* <div className={`card ${isChecked ? ' hidden' : 'text-black w-12 h-6 flex justify-center items-center m-4 rounded-lg bg-green-300'}`}>
                open
              </div> */}
              
              <div className={`description ${isChecked ? 'opacity-100 translate-y-0 ' : ' opacity-0 translate-y-6'}`}>
              <form  className=" p-16  flex-col ">
                <div className="" >
                    <label className=" block  text-white text-sm font-medium leading-6 ">
                        NAME
                    </label>
                    <div className="mb-4">
                        <input
                        id='d'
                            type="text"
                            placeholder="eg, Chaarulatha"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full  p-2 border rounded-md text-black"
                            required
                        />
                    </div>
                </div>
                <div >
                    <label className="  text-white text-sm font-medium leading-6 ">
                        AGE
                    </label>
                    <div className="mb-4">
                        <input
                        id='d'
                            type="text"
                            placeholder="eg, 19"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            className="w-full  p-2 border rounded-md text-black"
                            required
                        />
                    </div>
                </div>
                <div  >
                    <label className=" block  text-white text-sm font-medium leading-6 ">
                        GENDER
                    </label>
                    <div className="mb-4">
                    <label className="inline-flex items-center ">
                        <input
                            type="radio"
                            className="form-radio"
                            name="gender"
                            value="male"
                        checked={gender === 'male'}
                            onChange={() => setGender('male')}
                        />
                        <span className="ml-2 text-green-200 hover:text-green-400">male</span>
                    </label>
                    <label className="relative inline-flex items-center left-2">
                        <input
                            type="radio"
                            className="form-radio"
                            name="gender"
                            value="female"
                        checked={gender === 'female'}
                        onChange={() => setGender('female')}
                        />
                        <span className="ml-2 text-green-200 hover:text-green-400">female</span>
                    </label>
                    </div>
                </div>
                <div  >
                    <label className=" block  text-white text-sm font-medium leading-6 ">
                        HEIGHT
                    </label>
                    <div className="mb-4">
                        <input
                        id='d'
                            type="number"
                            placeholder="eg, 150 (IN CM)"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            className="w-full  p-2 border rounded-md text-black"
                            required
                        />
                    </div>
                </div>
                <div  >
                    <label className=" block  text-white text-sm font-medium leading-6 ">
                        WEIGHT
                    </label>
                    <div className="mb-4">
                        <input
                        id='d'
                            type="number"
                            placeholder="eg, 54 (in kg)"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            className="w-full  p-2 border rounded-md text-black"
                            required
                        />
                    </div>
                </div>
            </form> 
                </div>
                </div>
           
          </label>
          <input type="checkbox" id="toggle1" className="sr-only" checked={isChecked1} onChange={handleInputChange1}/>
          <label htmlFor="toggle1" style={{backgroundImage: `url(${isChecked1 ? '/images/pe2.jpeg' : '/images/pe2.jpeg'})`}} className={`card ${isChecked1 ? ' h-fit w-[600px]-+ rounded-xl bg-cover bg-center cursor-pointer overflow-hidden  transition-all duration-600 ease-in-out shadow-xl mx-4 shadow-black bg-black  ' : ' w-48 rounded-xl bg-cover bg-right cursor-pointer overflow-hidden flex items-end transition-all duration-600 ease-in-out shadow-xl mx-4 shadow-black'}`}>            
            <div className=" font-bold text-black p-1 text-lg " ><h1>MEDICAL DETAILS</h1></div>
            <div className="text-white flex flex-no-wrap">
            
              {/* <div className={`card ${isChecked1 ? ' hidden' : 'text-black w-12 h-6 flex justify-center items-center m-4 rounded-lg bg-green-300'}`}>
                open
              </div> */}
              
              <div className={`description ${isChecked1 ? 'opacity-100 translate-y-0 ' : ' opacity-0 translate-y-6'}`}>
              <form  className=" p-16  flex-col ">
                <div className="" >
                    <label className=" block  text-white text-sm font-medium leading-6 ">
                        systolic
                    </label>
                    <div className="mb-4">
                        <input
                        id='d'
                            type="number"
                            placeholder="eg, 100 (in mm Hg)"
                            value={systolic}
                            onChange={(e) => setSystolic(e.target.value)}
                            className="w-full  p-2 border rounded-md text-black"
                            required
                        />
                        <label className=" block  text-white text-sm font-medium leading-6 ">
                        diastolic
                    </label>
                        <input
                        id='d'
                            type="number"
                            placeholder="eg, 100 (in mm Hg)"
                            value={diastolic}
                            onChange={(e) => setDiastolic(e.target.value)}
                            className="w-full  p-2 border rounded-md text-black"
                            required
                        />
                    </div>
                </div>
                <div >
                    <label className="  text-white text-sm font-medium leading-6 ">
                        BAD CHOLESTROL
                    </label>
                    <div className="mb-4">
                        <input
                        id='d'
                            type="number"
                            placeholder="eg, 100 (in mg/dL)"
                            value={ch}
                            onChange={(e) => setCh(e.target.value)}
                            className="w-full  p-2 border rounded-md text-black"
                            required
                        />
                    </div>
                </div>
                <div  >
                    <label className=" block  text-white text-sm font-medium leading-6 ">
                        BLOOD su2 LEVEL
                    </label>
                    <div className="mb-4">
                        <input
                        id='d'
                            type="number"
                            placeholder="eg, 100 (in mg/dL)"
                            value={su}
                            onChange={(e) => setSu(e.target.value)}
                            className="w-full  p-2 border rounded-md text-black"
                            required
                        />
                    </div>
                </div>
                <div  >
                    <label className=" block  text-white text-sm font-medium leading-6 ">
                        SMOKING
                    </label>
                    <div className="mb-4">
                    <label className="inline-flex items-center ">
                        <input
                            type="radio"
                            className="form-radio"
                            name="smoking"
                            value="yes"
                        checked={smoking === 'yes'}
                            onChange={() => setSmoking('yes')}
                        />
                        <span className="ml-2 text-green-200 hover:text-green-400">yes</span>
                    </label>
                    <label className="relative inline-flex items-center left-2">
                        <input
                            type="radio"
                            className="form-radio"
                            name="smoking"
                            value="no"
                        checked={smoking === 'no'}
                        onChange={() => setSmoking('no')}
                        />
                        <span className="ml-2 text-green-200 hover:text-green-400">no</span>
                    </label>
                    </div>
                </div>
                <div  >
                    <label className=" block  text--300 text-sm font-medium leading-6 ">
                        DRINKING
                    </label>
                    <div className="mb-4">
                    <label className="inline-flex items-center ">
                        <input
                            type="radio"
                            className="form-radio"
                            name="drinking"
                            value="yes"
                        checked={drinking === 'yes'}
                            onChange={() => setDrinking('yes')}
                        />
                        <span className="ml-2 text-green-200 hover:text-green-400">yes</span>
                    </label>
                    <label className="relative inline-flex items-center left-2">
                        <input
                            type="radio"
                            className="form-radio"
                            name="drinking"
                            value="no"
                        checked={drinking === 'no'}
                        onChange={() => setDrinking('no')}
                        />
                        <span className="ml-2 text-green-200 hover:text-green-400">no</span>
                    </label>
                    </div>
                </div>
            </form> 
            
                </div>
                </div>
           
          </label>
          <button  className=" absolute bottom-20 left-[75%] bg-blue-500 hover:bg-blue-700 h-10 text-white font-bold py-2 px-4 rounded-lg" onClick={handelsubmit}> 
                view report
            </button>
        </div>
      </div>
      </section>
      <section id='bp'className='w-full min-h-screen  '>
      <>
      {issubmit ? (
        
           <div className=" min-h-screen flex flex-col items-center justify-center ">
           <div className="absolute right-0">
    <img className="" src="/images/heartD.jpg" alt="fhs" />
</div>
           <div className=" flex flex-col items-center space-y-4">
            
             <div className="bg-blue-200 p-1 rounded-lg shadow-md w-96">
                <h1 className="text-3xl text-black font-serif">Hi {name}, </h1>
               <h2 className="text-2xl text-black font-semibold mb-4">Health Values</h2>
               <div className="grid grid-cols-2  gap-x-10">
                   <div >
                     <p className="text-gray-600">Blood Pressure</p>
                     <p className="text-black text-3xl font-bold">{bp1}</p>
                   </div>
                   <div >
                     <p className="text-gray-600">Bad Cholestrol</p>
                     <p className="text-black text-3xl font-bold">{ch1}</p>
                   </div>
                   <div >
                     <p className="text-gray-600">Blood sugar</p>
                     <p className="text-black text-3xl font-bold">{su1}</p>
                   </div>
                   <div >
                     <p className="text-gray-600">BMI</p>
                     <p className="text-black text-3xl font-bold">{bmi}</p>
                   </div>
               </div>
             </div>
           
             <div className="bg-blue-200 p-6 rounded-lg shadow-md w-72 text-center">
               <h2 className="text-black text-2xl font-semibold mb-4">Risk Percentage</h2>
               <p className="text-4xl font-bold text-red-500">{risk}%</p>
             </div>
           </div>
         </div>
      ) : ( <div className="flex justify-center items-center h-screen ">
      <div className="absolute right-0 ">
    <img className="" src="/images/heartD.jpg" alt="fhs" />
</div>
      <div className="text-center">
        <h1 className="text-blue-200 text-3xl font-bold mb-4">Please fill all your details to check your risk level</h1>
        {/* Additional content or form inputs can be added here */}
      </div>
    </div> )}
      </>
        </section>
    </div>
  );
}
