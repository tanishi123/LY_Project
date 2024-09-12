import React, { useState, useEffect } from 'react';

function QuizPage() {
  const [quiz, setQuiz] = useState(null);

  useEffect(() => {
    // Fetch the generated quiz from the backend
    const fetchQuiz = async () => {
      try {
        const response = await fetch('http://localhost:3000/quiz');
        const data = await response.json();
        setQuiz(data);
      } catch (error) {
        console.error('Error fetching quiz:', error);
      }
    };

    fetchQuiz();
  }, []);

  if (!quiz) return <p>Loading...</p>;

  return (
    <div>
      <h2>Take Quiz</h2>
      {quiz.questions.map((question, index) => (
        <div key={index}>
          <p>{question.text}</p>
          {question.options.map((option, i) => (
            <label key={i}>
              <input type="radio" name={`question-${index}`} value={option} />
              {option}
            </label>
          ))}
        </div>
      ))}
      <button>Submit Quiz</button>
    </div>
  );
}

export default QuizPage;
