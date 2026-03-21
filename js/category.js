
// redirect the selected category
function selectCategory(subject) {
    console.log("Subject selected:", subject); 

    localStorage.setItem('selectedSubject', subject);

    window.location.href = 'quiz.html';
}