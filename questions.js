const QUESTIONS = [
	{
		Id: 1,
		Display: false,
		Asked: false,
		Question: 'Oil can deteriorate what materials?',
		Answers: [
			{
				Answer: 'Latex and plastic',
				Correct: true,
				Feedback: 'Correct!',
			},
			{
				Answer: 'Latex',
				Correct: false,
				Feedback: 'Wrong. Plastic also deteriorates in oil.',
			},
			{
				Answer: 'Metal',
				Correct: false,
				Feedback: 'Wrong. Latex and plastic deteriorate in oil.',
			},
			{
				Answer: 'Silicone',
				Correct: false,
				Feedback: 'Wrong. Latex and plastic deteriorate in oil.',
			},
		],
	},
	{
		Id: 2,
		Display: false,
		Asked: false,
		Question:
			'According to a 2017 Gallup Poll, what percentage of the US population identifies as LGBT?',
		Answers: [
			{
				Answer: '4.5%',
				Correct: true,
				Feedback: 'Correct!',
			},
			{
				Answer: '20%',
				Correct: false,
				Feedback: 'Wrong. 4.5% of the US population is LGBT.',
			},
			{
				Answer: '11%',
				Correct: false,
				Feedback: 'Wrong. 4.5% of the US population is LGBT.',
			},
			{
				Answer: '1.7%',
				Correct: false,
				Feedback: 'Wrong. 4.5% of the US population is LGBT.',
			},
		],
	},
	{
		Id: 3,
		Display: false,
		Asked: false,
		Question: 'What is yeast a type of?',
		Answers: [
			{
				Answer: 'Fungus',
				Correct: true,
				Feedback: 'Correct!',
			},
			{
				Answer: 'Sugar',
				Correct: false,
				Feedback:
					'Wrong. The overgrowth of the fungus Candida causes yeast infections.',
			},
			{
				Answer: 'Bacteria',
				Correct: false,
				Feedback:
					'Wrong. The overgrowth of the fungus Candida causes yeast infections.',
			},
			{
				Answer: 'Virus',
				Correct: false,
				Feedback:
					'Wrong. The overgrowth of the fungus Candida causes yeast infections.',
			},
		],
	},
	{
		Id: 4,
		Display: false,
		Asked: false,
		Question: 'How effective is the Withdrawal method?',
		Answers: [
			{
				Answer: '78%',
				Correct: true,
				Feedback: 'Correct!',
			},
			{
				Answer: '92%',
				Correct: false,
				Feedback:
					'Wrong. The Withdrawal method is 78% effective when used correctly',
			},
			{
				Answer: '24%',
				Correct: false,
				Feedback:
					'Wrong. The Withdrawal method is 78% effective when used correctly',
			},
			{
				Answer: '56%',
				Correct: false,
				Feedback:
					'Wrong. The Withdrawal method is 78% effective when used correctly',
			},
		],
	},
	{
		Id: 5,
		Display: false,
		Asked: false,
		Question: 'When used correctly, how effective are condoms?',
		Answers: [
			{
				Answer: '98%',
				Correct: true,
				Feedback: 'Correct!',
			},
			{
				Answer: '89%',
				Correct: false,
				Feedback: 'Wrong. They are actually 98% effective when used correctly.',
			},
			{
				Answer: '70%',
				Correct: false,
				Feedback: 'Wrong. They are actually 98% effective when used correctly.',
			},
			{
				Answer: '80%',
				Correct: false,
				Feedback: 'Wrong. They are actually 98% effective when used correctly.',
			},
		],
	},
	{
		Id: 6,
		Display: false,
		Asked: false,
		Question: 'What does Asexual mean?',
		Answers: [
			{
				Answer: 'A person that has no attraction to anyone',
				Correct: true,
				Feedback: 'Correct!',
			},
			{
				Answer: 'A sexual person',
				Correct: false,
				Feedback:
					'Wrong. An Asexual or Ace person has no attraction to anyone.',
			},
			{
				Answer: 'Sexualizes the letter A',
				Correct: false,
				Feedback:
					'Wrong. An Asexual or Ace person has no attraction to anyone.',
			},
			{
				Answer: 'Autosexual',
				Correct: false,
				Feedback:
					'Wrong. An Asexual or Ace person has no attraction to anyone.',
			},
		],
	},
	{
		Id: 7,
		Display: false,
		Asked: false,
		Question: 'What can’t you use with silicone products?',
		Answers: [
			{
				Answer: 'Silicone lube',
				Correct: true,
				Feedback: 'Correct!',
			},
			{
				Answer: 'Heat',
				Correct: false,
				Feedback:
					"Wrong. It is safe to heat up silicone if your product doesn't have a motor.",
			},
			{
				Answer: 'Water based lube',
				Correct: false,
				Feedback: 'Wrong. It is safe to use water based lube with silicone.',
			},
			{
				Answer: 'Flavored lube',
				Correct: false,
				Feedback: 'Wrong. Flavored lube is safe to use with silicone.',
			},
		],
	},
	{
		Id: 8,
		Display: false,
		Asked: false,
		Question: `What is this medical device called?<br><figure>
        <img src="images/speculum.jpg" alt="hinged metal medical device" height= "250" width= "250">
        </figure><br>`,
		Answers: [
			{
				Answer: 'Speculum',
				Correct: true,
				Feedback: 'Correct!',
			},
			{
				Answer: 'A bird',
				Correct: false,
				Feedback: `Wrong. It was a speculum.`,
			},
			{
				Answer: 'Forceps',
				Correct: false,
				Feedback: `Wrong. It was a speculum.`,
			},
			{
				Answer: 'An opener',
				Correct: false,
				Feedback: `Wrong. It was a speculum.`,
			},
		],
	},
	{
		Id: 9,
		Display: false,
		Asked: false,
		Question: 'Where should flavored lube not be applied?',
		Answers: [
			{
				Answer: 'Internally',
				Correct: true,
				Feedback:
					'Correct! Specifically flavored lube should not be used for vaginal intercourse.',
			},
			{
				Answer: 'On the lips',
				Correct: false,
				Feedback:
					'Wrong. It is safe to ingest flavored lube. Flavored lube should not be used internally, especially not for vaginal intercourse.',
			},
			{
				Answer: 'To sheets',
				Correct: false,
				Feedback:
					'Wrong. Most flavored lubes will not stain sheets. Flavored lube should not be used internally, especially not for vaginal intercourse.',
			},
			{
				Answer: 'In hair',
				Correct: false,
				Feedback:
					'Wrong. Flavored lube will wash out of hair. Flavored lube should not be used internally, especially not for vaginal intercourse.',
			},
		],
	},
	{
		Id: 10,
		Display: false,
		Asked: false,
		Question: 'What is  Pansexuality?',
		Answers: [
			{
				Answer:
					'Sexual, romantic or emotional attraction towards people regardless of their sex or gender identity.',
				Correct: true,
				Feedback: 'Correct!',
			},
			{
				Answer:
					'Sexual, romantic or emotional attraction towards inanimate objects.',
				Correct: false,
				Feedback:
					'Wrong. A pansexual has sexual, romantic or emotional attraction towards people regardless of their sex or gender identity.',
			},
			{
				Answer: 'No romantic attraction towards people.',
				Correct: false,
				Feedback:
					'Wrong. A pansexual has sexual, romantic or emotional attraction towards people regardless of their sex or gender identity.',
			},
			{
				Answer: 'Only emotional attraction towards people.',
				Correct: false,
				Feedback:
					'Wrong. A pansexual has sexual, romantic or emotional attraction towards people regardless of their sex or gender identity.',
			},
		],
	},
];
