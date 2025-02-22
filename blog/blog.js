document.addEventListener("DOMContentLoaded", () => {
	const articlesContainer = document.querySelector("#articles-container");

	const articles = [
		{
			id: 1,
			title: 'Septimus Heap Book One: Magyk',
			date: 'July 5, 2022',
			description: 'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
			imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
			imgAlt: 'Book cover for Septimus Heap 1',
			ages: '10-14',
			genre: 'Fantasy',
			stars: '⭐⭐⭐⭐'
		},
		{
			id: 2,
			title: 'Magnus Chase Book One: Sword of Summer',
			date: 'December 12, 2021',
			description: 'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
			imgSrc: 'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
			imgAlt: 'Book cover for Magnus Chase 1',
			ages: '12-16',
			genre: 'Fantasy',
			stars: '⭐⭐⭐⭐'
		},
		{
			id: 3,
			title: 'The Great Gatsby',
			date: 'April 10, 1925',
			description: 'A classic novel by F. Scott Fitzgerald that explores themes of wealth, love, and the American Dream.',
			imgSrc: 'images/great-gatsby.jpg',
			imgAlt: 'Cover of The Great Gatsby',
			ages: '14+',
			genre: 'Classic',
			stars: '⭐⭐⭐⭐'
		},
		{
			id: 4,
			title: "Charlotte's Web",
			date: 'July 10, 1962',
			description: 'A heartwarming story by E.B. White about friendship, loyalty, and the beauty of farm life.',
			imgSrc: 'images/charlottes-web.jpg',
			imgAlt: "Cover of Charlotte's Web",
			ages: '6 - 10',
			genre: 'Adventure',
			stars: '⭐⭐⭐⭐'
		},
		{
			id: 5,
			title: "Harry Potter and the Sorcerer's Stone",
			date: 'March 14, 1997',
			description: "The first book in J.K. Rowling's iconic series, filled with magic, adventure, and friendship.",
			imgSrc: 'images/harry-potter.jpg',
			imgAlt: "Cover of Harry Potter and the Sorcerer's Stone",
			ages: '8 - 12',
			genre: 'Fantasy',
			stars: '⭐⭐⭐⭐'
		},
		{
			id: 6,
			title: 'The Very Hungry Caterpillar',
			date: 'May 2, 1980',
			description: 'A beloved story by Eric Carle about a caterpillar’s transformation into a butterfly, teaching about growth and change.',
			imgSrc: 'images/very-hungry-caterpillar.jpg',
			imgAlt: 'Cover of The Very Hungry Caterpillar',
			ages: '4 - 7',
			genre: 'Picture Book',
			stars: '⭐⭐⭐⭐'
		},
		{
			id: 7,
			title: 'Where the Wild Things Are',
			date: 'September 22, 1957',
			description: "A classic by Maurice Sendak about a young boy's adventure to an island filled with wild creatures, exploring imagination and emotions.",
			imgSrc: 'images/wild-things.jpg',
			imgAlt: 'Cover of Where the Wild Things Are',
			ages: '6 - 10',
			genre: 'Fantasy',
			stars: '⭐⭐⭐⭐'
		},
		{
			id: 8,
			title: 'Ramona the Pest',
			date: 'October 4, 1968',
			description: 'Written by Beverly Cleary, this book follows the mischief and growing pains of Ramona Quimby, a lively and curious young girl.',
			imgSrc: 'images/ramona-the-pest.jpg',
			imgAlt: 'Cover of Ramona the Pest',
			ages: '5 - 9',
			genre: 'Adventure',
			stars: '⭐⭐⭐⭐'
		},
		{
			id: 9,
			title: "Belgariad Book One: Pawn of Prophecy",
			date: "Feb 12, 2022",
			description: "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
			imgSrc: "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
			imgAlt: "Book cover for Pawn of Prophecy",
			ages: "12-16",
			genre: "Fantasy",
			stars: "⭐⭐⭐⭐⭐"
		}
	];

	articles.forEach(article => {
		const articleElement = document.createElement("article");
		articleElement.classList.add("blog-post");
		articleElement.innerHTML = `
			<div class="article-details">
				<p class="article-date">${article.date}</p>
				<ul>
					<li class="article-info"><strong>Age:</strong> ${article.ages}</li>
					<li class="article-info"><strong>Genre:</strong> ${article.genre}</li>
					<li class="article-info" class="star">Rating:<strong></strong> ${article.stars}</li>
				</ul>
			</div>
			<div class="article-content">
				<h2>${article.title}</h2>
				<img src="${article.imgSrc}" alt="${article.imgAlt}" class="book-cover">
				<p>${article.description}</p>
			</div>
		`;
		articlesContainer.appendChild(articleElement);
	});
});
