import { useRef } from "react";
import { signIn } from "next-auth/react";
import styles from "./SignIn.module.css";

const SignInPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        signIn("credentials", {
          email: emailRef.current.value,
          password: passwordRef.current.value,
          callbackUrl: "/administration/dash.js",
        });
      }}
    >
      <input type="email" ref={emailRef} />
      <input type="password" ref={passwordRef} />
      <button type="submit">derp</button>
    </form>
  );
};

export default SignInPage;
