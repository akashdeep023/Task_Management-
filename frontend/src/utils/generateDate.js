export const generateDate = () => {
	return new Date(Date.now())
		.toDateString()
		.split(" ")
		.slice(2, 4)
		.join("th -, ")
		.replace("-", new Date(Date.now()).toDateString().split(" ")[1]);
};