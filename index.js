// Quiz Data Structure
const quizSections = [
    {
        title: "Formation",
        description: "Basic structure of present continuous tense",
        questions: [
            {
                question: "What is the correct formula for present continuous tense?",
                options: [
                    "Subject + verb + -ing",
                    "Subject + am/is/are + verb + -ing", 
                    "Subject + have/has + verb + -ing",
                    "Subject + will + verb + -ing"
                ],
                correct: 1,
                explanation: "Present continuous uses am/is/are + base verb + -ing"
            },
            {
                question: "Which auxiliary verb is used with 'I' in present continuous?",
                options: ["am", "is", "are", "do"],
                correct: 0,
                explanation: "'I' always takes 'am' in present continuous tense"
            },
            {
                question: "Which auxiliary verb is used with 'She' in present continuous?",
                options: ["am", "is", "are", "does"],
                correct: 1,
                explanation: "Third person singular (he/she/it) uses 'is'"
            },
            {
                question: "Which auxiliary verb is used with 'They' in present continuous?",
                options: ["am", "is", "are", "do"],
                correct: 2,
                explanation: "Plural subjects (we/you/they) use 'are'"
            },
            {
                question: "Complete the sentence: 'We _____ studying English.'",
                options: ["am", "is", "are", "be"],
                correct: 2,
                explanation: "'We' is a plural subject and requires 'are'"
            },
            {
                question: "What is the correct form: 'The cat _____ sleeping.'",
                options: ["am", "is", "are", "be"],
                correct: 1,
                explanation: "'Cat' is singular third person and uses 'is'"
            },
            {
                question: "Choose the correct sentence:",
                options: [
                    "I are playing football",
                    "I am playing football",
                    "I is playing football",
                    "I be playing football"
                ],
                correct: 1,
                explanation: "'I' always takes 'am' in present continuous"
            },
            {
                question: "Which verb form is correct: 'You _____ working hard.'",
                options: ["am", "is", "are", "was"],
                correct: 2,
                explanation: "'You' always takes 'are' in present continuous"
            }
        ]
    },
    {
        title: "Negatives",
        description: "Making negative sentences in present continuous",
        questions: [
            {
                question: "What is the correct negative form of 'I am watching TV'?",
                options: [
                    "I am not watch TV",
                    "I not am watching TV",
                    "I am not watching TV",
                    "I don't watching TV"
                ],
                correct: 2,
                explanation: "Add 'not' after am/is/are: I am not watching TV"
            },
            {
                question: "Choose the correct negative: 'She _____ listening to music.'",
                options: [
                    "is not",
                    "are not", 
                    "am not",
                    "does not"
                ],
                correct: 0,
                explanation: "For 'she', use 'is not' in negative form"
            },
            {
                question: "What is the contracted form of 'They are not playing'?",
                options: [
                    "They're not playing",
                    "They aren't playing",
                    "They don't playing",
                    "Both A and B"
                ],
                correct: 3,
                explanation: "Both 'They're not' and 'They aren't' are correct contractions"
            },
            {
                question: "Which sentence is correctly formed?",
                options: [
                    "He not is working today",
                    "He isn't work today",
                    "He isn't working today",
                    "He doesn't working today"
                ],
                correct: 2,
                explanation: "Correct negative form: He isn't working today"
            },
            {
                question: "Complete: 'We _____ going to the party.'",
                options: [
                    "aren't",
                    "isn't",
                    "am not",
                    "don't"
                ],
                correct: 0,
                explanation: "'We' takes 'aren't' in negative present continuous"
            },
            {
                question: "What's the negative of 'The dogs are barking'?",
                options: [
                    "The dogs not are barking",
                    "The dogs aren't barking",
                    "The dogs don't barking",
                    "The dogs isn't barking"
                ],
                correct: 1,
                explanation: "Plural subjects use 'aren't' in negative form"
            },
            {
                question: "Choose the correct contraction for 'I am not coming':",
                options: [
                    "I amn't coming",
                    "I'm not coming",
                    "I not coming",
                    "I ain't coming"
                ],
                correct: 1,
                explanation: "The standard contraction is 'I'm not coming'"
            },
            {
                question: "Which is correct: 'The baby _____ crying now.'",
                options: [
                    "isn't",
                    "aren't",
                    "am not",
                    "don't"
                ],
                correct: 0,
                explanation: "'Baby' is singular, so use 'isn't'"
            }
        ]
    },
    {
        title: "Questions",
        description: "Forming questions in present continuous",
        questions: [
            {
                question: "What is the correct question form of 'You are reading a book'?",
                options: [
                    "Do you reading a book?",
                    "Are you reading a book?",
                    "Is you reading a book?",
                    "You are reading a book?"
                ],
                correct: 1,
                explanation: "Move auxiliary verb 'are' to the beginning: Are you reading a book?"
            },
            {
                question: "Choose the correct question: '_____ she working today?'",
                options: ["Am", "Is", "Are", "Do"],
                correct: 1,
                explanation: "'She' uses 'is' in questions: Is she working today?"
            },
            {
                question: "What question word fits: '_____ are you doing?'",
                options: ["Who", "What", "Where", "When"],
                correct: 1,
                explanation: "'What' asks about actions: What are you doing?"
            },
            {
                question: "Form a question: 'They are playing football.' →",
                options: [
                    "Do they playing football?",
                    "Are they playing football?",
                    "Is they playing football?",
                    "They are playing football?"
                ],
                correct: 1,
                explanation: "Move 'are' to the beginning: Are they playing football?"
            },
            {
                question: "Complete: '_____ the children sleeping?'",
                options: ["Am", "Is", "Are", "Do"],
                correct: 2,
                explanation: "'Children' is plural, so use 'Are'"
            },
            {
                question: "Which WH-question is correct?",
                options: [
                    "Where you are going?",
                    "Where are you going?",
                    "Where do you going?",
                    "Where is you going?"
                ],
                correct: 1,
                explanation: "WH-word + auxiliary + subject + verb-ing: Where are you going?"
            },
            {
                question: "Ask about the subject: '_____ is making noise?'",
                options: ["Who", "What", "Where", "When"],
                correct: 0,
                explanation: "'Who' asks about people as subjects"
            },
            {
                question: "Form a yes/no question: 'I am learning Spanish.' →",
                options: [
                    "Do I learning Spanish?",
                    "Am I learning Spanish?",
                    "Is I learning Spanish?",
                    "Are I learning Spanish?"
                ],
                correct: 1,
                explanation: "Move 'am' to front: Am I learning Spanish?"
            }
        ]
    },
    {
        title: "Usage",
        description: "When and how to use present continuous tense",
        questions: [
            {
                question: "Present continuous is used for actions happening:",
                options: [
                    "Every day",
                    "Right now",
                    "In the past",
                    "Never"
                ],
                correct: 1,
                explanation: "Present continuous describes actions happening at the moment of speaking"
            },
            {
                question: "Which sentence shows present continuous usage correctly?",
                options: [
                    "I eat breakfast every morning",
                    "I ate breakfast yesterday",
                    "I am eating breakfast now",
                    "I will eat breakfast tomorrow"
                ],
                correct: 2,
                explanation: "'Now' indicates an action in progress at the present moment"
            },
            {
                question: "Present continuous can describe:",
                options: [
                    "Habits",
                    "General truths",
                    "Temporary situations",
                    "Completed actions"
                ],
                correct: 2,
                explanation: "Present continuous often describes temporary, ongoing situations"
            },
            {
                question: "Which time expression goes with present continuous?",
                options: [
                    "Usually",
                    "Every week",
                    "Right now",
                    "Last year"
                ],
                correct: 2,
                explanation: "'Right now' indicates present continuous time"
            },
            {
                question: "Choose the sentence that uses present continuous for future plans:",
                options: [
                    "I go to Paris next month",
                    "I am going to Paris next month",
                    "I went to Paris last month",
                    "I always go to Paris"
                ],
                correct: 1,
                explanation: "Present continuous can express definite future arrangements"
            },
            {
                question: "Which situation uses present continuous?",
                options: [
                    "The sun rises in the east",
                    "She speaks three languages",
                    "They are having dinner at the moment",
                    "He worked here for five years"
                ],
                correct: 2,
                explanation: "'At the moment' shows action in progress now"
            },
            {
                question: "Present continuous expresses:",
                options: [
                    "Permanent states",
                    "Actions in progress",
                    "Past habits",
                    "General facts"
                ],
                correct: 1,
                explanation: "Present continuous primarily shows actions currently in progress"
            },
            {
                question: "Which is NOT typically used with present continuous?",
                options: [
                    "Now",
                    "At the moment",
                    "Currently",
                    "Always"
                ],
                correct: 3,
                explanation: "'Always' typically goes with simple present, not continuous"
            }
        ]
    },
    {
        title: "Mixed Practice",
        description: "Comprehensive practice with various aspects",
        questions: [
            {
                question: "Choose the correct sentence:",
                options: [
                    "She is cook dinner now",
                    "She cooking dinner now",
                    "She is cooking dinner now",
                    "She are cooking dinner now"
                ],
                correct: 2,
                explanation: "Complete structure: She is cooking dinner now"
            },
            {
                question: "What's wrong with: 'They is playing soccer'?",
                options: [
                    "Wrong auxiliary verb",
                    "Missing -ing",
                    "Wrong word order",
                    "Nothing is wrong"
                ],
                correct: 0,
                explanation: "'They' requires 'are', not 'is'"
            },
            {
                question: "Complete: 'Why _____ you _____ so loudly?'",
                options: [
                    "do, talking",
                    "are, talking",
                    "is, talking",
                    "are, talk"
                ],
                correct: 1,
                explanation: "Question form: Why are you talking so loudly?"
            },
            {
                question: "Choose the negative form: 'The phone is ringing.'",
                options: [
                    "The phone not is ringing",
                    "The phone isn't ringing",
                    "The phone doesn't ringing",
                    "The phone not ringing"
                ],
                correct: 1,
                explanation: "Negative: The phone isn't ringing"
            },
            {
                question: "Which sentence is in present continuous?",
                options: [
                    "I drive to work every day",
                    "I drove to work yesterday",
                    "I am driving to work now",
                    "I will drive to work tomorrow"
                ],
                correct: 2,
                explanation: "'Am driving' shows present continuous structure"
            },
            {
                question: "Identify the error: 'We am studying English.'",
                options: [
                    "Wrong subject",
                    "Wrong auxiliary",
                    "Missing -ing",
                    "Wrong tense"
                ],
                correct: 1,
                explanation: "'We' takes 'are', not 'am'"
            },
            {
                question: "Complete the question: '_____ the baby _____?'",
                options: [
                    "Is, sleep",
                    "Are, sleeping",
                    "Is, sleeping",
                    "Do, sleeping"
                ],
                correct: 2,
                explanation: "'Baby' is singular: Is the baby sleeping?"
            },
            {
                question: "Choose the best response to 'What are you doing?'",
                options: [
                    "I do my homework",
                    "I did my homework",
                    "I am doing my homework",
                    "I will do my homework"
                ],
                correct: 2,
                explanation: "Present continuous question needs present continuous answer"
            },
            {
                question: "Which shows temporary action?",
                options: [
                    "She works in a bank",
                    "She is working late tonight",
                    "She worked yesterday",
                    "She will work tomorrow"
                ],
                correct: 1,
                explanation: "Present continuous often shows temporary situations"
            },
            {
                question: "Form the question: 'The students are listening to music.'",
                options: [
                    "Do the students listening to music?",
                    "Are the students listening to music?",
                    "Is the students listening to music?",
                    "The students are listening to music?"
                ],
                correct: 1,
                explanation: "Move auxiliary to front: Are the students listening to music?"
            }
        ]
    }
];

