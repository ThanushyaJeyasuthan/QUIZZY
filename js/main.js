

const AppState = {
    // Saves the final score
    setScore(score) {
        sessionStorage.setItem('quizScore', score);
    },

    getScore() {
        return parseInt(sessionStorage.getItem('quizScore')) || 0;
    },
    // which subject is selected 
    setCategory(cat) {
        sessionStorage.setItem('quizCategory', cat);
    },
   
    getCategory() {
        return sessionStorage.getItem('quizCategory') || 'all';
    },
 
    setTotalQuestions(total) {
        sessionStorage.setItem('quizTotal', total);
    },
 
    getTotalQuestions() {
        return parseInt(sessionStorage.getItem('quizTotal')) || 0;
    }
};
