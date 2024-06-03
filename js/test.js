const testForm = document.querySelector('#testForm')

testForm.addEventListener('click', () => {
    
    let score = 0;

    const results = [];

    
    const correctAnswersQ1 = ['javascript', 'python'];

    const selectedAnswersQ1 = Array.from(document.querySelectorAll('input[name="languages"]:checked')).map(cb => cb.value);

    const isQ1Correct = correctAnswersQ1.every(answer => selectedAnswersQ1.includes(answer)) && correctAnswersQ1.length === selectedAnswersQ1.length;

    if (isQ1Correct) {
        score++;
    }

    results.push(`Вопрос 1: ${isQ1Correct ? 'Правильно' : 'Неправильно'}`);





    const correctAnswerQ2 = 'blue';

    const selectedAnswerQ2 = document.querySelector('input[name="favoriteColor"]:checked');

    const isQ2Correct = selectedAnswerQ2 && selectedAnswerQ2.value === correctAnswerQ2;

    if (isQ2Correct) {
        score++;
    }

    results.push(`Вопрос 2: ${isQ2Correct ? 'Правильно' : 'Неправильно'}`);





    const correctAnswerQ3 = 'football';

    const selectedAnswerQ3 = document.getElementById('favoriteSport').value;

    const isQ3Correct = selectedAnswerQ3 === correctAnswerQ3;

    if (isQ3Correct) {
        score++;
    }

    results.push(`Вопрос 3: ${isQ3Correct ? 'Правильно' : 'Неправильно'}`);





    results.push(`Ваш счет: ${score} из 3`);
    
    document.getElementById('results').value = results.join('\n');
});