import { useRef } from "react";
import { getSession, signIn } from "next-auth/react";

const SignInPage = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        signIn("credentials", {
          email: emailRef.current.value,
          password: passwordRef.current.value,
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

export async function getServerSideProps(context) {
  const { req } = context;
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: { destination: "/administration/dash" },
    };
  }

  return { props: {} };
}
