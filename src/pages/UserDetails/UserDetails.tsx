import { useState } from "react";
import "./UserDetails.css";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useQuiz } from "../../context/quiz-provider/QuizContextProvider";

export const UserDetails = () => {
  const { dispatch } = useQuiz();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isLoader, setIsLoader] = useState<boolean>(false);
  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const submitHandler = async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLoader(true);
    if(name && email){
      if(!validateEmail(email)){
        alert("Please Fill Correct Email Address")
        setIsLoader(false);
        return;
      }
      dispatch({ type: "initialize-user-name", payload: name });
      localStorage?.setItem(
        "userDetails",
        JSON.stringify({
          name: name,
          email: email
        })
      );
      setName("")
      setEmail("");
      setIsLoader(false);
      navigate("/quiz");
    } else {
      alert("Please Fill all the fields")
      setIsLoader(false);
    }
  };

  return (
    <div className="user-details">
      <div className="user-details-box">
        <h2>LET'S PLAY</h2>
        <p>Please fill your details</p>
        <form>
        <div className="user-box">
            <input
              required
              type="name"
              name=""
              onChange={(e) => setName(e.target.value)}
            />
            <label>Name</label>
          </div>
          <div className="user-box">
            <input
              required
              type="email"
              name=""
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email</label>
          </div>
            <button
              className="submit-button-bt"
              disabled={isLoader}
              id="submit-button-bt"
              onClick={(e) => submitHandler(e)}
              type="submit"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </button>
        </form>
      </div>
      {isLoader && <CircularProgress id="loader" />}
    </div>
  );
};
