import React, { useState } from "react";
import { Stack, Input, Button } from "../components";
import { useAuth } from "../contexts/AuthContext";
import { EyeIcon, SpinnerIcon } from "../components/Icons";
import toast from "react-hot-toast";

const LoginForm: React.FC<{
  onSuccess: () => void;
  onRegister?: () => void;
}> = ({ onSuccess, onRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const { login, authenticating } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      await login(email, password);
      toast.success('You have logged in successfully!')
      onSuccess();
    } catch (e) {
      const err = e as Error;
      setError(err.message);
    }
  };

  return (
    <div className="text-white rounded-lg mx-auto">
      <Stack className={"gap-10"}>
        <Stack className={"gap-3"}>
          <h2 className="text-sm text-center text-textSecondary">
            WELCOME BACK
          </h2>
          <h3 className="text-lg font-semibold text-center">
            Log into your account
          </h3>
        </Stack>
        <form onSubmit={handleSubmit}>
          <Stack className={"gap-4"}>
            <Input
              id="email"
              type="email"
              label="Email or Username"
              placeholder="Enter your email or username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              id="password"
              type={isPasswordVisible ? "text" : "password"}
              label="Password"
              placeholder="Enter your password"
              value={password}
              secondary={
                <button>
                  <p className="text-xs">Forgot Password?</p>{" "}
                </button>
              }
              right={
                <EyeIcon
                  className="cursor-pointer"
                  onClick={() => setIsPasswordVisible((prev) => !prev)}
                />
              }
              onChange={(e) => setPassword(e.target.value)}
            />
            <Stack className="mt-2 gap-3">
              {Boolean(error.length) && (
                <p className="text-sm text-red-500">{error}</p>
              )}
              <Button fullWidth type="submit" disabled={authenticating}>
                Login now {authenticating ? <SpinnerIcon /> : null}
              </Button>
              <p className="text-sm text-textSecondary">
                Not registered yet?{" "}
                <span
                  className="text-white cursor-pointer"
                  onClick={onRegister}
                >
                  Register →
                </span>
              </p>
            </Stack>
          </Stack>
        </form>
      </Stack>
    </div>
  );
};

export default LoginForm;
