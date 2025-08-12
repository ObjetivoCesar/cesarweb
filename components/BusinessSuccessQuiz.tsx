'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, BarChart, Eye, ThumbsUp, ArrowLeft, ArrowRight, Check, X } from 'lucide-react';

// Mapeo de tipos de íconos a componentes
type IconName = 'Search' | 'BarChart' | 'Eye' | 'ThumbsUp';

const iconComponents = {
  'Search': Search,
  'BarChart': BarChart,
  'Eye': Eye,
  'ThumbsUp': ThumbsUp
} as const;
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { Question, QuizAnswers, FormData, BusinessSuccessQuizProps } from '@/types/quiz.types';

// Definición de preguntas
const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Si buscas ahora mismo en Google tu principal servicio o producto + tu ciudad… ¿apareces en la primera página?",
    icon: 'Search' as const,
    yesFeedback: "¡Excelente! Tener visibilidad en la primera página de Google es crucial para atraer más clientes.",
    noFeedback: "Si no apareces, tus clientes están viendo a tu competencia. El 90% de los clics se quedan en la primera página de resultados. Nuestra estrategia combina investigación de mercado, SEO y redes sociales para que no seas invisible.",
    yesFeedbackDetail: "¡Perfecto! Mantener tu visibilidad en la primera página es clave. Seguimos optimizando para que te mantengas por delante de la competencia.",
    noFeedbackDetail: "Si no apareces, tus clientes están viendo a tu competencia. El 90% de los clics se quedan en la primera página de resultados. Nuestra estrategia combina investigación de mercado, SEO y redes sociales para que no seas invisible.",
    imageDescription: "Buscador de Google en pantalla de laptop con tu servicio escrito, mostrando resultados con tu empresa destacada en primer lugar. Estilo hiperrealista, vista a 45°, iluminación natural."
  },
  {
    id: 2,
    text: "¿Sabes cuántas veces al mes se busca en internet lo que vendes?",
    icon: 'BarChart' as const,
    yesFeedback: "¡Buen trabajo! Conocer el volumen de búsquedas te ayuda a medir el potencial de tu mercado.",
    noFeedback: "No adivines, decide con datos. Analizamos las palabras clave que realmente usan tus clientes para encontrarte y creamos una estrategia enfocada en esas búsquedas.",
    yesFeedbackDetail: "Excelente que ya midas esto. Podemos ayudarte a profundizar en los datos para identificar nuevas oportunidades de crecimiento.",
    noFeedbackDetail: "No adivines, decide con datos. Analizamos las palabras clave que realmente usan tus clientes para encontrarte y creamos una estrategia enfocada en esas búsquedas.",
    imageDescription: "Pantalla con gráficos de barras y líneas mostrando crecimiento en búsquedas, estilo minimalista en paleta negro/blanco/gris."
  },
  {
    id: 3,
    text: "Si un cliente potencial visita tu web hoy… ¿sabría en 5 segundos por qué elegirte?",
    icon: 'Eye' as const,
    yesFeedback: "¡Perfecto! Una propuesta de valor clara es clave para convertir visitantes en clientes.",
    noFeedback: "Tu sitio debe transmitir confianza, diferenciarte y guiar al cliente hacia la compra. Diseñamos webs con estrategia, no solo con diseño bonito.",
    yesFeedbackDetail: "¡Excelente! Una propuesta de valor clara es lo que diferencia a los negocios exitosos. Podemos ayudarte a potenciarla aún más.",
    noFeedbackDetail: "Tu sitio debe transmitir confianza, diferenciarte y guiar al cliente hacia la compra. Diseñamos webs con estrategia, no solo con diseño bonito.",
    imageDescription: "Persona navegando en una web desde una tablet, con expresión de interés. Fondo desenfocado, luz cálida."
  },
  {
    id: 4,
    text: "¿Tus redes sociales generan clientes o solo likes?",
    icon: 'ThumbsUp' as const,
    yesFeedback: "¡Fenomenal! Aprovechar las redes sociales para generar negocio es una ventaja competitiva.",
    noFeedback: "No basta con estar activo. El contenido debe responder a una estrategia clara. Así atraes clientes listos para comprar, no solo seguidores.",
    yesFeedbackDetail: "¡Excelente! Las redes sociales son una poderosa herramienta de conversión cuando se usan estratégicamente. Podemos ayudarte a optimizar aún más tus resultados.",
    noFeedbackDetail: "No basta con estar activo. El contenido debe responder a una estrategia clara. Así atraes clientes listos para comprar, no solo seguidores.",
    imageDescription: "Pantalla dividida: en un lado 'likes' sin conversión, en el otro notificaciones de ventas y mensajes de clientes. Colores contrastados."
  }
];

