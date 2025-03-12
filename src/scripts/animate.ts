export const slideIn = (element: HTMLElement) => {
	const { left: startLeft, width } = element.getBoundingClientRect();
	const endLeft = window.innerWidth / 2 - width / 2;
	const distance = endLeft - startLeft;

	element.style.transition = "transform 1s ease-out";
	element.style.transform = `translateX(${distance}px)`;
};

export const slideInFromRight = (element: HTMLElement) => {
	const { width, right: startRight } = element.getBoundingClientRect();
	const endRight = window.innerWidth / 2 - width / 2;
	const distance = endRight - startRight + width;

	element.style.transition = "transform 1s ease-out";
	element.style.transform = `translateX(${distance}px)`;
};
