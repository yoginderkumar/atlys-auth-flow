import React, { useState } from "react";
import {Stack, Input, Button} from "../components";
import { useAuth } from "../contexts/AuthContext";
import { EyeIcon, SpinnerIcon } from "../components/Icons";
import { isPasswordStrong, isValidUsername } from "../utils";

const RegisterForm: React.FC<{
  onSuccess: () => void;
  onLogin?: () => void;
}> = ({ onLogin, onSuccess }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const { register, registering } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!username || !email || !password) {
      setError("Please fill in all fields.");
      return;
    } else if (!isValidUsername(username)) {
      setError("Please enter a valid username!");
    } else if (!isPasswordStrong(password)) {
      setError(
        `Please enter a strong password which includes at least 8 characters (1 lowercase, 1 digit and at least 1 special character e.g., @, #, $, etc.)!`
      );
      return;
    }

    try {
      await register(username, email, password);
      onSuccess();
    } catch (e) {
      const err = e as Error
      setError(err.message);
    }
  };

  return (
    <div className="text-white rounded-lg mx-auto">
      <Stack className={"gap-10"}>
        <Stack className={"gap-3"}>
          <h2 className="text-sm text-center text-textSecondary">SIGN UP</h2>
          <h3 className="text-lg font-semibold text-center">
            Create an account to continue
          </h3>
        </Stack>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
        >
          <Stack className="gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
            />
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              label="Choose a preferred username"
            />
            <Input
              type={isPasswordVisible ? "text" : "password"}
              placeholder="Choose a strong password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              right={
                <EyeIcon
                  className="cursor-pointer"
                  onClick={() => setIsPasswordVisible((prev) => !prev)}
                />
              }
            />
            <Stack className="mt-2 gap-3">
              {Boolean(error.length) && (
                <p className="text-sm text-red-500">{error}</p>
              )}
              <Button fullWidth type="submit" disabled={registering}>
                Continue {registering && <SpinnerIcon />}
              </Button>
              <p className="text-sm text-textSecondary">
                Already have an account?{" "}
                <span className="text-white cursor-pointer" onClick={onLogin}>
                  Login →
                </span>
              </p>
            </Stack>
          </Stack>
        </form>
      </Stack>
    </div>
  );
};

export default RegisterForm;