const BusinessSuccessQuiz = ({
  title = "¿Tu negocio está listo para crecer?",
  submitButtonText = "Quiero agendar mi cita",
  onSubmit,
  className = ""
}: BusinessSuccessQuizProps) => {
  const [isClient, setIsClient] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState<boolean | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    whatsapp: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Ensure this only runs on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Efecto para manejar el scroll al cambiar de pregunta
  useEffect(() => {
    if (isClient && containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [currentQuestion, showResults, isClient]);

  const handleAnswer = (answer: boolean) => {
    setCurrentAnswer(answer);
    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    if (currentAnswer !== null) {
      setAnswers(prev => ({
        ...prev,
        [QUESTIONS[currentQuestion].id]: currentAnswer
      }));
      
      setShowFeedback(false);
      setCurrentAnswer(null);
      
      if (currentQuestion < QUESTIONS.length - 1) {
        setCurrentQuestion(prev => prev + 1);
      } else {
        setShowResults(true);
      }
    }
  };

  const handlePrevQuestion = () => {
    if (showFeedback) {
      setShowFeedback(false);
      setCurrentAnswer(null);
    } else if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Enviar datos al endpoint de la API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'negocios@cesarreyesjaramillo.com',
          subject: 'Nueva consulta desde el Test de Negocio',
          html: `
            <h2>Nueva consulta desde el Test de Negocio</h2>
            <p><strong>Nombre:</strong> ${formData.name}</p>
            <p><strong>WhatsApp:</strong> ${formData.whatsapp}</p>
            <p><strong>Empresa:</strong> ${formData.company || 'No especificada'}</p>
            <p><strong>Mensaje:</strong> ${formData.message || 'No especificado'}</p>
            <h3>Respuestas del test:</h3>
            <ul>
              ${Object.entries(answers).map(([questionId, answer]) => {
                const question = QUESTIONS.find(q => q.id === parseInt(questionId));
                return question ? 
                  `<li>${question.text}: <strong>${answer ? 'Sí' : 'No'}</strong> - ${answer ? question.yesFeedback : question.noFeedback}</li>` : '';
              }).join('')}
            </ul>
          `,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar el formulario');
      }

      // Si hay una función onSubmit personalizada, la ejecutamos
      if (onSubmit) {
        await onSubmit(formData, answers);
      }
      
      setSubmitSuccess(true);
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      // Aquí podrías agregar un estado para mostrar un mensaje de error al usuario
    } finally {
      setIsSubmitting(false);
    }
  };

  // Generar resumen basado en las respuestas
  const generateSummary = () => {
    return QUESTIONS.map(question => {
      const answer = answers[question.id];
      return answer !== undefined 
        ? answer 
          ? question.yesFeedback 
          : question.noFeedback
        : null;
    }).filter(Boolean).join('\n\n');
  };

  // Efecto para inicializar el mensaje con el resumen
  useEffect(() => {
    if (isClient && showResults && !formData.message) {
      setFormData(prev => ({
        ...prev,
        message: `Con base en tus respuestas, creemos que podríamos ayudarte en estos puntos:\n\n${generateSummary()}\n\nCuéntanos más para darte un análisis más preciso:`
      }));
    }
  }, [showResults, formData.message, isClient]);

  // Calcular progreso
  const progress = showResults 
    ? 100 
    : ((currentQuestion) / QUESTIONS.length) * 100;

  // Don't render anything on the server
  if (!isClient) {
    return (
      <div 
        ref={containerRef}
        className={`w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-[0_0_32px_8px_rgba(255,255,255,0.18)] transition-all duration-500 ${className}`}
        style={{ 
          minHeight: '400px',
          backgroundColor: '#121212' // Forzando el color de fondo aquí también
        }}
      />
    );
  }

  return (
    <div 
      ref={containerRef}
      className={`w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-[0_0_32px_8px_rgba(255,255,255,0.18)] transition-all duration-500 ${className}`}
      style={{
        backgroundColor: '#121212', // Forzando el color de fondo con estilo en línea
        backgroundImage: 'none' // Asegurando que no haya gradientes que lo sobrescriban
      }}
    >
      {/* Barra de progreso */}
      <div className="h-2 bg-gray-800 w-full">
        <motion.div 
          className="h-full bg-gradient-to-r from-blue-600 to-blue-800"
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
      </div>

      <div className="p-6 md:p-8">
        {/* Título */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
          {title}
        </h2>

        <AnimatePresence mode="wait">
          {!showResults ? (
            <motion.div
              key={`question-${currentQuestion}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {!showFeedback ? (
                <>
                  {/* Pregunta actual */}
                  <div className="flex flex-col items-center space-y-4">
                    <div className="p-3 bg-blue-600/20 rounded-full">
                      {(() => {
                        const Icon = iconComponents[QUESTIONS[currentQuestion].icon];
                        return <Icon className="w-8 h-8 text-blue-400" />;
                      })()}
                    </div>
                    <p className="text-lg md:text-xl text-center text-gray-200">
                      {QUESTIONS[currentQuestion].text}
                    </p>
                  </div>

                  {/* Controles de navegación */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1 max-w-xs mx-auto sm:mx-0 bg-transparent hover:bg-white/20 border-white text-white hover:text-white h-14 text-base"
                      onClick={() => handleAnswer(false)}
                    >
                      <X className="mr-2 h-5 w-5" /> No
                    </Button>
                    
                    <Button
                      type="button"
                      className="flex-1 max-w-xs mx-auto sm:mx-0 bg-gradient-to-r from-white to-gray-200 hover:from-gray-100 hover:to-gray-300 text-gray-900 h-14 text-base"
                      onClick={() => handleAnswer(true)}
                    >
                      <Check className="mr-2 h-5 w-5" /> Sí
                    </Button>
                  </div>
                </>
              ) : (
                /* Feedback después de responder */
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 space-y-6"
                >
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {currentAnswer ? '✅ Correcto' : '💡 Importante'}
                    </h3>
                    <p className="text-gray-300">
                      {currentAnswer 
                        ? QUESTIONS[currentQuestion].yesFeedback 
                        : QUESTIONS[currentQuestion].noFeedback}
                    </p>
                  </div>
                  
                  <div className="flex justify-center">
                    <Button
                      type="button"
                      className="bg-gradient-to-r from-white to-gray-200 hover:from-gray-100 hover:to-gray-300 text-gray-900 h-12 px-8 text-base"
                      onClick={handleNextQuestion}
                    >
                      {currentQuestion < QUESTIONS.length - 1 ? 'Siguiente pregunta' : 'Ver resultados'}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {currentQuestion > 0 && (
                <div className="flex justify-center">
                  <Button
                    type="button"
                    variant="ghost"
                    className="text-gray-400 hover:text-white"
                    onClick={handlePrevQuestion}
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" /> 
                    {showFeedback ? 'Volver a la pregunta' : 'Volver a la pregunta anterior'}
                  </Button>
                </div>
              )}

              {!showFeedback && (
                <div className="text-center text-sm text-gray-400 mt-2">
                  Pregunta {currentQuestion + 1} de {QUESTIONS.length}
                </div>
              )}
            </motion.div>
          ) : !submitSuccess ? (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="text-center mb-6">
                <p className="text-gray-300 text-lg">
                  Solo si buscas cambiar la realidad de tu actividad económica, comparte conmigo esta información, rellena con tus datos personales y de tu empresa, y agenda una consultoría hoy mismo
                </p>
              </div>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Nombre
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-300 mb-1">
                    WhatsApp
                  </label>
                  <Input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="+1234567890"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                    Nombre de la empresa
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={handleInputChange}
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Nombre de tu negocio o empresa"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    ¿Qué quieres conseguir?
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowResults(false)}
                  className="flex-1 max-w-xs mx-auto sm:mx-0 bg-transparent hover:bg-gray-800 border-gray-700 text-gray-300 hover:text-white"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Volver
                </Button>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 max-w-xs mx-auto sm:mx-0 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 h-14 text-base"
                >
                  {isSubmitting ? 'Enviando...' : submitButtonText}
                  {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
                </Button>
              </div>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">¡Recibimos tu solicitud!</h3>
              <p className="text-gray-300 mb-6">
                Nos pondremos en contacto contigo a la brevedad para agendar tu cita.
              </p>
              <Button
                onClick={() => {
                  setShowResults(false);
                  setCurrentQuestion(0);
                  setAnswers({});
                  setFormData({
                    name: '',
                    whatsapp: '',
                    company: '',
                    message: ''
                  });
                  setSubmitSuccess(false);
                }}
                className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700"
              >
                Realizar otro test
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BusinessSuccessQuiz;
