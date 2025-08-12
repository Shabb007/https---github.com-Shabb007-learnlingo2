# LearnLingo - Language Learning Platform

A React-based language learning platform built with Vite, Redux Toolkit, and Firebase.

## Features

- Teacher browsing with pagination
- User authentication
- Favorite teachers management
- Responsive design
- Real-time data with Firebase

## Firebase Setup

To use Firebase for data storage, you need to set up your Firebase project and configure environment variables:

### 1. Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select an existing one
3. Enable Realtime Database
4. Set up Authentication (if needed)

### 2. Configure Environment Variables

Create a `.env` file in the root directory with your Firebase credentials:

```env
VITE_API_KEY=your-api-key-here
VITE_AUTH_DOMAIN=your-project-id.firebaseapp.com
VITE_DATABASE_URL=https://your-project-id-default-rtdb.firebaseio.com
VITE_PROJECT_ID=your-project-id
VITE_STORAGE_BUCKET=your-project-id.appspot.com
VITE_MESSAGING_SENDER_ID=your-messaging-sender-id
VITE_APP_ID=your-app-id
VITE_MEASUREMENT_ID=your-measurement-id
```

You can get these values from:
- Firebase Console > Project Settings > General > Your apps > Web app

### 3. Database Structure

Set up your Realtime Database with the following structure:

```json
{
  "teachers": {
    "teacher1": {
      "name": "Sarah",
      "surname": "Johnson",
      "avatar_url": "https://example.com/avatar.jpg",
      "languages": ["English", "Spanish"],
      "lesson_info": "Interactive online lessons",
      "conditions": "Flexible scheduling",
      "experience": "5+ years teaching experience",
      "rating": 4.8,
      "price_per_hour": 25,
      "lessons_done": 1274,
      "levels": ["Beginner", "Intermediate", "Advanced"],
      "reviews": [
        {
          "reviewer_name": "Maria",
          "reviewer_rating": 5,
          "comment": "Excellent teacher!"
        }
      ]
    }
  }
}
```

## Development

The app currently uses mock data as a fallback when Firebase is not configured. Once you set up Firebase properly, the app will automatically fetch data from your Firebase Realtime Database.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