// Quiz State
let currentSection = 0;
let currentQuestion = 0;
let selectedAnswer = null;
let userAnswers = [];
let sectionScores = [];
let totalScore = 0;
let quizCompleted = false;

// Initialize Quiz
function initializeQuiz() {
    setupSectionIndicators();
    resetQuizState();
    displayQuestion();
    updateProgress();
    updateScoreDisplay();
}

function setupSectionIndicators() {
    const sectionIndicator = document.getElementById('sectionIndicator');
    sectionIndicator.innerHTML = '';
    
    quizSections.forEach((section, index) => {
        const tab = document.createElement('div');
        tab.className = `section-tab ${index === 0 ? 'active' : ''}`;
        tab.setAttribute('data-section', index);
        tab.textContent = section.title;
        tab.addEventListener('click', () => navigateToSection(index));
        sectionIndicator.appendChild(tab);
    });
}

function resetQuizState() {
    currentSection = 0;
    currentQuestion = 0;
    selectedAnswer = null;
    userAnswers = [];
    sectionScores = [];
    totalScore = 0;
    quizCompleted = false;
    
    // Initialize userAnswers array
    quizSections.forEach(section => {
        userAnswers.push(new Array(section.questions.length).fill(null));
        sectionScores.push({ correct: 0, total: section.questions.length });
    });
    
    // Reset UI
    document.getElementById('quizContent').style.display = 'block';
    document.getElementById('sectionResults').classList.add('hidden');
    document.getElementById('finalResults').classList.add('hidden');
    document.getElementById('reviewMode').classList.add('hidden');
    
    // Update total questions count
    const totalQuestions = quizSections.reduce((sum, section) => sum + section.questions.length, 0);
    document.getElementById('totalQuestions').textContent = totalQuestions;
}

