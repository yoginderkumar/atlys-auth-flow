import { Post } from "../types";
import { getRandomUser } from "./users";
import { v4 as uuidv4 } from "uuid";

export const MIN_POST_LENGTH = 5;
export const MAX_POST_LENGTH = 280;

export const posts: Post[] = [
  {
    id: uuidv4(),
    author: getRandomUser(),
    content: {
      emoji: "💻",
      text: "Excited about the new tech trends in 2024! Can’t wait to dive in and explore the possibilities. What’s everyone else excited about?",
    },
    createdAt: new Date(Date.now() - 10 * 60 * 1000), // 10 minutes ago
    commentsCount: 10,
  },
  {
    id: uuidv4(),
    author: getRandomUser(),
    content: {
      emoji: "🌍",
      text: "Just returned from an amazing trip across the globe. The world is a book, and those who do not travel read only one page.",
    },
    createdAt: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
    commentsCount: 15,
  },
  {
    id: uuidv4(),
    author: getRandomUser(),
    content: {
      emoji: "👨‍💻",
      text: "Spent the weekend hacking together a new project. Nothing beats the feeling of solving a tough problem with some clean code.",
    },
    createdAt: new Date(Date.now() - 60 * 60 * 1000), // 1 hour ago
    commentsCount: 7,
  },
  {
    id: uuidv4(),
    author: getRandomUser(),
    content: {
      emoji: "🎨",
      text: "Creativity is intelligence having fun. Just finished a new art project that I’m really proud of. What’s your latest creative work?",
    },
    createdAt: new Date(Date.now() - 120 * 60 * 1000), // 2 hours ago
    commentsCount: 18,
  },
  {
    id: uuidv4(),
    author: getRandomUser(),
    content: {
      emoji: "💪",
      text: "Pushed my limits today at the gym. Remember, the only bad workout is the one you didn’t do. Stay fit, stay strong!",
    },
    createdAt: new Date(Date.now() - 180 * 60 * 1000), // 3 hours ago
    commentsCount: 22,
  },
  {
    id: uuidv4(),
    author: getRandomUser(),
    content: {
      emoji: "🧪",
      text: "This is just a test post to ensure everything is working fine. Please ignore!",
    },
    createdAt: new Date(Date.now() - 240 * 60 * 1000), // 4 hours ago
    commentsCount: 0,
  },
  {
    id: uuidv4(),
    author: getRandomUser(),
    content: {
      emoji: "👨‍🏫",
      text: "Learning never exhausts the mind. Just finished a new course on advanced JavaScript techniques. Feeling more empowered!",
    },
    createdAt: new Date(Date.now() - 300 * 60 * 1000), // 5 hours ago
    commentsCount: 5,
  },
];
