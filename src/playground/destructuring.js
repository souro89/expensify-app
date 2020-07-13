const person = {
  name: "Andrew",
  age: 26,
  location: {
    city: "Philly",
    temp: 92,
  },
};

const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
  publisher: {
    name: "Penguin",
  },
};

const { name: publisherName = "Self-Published" } = book.publisher;

console.log(publisherName);
