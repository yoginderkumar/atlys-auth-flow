import React, { useState } from "react";

import { Feed } from "./Feed";
import { Logo } from "../components/Icons";

import { Button, Modal } from "../components";
import { LoginForm, RegisterForm } from "../Auth";

import { useAuth } from "../contexts";

const HomePage: React.FC = () => {
  const { user } = useAuth();
  const [setupType, setSetupType] = useState<"login" | "register" | undefined>(
    undefined
  );

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      {user ? (
        <Feed />
      ) : (
        <div className="flex flex-col gap-8 items-center justify-center">
          <Logo />
          <div className="flex flex-col gap-1 items-center justify-center">
            <p className="text-xl mb-4 text-white">
              Join Atlys to see posts from your network!
            </p>
            <div className="flex gap-6">
              <Button variant="primary" onClick={() => setSetupType("login")}>
                Login
              </Button>
              <Button
                variant="secondary"
                onClick={() => setSetupType("register")}
              >
                Resister
              </Button>
            </div>
          </div>
        </div>
      )}
      <Modal
        size="lg"
        isOpen={Boolean(setupType)}
        onClose={() => setSetupType(undefined)}
      >
        {setupType === "login" ? (
          <LoginForm
            onSuccess={() => setSetupType(undefined)}
            onRegister={() => setSetupType("register")}
          />
        ) : (
          <RegisterForm
            onLogin={() => setSetupType("login")}
            onSuccess={() => setSetupType(undefined)}
          />
        )}
      </Modal>
    </div>
  );
};

export default HomePage;

// import React from "react";
// import { Button, Logo } from "../components";

// import { useAuth } from "../contexts";

// const HomePage: React.FC = () => {
//   const { user } = useAuth();

//   return (
//     <div className="min-h-screen bg-gray-900 flex items-center justify-center">
//       {user ? null : (
//         <div className="flex flex-col items-center gap-8">
//           <Logo />
//           <div>
//             <Button variant="primary">Login</Button>
//             <Button variant="secondary">Resister</Button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HomePage;
