import { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  // alternative solution
  // const checkNumber = (number) => {
  //   if (number > people.length - 1) {
  //     return 0;
  //   }
  //   if (number < 0) {
  //     return people.length - 1;
  //   }
  //   return number;
  // };

  // show next person
  const nextPerson = () => {
    setIndex((currIndex) => {
      const newIndex = (currIndex + 1) % people.length;
      return newIndex;
    });
  };

  // show previous person
  const prevPerson = () => {
    setIndex((currIndex) => {
      const newIndex = (currIndex - 1 + people.length) % people.length;
      // if (newIndex < 0) {
      //   return people.length - 1;
      // }
      return newIndex;
    });
  };

  // show random person
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    const newIndex = randomNumber % people.length;
    setIndex(newIndex);
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />{' '}
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button type="button" className="prev-btn" onClick={prevPerson}>
            {' '}
            <FaChevronLeft />
          </button>
          <button type="button" className="next-btn" onClick={nextPerson}>
            {' '}
            <FaChevronRight />
          </button>
        </div>
        <button
          type="button"
          className="btn btn-hipster"
          onClick={randomPerson}
        >
          random review
        </button>
      </article>
    </main>
  );
};
export default App;
