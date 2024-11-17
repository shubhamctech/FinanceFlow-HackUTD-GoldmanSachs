// components/SignInForm.tsx
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

function SignInForm() {
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
      callbackUrl: "/dashboard",
    });

    if (res && !res.error) {
      // Redirect to /dashboard
      router.push("/dashboard");
    } else {
      // Handle sign-in error
      console.error(res.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Your form fields */}
    </form>
  );
}

export default SignInForm;
