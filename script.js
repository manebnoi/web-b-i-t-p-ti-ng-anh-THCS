
const questionBank = {
    6: [
        {
            question: "Choose the correct answer: 'My school _____ a big library.'",
            options: ["have", "has", "having", "is having"],
            answer: 1 // Vị trí của đáp án đúng (0, 1, 2, 3) -> "has"
        },
        {
            question: "Find the odd one out:",
            options: ["Desk", "Chair", "Teacher", "Table"],
            answer: 2 // "Teacher"
        }
    ],
    7: [
        {
            question: "Last summer, I _____ volunteer work in my community.",
            options: ["do", "did", "done", "does"],
            answer: 1 // "did"
        }
    ],
    8: [], // Bạn sẽ thêm câu hỏi lớp 8 vào đây
    9: []  // Bạn sẽ thêm câu hỏi lớp 9 vào đây
};

// 2. Hàm hiển thị câu hỏi
function loadQuestions(grade) {
    const container = document.getElementById('quiz-container');
    const data = questionBank[grade];
    
    if (!data || data.length === 0) {
        container.innerHTML = "<p>Dữ liệu đang cập nhật...</p>";
        return;
    }

    let htmlContent = `<h2>Bài tập Tiếng Anh Lớp ${grade}</h2>`;
    
    data.forEach((item, index) => {
        htmlContent += `
            <div class="question-block" id="q-${index}">
                <p><strong>Câu ${index + 1}:</strong> ${item.question}</p>
                <div class="options">
                    ${item.options.map((opt, i) => `
                        <label>
                            <input type="radio" name="question${index}" value="${i}" onchange="checkAnswer(${grade}, ${index}, ${i})">
                            ${opt}
                        </label>
                    `).join('')}
                </div>
                <p class="feedback" id="feedback-${index}"></p>
            </div>
        `;
    });

    container.innerHTML = htmlContent;
    document.getElementById('result-area').classList.add('hidden');
}

// 3. Hàm kiểm tra đáp án ngay lập tức (Tính mới của dự án) 
function checkAnswer(grade, questionIndex, selectedOption) {
    const correctAnswer = questionBank[grade][questionIndex].answer;
    const feedbackElement = document.getElementById(`feedback-${questionIndex}`);
    
    // So sánh đáp án
    if (selectedOption === correctAnswer) {
        feedbackElement.innerHTML = "<span class='correct'>✓ Chính xác! (Correct)</span>";
    } else {
        feedbackElement.innerHTML = "<span class='wrong'>✗ Sai rồi. Thử lại nhé!</span>";
    }
}

// Hàm reset nếu cần
function resetQuiz() {
    document.getElementById('quiz-container').innerHTML = "<p>Vui lòng chọn khối lớp để bắt đầu!</p>";
    document.getElementById('result-area').classList.add('hidden');
}