function navigateToSection(sectionIndex) {
    if (sectionIndex <= currentSection || quizCompleted) {
        currentSection = sectionIndex;
        currentQuestion = 0;
        selectedAnswer = null;
        displayQuestion();
        updateProgress();
        updateScoreDisplay();
        updateSectionIndicators();
    }
}

function displayQuestion() {
    const section = quizSections[currentSection];
    const question = section.questions[currentQuestion];
    
    // Update section title and question number
    document.getElementById('sectionTitle').textContent = `Section ${currentSection + 1}: ${section.title}`;
    document.getElementById('questionNumber').textContent = `Question ${currentQuestion + 1}`;
    document.getElementById('questionText').textContent = question.question;
    
    // Display options
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => selectAnswer(index));
        
        // Restore previous selection
        if (userAnswers[currentSection][currentQuestion] === index) {
            optionElement.classList.add('selected');
            selectedAnswer = index;
        }
        
        optionsContainer.appendChild(optionElement);
    });
    
    // Hide feedback
    const feedback = document.getElementById('feedback');
    feedback.classList.add('hidden');
    
    // Update button states
    updateButtonStates();
}

function selectAnswer(index) {
    // Remove previous selection
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Add selection to clicked option
    document.querySelectorAll('.option')[index].classList.add('selected');
    selectedAnswer = index;
    
    // Enable submit button
    document.getElementById('submitBtn').disabled = false;
}

