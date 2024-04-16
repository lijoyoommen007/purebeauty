import React, { useState } from "react";
import { comments as initialComments } from "../constants/commentsArray";
import { FormatDate } from "../utilFunctions/utilFunctions";

// Define the type of comment
type Comment = {
  author: any;
  timestamp: string;
  content: string;
};

const ChatSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false); // State to track if comments section is expanded
  const [inputValue, setInputValue] = useState(""); // State to track the input value of the textarea
  const [userName, setUserName] = React.useState<string | null>(null);
  React.useEffect(() => {
    const username = localStorage.getItem('username');
    if (username) {
      setUserName(username);
    } 
  }, []);
  // Function to toggle comments section visibility
  const toggleComments = () => {
    setIsExpanded((prevState) => !prevState);
  };

  // Function to handle textarea change
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handlePostComment = () => {
    if (inputValue.trim() !== "") {
      const newComment: Comment = {
        author: userName, // Change to get author dynamically
        timestamp: FormatDate(new Date()), // Get formatted timestamp
        content: inputValue.trim(),
      };
      initialComments.push(newComment); // Push the new comment to initialComments array
      setInputValue(""); // Clear textarea after posting comment
    }
  };

  return (
    <div className="flex flex-col mb-5 items-start self-center px-14 py-14 mt-24 w-full max-w-screen-xl bg-customRed rounded-3xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div
        className="self-stretch text-2xl font-semibold leading-8 text-orange-100 max-md:max-w-full cursor-pointer"
        onClick={toggleComments}
      >
        {isExpanded ? "Comments" : " Click To View Comments"}
      </div>
      {isExpanded && (
        <>
          <div className="self-stretch mt-10 text-base leading-6 text-orange-100 max-md:max-w-full">
            Comments
          </div>
          <div className="items-start self-stretch px-5 pt-6 pb-20 mt-2.5 text-base font-light leading-7 rounded-lg border border-orange-100 border-solid text-orange-100 text-opacity-60 max-md:max-w-full">
            <textarea
              value={inputValue}
              onChange={handleInputChange}
              placeholder="What are your thoughts?"
              className="w-full resize-none bg-transparent border-none focus:outline-none text-orange-100"
            ></textarea>
          </div>
          <button
            onClick={handlePostComment}
            className="justify-center px-8 py-4 mt-8 text-sm leading-5 text-orange-100 uppercase bg-pink-900 rounded-3xl border border-orange-100 border-solid max-md:px-5"
          >
            Post a comment
          </button>
          <div className="shrink-0 self-stretch mt-11 h-px bg-orange-100 border border-orange-100 border-solid max-md:mt-10 max-md:max-w-full" />
          {initialComments.map((comment: Comment, index) => (
            <div key={index}>
              <div className="flex gap-5 mt-8 cursor-pointer leading-[100%]">
                <div className="flex gap-2 text-lg">
                  <div className="flex justify-center items-center px-3.5 w-10 h-10 text-white whitespace-nowrap bg-red-400 rounded-full">
                    {comment.author.charAt(0)}
                  </div>
                  <div className="flex-auto my-auto text-orange-100">
                    {comment.author}
                  </div>
                </div>
                <div className="my-auto text-base font-light text-orange-100 text-opacity-60">
                  {comment.timestamp}
                </div>
              </div>
              <div className="self-stretch mt-6 text-base font-light leading-6 text-orange-100 max-md:max-w-full">
                {comment.content}
              </div>
              <div className="flex gap-1.5 mt-6 text-base font-light leading-5 text-orange-100 whitespace-nowrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c47123029b4dffbdaa0f1f0348b7b50833365f6def0c8875f63159b662f96d7d?apiKey=087df68079624fb19f353daf9a4716f6&"
                  className="shrink-0 aspect-square w-[22px]"
                />
                <div>Reply</div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ChatSection;
