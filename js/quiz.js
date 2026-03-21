
// Questionns 
const quizData = {
    maths: [
        { q: "What is 15 + 23?", options: ["35", "38", "40", "36"], answer: 1, explanation: "15 + 23 equals 38." },
        { q: "What is 5 × 3?", options: ["10", "15", "20", "8"], answer: 1, explanation: "5 multiplied by 3 gives 15." },
        { q: "What is the square root of 64?", options: ["6", "7", "8", "9"], answer: 2, explanation: "8 * 8 = 64." },
        { q: "What is the perimeter of a square with a side length of 5?", options: ["10", "15", "20", "25"], answer: 2, explanation: "Perimeter = 4 * side (4 * 5 = 20)." },
        { q: "What is the value of 2 to the power of 5?", options: ["10", "16", "32", "64"], answer: 2, explanation: "2 * 2 * 2 * 2 * 2 = 32." },
        { q: "What is the value of x in 2x + 5 = 15?", options: ["5", "10", "20", "2.5"], answer: 0, explanation: "Subtract 5 from 15 (10), then divide by 2 (5)." },
        { q: "What is 120 ÷ 5?", options: ["20", "22", "24", "26"], answer: 2, explanation: "120 divided by 5 is 24." },
        { q: "In the equation y = mx + c, what does 'm' represent?", options: ["Intercept", "Slope", "Variable", "Constant"], answer: 1, explanation: "In a linear equation, 'm' represents the slope of the line." },
        { q: "What is the median of the numbers 2, 8, 3, 7, 5?", options: ["3", "5", "7", "8"], answer: 1, explanation: "Ordered: 2, 3, 5, 7, 8. The middle number is 5." },
        { q: "What is 9 squared?", options: ["18", "72", "81", "90"], answer: 2, explanation: "9 * 9 = 81." },
        { q: "What is 15% of 200?", options: ["20", "25", "30", "35"], answer: 2, explanation: "0.15 * 200 = 30." },
        { q: "How many sides does a hexagon have?", options: ["5", "6", "7", "8"], answer: 1, explanation: "A hexagon is a 6-sided polygon." },
        { q: "What is the area of a rectangle with length 8 and width 5?", options: ["13", "35", "40", "45"], answer: 2, explanation: "Area = length × width (8 × 5 = 40)." },
        { q: "What is the next number in the sequence: 2, 4, 8, 16, ...?", options: ["20", "24", "30", "32"], answer: 3, explanation: "The sequence doubles each time; 16 × 2 = 32." },
        { q: "How many degrees are in a right angle?", options: ["45°", "90°", "180°", "360°"], answer: 1, explanation: "A right angle is exactly 90 degrees." },
        { q: "If a shirt costs $20 and is 10% off, what is the new price?", options: ["$10", "$15", "$18", "$19"], answer: 2, explanation: "10% of 20 is 2. So, 20 - 2 = 18." },
        { q: "What is the value of 3 cubed (3³)?", options: ["9", "12", "27", "81"], answer: 2, explanation: "3 × 3 × 3 = 27." },
        { q: "What is 7 + (10 ÷ 2)?", options: ["8.5", "12", "15", "10"], answer: 1, explanation: "Using PEMDAS: 10/2 = 5, then 7 + 5 = 12." }
    ],
    gk: [
        { q: "What is the capital of France?", options: ["London", "Berlin", "Paris", "Madrid"], answer: 2, explanation: "Paris is the capital of France." },
        { q: "Who wrote 'Hamlet'?", options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"], answer: 1, explanation: "Hamlet was written by William Shakespeare." },
        { q: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: 1, explanation: "Mars is often called the Red Planet due to iron oxide." },
        { q: "Which is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: 3, explanation: "The Pacific Ocean is the largest and deepest." },
        { q: "In which year did World War II end?", options: ["1918", "1940", "1945", "1950"], answer: 2, explanation: "World War II ended in 1945." },
        { q: "What is the smallest country in the world?", options: ["Monaco", "Malta", "Vatican City", "San Marino"], answer: 2, explanation: "Vatican City is the smallest independent state." },
        { q: "Who painted the Mona Lisa?", options: ["Van Gogh", "Da Vinci", "Picasso", "Michelangelo"], answer: 1, explanation: "Leonardo da Vinci painted the Mona Lisa." },
        { q: "What is the currency of Japan?", options: ["Yuan", "Won", "Yen", "Ringgit"], answer: 2, explanation: "The Yen is the official currency of Japan." },
        { q: "Which element has the chemical symbol 'O'?", options: ["Gold", "Oxygen", "Osmium", "Silver"], answer: 1, explanation: "O stands for Oxygen." },
        { q: "How many continents are there?", options: ["5", "6", "7", "8"], answer: 2, explanation: "There are 7 continents: Asia, Africa, NA, SA, Antarctica, Europe, Australia." },
        { q: "Which is the tallest mountain in the world?", options: ["K2", "Everest", "Kangchenjunga", "Lhotse"], answer: 1, explanation: "Mount Everest is the highest peak above sea level." },
        { q: "What is the largest desert in the world?", options: ["Sahara", "Gobi", "Antarctic", "Arabian"], answer: 2, explanation: "The Antarctic Desert is the largest, as a desert is defined by low precipitation." },
        { q: "Which gas do plants absorb from the atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: 2, explanation: "Plants take in CO2 for photosynthesis." },
        { q: "What is the longest river in the world?", options: ["Amazon", "Nile", "Mississippi", "Yangtze"], answer: 1, explanation: "The Nile is generally considered the longest river." },
        { q: "Which country is home to the Kangaroo?", options: ["India", "South Africa", "Australia", "Brazil"], answer: 2, explanation: "Kangaroos are native to Australia." },
        { q: "How many teeth does an adult human usually have?", options: ["28", "30", "32", "34"], answer: 2, explanation: "A full set of adult teeth includes 32 teeth." },
        { q: "What is the freezing point of water in Celsius?", options: ["-10°C", "0°C", "32°C", "100°C"], answer: 1, explanation: "Water freezes at 0°C (32°F)." }
    ],
    it: [
        { q: "Which part of the computer is known as the 'Brain'?", options: ["Monitor", "Keyboard", "CPU", "Mouse"], answer: 2, explanation: "The CPU processes all instructions." },
        { q: "What does 'WWW' stand for?", options: ["World Wide Web", "World Whole Web", "Web World Wide", "Wide World Web"], answer: 0, explanation: "WWW stands for World Wide Web." },
        { q: "Which of these is an example of an Input Device?", options: ["Printer", "Monitor", "Speaker", "Keyboard"], answer: 3, explanation: "A keyboard is used to put data into the computer." },
        { q: "What is the physical part of a computer called?", options: ["Software", "Hardware", "Malware", "Firmware"], answer: 1, explanation: "Hardware refers to the physical components." },
        { q: "Which key starts a new line?", options: ["Shift", "Backspace", "Enter", "Spacebar"], answer: 2, explanation: "The Enter key moves the cursor to the next line." },
        { q: "What is the primary use of a Web Browser?", options: ["To play games", "To view websites", "To create videos", "To fix hardware"], answer: 1, explanation: "Browsers allow you to access the internet." },
        { q: "Which of these is a permanent storage device?", options: ["RAM", "Hard Disk", "Monitor", "Mouse Pad"], answer: 1, explanation: "A Hard Disk saves files even when powered off." },
        { q: "What does the 'S' in HTTPS stand for?", options: ["Simple", "System", "Secure", "Secret"], answer: 2, explanation: "Secure indicates encryption." },
        { q: "Which company created Windows?", options: ["Apple", "Google", "Microsoft", "Samsung"], answer: 2, explanation: "Microsoft released Windows in 1985." },
        { q: "What is a 'Bug' in a program?", options: ["An insect", "An error", "A type of cable", "A fast processor"], answer: 1, explanation: "A bug is an error or flaw in software." },
        { q: "What does PDF stand for?", options: ["Personal Data File", "Portable Document Format", "Printable Digital File", "Primary Document Folder"], answer: 1, explanation: "PDF stands for Portable Document Format." },
        { q: "Which of these is NOT an operating system?", options: ["Linux", "Windows", "Oracle", "macOS"], answer: 2, explanation: "Oracle is a database company/software, not an operating system." },
        { q: "What does 'URL' stand for?", options: ["User Remote Link", "Uniform Resource Locator", "Universal Radio Line", "Unit Reset Layer"], answer: 1, explanation: "URL is the address used to find resources on the web." },
        { q: "Which of these is used to style web pages?", options: ["HTML", "Java", "CSS", "Python"], answer: 2, explanation: "CSS (Cascading Style Sheets) is used for design and layout." },
        { q: "What is the main function of RAM?", options: ["Permanent storage", "Short-term memory", "Displaying images", "Power supply"], answer: 1, explanation: "RAM is volatile memory used for temporary data processing." },
        { q: "A 'bit' can have how many values?", options: ["1", "2", "8", "10"], answer: 1, explanation: "A bit is binary and can be either 0 or 1." },
        { q: "Which social media platform is known for 'Tweets'?", options: ["Facebook", "Instagram", "X (Twitter)", "LinkedIn"], answer: 2, explanation: "Twitter (now X) is famous for short posts called Tweets." }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryQuery = urlParams.get('category') || 'maths';

  
    function getRand(arr, n) {
        return [...arr].sort(() => 0.5 - Math.random()).slice(0, n);
    }

    const fullBank = quizData[categoryQuery] || quizData.maths;
    
    const questions = getRand(fullBank, 10); 
    
    
    const totalQuestions = questions.length;

    let currentQuestionIndex = 0;
    let score = 0;
    let timerInterval;
    let timeLeft = 90;

    const qText = document.getElementById('questionText');
    const optionsContainer = document.getElementById('optionsContainer');
    const qCountBadge = document.getElementById('questionCount');
    const progressBar = document.getElementById('progressBar');
    const nextBtn = document.getElementById('nextBtn');
    const skipBtn = document.getElementById('skipBtn');
    const timerDisplay = document.getElementById('timerDisplay');
    const categoryBadge = document.getElementById('quizCategoryBadge');
    const feedbackAlert = document.getElementById('feedbackAlert');
    const loadingOverlay = document.getElementById('loadingOverlay');

    if (categoryBadge) {
        categoryBadge.textContent = categoryQuery.toUpperCase();
    }

    AppState.setCategory(categoryQuery);
    AppState.setTotalQuestions(totalQuestions);

    if (loadingOverlay) loadingOverlay.classList.add('d-none');
    loadQuestion();
    startTimer();

    function formatTime(seconds) {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }

    function startTimer() {
        timerDisplay.textContent = formatTime(timeLeft);
        timerInterval = setInterval(() => {
            timeLeft--;
            timerDisplay.textContent = formatTime(timeLeft);
            if (timeLeft <= 10) timerDisplay.classList.add('text-danger');
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                finishQuiz();
            }
        }, 1000);
    }

    function loadQuestion() {
        nextBtn.disabled = true;
        feedbackAlert.classList.add('d-none');
        feedbackAlert.className = 'alert d-none mb-4 fw-bold';

        qCountBadge.textContent = `Question ${currentQuestionIndex + 1}/${totalQuestions}`;
        const progressPercentage = (currentQuestionIndex / totalQuestions) * 100;
        progressBar.style.width = `${progressPercentage}%`;

        const qData = questions[currentQuestionIndex];
        qText.textContent = `${currentQuestionIndex + 1}) ${qData.q}`;

        optionsContainer.innerHTML = '';
        const optionLetters = ['A)', 'B)', 'C)', 'D)'];

        qData.options.forEach((optText, i) => {
            const col = document.createElement('div');
            col.className = 'col-md-6';
            const btn = document.createElement('button');
            btn.className = 'btn w-100 text-start p-3 rounded-pill fw-medium d-flex align-items-center gap-3 option-btn transition-all';
            btn.innerHTML = `<span class="fw-bold">${optionLetters[i]}</span> <span>${optText}</span>`;
            btn.addEventListener('click', () => handleSelectOption(i, btn));
            col.appendChild(btn);
            optionsContainer.appendChild(col);
        });
    }

    function handleSelectOption(selectedIndex, selectedBtn) {
        if (!nextBtn.disabled) return;
        const qData = questions[currentQuestionIndex];
        const buttons = optionsContainer.querySelectorAll('button');

        buttons.forEach(b => {
            b.classList.add('disabled');
            b.style.pointerEvents = 'none'; 
        });
        
        feedbackAlert.classList.remove('d-none');

        if (selectedIndex === qData.answer) {
            score++;
            selectedBtn.classList.add('btn-success', 'text-white', 'shadow');
            feedbackAlert.classList.add('alert-success');
            feedbackAlert.innerHTML = `<i class="fa-solid fa-check-circle me-2"></i> Correct! ${qData.explanation}`;
        } else {
            selectedBtn.classList.add('btn-danger', 'text-white', 'shadow');
            const correctBtn = buttons[qData.answer];
            correctBtn.classList.add('btn-success', 'text-white', 'shadow');
            const letters = ['A', 'B', 'C', 'D'];
            feedbackAlert.classList.add('alert-danger');
            feedbackAlert.innerHTML = `<i class="fa-solid fa-circle-xmark me-2"></i> Wrong! Correct: <strong>${letters[qData.answer]}) ${qData.options[qData.answer]}</strong>. <br><small>${qData.explanation}</small>`;
        }
        nextBtn.disabled = false;
        skipBtn.disabled = true;
    }

    nextBtn.addEventListener('click', () => {
        currentQuestionIndex++;
        skipBtn.disabled = false;
        if (currentQuestionIndex < totalQuestions) {
            loadQuestion();
        } else {
            finishQuiz();
        }
    });

    skipBtn.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < totalQuestions) {
            loadQuestion();
        } else {
            finishQuiz();
        }
    });

    function finishQuiz() {
        clearInterval(timerInterval);
        progressBar.style.width = `100%`;
        AppState.setScore(score);
        window.location.href = 'results.html';
    }
});
