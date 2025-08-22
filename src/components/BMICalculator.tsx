import React, { useState } from 'react';

const BMICalculator: React.FC = () => {
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [bmiResult, setBmiResult] = useState<{
    value: number;
    category: string;
    message: string;
  } | null>(null);

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height) / 100; // Convert cm to meters
    
    if (weightNum > 0 && heightNum > 0) {
      const bmi = weightNum / (heightNum * heightNum);
      const roundedBMI = Math.round(bmi * 10) / 10;
      
      let category = '';
      let message = '';
      
      if (bmi < 18.5) {
        category = 'Underweight';
        message = 'Consider consulting with our nutritionist for a healthy weight gain plan.';
      } else if (bmi >= 18.5 && bmi < 25) {
        category = 'Normal Weight';
        message = 'Great job! Maintain your healthy lifestyle with our fitness programs.';
      } else if (bmi >= 25 && bmi < 30) {
        category = 'Overweight';
        message = 'Our personal trainers can help you achieve your ideal weight through targeted workouts.';
      } else {
        category = 'Obese';
        message = 'Let us help you start your weight loss journey with our specialized programs.';
      }

      setBmiResult({
        value: roundedBMI,
        category,
        message
      });
    }
  };

  return (
    <section id="bmi-calculator" className="py-5 bg-darker">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="calculator-card">
              <div className="section-title text-center mb-4">
                <h2>
                  BMI <span className="text-danger">CALCULATOR</span>
                </h2>
                <p>Check your Body Mass Index (BMI) to assess your fitness level</p>
              </div>
              <div className="calculator-form">
                <form onSubmit={calculateBMI}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="weight" className="form-label">
                        Weight (kg)
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="weight"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        placeholder="Enter your weight"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="height" className="form-label">
                        Height (cm)
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="height"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        placeholder="Enter your height"
                        required
                      />
                    </div>
                    <div className="col-12 text-center mt-4">
                      <button type="submit" className="btn btn-danger">
                        Calculate BMI
                      </button>
                    </div>
                  </div>
                </form>
                {bmiResult && (
                  <div className="mt-4 text-center">
                    <h4>
                      Your BMI: <span className="text-danger">{bmiResult.value}</span>
                    </h4>
                    <p className="mb-2">{bmiResult.category}</p>
                    <p>{bmiResult.message}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BMICalculator; 