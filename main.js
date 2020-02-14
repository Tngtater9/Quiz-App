const STORE = QUESTIONS;
let pickedQs = [];
let qIndex = [0];
let pickedAs = [];
let rightWrong = [0,0];
// console.log(STORE[9].Answers[2].Feedback);
    
// render the start page
// Button should trigger quiz questions to render
function handleStartButton(){
    $('.js-start').click(function(){
        $('.start-page').addClass('hidden');
        renderQuiz(getQuizQuestion, randomAnsSet);
        $('.question-page').removeClass('hidden');
    });
}
// make answer box clickable
function makeLiClickable (){
    $('.container').on('click', 'li','.box', function(event){
        $(this).find('input').prop('checked', true);
    })
}
// handle Submit behavior
function handleSubmitButton(){
    $('.js-submit').click(function(){
        let selectedAns = "";
        if (!$('input[name="answers"]:checked').val()){
        alert('Please pick an answer.');
        } else {
        selectedAns = $('input[name="answers"]:checked').val();
        isAnsCorrect(pickedAs[selectedAns]);
        $('.question-page').addClass('hidden');
        $('.feedback-page').removeClass('hidden');
        $('.progress-message').empty();
        $('.progress-right').text(rightWrong[0]);
        $('.progress-wrong').text(rightWrong[1]);
        $('.feedback-message').html(pickedAs[selectedAns].Feedback);
        }
        
        
    });
}
function handleNextButton (){
    $('.js-next').click(function(){
        if((qIndex[0] + 1) === pickedQs.length){
            $('.feedback-page').addClass('hidden');
            $('.result-page').removeClass('hidden'); 
            $('.result-title').html('Results');
            $('.result-message').html(`You got ${rightWrong[0]} out of ${pickedQs.length} right!`);
        } else{
            $('.feedback-page').addClass('hidden');
            qIndex[0] ++;
            $('input[name="answers"]').prop('checked', false);
            $('.qKey').text(`Question ${qIndex[0].length} out of ${pickedQs.length}`);
            renderQuiz(getQuizQuestion, randomAnsSet);
            $('.question-page').removeClass('hidden');    
        }
    });
}

function handleTryAgain (){
    $('.try-again').click(function(){
    $('.result-page').addClass('hidden');
        pickedAs = [];
        qIndex[0] = 0;
        pickedQs = [];
        rightWrong = [0,0];
        $('h1').text('Sexual Health and Wellness Quiz');
    $('.start-page').removeClass('hidden');})
}
// render the quiz 
function renderQuiz(question, answers){
    if(pickedQs.length > 0){
        
    } else {
        pickedQs = question(STORE);
    }
    
    let pickedQ = pickedQs[qIndex[0]];
    pickedAs = answers(pickedQ.Answers);
    $('h1').text(`Question ${qIndex[0] + 1} out of ${pickedQs.length}`);
    $('.progress-right').text(rightWrong[0]);
    $('.progress-wrong').text(rightWrong[1]);
    $('.question').html(`${pickedQ.Question}`);
    $('#A').html(`${pickedAs[0].Answer}`);
    $('#B').html(`${pickedAs[1].Answer}`);
    $('#C').html(`${pickedAs[2].Answer}`);
    $('#D').html(`${pickedAs[3].Answer}`);
    }
    // get questions at random
function getQuizQuestion (array) {
    let currentIndex = array.length;
    let temporaryValue = 0;
    let randomIndex = 0;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
    
    }

        
    // get random answer set for question
function randomAnsSet(array){
    let currentIndex = array.length;
    let temporaryValue = 0;
    let randomIndex = 0;

// While there remain elements to shuffle...
while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
}

return array;

}
    
        

 // check for correct answer
function isAnsCorrect(answer){
    if(answer.Correct === true){
            rightWrong[0] += 1;
            return;
    } else {
        rightWrong[1] += 1;
        return;
    }
}
    
function handleQuiz(){
    handleStartButton();
    makeLiClickable();
    handleSubmitButton();
    handleNextButton();
    handleTryAgain();
}

$(handleQuiz);
