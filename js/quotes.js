let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes =
[

'The only way to do great work is to love what you do. - Steve Jobs',

'In three words I can sum up everything Ive learned about life it goes on. - Robert Frost',

'The only thing necessary for the triumph of evil is for good men to do nothing. - Edmund Burke',

'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson',

'The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt',

'Success is not final failure is not fatal: It is the courage to continue that counts. - Winston Churchill',

'Life is what happens when youre busy making other plans. - John Lennon',

'The best way to predict the future is to create it. - Peter Drucker',

'The greatest glory in living lies not in never falling but in rising every time we fall. - Nelson Mandela',

'Happiness is not something ready-made. It comes from your own actions. - Dalai Lama',

'The only thing standing between you and your goal is the story you keep telling yourself as to why you cant achieve it. - Jordan Belfort',

'To love and be loved is to feel the sun from both sides. - David Viscott',

'The secret of getting ahead is getting started. - Mark Twain',

'The purpose of our lives is to be happy. - Dalai Lama',

'Do not dwell in the past do not dream of the future concentrate the mind on the present moment. - Buddha',

'Imagination is more important than knowledge. For knowledge is limited whereas imagination embraces the entire world stimulating progress giving birth to evolution. - Albert Einstein',

'The only real mistake is the one from which we learn nothing. - Henry Ford',

'In the end we will remember not the words of our enemies but the silence of our friends. - Martin Luther King',

'The only thing you can control is your attitude toward the world. - Unknown',

'Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll',

];
btn.addEventListener('click', function(){
	var randomQuote = quotes[Math.floor(Math.random()* quotes.length)]
	output.innerHTML = randomQuote;

});