function submitAnswer() {
    if (selectedAnswer === null) return;
    
    const section = quizSections[currentSection];
    const question = section.questions[currentQuestion];
    const isCorrect = selectedAnswer === question.correct;
    
    // Store answer
    userAnswers[currentSection][currentQuestion] = selectedAnswer;
    
    // Update section score
    if (isCorrect) {
        sectionScores[currentSection].correct++;
        totalScore++;
    }
    
    // Show visual feedback on options
    const options = document.querySelectorAll('.option');
    options[question.correct].classList.add('correct');
    
    if (!isCorrect) {
        options[selectedAnswer].classList.add('incorrect');
    }
    
    // Show explanation
    const feedback = document.getElementById('feedback');
    feedback.classList.remove('hidden');
    feedback.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
    feedback.innerHTML = `
        <strong>${isCorrect ? 'Correct!' : 'Incorrect!'}</strong><br>
        ${question.explanation}
    `;
    
    // Update button states
    document.getElementById('submitBtn').style.display = 'none';
    document.getElementById('nextBtn').style.display = 'inline-block';
    
    // Disable option clicking
    options.forEach(option => {
        option.style.pointerEvents = 'none';
    });
    
    updateScoreDisplay();
}

function nextQuestion() {
    if (currentQuestion < quizSections[currentSection].questions.length - 1) {
        currentQuestion++;
        selectedAnswer = null;
        displayQuestion();
        updateProgress();
    } else {
        // Section completed
        showSectionResults();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        selectedAnswer = null;
        displayQuestion();
        updateProgress();
    }
}

function skipQuestion() {
    // Mark as skipped (null answer)
    userAnswers[currentSection][currentQuestion] = null;
    nextQuestion();
}

