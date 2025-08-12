import { createAsyncThunk } from "@reduxjs/toolkit";
import { get, ref } from "firebase/database";
import { database } from "../../firebase/config";

export const fetchTeachersAsync = createAsyncThunk(
  "/teachers/fetchAll",
  async (_, thunkAPI) => {
    console.log("Starting to fetch teachers...");
    
    // For development, always use mock data until Firebase is properly configured
    console.log("Using mock data for development...");
    
    // Mock data for development when Firebase is not configured
    const mockTeachers = [
      {
        id: "1",
        name: "Sarah",
        surname: "Johnson",
        avatar_url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
        languages: ["English", "Spanish"],
        lesson_info: "Interactive online lessons with focus on conversation",
        conditions: "Flexible scheduling, 24/7 availability",
        experience: "5+ years teaching English as a second language. Specialized in business English and exam preparation.",
        rating: 4.8,
        price_per_hour: 25,
        lessons_done: 1274,
        levels: ["Beginner", "Intermediate", "Advanced"],
        reviews: [
          {
            reviewer_name: "Maria",
            reviewer_rating: 5,
            comment: "Excellent teacher! Very patient and helpful."
          },
          {
            reviewer_name: "John",
            reviewer_rating: 4,
            comment: "Great lessons, improved my English significantly."
          }
        ]
      },
      {
        id: "2",
        name: "Michael",
        surname: "Chen",
        avatar_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
        languages: ["English", "Mandarin"],
        lesson_info: "Structured learning with personalized curriculum",
        conditions: "Weekdays only, 1-hour sessions",
        experience: "Certified TESOL instructor with 8 years of experience. Expert in grammar and pronunciation.",
        rating: 4.9,
        price_per_hour: 30,
        lessons_done: 2156,
        levels: ["Intermediate", "Advanced"],
        reviews: [
          {
            reviewer_name: "Lisa",
            reviewer_rating: 5,
            comment: "Amazing teacher! Very knowledgeable and professional."
          }
        ]
      },
      {
        id: "3",
        name: "Emma",
        surname: "Wilson",
        avatar_url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face",
        languages: ["English", "French"],
        lesson_info: "Conversation-focused lessons with cultural insights",
        conditions: "Weekends available, group lessons possible",
        experience: "Native English speaker with 6 years of teaching experience. Specialized in conversational English and cultural exchange.",
        rating: 4.7,
        price_per_hour: 22,
        lessons_done: 892,
        levels: ["Beginner", "Intermediate"],
        reviews: [
          {
            reviewer_name: "Pierre",
            reviewer_rating: 4,
            comment: "Very friendly and helpful teacher!"
          }
        ]
      },
      {
        id: "4",
        name: "David",
        surname: "Brown",
        avatar_url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
        languages: ["English", "German"],
        lesson_info: "Academic English and test preparation",
        conditions: "Structured 12-week programs",
        experience: "PhD in Linguistics with 10+ years teaching experience. Expert in IELTS, TOEFL, and academic English.",
        rating: 4.9,
        price_per_hour: 35,
        lessons_done: 3421,
        levels: ["Advanced"],
        reviews: [
          {
            reviewer_name: "Anna",
            reviewer_rating: 5,
            comment: "Best teacher for exam preparation!"
          }
        ]
      },
      // Additional mock teachers to enable Load More
      {
        id: "5",
        name: "Olivia",
        surname: "Martinez",
        avatar_url: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&h=200&fit=crop&crop=face",
        languages: ["English", "Spanish"],
        lesson_info: "Fun and engaging lessons for kids and adults",
        conditions: "Evenings and weekends",
        experience: "7 years teaching experience focusing on young learners and beginners.",
        rating: 4.6,
        price_per_hour: 20,
        lessons_done: 1032,
        levels: ["Beginner", "Intermediate"],
        reviews: []
      },
      {
        id: "6",
        name: "Liam",
        surname: "Anderson",
        avatar_url: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=200&h=200&fit=crop&crop=face",
        languages: ["English", "Italian"],
        lesson_info: "Conversational English with travel focus",
        conditions: "Flexible hours",
        experience: "3 years tutoring travelers and expats.",
        rating: 4.5,
        price_per_hour: 18,
        lessons_done: 540,
        levels: ["Beginner", "Intermediate"],
        reviews: []
      },
      {
        id: "7",
        name: "Ava",
        surname: "Khan",
        avatar_url: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=200&h=200&fit=crop&crop=face",
        languages: ["English", "Arabic"],
        lesson_info: "IELTS preparation and academic writing",
        conditions: "Morning sessions",
        experience: "Certified IELTS trainer with 6 years of experience.",
        rating: 4.8,
        price_per_hour: 28,
        lessons_done: 1600,
        levels: ["Intermediate", "Advanced"],
        reviews: []
      },
      {
        id: "8",
        name: "Noah",
        surname: "Garcia",
        avatar_url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
        languages: ["English", "Portuguese"],
        lesson_info: "Business English and presentation skills",
        conditions: "Weekdays only",
        experience: "MBA with 5 years of corporate training.",
        rating: 4.7,
        price_per_hour: 32,
        lessons_done: 1240,
        levels: ["Intermediate", "Advanced"],
        reviews: []
      },
      {
        id: "9",
        name: "Isabella",
        surname: "Rossi",
        avatar_url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop&crop=face",
        languages: ["English", "Italian"],
        lesson_info: "Pronunciation and accent reduction",
        conditions: "Late evenings",
        experience: "Linguistics background with 4 years experience.",
        rating: 4.6,
        price_per_hour: 24,
        lessons_done: 780,
        levels: ["Intermediate"],
        reviews: []
      },
      {
        id: "10",
        name: "William",
        surname: "Smith",
        avatar_url: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&h=200&fit=crop&crop=face",
        languages: ["English"],
        lesson_info: "General English with grammar focus",
        conditions: "Weekends",
        experience: "8 years teaching general English to adults.",
        rating: 4.4,
        price_per_hour: 19,
        lessons_done: 980,
        levels: ["Beginner", "Intermediate"],
        reviews: []
      },
      {
        id: "11",
        name: "Mia",
        surname: "Lee",
        avatar_url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop&crop=face",
        languages: ["English", "Korean"],
        lesson_info: "Conversation for professionals",
        conditions: "Flexible",
        experience: "Corporate trainer with 6 years experience.",
        rating: 4.7,
        price_per_hour: 27,
        lessons_done: 1345,
        levels: ["Intermediate", "Advanced"],
        reviews: []
      },
      {
        id: "12",
        name: "James",
        surname: "Nguyen",
        avatar_url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop&crop=face",
        languages: ["English", "Vietnamese"],
        lesson_info: "Exam prep and academic skills",
        conditions: "Weekdays",
        experience: "University lecturer with 9 years experience.",
        rating: 4.9,
        price_per_hour: 33,
        lessons_done: 2100,
        levels: ["Advanced"],
        reviews: []
      }
    ];
    
    console.log("Returning mock data:", mockTeachers.length, "teachers");
    return mockTeachers;
  }
);
