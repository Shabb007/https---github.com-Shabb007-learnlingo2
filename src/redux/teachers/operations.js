import { createAsyncThunk } from "@reduxjs/toolkit";
import { get, ref } from "firebase/database";
import { database } from "../../firebase/config";

export const fetchTeachersAsync = createAsyncThunk(
  "teachers/fetchAll",
  async (_, thunkAPI) => {
    console.log("Starting to fetch teachers...");

    // Mock data for fallback
    const mockTeachers = [
      {
        id: "1",
        name: "Sarah",
        surname: "Johnson",
        avatar_url:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
        languages: ["English", "Spanish"],
        lesson_info: "Interactive online lessons with focus on conversation",
        conditions: "Flexible scheduling, 24/7 availability",
        experience:
          "5+ years teaching English as a second language. Specialized in business English and exam preparation.",
        rating: 4.8,
        price_per_hour: 25,
        lessons_done: 1274,
        levels: ["Beginner", "Intermediate", "Advanced"],
        reviews: [
          {
            reviewer_name: "Maria",
            reviewer_rating: 5,
            comment: "Excellent teacher! Very patient and helpful.",
          },
          {
            reviewer_name: "John",
            reviewer_rating: 4,
            comment: "Great lessons, improved my English significantly.",
          },
        ],
      },
      {
        id: "2",
        name: "Michael",
        surname: "Chen",
        avatar_url:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
        languages: ["English", "Mandarin"],
        lesson_info: "Structured learning with personalized curriculum",
        conditions: "Weekdays only, 1-hour sessions",
        experience:
          "Certified TESOL instructor with 8 years of experience. Expert in grammar and pronunciation.",
        rating: 4.9,
        price_per_hour: 30,
        lessons_done: 2156,
        levels: ["Intermediate", "Advanced"],
        reviews: [
          {
            reviewer_name: "Lisa",
            reviewer_rating: 5,
            comment: "Amazing teacher! Very knowledgeable and professional.",
          },
        ],
      },
      {
        id: "3",
        name: "Emma",
        surname: "Wilson",
        avatar_url:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face",
        languages: ["English", "French"],
        lesson_info: "Conversation-focused lessons with cultural insights",
        conditions: "Weekends available, group lessons possible",
        experience:
          "Native English speaker with 6 years of teaching experience. Specialized in conversational English and cultural exchange.",
        rating: 4.7,
        price_per_hour: 22,
        lessons_done: 892,
        levels: ["Beginner", "Intermediate"],
        reviews: [
          {
            reviewer_name: "Pierre",
            reviewer_rating: 4,
            comment: "Very friendly and helpful teacher!",
          },
        ],
      },
      {
        id: "4",
        name: "David",
        surname: "Brown",
        avatar_url:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
        languages: ["English", "German"],
        lesson_info: "Academic English and test preparation",
        conditions: "Structured 12-week programs",
        experience:
          "PhD in Linguistics with 10+ years teaching experience. Expert in IELTS, TOEFL, and academic English.",
        rating: 4.9,
        price_per_hour: 35,
        lessons_done: 3421,
        levels: ["Advanced"],
        reviews: [
          {
            reviewer_name: "Anna",
            reviewer_rating: 5,
            comment: "Best teacher for exam preparation!",
          },
        ],
      },
      {
        id: "5",
        name: "Sophia",
        surname: "Martinez",
        avatar_url:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
        languages: ["English", "Italian"],
        lesson_info: "Creative and engaging lessons for all ages",
        conditions: "Flexible hours, one-on-one and group sessions",
        experience:
          "Certified teacher with 7 years of experience. Specialized in teaching children and teenagers.",
        rating: 4.6,
        price_per_hour: 20,
        lessons_done: 1567,
        levels: ["Beginner", "Intermediate"],
        reviews: [
          {
            reviewer_name: "Marco",
            reviewer_rating: 5,
            comment: "Great with kids! My daughter loves her lessons.",
          },
        ],
      },
      {
        id: "6",
        name: "James",
        surname: "Taylor",
        avatar_url:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
        languages: ["English", "Japanese"],
        lesson_info: "Business English and professional communication",
        conditions: "Corporate training available, flexible scheduling",
        experience:
          "Former business executive with 12 years of teaching experience. Expert in business communication and presentations.",
        rating: 4.8,
        price_per_hour: 40,
        lessons_done: 2890,
        levels: ["Intermediate", "Advanced"],
        reviews: [
          {
            reviewer_name: "Yuki",
            reviewer_rating: 5,
            comment: "Excellent for business English! Very professional.",
          },
        ],
      },
      {
        id: "7",
        name: "Olivia",
        surname: "Garcia",
        avatar_url:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
        languages: ["English", "Portuguese"],
        lesson_info: "Conversational English with cultural exchange",
        conditions: "Evening and weekend availability",
        experience:
          "Bilingual teacher with 5 years of experience. Focus on natural conversation and cultural understanding.",
        rating: 4.5,
        price_per_hour: 18,
        lessons_done: 743,
        levels: ["Beginner", "Intermediate"],
        reviews: [
          {
            reviewer_name: "Carlos",
            reviewer_rating: 4,
            comment: "Very friendly and patient teacher!",
          },
        ],
      },
      {
        id: "8",
        name: "Robert",
        surname: "Anderson",
        avatar_url:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
        languages: ["English", "Russian"],
        lesson_info: "Intensive English courses and exam preparation",
        conditions: "Structured programs, progress tracking",
        experience:
          "Certified CELTA instructor with 9 years of experience. Specialized in intensive courses and exam prep.",
        rating: 4.7,
        price_per_hour: 28,
        lessons_done: 1987,
        levels: ["Intermediate", "Advanced"],
        reviews: [
          {
            reviewer_name: "Ivan",
            reviewer_rating: 5,
            comment: "Great for exam preparation! Very structured approach.",
          },
        ],
      },
    ];

    // Check if Firebase is properly configured
    try {
      const apiKey = import.meta.env.VITE_API_KEY;
      if (!apiKey || apiKey === "your-api-key-here") {
        console.log("Firebase not configured, using mock data...");
        console.log("Returning mock data:", mockTeachers.length, "teachers");
        return mockTeachers;
      }

      // Try to fetch from Firebase
      const teachersRef = ref(database, "teachers");
      const snapshot = await get(teachersRef);

      if (snapshot.exists()) {
        const teachersData = snapshot.val();
        const teachersArray = Object.keys(teachersData).map((key) => ({
          id: key,
          ...teachersData[key],
        }));
        console.log(
          "Fetched teachers from Firebase:",
          teachersArray.length,
          "teachers"
        );
        return teachersArray;
      } else {
        console.log("No teachers found in Firebase, using mock data...");
        console.log("Returning mock data:", mockTeachers.length, "teachers");
        return mockTeachers;
      }
    } catch (error) {
      console.error("Error in fetchTeachersAsync:", error);
      console.log("Falling back to mock data due to error...");
      console.log("Returning mock data:", mockTeachers.length, "teachers");
      return mockTeachers;
    }
  }
);
