import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatSupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatSupportModal = ({ isOpen, onClose }: ChatSupportModalProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "👋 Hello! I'm your Health Orbit AI Assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickReplies = [
    'Book an appointment',
    'Health packages info',
    'Talk to a doctor',
    'Emergency services',
  ];

  const handleSend = async (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    // Show typing indicator
    setIsTyping(true);
    
    try {
      // Call medical AI model
      const botResponse = await getMedicalAIResponse(text);
      const botMessage: Message = {
        id: Date.now() + 1,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('AI Error:', error);
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: "I apologize, but I'm having trouble connecting right now. Please try again or contact our support team at +92 21 1234 5678.",
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const getMedicalAIResponse = async (userText: string): Promise<string> => {
    // Medical context prompt
    const systemPrompt = `You are a professional medical AI assistant for The Health Orbit healthcare platform in Pakistan. 
Your role is to provide helpful, accurate, and empathetic healthcare information while being mindful of medical ethics.

Guidelines:
- Provide general health information and guidance
- Recommend booking appointments for specific medical concerns
- Suggest appropriate health packages or services
- Always emphasize consulting healthcare professionals for diagnosis
- Never provide specific medical diagnoses or prescribe medications
- Be supportive and understanding
- Keep responses concise (2-4 sentences max)
- If asked about non-medical topics, politely redirect to health-related services

Available services: Health Plans, Preventive Care, Telemedicine, AI Health Assessment, Ramadan Wellness Packages, Healthcare Marketing, Health Partners Network.`;

    try {
      // Using Groq API (Free tier: 30 requests/minute, no credit card required)
      // Get free API key from: https://console.groq.com/keys
      const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY; // Replace with your free Groq API key
      
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile', // Updated model (alternatives: 'llama-3.1-8b-instant', 'mixtral-8x7b-32768')
          messages: [
            {
              role: 'system',
              content: systemPrompt,
            },
            {
              role: 'user',
              content: userText,
            },
          ],
          temperature: 0.7,
          max_tokens: 200,
          top_p: 0.9,
        }),
      });

      if (!response.ok) {
        throw new Error('Groq API request failed');
      }

      const data = await response.json();
      let aiResponse = data.choices?.[0]?.message?.content?.trim() || '';
      
      // Add service suggestions based on keywords
      if (userText.toLowerCase().includes('appointment') || userText.toLowerCase().includes('book')) {
        aiResponse += "\n\n📅 Book now: +92 21 1234 5678";
      } else if (userText.toLowerCase().includes('package') || userText.toLowerCase().includes('price')) {
        aiResponse += "\n\n💚 Ramadan Special: 26% OFF - Starting PKR 5,000";
      } else if (userText.toLowerCase().includes('emergency')) {
        aiResponse += "\n\n🚨 Emergency: Call 1122 immediately";
      }
      
      return aiResponse || getFallbackResponse(userText);
    } catch (error) {
      console.error('Groq API Error:', error);
      console.log('💡 Get your free Groq API key at: https://console.groq.com/keys');
      return getFallbackResponse(userText);
    }
  };

  const getFallbackResponse = (userText: string): string => {
    const lowerText = userText.toLowerCase();
    
    if (lowerText.includes('appointment') || lowerText.includes('book')) {
      return "I'd be happy to help you book an appointment! You can:\n\n📞 Call: +92 21 1234 5678\n📧 Contact form on our website\n🤖 Use our AI Health Assessment\n\nWhat works best for you?";
    } else if (lowerText.includes('package') || lowerText.includes('price') || lowerText.includes('cost')) {
      return "We offer Ramadan Special packages (26% OFF):\n\n💚 Smart Care - PKR 5,000\n💙 Essential Care - PKR 7,000\n💜 Executive Platinum - PKR 15,000\n\nWould you like details?";
    } else if (lowerText.includes('doctor') || lowerText.includes('consultation')) {
      return "Our doctors are available for:\n\n🩺 Telemedicine consultations\n🏥 In-person visits\n📋 Second opinions\n\nWhat type of consultation do you need?";
    } else if (lowerText.includes('emergency') || lowerText.includes('urgent')) {
      return "⚠️ For emergencies:\n\n🚨 Call 1122 (Emergency)\n📞 +92 21 1234 5678 (Our helpline)\n\nIf life-threatening, call 1122 immediately!";
    } else {
      return "I can assist with:\n\n• Booking appointments\n• Health packages info\n• Doctor consultations\n• Emergency services\n• Health assessments\n\nWhat would you like to know?";
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
          />

          {/* Chat Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-4 sm:bottom-24 right-2 sm:right-8 w-[96%] sm:w-[95%] max-w-md z-[61] bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            style={{ height: 'calc(100vh - 100px)', maxHeight: '600px' }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-3 sm:p-4 flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base">Health Orbit AI</h3>
                  <div className="flex items-center gap-1 text-xs">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    <span>Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 hover:bg-white/20 rounded-full flex items-center justify-center transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-gray-50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] sm:max-w-[80%] rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2 ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-br-none'
                        : 'bg-white text-gray-800 rounded-bl-none shadow-md'
                    }`}
                  >
                    <p className="text-xs sm:text-sm whitespace-pre-line">{message.text}</p>
                    <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-white/70' : 'text-gray-500'}`}>
                      {message.timestamp.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-white rounded-xl sm:rounded-2xl rounded-bl-none px-3 sm:px-4 py-2 sm:py-3 shadow-md">
                    <div className="flex gap-1">
                      <motion.span
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                      />
                      <motion.span
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.span
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Quick Replies */}
            <div className="px-3 sm:px-4 py-2 bg-white border-t border-gray-200">
              <div className="flex gap-1.5 sm:gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => handleSend(reply)}
                    className="px-2 sm:px-3 py-1 sm:py-1.5 bg-gray-100 hover:bg-primary-100 text-gray-700 hover:text-primary-700 rounded-full text-[10px] sm:text-xs font-medium whitespace-nowrap transition"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Area */}
            <div className="p-3 sm:p-4 bg-white border-t border-gray-200">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend(inputValue);
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-3 sm:px-4 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full flex items-center justify-center hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ChatSupportModal;