function showSectionResults() {
    const sectionScore = sectionScores[currentSection];
    const percentage = Math.round((sectionScore.correct / sectionScore.total) * 100);
    
    document.getElementById('sectionPercentage').textContent = `${percentage}%`;
    document.getElementById('sectionScoreText').textContent = `${sectionScore.correct}/${sectionScore.total}`;
    
    // Provide feedback based on performance
    let feedbackText = '';
    if (percentage >= 80) {
        feedbackText = 'Excellent work! You have a strong understanding of this topic.';
    } else if (percentage >= 60) {
        feedbackText = 'Good job! You understand most concepts but could use some practice.';
    } else {
        feedbackText = 'Keep practicing! Review the explanations and try again.';
    }
    document.getElementById('sectionFeedback').textContent = feedbackText;
    
    document.getElementById('sectionResults').classList.remove('hidden');
}

function nextSection() {
    // Mark current section as completed
    const sectionTabs = document.querySelectorAll('.section-tab');
    sectionTabs[currentSection].classList.add('completed');
    
    document.getElementById('sectionResults').classList.add('hidden');
    
    if (currentSection < quizSections.length - 1) {
        currentSection++;
        currentQuestion = 0;
        selectedAnswer = null;
        displayQuestion();
        updateProgress();
        updateSectionIndicators();
    } else {
        // Quiz completed
        showFinalResults();
    }
}

function reviewSection() {
    document.getElementById('sectionResults').classList.add('hidden');
    showReview(currentSection, currentSection + 1);
}

function showFinalResults() {
    quizCompleted = true;
    const totalQuestions = quizSections.reduce((sum, section) => sum + section.questions.length, 0);
    const finalPercentage = Math.round((totalScore / totalQuestions) * 100);
    
    document.getElementById('quizContent').style.display = 'none';
    document.getElementById('finalScore').textContent = `${totalScore}/${totalQuestions}`;
    document.getElementById('finalPercentage').textContent = `${finalPercentage}%`;
    
    // Create section breakdown
    const breakdownGrid = document.getElementById('breakdownGrid');
    breakdownGrid.innerHTML = '';
    
    quizSections.forEach((section, index) => {
        const sectionScore = sectionScores[index];
        const sectionPercentage = Math.round((sectionScore.correct / sectionScore.total) * 100);
        
        const breakdownItem = document.createElement('div');
        breakdownItem.className = 'breakdown-item';
        breakdownItem.innerHTML = `
            <h4>${section.title}</h4>
            <p>${sectionScore.correct}/${sectionScore.total} (${sectionPercentage}%)</p>
        `;
        breakdownGrid.appendChild(breakdownItem);
    });
    
    // Performance analysis
    const analysisContent = document.getElementById('analysisContent');
    let analysisText = '';
    
    if (finalPercentage >= 90) {
        analysisText = 'Outstanding! You have mastered the present continuous tense. Your understanding of formation, negatives, questions, and usage is excellent.';
    } else if (finalPercentage >= 80) {
        analysisText = 'Excellent work! You have a strong grasp of the present continuous tense. Review any sections where you scored lower to perfect your understanding.';
    } else if (finalPercentage >= 70) {
        analysisText = 'Good job! You understand the basics of present continuous tense. Focus on practicing the areas where you scored below 80% to improve further.';
    } else if (finalPercentage >= 60) {
        analysisText = 'You\'re making progress! You understand some aspects of present continuous tense, but need more practice. Review the explanations and try the quiz again.';
    } else {
        analysisText = 'Keep studying! Present continuous tense requires more practice. Review each section carefully, focusing on the formation rules and usage patterns.';
    }
    
    analysisContent.innerHTML = `<p>${analysisText}</p>`;
    
    document.getElementById('finalResults').classList.remove('hidden');
}

function reviewAllAnswers() {
    showReview(0, quizSections.length);
}

