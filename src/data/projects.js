// Import images
import WebImage1 from '../images/minesweeper.png';
import WebImage2 from '../images/ML.png';
import MobileImage1 from '../images/soon.jpg';
import MobileImage2 from '../images/PersonalWeb.png';
import UIImage1 from '../images/bnicer.png';
import UIImage2 from '../images/sudoku.jpg';

export const projectsData = [
	{
		id: 1,
		title: 'Machine Learning from scratch',
		category: 'ML',
		img: WebImage2,
		ProjectHeader: {
			title: 'Machine Learning from scratch',
			publishDate: 'Jul 26, 2023',
			tags: 'ML',
		},
	},
	{
		id: 2,
		title: 'React Personal App',
		category: 'Web Dev',
		img: MobileImage2,
	},
	{
		id: 3,
		title: 'bNicer.',
		category: 'Full Stack',
		img: UIImage1,
	},
	{
		id: 4,
		title: 'Sudoku Solver from Image',
		category: 'ML',
		img: UIImage2,
	},
	{
		id: 5,
		title: 'Soon™',
		category: '',
		img: MobileImage1,
	},
	{
		id: 6,
		title: 'Minesweeper',
		category: 'Game Dev',
		img: WebImage1,
	},
];
