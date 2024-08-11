import { v4 as uuidv4 } from "uuid";
import { User } from "../types"; // Assuming you have a types file
import { users } from "../constants"; // Assuming users array exists here

export const userService = {
  createUser: (
    name: string,
    email: string,
    password: string
  ): Promise<User> => {
    return new Promise((resolve, reject) => {
      const userWithEmail = users.find((u) => u.email === email);
      const userWithUsername = users.find((u) => u.username === name);
      if (userWithEmail?.uid) {
        return reject(new Error("User with this email already exists!"));
      }

      if (userWithUsername?.uid) {
        return reject(new Error("User with this username already exists!"));
      }

      const newUser: User = {
        uid: uuidv4(),
        username: name,
        email,
        password,
        createdAt: new Date(),
      };

      users.push(newUser);
      resolve(newUser);
    });
  },

  getUserByEmail: (email: string): Promise<User | undefined> => {
    return new Promise((resolve) => {
      const user = users.find((u) => u.email === email);
      resolve(user);
    });
  },

  updateUser: (uid: string, update: Partial<User>): Promise<User> => {
    return new Promise((resolve, reject) => {
      const userIndex = users.findIndex((u) => u.uid === uid);

      if (userIndex === -1) {
        return reject(new Error("User not found."));
      }

      users[userIndex] = { ...users[userIndex], ...update };
      resolve(users[userIndex]);
    });
  },

  deleteUser: (uid: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      const userIndex = users.findIndex((u) => u.uid === uid);

      if (userIndex === -1) {
        return reject(new Error("User not found."));
      }

      users.splice(userIndex, 1);
      resolve();
    });
  },

  loginUser: (email: string, password: string): Promise<User> => {
    return new Promise((resolve, reject) => {
      const user = users.find((u) => u.email === email || u.username === email);

      if (!user) {
        return reject(new Error("User does not exist."));
      }

      if (user.password !== password) {
        return reject(new Error("Invalid password."));
      }

      resolve(user);
    });
  },

  registerUser: (
    name: string,
    email: string,
    password: string
  ): Promise<User> => {
    return userService.createUser(name, email, password);
  },
};
