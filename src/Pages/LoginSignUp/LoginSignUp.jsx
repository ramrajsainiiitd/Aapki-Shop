import React, { useContext, useState } from "react";
import "../LoginSignUp/styles.css";
import { MyContext } from "../../Context/Context";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

export default function LoginSignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState(0);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { isLoggedIn, setIsloggedIn } = useContext(MyContext);
  const [signUp, setSignUp] = useState(false);

  function SignUpWithEmail(e) {
    e.preventDefault();
    console.log(name);

    if (name!= "" &&email!= "" &&password!= "" &&confirmPassword!= "") {
      const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log('user:', user);
        toast.success('User created!');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
        // ..
      });
      
    }
    else{
      alert('All fields are required!')
    }
  }

  return (
    <div id="login-signup-page" className="text-center">
      <h2>Aapki Shop</h2>
      <div className="d-flex container" style={{ height: "500px" }}>
        <div
          className="container border d-flex flex-column"
          style={{
            height: "500px",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "lightblue",
          }}
        >
          <div className="py-2">
            <span className="px-2">
              <button
                className="btn btn-outline-success"
                onClick={() => {
                  setSignUp(!signUp);
                }}
              >
                Login
              </button>
            </span>
            <span className="px-2">
              <button
                className="btn btn-outline-success"
                onClick={() => {
                  setSignUp(!signUp);
                }}
              >
                Sign Up
              </button>
            </span>
          </div>
          <p className="py-2">
            Get access to your Orders, Wishlist and Recommendations
          </p>
        </div>
        {signUp ? (
          <form action="">
            <div
              className="container border mx-1 py-5"
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "lightgray",
              }}
            >
              <input
                type=""
                className="form-control me-2"
                aria-label="Search"
                placeholder="Enter Email/Mobile number"
              />
              <p>
                {" "}
                <input type="checkbox" /> Aapki Shop's Terms of Use and Privacy
                Policy.
              </p>
              <button className="btn btn-outline-success">Request Otp</button>
              <p className="py-1">Or</p>
              <input
                type=""
                className="form-control me-2"
                aria-label="Search"
                placeholder="Enter Email/Mobile number"
              />
              <br />
              <input
                type="password"
                className="form-control me-2"
                aria-label="Search"
                placeholder="Password"
              />
              <p>
                {" "}
                <input type="checkbox" /> Aapki Shop's Terms of Use and Privacy
                Policy.
              </p>
              <button className="btn btn-outline-success">Login</button>
            </div>
          </form>
        ) : (
          <form onSubmit={(e)=>SignUpWithEmail(e)} >
            <div
              className="container border mx-1 py-5"
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "lightgray",
              }}
            >
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-control me-2"
                aria-label="Search"
                placeholder="Full Name"
              />
              <br />
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control me-2"
                aria-label="Search"
                placeholder="Enter Email"
              />
              <br />
              <input
                onChange={(e) => setMobile(e.target.value)}
                type="number"
                className="form-control me-2"
                aria-label="Search"
                placeholder="Mobile number"
              />
              <br />
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control me-2"
                aria-label="Search"
                placeholder="Password"
              />
              <br />
              <input
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
                className="form-control me-2"
                aria-label="Search"
                placeholder="Confirm Password"
              />
              <br />
              <p>
                {" "}
                <input type="checkbox" /> Aapki Shop's Terms of Use and Privacy
                Policy.
              </p>
              <button
                className="btn btn-outline-success"
              >
                Sign Up
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