function showReview(startSection, endSection) {
    const reviewContent = document.getElementById('reviewContent');
    reviewContent.innerHTML = '';
    
    for (let sectionIndex = startSection; sectionIndex < endSection; sectionIndex++) {
        const section = quizSections[sectionIndex];
        
        section.questions.forEach((question, questionIndex) => {
            const userAnswer = userAnswers[sectionIndex][questionIndex];
            const isCorrect = userAnswer === question.correct;
            const wasSkipped = userAnswer === null;
            
            const reviewQuestion = document.createElement('div');
            reviewQuestion.className = `review-question ${wasSkipped ? 'skipped' : (isCorrect ? 'correct' : 'incorrect')}`;
            
            let statusText = '';
            let statusClass = '';
            if (wasSkipped) {
                statusText = 'Skipped';
                statusClass = 'text-warning';
            } else if (isCorrect) {
                statusText = 'Correct';
                statusClass = 'text-success';
            } else {
                statusText = 'Incorrect';
                statusClass = 'text-danger';
            }
            
            reviewQuestion.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                    <h4>${section.title} - Question ${questionIndex + 1}</h4>
                    <span class="${statusClass}" style="font-weight: bold;">${statusText}</span>
                </div>
                <p style="margin-bottom: 15px; font-size: 1.1em;"><strong>${question.question}</strong></p>
                <div style="margin-bottom: 15px;">
                    ${question.options.map((option, index) => {
                        let optionClass = '';
                        let optionText = option;
                        
                        if (index === question.correct) {
                            optionClass = 'color: #28a745; font-weight: bold;';
                            optionText += ' ✓';
                        }
                        
                        if (userAnswer === index && index !== question.correct) {
                            optionClass = 'color: #dc3545; font-weight: bold;';
                            optionText += ' ✗';
                        }
                        
                        return `<div style="${optionClass} padding: 5px 0;">${String.fromCharCode(65 + index)}. ${optionText}</div>`;
                    }).join('')}
                </div>
                <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; border-left: 4px solid #8a2be2;">
                    <strong>Explanation:</strong> ${question.explanation}
                </div>
            `;
            
            reviewContent.appendChild(reviewQuestion);
        });
    }
    
    document.getElementById('reviewMode').classList.remove('hidden');
}

function exitReview() {
    document.getElementById('reviewMode').classList.add('hidden');
    
    if (quizCompleted) {
        document.getElementById('finalResults').classList.remove('hidden');
    } else {
        document.getElementById('sectionResults').classList.remove('hidden');
    }
}

function restartQuiz() {
    initializeQuiz();
}

function updateProgress() {
    let totalQuestions = 0;
    let currentQuestionGlobal = 0;
    
    // Calculate total questions and current position
    for (let i = 0; i < quizSections.length; i++) {
        totalQuestions += quizSections[i].questions.length;
        if (i < currentSection) {
            currentQuestionGlobal += quizSections[i].questions.length;
        }
    }
    currentQuestionGlobal += currentQuestion + 1;
    
    const progressPercentage = (currentQuestionGlobal / totalQuestions) * 100;
    document.getElementById('progressFill').style.width = `${progressPercentage}%`;
    document.getElementById('currentSection').textContent = currentSection + 1;
    document.getElementById('currentQuestion').textContent = currentQuestionGlobal;
}

function updateScoreDisplay() {
    document.getElementById('currentScore').textContent = totalScore;
    const sectionScore = sectionScores[currentSection];
    document.getElementById('sectionScore').textContent = `${sectionScore.correct}/${sectionScore.total}`;
}

function updateSectionIndicators() {
    const sectionTabs = document.querySelectorAll('.section-tab');
    sectionTabs.forEach((tab, index) => {
        tab.classList.remove('active');
        if (index === currentSection) {
            tab.classList.add('active');
        }
    });
}

function updateButtonStates() {
    const prevBtn = document.getElementById('prevBtn');
    const submitBtn = document.getElementById('submitBtn');
    const nextBtn = document.getElementById('nextBtn');
    const skipBtn = document.getElementById('skipBtn');
    
    // Previous button
    prevBtn.disabled = currentQuestion === 0 && currentSection === 0;
    
    // Submit button
    submitBtn.style.display = 'inline-block';
    submitBtn.disabled = selectedAnswer === null;
    
    // Next button
    nextBtn.style.display = 'none';
    
    // Skip button
    skipBtn.disabled = false;
}

// Initialize quiz when page loads
document.addEventListener('DOMContentLoaded', initializeQuiz);