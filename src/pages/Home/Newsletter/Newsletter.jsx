import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  function handleInput(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
      alert(`Thank you for subscribing with ${email}`);
      setEmail("");
    }
  }
  return (
    <div className="w-10/12 lg:w-3/4 mx-auto my-10 space-y-8">
      <div className="text-center space-y-4 flex flex-col items-center">
        <h3 className="text-3xl font-bold text-[#199DFF]">NewsLetter</h3>
        <p className=" max-w-screen-lg">Stay Informed with Our Newsletter: Get the Latest Updates, Tips, and Trends Delivered Straight to Your Inbox!</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2>Subscribe to our newsletter!</h2>
        {!isEmailValid ? <p>Please enter a valid email address</p> : null}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email address here"
            value={email}
            onChange={handleInput}
            style={{
              padding: "10px",
              fontSize: "16px",
              border: "2px solid #ddd",
              borderRadius: "5px",
            }}
          />
          <button
            type="submit"
            style={{
              margin: "10px",
              padding: "10px",
              backgroundColor: "#4CAF50",
              border: "none",
              color: "white",
              fontSize: "16px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
