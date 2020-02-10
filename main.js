const STORE = QUESTIONS;
let ASKED = [];
let ansSet = [];
// console.log(STORE[9].Answers[2].Feedback);
    
// render the start page
$(
// Button should trigger quiz questions to render
    function handleStartButton(){
        $('button').on('click', function(){
        console.log('handleStartButton ran');
        if(ASKED.length === STORE.length){
            renderResult();
        }
        if($(this).hasClass('in-progress')){
            renderQuiz();
        }
        else {$('h1').empty();
            $('p').remove();
            $(this).addClass('in-progress');
            $('js-start').text('Submit');
            $('h1').text(`Question ${ASKED.length} out of ${STORE.length}`);
            $('h1').after(`<ul class="progress-key">
                <li class="progress-item progress-number"># right</li>
                <li class="progress-item">
                    <figure>
                    <img src="./images/check-mark.png" alt="check mark right" height="30" width="30">
                    </figure>
                </li>
                <li class="progress-item progress-number"># wrong</li>
                <li class="progress-item">
                    <figure>
                    <img src="./images/x.png" alt="x mark wrong" height="30" width="30">
                    </figure>
                </li>
            </ul>`);
            renderQuiz();
        }
        })
    });
// render the quiz 
function renderQuiz(){
    console.log('renderQuiz ran');
    let pickedQ = getQuizQuestion();
    ASKED.push(pickedQ);
    $('h1').text(`Question ${ASKED.length} out of ${STORE.length}`);
    randomAnsSet(pickedQ);
    randomAnsSet(pickedQ);
    randomAnsSet(pickedQ);
    randomAnsSet(pickedQ);
    $('main').html(`<form>
    <legend class="question">${pickedQ.Question}</legend>
    <ul class="container">
        <li class="box">
            <input type="radio" name="answers" id="answer-A" value="0">
            <label for="answers">${ansSet[0].Answer}</label>
        </li>
        <li class="box">
            <input type="radio" name="answers" id="answer-B" value="1">
            <label for="answers">${ansSet[1].Answer}</label>
        </li>
        <li class="box">
            <input type="radio" name="answers" id="answer-C" value="2">
            <label for="answers">${ansSet[2].Answer}</label>
        </li>
        <li class="box">
            <input type="radio" name="answers" id="answer-D" value="3">
            <label for="answers">${ansSet[3].Answer}</label>
        </li>
    </ul>
</form>
<section>
            <button type="button" class="js-submit">Submit</button>
        </section>`);
    
    }
    // get questions at random
    function getQuizQuestion(){
    console.log('getQuizQuestion ran');
    let newQ = STORE[Math.floor(Math.random()*STORE.length)];
    if(ASKED.includes(newQ)){
        getQuizQuestion();
    }
        else{ 
            return newQ;
        };
    }
    // get random answer set for question
    function randomAnsSet(questionInfo){
        console.log('randomAnsSet ran')
        let A = questionInfo.Answers[Math.floor(Math.random()*questionInfo.Answers.length)];
        if(ansSet.includes(A)){
            randomAnsSet();
        }else{
            ansSet.push(A);
            return;
        }
    }
    // require a selected answer
    function checkIfAnsSelected(){
    console.log('checkIfAnsSelected ran');
    }
    function // check for correct answer
    isAnsCorrect(){
   console.log('isAnsCorrect ran');
    }
    function // provide feedback based on answer
    giveFeedback(){
    console.log('giveFeedback ran');
    }

// render the results
function renderResult(){
    console.log('renderResult ran');
    }