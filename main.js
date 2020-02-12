const STORE = QUESTIONS;
let ASKED = [];
let qNum = [0,1,2,3,4,5,6,7,8,9];
let aNum = [0,1,2,3];
let ansSet = [];
let rightWrong = [0,0];
// console.log(STORE[9].Answers[2].Feedback);
    
// render the start page
// Button should trigger quiz questions to render
    function handleStartButton(){
        console.log('handleStartButton ran');
        $('.js-start').click(function(){
            $('.start-page').addClass('hidden');
            renderQuiz(getQuizQuestion, randomAnsSet);
            $('.question-page').removeClass('hidden');
        });
    }
    // handle Submit behavior
    function handleSubmitButton(){
        $('.js-submit').click(function(){
           console.log('handleSubmitButton ran');
           let selectedAns = "";
           if (!$('input[name="answers"]:checked').val()){
            alert('Please pick an answer.');
           } else {
            selectedAns = $('input[name="answers"]:checked').val();
            isAnsCorrect(ansSet[selectedAns]);
           $('.question-page').addClass('hidden');
           $('.feedback-page').removeClass('hidden');
           $('h1').text(`Question ${ASKED.length} out of ${STORE.length}`);
           $('.progress-right').text(rightWrong[0]);
           $('.progress-wrong').text(rightWrong[1]);
           $('.feedback-message').html(ansSet[selectedAns].Feedback);
           }
           
           
        });
    }
    function handleNextButton (){
        $('.js-next').click(function(){
            console.log('handleNextButton ran');
            aNum = [0,1,2,3];
            ansSet = [];
            if(ASKED.length === STORE.length){
                $('.feedback-page').addClass('hidden');
                $('.result-page').removeClass('hidden'); 
                $('.result-message').html(`You got ${rightWrong[0]} out of ${STORE.length} right!`);
            } else{
                $('.feedback-page').addClass('hidden');
                $('input[name="answers"]').prop('checked', false);
                renderQuiz(getQuizQuestion, randomAnsSet);
                $('.question-page').removeClass('hidden');    
            }
        });
    }

    function handleTryAgain (){
        $('.try-again').click(function(){
            console.log('handleTryAgain ran');
        $('.result-page').addClass('hidden');
            ASKED = [];
            ansSet = [];
            rightWrong = [0,0];
            $('h1').text('Sexual Health and Wellness Quiz');
        $('.start-page').removeClass('hidden');})
    }
// render the quiz 
function renderQuiz(question, answers){
    console.log('renderQuiz ran');
    let pickedQ = question(STORE, ASKED);
    $('h1').text(`Question ${ASKED.length} out of ${STORE.length}`);
    $('.progress-right').text(rightWrong[0]);
    $('.progress-wrong').text(rightWrong[1]);
    console.log(pickedQ);
    answers(pickedQ.Answers, ansSet);
    $('.question').html(`${pickedQ.Question}`);
    $('#A').html(`${ansSet[0].Answer}`);
    $('#B').html(`${ansSet[1].Answer}`);
    $('#C').html(`${ansSet[2].Answer}`);
    $('#D').html(`${ansSet[3].Answer}`);
    }
    // get questions at random
    function getQuizQuestion(hardCopy, askedQ){
    console.log('getQuizQuestion ran');
        let newQindex = Math.floor(Math.random() * qNum.length);
        askedQ.push(hardCopy[qNum[newQindex]]);
        qNum.splice(newQindex,1);
        return hardCopy[qNum[newQindex]];
    }
        
    // get random answer set for question
    function randomAnsSet(answers, askedA){
        console.log('randomAnsSet ran');
            for(let i = 0; i < answers.length; i++){
                let newAindex = Math.floor(Math.random() * aNum.length);
                askedA.push(answers[aNum[newAindex]]);
                aNum.splice(newAindex,1);
                console.log(`This is my current aNum ${aNum}`);
              }
              console.log(askedA);
              console.log(answers);
    }
        

    function // check for correct answer
    isAnsCorrect(answer){
   console.log('isAnsCorrect ran');
   if(answer.Correct === true){
        rightWrong[0] += 1;
        return;
   } else {
       rightWrong[1] += 1;
       return;
   }
    }

    function makeLiClickable (){
       $('.box').on('click', function(event){
           console.log($(this).find('input'));
           $(this).find('input').attr('checked', true);
       }

       )
    }
    
    
function handleQuiz(){
    handleStartButton();
    makeLiClickable();
    handleSubmitButton();
    handleNextButton();
    handleTryAgain();
}

$(handleQuiz);
