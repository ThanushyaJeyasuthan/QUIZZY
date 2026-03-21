document.addEventListener('DOMContentLoaded', () => {
   //Did you know
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

    
    const finalScoreDisplay = document.getElementById('finalScoreDisplay');
    const finalPointsDisplay = document.getElementById('finalPointsDisplay');
    const resultMessage = document.getElementById('resultMessage');

    const score = AppState.getScore() || 0;
    const total = AppState.getTotalQuestions() || 10; 
    const percentage = Math.round((score / total) * 100);
    const points = score * 10; 

    if (finalScoreDisplay) finalScoreDisplay.textContent = percentage + "%";
    if (finalPointsDisplay) finalPointsDisplay.textContent = points;

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
   
    const category = AppState.getCategory() || 'general';
    const categoryFacts = facts[category] || facts.general;
    const randomFact = categoryFacts[Math.floor(Math.random() * categoryFacts.length)];
    
    const factElement = document.getElementById('factDisplay');
    if (factElement) {
        factElement.textContent = randomFact;
    }

    
    const stars = document.querySelectorAll('.rank-star');
    stars.forEach((star, index) => {
        star.onclick = () => {
            stars.forEach((s, i) => {
                if(i <= index) {
                    s.classList.replace('fa-regular', 'fa-solid');
                } else {
                    s.classList.replace('fa-solid', 'fa-regular');
                }
            });
        };
    });

    const thumbBtns = document.querySelectorAll('.thumb-btn');
    thumbBtns.forEach(btn => {
        btn.onclick = function() {
            thumbBtns.forEach(b => b.classList.replace('fa-solid', 'fa-regular'));
            this.classList.replace('fa-regular', 'fa-solid');
        };
    });
});

const submitBtn = document.querySelector('.btn-success.btn-sm');
const feedbackInput = document.querySelector('input[type="text"]');

submitBtn.onclick = () => {
    if (feedbackInput.value.trim() !== "" || document.querySelector('.fa-solid.fa-star')) {
       
        submitBtn.innerHTML = '<i class="fa-solid fa-check me-2"></i> Thank You!';
        submitBtn.classList.replace('btn-success', 'btn-primary');
        submitBtn.disabled = true;
        
        
        feedbackInput.value = "";
        feedbackInput.disabled = true;
    } else {
        alert("Please provide a rating or a suggestion before submitting!");
    }
};
