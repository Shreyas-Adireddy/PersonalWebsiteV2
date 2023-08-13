import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';
import Image1 from '../../images/ML.png';
import Image2 from '../../images/minesweeper.png';
import Image3 from '../../images/PersonalWeb.png';
import Image4 from '../../images/bnicer.png';
import Image5 from '../../images/sudoku.jpg';
import Image6 from '../../images/ui-project-2.jpg';

const ProjectInfo = () => {
	const { singleProjectData } = useContext(SingleProjectContext);

	return (
		<div>
		{/* Image */}
		<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
			<div className="mb-10 sm:mb-0">
				<img
					src={Image1}
					className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
					alt="Image"
				/>
			</div>
		</div>
		<div className="block sm:flex gap-0 sm:gap-10 mt-14">
			<div className="w-full sm:w-1/3 text-left">
				{/* Single project client details */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
						Machine Learning from Scratch
					</p>
					<ul className="leading-loose">
						
						<li className="font-general-regular text-ternary-dark dark:text-ternary-light"	
									>
										<span> </span>
										<a
											href="https://stoman.me"
											className='hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300'
											aria-label="Project Website and Phone">
											Project
										</a>
									</li>
					</ul>
				</div>

				{/* Single project objectives */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						Objective
					</p>
					<p className="font-general-regular text-primary-dark dark:text-ternary-light">
						To learn the mathematics behind common machine learning algorithms 
					</p>
				</div>

				{/* Single project technologies */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{singleProjectData.ProjectInfo.Technologies[0].title}
					</p>
					<p className="font-general-regular text-primary-dark dark:text-ternary-light">
						{singleProjectData.ProjectInfo.Technologies[0].techs.join(
							', '
						)}
					</p>
				</div>
			</div>

			{/*  Single project right section */}
			<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
				<p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
					{singleProjectData.ProjectInfo.ProjectDetailsHeading}
				</p>
				{singleProjectData.ProjectInfo.ProjectDetails.map((details) => {
					return (
						<p
							key={details.id}
							className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
						>
							{details.details}
						</p>
					);
				})}
			</div>
		</div>
		{/* Image */}
		<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
			<div className="mb-10 sm:mb-0">
				<img
					src={Image4}
					className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
					alt="Image"
				/>
			</div>
		</div>
		<div className="block sm:flex gap-0 sm:gap-10 mt-14">
			<div className="w-full sm:w-1/3 text-left">
				{/* Single project client details */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
						bNicer.
					</p>
					<ul className="leading-loose">
						{/* {singleProjectData.ProjectInfo.CompanyInfo.map(
							(info) => {
								return (
									
								);
							}
						)} */}
						<li className="font-general-regular text-ternary-dark dark:text-ternary-light"	
									>
										<span>Hackathon: </span>
										<a
											href="https://stoman.me"
											className='hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300'
											aria-label="Project Website and Phone">
											SASEHack
										</a>
									</li>
					</ul>
				</div>

				{/* Single project objectives */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{singleProjectData.ProjectInfo.ObjectivesHeading}
					</p>
					<p className="font-general-regular text-primary-dark dark:text-ternary-light">
					With the rise of social media usage, our app is designed to educate kids between ages 8-15 about the different types of cyberbullying through real-time social media data such as Youtube
					</p>
				</div>

				{/* Single project technologies */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{singleProjectData.ProjectInfo.Technologies[0].title}
					</p>
					<p className="font-general-regular text-primary-dark dark:text-ternary-light">
					Chrome-driver, CSS, Jupyter, Pandas, Python, Selenium, Streamlit, Tensorflow, Transformer
					</p>
				</div>
			</div>

			{/*  Single project right section */}
			<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
				<p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
					{singleProjectData.ProjectInfo.ProjectDetailsHeading}
				</p>
				<p className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light">
				During my participation in the SASEHack competition hosted by Verizon, I was part of a successful team that secured first place and won a prize of $1000. Our winning solution involved the development of a deep learning network using Tensorflow Keras. We trained this network on a large Twitter dataset to accurately identify negativity in user comments through natural language processing. Additionally, we implemented a sophisticated categorization system to determine the type of adverse behaviors present in the comments, distinguishing between discriminatory, bullying, and offensive content. To combat these issues, we provided users with informative articles aimed at educating against such behaviors. To ensure a user-friendly experience, we designed a visually appealing front-end interface for the website using Streamlit. Our neural network implementation utilized a range of tools and technologies, including Jupyter Notebook, Python, TensorFlow, the transformers package, and others. By leveraging these resources, we created a powerful machine capable of detecting tone in natural language processing tasks.
				</p>
			</div>
		</div>
		{/* Image */}
		<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
			<div className="mb-10 sm:mb-0">
				<img
					src={Image3}
					className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
					alt="Image"
				/>
			</div>
		</div>
		<div className="block sm:flex gap-0 sm:gap-10 mt-14">
			<div className="w-full sm:w-1/3 text-left">
				{/* Single project client details */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
						Personal Website
					</p>
					<ul className="leading-loose">
						{/* {singleProjectData.ProjectInfo.CompanyInfo.map(
							(info) => {
								return (
									
								);
							}
						)} */}
						<li className="font-general-regular text-ternary-dark dark:text-ternary-light"	
									>
										<span> </span>
										<a
											href="https://stoman.me"
											className='hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300'
											aria-label="Project Website and Phone">
											Project
										</a>
									</li>
					</ul>
				</div>

				{/* Single project objectives */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{singleProjectData.ProjectInfo.ObjectivesHeading}
					</p>
					<p className="font-general-regular text-primary-dark dark:text-ternary-light">
					To demonstrate my front-end skills and display my projets 
					</p>
				</div>

				{/* Single project technologies */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{singleProjectData.ProjectInfo.Technologies[0].title}
					</p>
					<p className="font-general-regular text-primary-dark dark:text-ternary-light">
					React, Tailwind CSS, HTML, JS, JSX, Azure
					</p>
				</div>

			</div>

			{/*  Single project right section */}
			<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
				<p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
					{singleProjectData.ProjectInfo.ProjectDetailsHeading}
				</p>
				<p className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light">
				My personal resume website serves as a dynamic platform designed to showcase my professional journey, skills, and achievements. Through this website, I aim to provide visitors with a comprehensive view of my expertise, work experience, and projects. It's a space where I can present my unique strengths and accomplishments in an engaging and visually appealing manner. By curating this online portfolio, I am able to establish a strong online presence, connect with potential employers, clients, and collaborators, and leave a lasting impression that highlights my capabilities and dedication. Whether you're looking to explore my background or collaborate on exciting opportunities, my personal resume website offers a glimpse into my professional world.
				</p>
			</div>
		</div>
		{/* Image */}
		<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
			<div className="mb-10 sm:mb-0">
				<img
					src={Image2}
					className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
					alt="Image"
				/>
			</div>
		</div>
		<div className="block sm:flex gap-0 sm:gap-10 mt-14">
			<div className="w-full sm:w-1/3 text-left">
				{/* Single project client details */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
						Minesweeper
					</p>
					<ul className="leading-loose">
						{/* {singleProjectData.ProjectInfo.CompanyInfo.map(
							(info) => {
								return (
									
								);
							}
						)} */}
						<li className="font-general-regular text-ternary-dark dark:text-ternary-light"	
									>
										<span> </span>
										<a
											href="https://stoman.me"
											className='hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300'
											aria-label="Project Website and Phone">
											Game
										</a>
									</li>
					</ul>
				</div>

				{/* Single project objectives */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{singleProjectData.ProjectInfo.ObjectivesHeading}
					</p>
					<p className="font-general-regular text-primary-dark dark:text-ternary-light">
					To curate my OOP and game dev skills. 
					</p>
				</div>

				{/* Single project technologies */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{singleProjectData.ProjectInfo.Technologies[0].title}
					</p>
					<p className="font-general-regular text-primary-dark dark:text-ternary-light">
					C++, SFML
					</p>
				</div>

			</div>

			{/*  Single project right section */}
			<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
				<p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
					{singleProjectData.ProjectInfo.ProjectDetailsHeading}
				</p>
				<p className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light">
				Implemented a fully functional Minesweeper game using C++ and SFML, showcasing proficiency in object-oriented programming and GUI development. Developed game logic, tile generation, and user interface features to provide an immersive gaming experience. Strengthened understanding of software development principles and honed skills in C++ programming through the completion of this project. Demonstrated creativity, attention to detail, and a passion for crafting engaging user experiences.
				</p>
			</div>
		</div>
		{/* Image */}
		<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
			<div className="mb-10 sm:mb-0">
				<img
					src={Image5}
					className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
					alt="Image"
				/>
			</div>
		</div>
		<div className="block sm:flex gap-0 sm:gap-10 mt-14">
			<div className="w-full sm:w-1/3 text-left">
				{/* Single project client details */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
						Sudoku Image Processor
					</p>
					<ul className="leading-loose">
						{/* {singleProjectData.ProjectInfo.CompanyInfo.map(
							(info) => {
								return (
									
								);
							}
						)} */}
						<li className="font-general-regular text-ternary-dark dark:text-ternary-light"	
									>
										<span> </span>
										<a
											href="https://stoman.me"
											className='hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300'
											aria-label="Project Website and Phone">
											Game
										</a>
									</li>
					</ul>
				</div>

				{/* Single project objectives */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{singleProjectData.ProjectInfo.ObjectivesHeading}
					</p>
					<p className="font-general-regular text-primary-dark dark:text-ternary-light">
To make a sudoku solver where I can input an image and get the solution					</p>
				</div>

				{/* Single project technologies */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{singleProjectData.ProjectInfo.Technologies[0].title}
					</p>
					<p className="font-general-regular text-primary-dark dark:text-ternary-light">
					Python, OpenComputerVision, NumPy
					</p>
				</div>

			</div>

			{/*  Single project right section */}
			<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
				<p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
					{singleProjectData.ProjectInfo.ProjectDetailsHeading}
				</p>
				<p className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light">
				Developed a Sudoku solver utilizing OpenCV and NumPy, capable of solving Sudoku puzzles from an input image of the game board. Implemented computer vision techniques using OpenCV to extract the Sudoku grid from the image and perform image processing tasks. Leveraged the power of NumPy to implement some basic image processing and used pretrained model to recognize digits. Successfully designed and implemented a system that accurately analyzes and solves Sudoku puzzles, providing the user with the solved version.				</p>
			</div>
		</div>
		</div>
	);
};

export default ProjectInfo;
