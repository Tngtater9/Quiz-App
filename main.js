const STORE = QUESTIONS;
let ASKED = [];
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
            handleSubmitButton();
        })
    }
    // handle Submit behavior
    function handleSubmitButton(){
        $('.js-submit').click(function(event){
           console.log('handleSubmitButton ran');
           let selectedAns = $('input[name=answers]:checked').val();
           isAnsCorrect(ansSet[selectedAns]);
           $('.question-page').addClass('hidden');
           $('.feedback-page').removeClass('hidden');
           $('h1').text(`Question ${ASKED.length} out of ${STORE.length}`);
        })
    }
    function handleTryAgain (){
        console.log('handleTryAgain ran');
    }
// render the quiz 
function renderQuiz(question, answers){
    console.log('renderQuiz ran');
    let pickedQ = question(STORE, ASKED);
    ASKED.push(pickedQ);
    $('h1').text(`Question ${ASKED.length} out of ${STORE.length}`);
    $('.progress-right').text(rightWrong[0]);
    $('.progress-wrong').text(rightWrong[1]);
    answers(pickedQ);
    answers(pickedQ);
    answers(pickedQ);
    answers(pickedQ);
    $('.question').html(`${pickedQ.Question}`);
    $('#A').html(`${ansSet[0].Answer}`);
    $('#B').html(`${ansSet[1].Answer}`);
    $('#C').html(`${ansSet[2].Answer}`);
    $('#D').html(`${ansSet[3].Answer}`);
    }
    // get questions at random
    function getQuizQuestion(hardCopy, askedQ){
    console.log('getQuizQuestion ran');
    let newQ = hardCopy[Math.floor(Math.random()*hardCopy.length)];
    if(askedQ.includes(newQ)){
        getQuizQuestion();
    }
        else{ 
            return newQ;
        };
    }
    // get random answer set for question
    function randomAnsSet(questionInfo){
        console.log('randomAnsSet ran');
        let anAns = questionInfo.Answers[Math.floor(Math.random()*questionInfo.Answers.length)];
        if(ansSet.includes(anAns)){
            randomAnsSet(questionInfo);
        }
            else if(ansSet.length !== questionInfo.Answers.length){ 
                ansSet.push(anAns);
            };
        }

    // require a selected answer
    function checkIfAnsSelected(){
        
        if(radioValue){
            console.log(radioValue);
        }
    }
    function // check for correct answer
    isAnsCorrect(answer){
   console.log('isAnsCorrect ran');
   if(answer.correct){

   }
    }
    function // provide feedback based on answer
    giveFeedback(){
    console.log('giveFeedback ran');
    }

function handleQuiz(){
    handleStartButton();
    handleSubmitButton();
    handleTryAgain();
}

$(handleQuiz);
