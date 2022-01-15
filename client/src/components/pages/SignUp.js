/*import React from 'react';

 
const SignUp = () => {
    return (
        <div>
            <section> Name: </section>
            <section> Username: </section>
            <section> Email address: </section>
            <section> Password: </section>
            <button> SUBMIT </button>
        </div>
    )
}

export default SignUp;
*/
import React from "react";
import "../../utilities.css";

const UsersList = (props) => {
  const [allUsers, setAllUsers] = useState([]);
};

const SignUp = () => {
  return (
    <html>
      <head>
        <h1 className="u-textCenter"> Sign Up</h1>
      </head>
      <body className="u-textCenter">
        <form>
          Name:
          <input type="text" name="Name" />
        </form>
        <form>
          Username:
          <input type="text" name="Username" />
        </form>
        <form>
          Email Address:
          <input type="text" name="Email Address" />
        </form>
        <form>
          Password:
          <input type="text" name="Password" />
        </form>
        <button> SUBMIT </button>
      </body>
    </html>
  );
};

export default SignUp;
