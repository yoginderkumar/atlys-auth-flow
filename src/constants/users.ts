import { AuthUser, User } from "../types";

export const getRandomUser = (): AuthUser => {
  const randomIndex = Math.floor(Math.random() * users.length);
  const user = users[randomIndex];
  return {
    id: user.uid,
    name: user?.name || user.username,
    email: user.email,
  };
};

export const users: User[] = [
  {
    uid: "a8b4c2d6-e5f4-401e-9c2a-d8f8b7c8e1f9",
    username: "TechGuru22",
    name: "Tech Guru",
    email: "techguru22@example.com",
    password: "Str0ngP@ss!",
    createdAt: new Date("2024-08-10T14:25:35Z"),
  },
  {
    uid: "d4c9a7f3-34b7-4b8e-a2c4-2a8d2b5e3e4c",
    username: "AdventureSeeker",
    name: "Adventure Seeker",
    email: "adventure.seeker@example.com",
    password: "Expl0re!TheWorld",
    createdAt: new Date("2024-08-09T09:45:12Z"),
  },
  {
    uid: "2a5c6d7e-1f2b-4c3d-a5b6-7c8d9e0f1a2b",
    username: "CodeNinja77",
    email: "codeninja77@example.com",
    password: "N1nj@Cod3!",
    createdAt: new Date("2024-08-08T18:30:22Z"),
  },
  {
    uid: "9f8e7d6c-4b5a-2c3e-1d7f-8a9b6c5e4d3f",
    username: "CreativeMind88",
    email: "creativemind88@example.com",
    password: "P@ssCreative88",
    createdAt: new Date("2024-08-07T12:10:45Z"),
  },
  {
    uid: "1b2c3d4e-5f6a-7b8c-9d0e-1f2g3h4i5j6k",
    username: "FitnessFanatic",
    email: "fitness.fanatic@example.com",
    password: "GymL!f3#2024",
    createdAt: new Date("2024-08-06T16:20:50Z"),
  },
  {
    uid: "1b2c3e4d-5f6a-7b8c-9d0e-1f2g3h4i576l",
    username: "test_user",
    name: "Test User",
    email: "test@example.com",
    password: "password",
    createdAt: new Date("2024-08-10T14:25:35Z"),
  },
  {
    uid: "1b2c3d4y-5f6a-7b8c-9d0e-1f2g3h4i576l",
    username: "yoginderkumar",
    name: "Yoginder Kumar",
    email: "yoginderkumar2510@gmail.com",
    password: "test123",
    createdAt: new Date("2024-08-07T12:10:45Z"),
  },
];
