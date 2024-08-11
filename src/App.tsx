import HomePage from "./Pages/HomePage";

function App() {
  return <HomePage />;
}

export default App;

/**
 * <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-200">
      <header className="w-full max-w-4xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-3xl font-bold">Atlys</h1>
        <div className="flex items-center space-x-4">
          <Button onClick={toggleTheme} variant="secondary">
            {theme === "light" ? "🌙" : "☀️"}
          </Button>
          {user ? (
            <>
              <span>Welcome, {user.name}!</span>
              <Button onClick={logout} variant="secondary">
                Log out
              </Button>
            </>
          ) : (
            <>
              <Button onClick={() => setIsLoginModalOpen(true)}>Log in</Button>
              <Button
                onClick={() => setIsRegisterModalOpen(true)}
                variant="secondary"
              >
                Register
              </Button>
            </>
          )}
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4">
        {user ? (
          <Feed />
        ) : (
          <div className="text-center">
            <p className="text-xl mb-4">
              Join Atlys to see posts from your network!
            </p>
          </div>
        )}
      </main>

      <Modal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      >
        <h2 className="text-2xl font-bold mb-4">Log in</h2>
        <LoginForm onSuccess={closeModals} />
      </Modal>

      <Modal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
      >
        <h2 className="text-2xl font-bold mb-4">Create an account</h2>
        <RegisterForm onSuccess={closeModals} />
      </Modal>
    </div>
 */
