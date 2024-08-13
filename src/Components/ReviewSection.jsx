import React, { useState } from 'react';
import StarRating from './StarRating';

const ReviewSection = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [saveInfo, setSaveInfo] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ rating, review, name, email, saveInfo });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl p-4 border border-gray-300 rounded-lg">
      <div>
        <label className="block text-sm font-medium text-gray-700">Rating</label>
        <StarRating rating={3}/>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Review</label>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
          rows="4"
          placeholder="Write your review..."
        ></textarea>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
          placeholder="Your email"
        />
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          checked={saveInfo}
          onChange={() => setSaveInfo(!saveInfo)}
          className="h-4 w-4 text-blue-600 border-gray-300 rounded"
        />
        <label className="ml-2 block text-sm text-gray-700">
          Save my name, email, and website in this browser for the next time I comment.
        </label>
      </div>

      <div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ReviewSection;
