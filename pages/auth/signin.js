import { useRef } from "react";
import { signIn } from "next-auth/react";
import styles from "./SignIn.module.css";
import { useRouter } from "next/router";

const SignInPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const router = useRouter();

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        signIn("credentials", {
          email: emailRef.current.value,
          password: passwordRef.current.value,
          redirect: false,
        })
          .then((res) => {
            if (res.status === 200) {
              console.log("what?");
              router.push("/administration/dash");
            }
          })
          .catch((err) => {
            console.log(err);
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
