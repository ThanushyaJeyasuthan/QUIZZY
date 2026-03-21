document.addEventListener('DOMContentLoaded', () => {
    // 1. DATA & STATE
    const facts = {
        maths: [
            "A 'jiffy' is an actual unit of time: 1/100th of a second!",
            "Zero is the only number that can't be represented in Roman numerals.",
            "The symbol for division (÷) is called an obelus.",
            "A 'googol' is the number 1 followed by 100 zeros!"
        ],
        it: [
            "The first computer mouse was made of wood in 1964.",
            "About 90% of the world's currency only exists on computers.",
            "The first computer programmer was a woman named Ada Lovelace.",
            "HP, Google, and Apple all started in garages."
        ],
        gk: [
            "Honey never spoils; archaeologists have found edible honey in ancient Egyptian tombs.",
            "A day on Venus is longer than a year on Venus.",
            "Bananas are berries, but strawberries are not!",
            "Octopuses have three hearts and blue blood."
        ],
        general: [
            "Learning one new fact daily keeps your brain sharp.",
            "Teaching others is one of the best ways to learn yourself.",
            "Taking short breaks improves your focus and long-term memory."
        ]
    };

    let selectedStars = 0;
    let isUseful = null;

    // 2. DISPLAY SCORES
    const finalScoreDisplay = document.getElementById('finalScoreDisplay');
    const finalPointsDisplay = document.getElementById('finalPointsDisplay');
    const resultMessage = document.getElementById('resultMessage');

    const score = AppState.getScore() || 0;
    const total = AppState.getTotalQuestions() || 10; 
    const percentage = Math.round((score / total) * 100);
    const points = score * 10; 

    if (finalScoreDisplay) finalScoreDisplay.textContent = percentage + "%";
    if (finalPointsDisplay) finalPointsDisplay.textContent = points;

    if (resultMessage) {
        if (percentage >= 80) {
            resultMessage.textContent = "Excellent Job! You mastered this topic.";
            resultMessage.style.color = "#064e3b"; 
        } else if (percentage >= 50) {
            resultMessage.textContent = "Nice Job! You finished the quiz.";
            resultMessage.style.color = "#0a192f"; 
        } else {
            resultMessage.textContent = "Keep practicing! You'll get better.";
            resultMessage.style.color = "#0a192f"; 
        }
    }

    // 3. DISPLAY RANDOM FACT
    const category = AppState.getCategory() || 'general';
    const categoryFacts = facts[category] || facts.general;
    const randomFact = categoryFacts[Math.floor(Math.random() * categoryFacts.length)];
    const factElement = document.getElementById('factDisplay');
    if (factElement) factElement.textContent = randomFact;

    // 4. STAR RATING LOGIC
    const stars = document.querySelectorAll('.rank-star');
    stars.forEach((star, index) => {
        star.onclick = () => {
            selectedStars = index + 1;
            stars.forEach((s, i) => {
                if(i <= index) {
                    s.classList.replace('fa-regular', 'fa-solid');
                } else {
                    s.classList.replace('fa-solid', 'fa-regular');
                }
            });
        };
    });

    // 5. THUMBS LOGIC
    const thumbBtns = document.querySelectorAll('.thumb-btn');
    thumbBtns.forEach(btn => {
        btn.onclick = function() {
            isUseful = this.classList.contains('fa-thumbs-up') ? 1 : 0;
            thumbBtns.forEach(b => b.classList.replace('fa-solid', 'fa-regular'));
            this.classList.replace('fa-regular', 'fa-solid');
        };
    });

    // 6. SUBMIT FEEDBACK LOGIC
    const submitBtn = document.querySelector('.btn-success');
    const feedbackInput = document.querySelector('input[type="text"]');

    if (submitBtn) {
        submitBtn.onclick = () => {
            if (feedbackInput.value.trim() !== "" || selectedStars > 0) {
                const formData = new FormData();
                formData.append('stars', selectedStars);
                formData.append('useful', isUseful);
                formData.append('suggestion', feedbackInput.value.trim());

                fetch('save_feedback.php', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    if(data.status === 'success') {
                        submitBtn.innerHTML = '<i class="fa-solid fa-check me-2"></i> Sent!';
                        submitBtn.classList.replace('btn-success', 'btn-primary');
                        submitBtn.disabled = true;
                        feedbackInput.value = "";
                        feedbackInput.disabled = true;
                    }
                })
                .catch(err => console.error("Error:", err));
            } else {
                alert("Please provide a rating or a suggestion!");
            }
        };
    }
});