document.addEventListener('DOMContentLoaded', function () {
    const quizOptions = document.querySelectorAll('.quiz-option');

    quizOptions.forEach(option => {
        option.addEventListener('click', function () {
            // 이전에 추가된 임시 피드백 스팬이 있다면 모두 제거합니다.
            const existingFeedbackSpans = document.querySelectorAll('.temp-feedback-span');
            existingFeedbackSpans.forEach(span => span.remove());

            const questionDiv = this.closest('.quiz-question');
            // 질문 텍스트를 포함하는 <p> 요소를 선택합니다 (일반적으로 첫 번째 <p> 요소).
            const questionPara = questionDiv.querySelector('p:first-of-type');

            if (questionPara) {
                const isCorrect = this.dataset.correct === 'true';
                const feedbackWord = isCorrect ? 'True' : 'False';
                const feedbackColor = isCorrect ? 'green' : 'red';

                // 피드백을 표시할 <span> 요소를 생성합니다.
                const feedbackSpan = document.createElement('span');
                feedbackSpan.className = 'temp-feedback-span'; // 클래스를 부여하여 쉽게 찾고 제거할 수 있도록 합니다.
                feedbackSpan.textContent = ' ' + feedbackWord; // 질문과 구분을 위해 앞에 공백을 추가합니다.
                feedbackSpan.style.color = feedbackColor;
                feedbackSpan.style.fontWeight = 'bold';

                // 질문 단락에 피드백 스팬을 추가합니다.
                questionPara.appendChild(feedbackSpan);

                // 2초 후에 피드백 스팬을 제거합니다.
                setTimeout(() => {
                    // setTimeout이 실행될 시점에는 feedbackSpan이 DOM에서 제거되었을 수 있으므로 확인합니다.
                    if (feedbackSpan.parentNode) {
                        feedbackSpan.remove();
                    }
                }, 2000);
            }
        });
    });
}); 