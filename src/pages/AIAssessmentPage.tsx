import { motion } from 'framer-motion';
import { useState } from 'react';
import { sendToGoogleSheets, getCurrentTimestamp, type AIAssessmentData } from '../utils/googleSheets';

const AIAssessmentPage = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<string | null>(null);

  const questions = [
    { 
      id: 'step1',
      question: 'Tell us about yourself',
      type: 'group',
      fields: [
        { id: 'name', label: 'Full Name *', type: 'text', required: true, placeholder: 'Enter your full name' },
        { id: 'phone', label: 'Phone Number *', type: 'tel', required: true, placeholder: '+92 300 1234567' },
        { id: 'email', label: 'Email (Optional)', type: 'email', required: false, placeholder: 'your@email.com' },
      ]
    },
    { 
      id: 'step2',
      question: 'Basic health information',
      type: 'group',
      fields: [
        { id: 'age', label: 'Age *', type: 'number', required: true, placeholder: 'Enter your age' },
        { id: 'gender', label: 'Gender *', type: 'select', required: true, options: ['Male', 'Female', 'Other'] },
      ]
    },
    { 
      id: 'step3',
      question: 'Health details',
      type: 'group',
      fields: [
        { id: 'symptoms', label: 'Current Symptoms (Optional)', type: 'textarea', required: false, placeholder: 'Describe any symptoms you are experiencing...' },
        { id: 'lifestyle', label: 'Lifestyle *', type: 'select', required: true, options: ['Sedentary', 'Moderate', 'Active', 'Very Active'] },
      ]
    },
  ];

  const handleAnswerChange = (value: string) => {
    setAnswers({ ...answers, [questions[step - 1].id]: value });
  };

  const getAIHealthAssessment = async () => {
    setIsLoading(true);
    
    const assessmentPrompt = `As a healthcare professional, analyze this health assessment and provide personalized recommendations:

Age: ${answers.age}
Gender: ${answers.gender}
Symptoms: ${answers.symptoms || 'None reported'}
Lifestyle: ${answers.lifestyle}

Provide a comprehensive health assessment including:
1. Risk Analysis (2-3 key points)
2. Recommended Health Checks (specific tests/screenings)
3. Lifestyle Recommendations (3-4 actionable tips)
4. When to See a Doctor (red flags)

Keep it clear, actionable, and empathetic. Use bullet points and emojis for readability.`;


    try {
      const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [
            {
              role: 'system',
              content: 'You are a professional healthcare AI providing personalized health assessments. Be empathetic, clear, and actionable. Format responses with headers, bullet points, and emojis for readability.',
            },
            {
              role: 'user',
              content: assessmentPrompt,
            },
          ],
          temperature: 0.7,
          max_tokens: 800,
        }),
      });

      const data = await response.json();
      
      if (data.choices && data.choices[0]?.message?.content) {
        const aiResults = data.choices[0].message.content;
        setResults(aiResults);
        
        // Send to Google Sheets
        const sheetData: AIAssessmentData = {
          type: 'ai-assessment',
          timestamp: getCurrentTimestamp(),
          name: answers.name,
          phone: answers.phone,
          email: answers.email,
          age: answers.age,
          gender: answers.gender,
          symptoms: answers.symptoms || 'None',
          lifestyle: answers.lifestyle,
          results: aiResults,
        };
        await sendToGoogleSheets(sheetData);
      } else {
        throw new Error('Invalid response');
      }
    } catch (error) {
      console.error('AI Assessment Error:', error);
      const fallbackResults = generateFallbackAssessment();
      setResults(fallbackResults);
      
      // Send fallback to Google Sheets too
      const sheetData: AIAssessmentData = {
        type: 'ai-assessment',
        timestamp: getCurrentTimestamp(),
        name: answers.name,
        phone: answers.phone,
        email: answers.email,
        age: answers.age,
        gender: answers.gender,
        symptoms: answers.symptoms || 'None',
        lifestyle: answers.lifestyle,
        results: fallbackResults,
      };
      await sendToGoogleSheets(sheetData);
    } finally {
      setIsLoading(false);
    }
  };

  const generateFallbackAssessment = () => {
    const age = parseInt(answers.age);
    let ageRisk = '';
    
    if (age < 30) {
      ageRisk = '✅ **Low Age-Related Risk**: Focus on building healthy habits now';
    } else if (age < 50) {
      ageRisk = '⚠️ **Moderate Risk**: Time to prioritize preventive health checks';
    } else {
      ageRisk = '🔴 **Higher Risk**: Regular health monitoring is essential';
    }

    return `## 🔍 Your Health Assessment Results

### Risk Analysis
${ageRisk}
- **Lifestyle Impact**: ${answers.lifestyle} activity level ${answers.lifestyle === 'Sedentary' ? '⚠️ (needs improvement)' : '✅ (good)'}
${answers.symptoms ? '- **Symptoms Reported**: Requires medical attention' : '- **No Symptoms**: Preventive care recommended'}

### 🩺 Recommended Health Checks
- Complete Blood Count (CBC)
- Lipid Profile (Cholesterol)
- Blood Sugar (Diabetes screening)
- Blood Pressure Monitoring
${age > 40 ? '- Thyroid Function Test\n- ECG/Cardiac Screening' : ''}

### 💪 Lifestyle Recommendations
- ${answers.lifestyle === 'Sedentary' ? '🏃 Increase physical activity to 30 min/day' : '✅ Maintain your active lifestyle'}
- 🥗 Balanced diet with fruits & vegetables
- 💧 Stay hydrated (8 glasses/day)
- 😴 Get 7-8 hours quality sleep

### 🚨 When to See a Doctor
- Any persistent symptoms
- Sudden changes in health
- Family history of chronic diseases
- ${age > 40 ? 'Annual preventive checkups' : 'Checkup every 2 years'}

📞 **Book your health screening**: Call +92 21 1234 5678
🤖 **Chat Support**: Get instant answers about your health`;
  };

  const handleNext = async () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      await getAIHealthAssessment();
    }
  };

  const isStepValid = () => {
    const currentQuestion = questions[step - 1];
    if (currentQuestion.type === 'group') {
      return currentQuestion.fields.every(field => 
        !field.required || (answers[field.id] && answers[field.id].trim() !== '')
      );
    }
    return true;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 pt-24 pb-16">
      <div className="container mx-auto px-6">
        {!results ? (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Know Your Health Before Symptoms Show
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get your personalized health risk score in 3 minutes. Free. No spam. Doctor-reviewed logic.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
              >
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-gray-600">Step {step} of 3</span>
                    <span className="text-sm font-semibold text-primary-600">{Math.round((step / 3) * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-primary-600 to-secondary-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${(step / 3) * 100}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    {questions[step - 1]?.question}
                  </h2>
                  
                  <div className="space-y-5">
                    {questions[step - 1]?.fields?.map((field) => (
                      <div key={field.id}>
                        <label className="block text-gray-700 font-semibold mb-2">
                          {field.label}
                        </label>
                        
                        {(field.type === 'text' || field.type === 'tel' || field.type === 'email' || field.type === 'number') && (
                          <input
                            type={field.type}
                            value={answers[field.id] || ''}
                            onChange={(e) => setAnswers({ ...answers, [field.id]: e.target.value })}
                            required={field.required}
                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-600 focus:ring-4 focus:ring-primary-100 transition"
                            placeholder={field.placeholder}
                          />
                        )}
                        
                        {field.type === 'select' && (
                          <div className="space-y-2">
                            {field.options?.map((option) => (
                              <motion.button
                                key={option}
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                type="button"
                                onClick={() => setAnswers({ ...answers, [field.id]: option })}
                                className={`w-full px-4 py-3 rounded-xl border-2 transition text-left font-medium ${
                                  answers[field.id] === option
                                    ? 'border-primary-600 bg-primary-50'
                                    : 'border-gray-200 hover:border-primary-600 hover:bg-primary-50'
                                }`}
                              >
                                {option}
                              </motion.button>
                            ))}
                          </div>
                        )}
                        
                        {field.type === 'textarea' && (
                          <textarea
                            rows={4}
                            value={answers[field.id] || ''}
                            onChange={(e) => setAnswers({ ...answers, [field.id]: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-600 focus:ring-4 focus:ring-primary-100 transition"
                            placeholder={field.placeholder}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>

                <div className="flex gap-4 mt-8">
                  {step > 1 && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setStep(step - 1)}
                      className="px-8 py-4 rounded-full border-2 border-gray-300 font-semibold hover:bg-gray-50 transition"
                    >
                      Back
                    </motion.button>
                  )}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleNext}
                    disabled={isLoading || !isStepValid()}
                    className="flex-1 bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-4 rounded-full font-semibold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? '⏳ Analyzing...' : step < 3 ? 'Next' : '🤖 Get AI Results'}
                  </motion.button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-12 grid md:grid-cols-3 gap-6 text-center"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-4xl mb-2">🤖</div>
                  <h3 className="font-bold text-gray-900">AI-Powered</h3>
                  <p className="text-gray-600 text-sm">Advanced algorithms</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-4xl mb-2">⚡</div>
                  <h3 className="font-bold text-gray-900">Instant Results</h3>
                  <p className="text-gray-600 text-sm">Get insights immediately</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-4xl mb-2">🔒</div>
                  <h3 className="font-bold text-gray-900">Private & Secure</h3>
                  <p className="text-gray-600 text-sm">Your data is protected</p>
                </div>
              </motion.div>
            </div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-4xl font-bold text-gray-900">🎯 Your Health Assessment</h1>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setResults(null);
                    setStep(1);
                    setAnswers({});
                  }}
                  className="px-6 py-3 rounded-full bg-gray-100 hover:bg-gray-200 font-semibold"
                >
                  ↻ Retake
                </motion.button>
              </div>

              <div className="prose prose-lg max-w-none">
                {results.split('\n').map((line, index) => {
                  if (line.startsWith('##')) {
                    return <h2 key={index} className="text-2xl font-bold text-gray-900 mt-6 mb-4">{line.replace('##', '')}</h2>;
                  } else if (line.startsWith('###')) {
                    return <h3 key={index} className="text-xl font-bold text-gray-800 mt-4 mb-3">{line.replace('###', '')}</h3>;
                  } else if (line.startsWith('-')) {
                    return <li key={index} className="text-gray-700 ml-4">{line.replace('-', '')}</li>;
                  } else if (line.trim()) {
                    return <p key={index} className="text-gray-700 mb-2">{line}</p>;
                  }
                  return null;
                })}
              </div>

              <div className="mt-8 grid md:grid-cols-2 gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = 'tel:+92211234567'}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-xl font-semibold"
                >
                  📞 Book Appointment
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = '/ramadan-wellness'}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-semibold"
                >
                  🩺 View Health Packages
                </motion.button>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white text-center"
            >
              <h3 className="text-2xl font-bold mb-3">💡 Next Steps</h3>
              <p className="text-lg opacity-90 mb-4">
                This AI assessment is for informational purposes. For personalized medical advice, consult our healthcare professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.location.href = '/preventive-care'}
                  className="bg-white text-primary-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition"
                >
                  Explore Preventive Care
                </button>
                <button
                  onClick={() => window.location.href = '/telemedicine'}
                  className="bg-white/20 backdrop-blur text-white border-2 border-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition"
                >
                  Try Telemedicine
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AIAssessmentPage;
