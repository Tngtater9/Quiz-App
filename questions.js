const QUESTIONS = [
    {
        'Id': 1,
        'Display': false,
        'Asked': false,
        'Question': 'Oil can deteriorate what materials?',
        'Answers':[
                    {
                    'Answer': 'Latex and plastic',
                    'Correct': true,
                    'Feedback': 'Correct!'   
                    },
                    {
                    'Answer': 'Latex',
                    'Correct': false,
                    'Feedback': 'Silicone also dissolves in oil.'  
                    },
                    {
                    'Answer': 'Metal',
                    'Correct': false,
                    'Feedback': 'Wrong'  
                    },
                    {
                    'Answer': 'Silicone',
                    'Correct': false,
                    'Feedback': 'Latex also dissolves in oil.'  
                    }
                ]
    },
    {
        'Id': 2,
        'Display': false,
        'Asked': false,
        'Question': 'According to a 2017 Gallup Poll, what percentage of the US population identifies as LGBT?',
        'Answers':[
                    {
                    'Answer': '4.5%',
                    'Correct': true,
                    'Feedback': 'Correct!'   
                    },
                    {
                    'Answer': '20%',
                    'Correct': false,
                    'Feedback': '4.5% of the US population is LGBT.'  
                    },
                    {
                    'Answer': '11%',
                    'Correct': false,
                    'Feedback': '4.5% of the US population is LGBT.'  
                    },
                    {
                    'Answer': '1.7%',
                    'Correct': false,
                    'Feedback': '4.5% of the US population is LGBT.'  
                    }
                ]
    },
    {
        'Id': 3,
        'Display': false,
        'Asked': false,
        'Question': 'What is yeast a type of?',
        'Answers':[
                    {
                    'Answer': 'Fungus',
                    'Correct': true,
                    'Feedback': 'Correct!'   
                    },
                    {
                    'Answer': 'Sugar',
                    'Correct': false,
                    'Feedback': 'The overgrowth of the fungus Candida causes yeast infections.'  
                    },
                    {
                    'Answer': 'Bacteria',
                    'Correct': false,
                    'Feedback': 'The overgrowth of the fungus Candida causes yeast infections.'  
                    },
                    {
                    'Answer': 'Virus',
                    'Correct': false,
                    'Feedback': 'The overgrowth of the fungus Candida causes yeast infections.'  
                    }
                ]
    },
    {
        'Id': 4,
        'Display': false,
        'Asked': false,
        'Question': 'How effective is the Withdrawal method?',
        'Answers':[
                    {
                    'Answer': '78%',
                    'Correct': true,
                    'Feedback': 'Correct!'   
                    },
                    {
                    'Answer': '92%',
                    'Correct': false,
                    'Feedback': 'The Withdrawal method is 78% effective when used correctly'  
                    },
                    {
                    'Answer': '24%',
                    'Correct': false,
                    'Feedback': 'The Withdrawal method is 78% effective when used correctly'  
                    },
                    {
                    'Answer': '56%',
                    'Correct': false,
                    'Feedback': 'The Withdrawal method is 78% effective when used correctly'  
                    }
                ]
    },
    {
        'Id': 5,
        'Display': false,
        'Asked': false,
        'Question': 'When used correctly, how effective are condoms?',
        'Answers':[
                    {
                    'Answer': '98%',
                    'Correct': true,
                    'Feedback': 'Correct!'   
                    },
                    {
                    'Answer': '89%',
                    'Correct': false,
                    'Feedback': 'They are actually 98% effective when used correctly.'  
                    },
                    {
                    'Answer': '70%',
                    'Correct': false,
                    'Feedback': 'They are actually 98% effective when used correctly.'  
                    },
                    {
                    'Answer': '80%',
                    'Correct': false,
                    'Feedback': 'They are actually 98% effective when used correctly.'  
                    }
                ]
    },
    {
        'Id': 6,
        'Display': false,
        'Asked': false,
        'Question': 'What does Asexual mean?',
        'Answers':[
                    {
                    'Answer': 'A person that has no attraction to anyone',
                    'Correct': true,
                    'Feedback': 'Correct!'   
                    },
                    {
                    'Answer': 'A sexual person',
                    'Correct': false,
                    'Feedback': 'Wrong an Asexual or Ace person has no attraction to anyone.'  
                    },
                    {
                    'Answer': 'Sexualizes the letter A',
                    'Correct': false,
                    'Feedback': 'Wrong an Asexual or Ace person has no attraction to anyone.'  
                    },
                    {
                    'Answer': 'Autosexual',
                    'Correct': false,
                    'Feedback': 'Wrong an Asexual or Ace person has no attraction to anyone.'  
                    }
                ]
    },
    {
        'Id': 7,
        'Display': false,
        'Asked': false,
        'Question': 'What can’t you use with silicone products?',
        'Answers':[
                    {
                    'Answer': 'Silicone lube',
                    'Correct': true,
                    'Feedback': 'Correct!'   
                    },
                    {
                    'Answer': 'Heat',
                    'Correct': false,
                    'Feedback': 'It is safe to heat up silicone if your product doesn\'t have a motor.'  
                    },
                    {
                    'Answer': 'Water based lube',
                    'Correct': false,
                    'Feedback': 'It is safe to use water based lube with silicone.'  
                    },
                    {
                    'Answer': 'Flavored lube',
                    'Correct': false,
                    'Feedback': 'Flavored lube is safe to use with silicone.'  
                    }
                ]
    },
    {
        'Id': 8,
        'Display': false,
        'Asked': false,
        'Question': `What is this called?<br><figure>
        <img src="images/dragon-tail.jpg" alt="BDSM Toy with rolled leather tail" height= "250" width= "250">
        </figure><br>`,
        'Answers':[
                    {
                    'Answer': 'Dragon Tail',
                    'Correct': true,
                    'Feedback': 'Correct!'   
                    },
                    {
                    'Answer': 'Flogger',
                    'Correct': false,
                    'Feedback': `Wrong. This is a flogger.<br><figure>
                    <img src="images/flogger.jpg" alt="Flogger" height= "250" width= "250">
                    </figure><br>`  
                    },
                    {
                    'Answer': 'Flail',
                    'Correct': false,
                    'Feedback': `Wrong. This is a flail.<br><figure>
                    <img src="images/flail.jpg" alt="Flail" height= "250" width= "250">
                    </figure><br>`  
                    },
                    {
                    'Answer': 'Paddle',
                    'Correct': false,
                    'Feedback': `Wrong. This is a paddle.<br><figure>
                    <img src="images/paddle.jpg" alt="Paddle" height= "250" width= "250">
                    </figure><br>`  
                    }
                ]
    },
    {
        'Id': 9,
        'Display': false,
        'Asked': false,
        'Question': 'Where should flavored lube not be applied?',
        'Answers':[
                    {
                    'Answer': 'Internally',
                    'Correct': true,
                    'Feedback': 'Specifically flavored lube should not be used for vaginal intercourse.'   
                    },
                    {
                    'Answer': 'On the lips',
                    'Correct': false,
                    'Feedback': 'It is safe to ingest flavored lube.'  
                    },
                    {
                    'Answer': 'To sheets',
                    'Correct': false,
                    'Feedback': 'Most flavored lubes will not stain sheets.'  
                    },
                    {
                    'Answer': 'In hair',
                    'Correct': false,
                    'Feedback': 'Flavored lube will wash out of hair.'  
                    }
                ]
    },
    {
        'Id': 10,
        'Display': false,
        'Asked': false,
        'Question': 'What is  Pansexuality?',
        'Answers':[
                    {
                    'Answer': 'Sexual, romantic or emotional attraction towards people regardless of their sex or gender identity.',
                    'Correct': true,
                    'Feedback': 'Correct!'   
                    },
                    {
                    'Answer': 'Sexual, romantic or emotional attraction towards inanimate objects.',
                    'Correct': false,
                    'Feedback': 'Wrong. A pansexual has sexual, romantic or emotional attraction towards people regardless of their sex or gender identity.'  
                    },
                    {
                    'Answer': 'No romantic attraction towards people.',
                    'Correct': false,
                    'Feedback': 'Wrong. A pansexual has sexual, romantic or emotional attraction towards people regardless of their sex or gender identity.'  
                    },
                    {
                    'Answer': 'Only emotional attraction towards people.',
                    'Correct': false,
                    'Feedback': 'Wrong. A pansexual has sexual, romantic or emotional attraction towards people regardless of their sex or gender identity.'  
                    }
                ]
    }
];