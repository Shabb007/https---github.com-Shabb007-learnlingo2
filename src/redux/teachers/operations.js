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
      }
    ];
    
    console.log("Returning mock data:", mockTeachers.length, "teachers");
    return mockTeachers;
  }
);
