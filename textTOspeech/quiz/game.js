document.addEventListener('DOMContentLoaded', () => {
    let timeLeft = 30;
    const timerElement = document.getElementById('time');
    const startButton = document.getElementById('start');
    const submitButton = document.getElementById('submit');
    const quizContainer = document.getElementById('quiz');
    let currentQuestion = 1;
    let timer;

    startButton.addEventListener('click', () => {
        startButton.classList.add('hidden');
        quizContainer.classList.remove('hidden');
        startTimer();
    });

    function startTimer() {
        timer = setInterval(() => {
            if (timeLeft <= 0) {
                clearInterval(timer);
                alert("Time's up! Submitting your answers.");
                submitQuiz();
            } else {
                timerElement.textContent = timeLeft;
                timeLeft--;
            }
        }, 1000);
    }

    document.querySelectorAll('.next').forEach(button => {
        button.addEventListener('click', (event) => {
            const nextQuestionId = event.target.getAttribute('data-next');
            document.getElementById(`question${currentQuestion}`).classList.add('hidden');
            document.getElementById(nextQuestionId).classList.remove('hidden');
            currentQuestion++;
        });
    });

    submitButton.addEventListener('click', () => {
        clearInterval(timer);
        submitQuiz();
    });

    function submitQuiz() {
        const answers = {
            q1: '1949',
            q2: 'B. R. Ambedkar',
            q3: '448',
            q4: 'Part IV',
            q5: '22'
        };

        let score = 0;
        const userAnswers = {
            q1: document.querySelector('input[name="q1"]:checked')?.value,
            q2: document.querySelector('input[name="q2"]:checked')?.value,
            q3: document.querySelector('input[name="q3"]:checked')?.value,
            q4: document.querySelector('input[name="q4"]:checked')?.value,
            q5: document.querySelector('input[name="q5"]:checked')?.value
        };

        for (const question in answers) {
            if (answers[question] === userAnswers[question]) {
                score++;
            }
        }

        alert(`You scored ${score} out of 5.`);
    }
});
