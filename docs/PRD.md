# Product Requirement Document (PRD)

## 1. Product Vision
To create a social media platform that boosts viral content automatically using engagement metrics.

## 2. Core Features

### User Authentication
Users should be able to:
- Register
- Login
- Logout
- Reset password

### Content Upload
Users can:
- Upload photos
- Upload videos
- Add captions and hashtags

### Engagement System
Users can:
- Like posts
- Comment on posts
- Share posts
- Follow creators

### Feed Algorithm
The platform will boost posts based on:
- Likes
- Comments
- Shares
- Watch time
- Completion rate

## 3. Feed Ranking Formula

Score Calculation Example:

Score = 
(Like × 1) +
(Comment × 2) +
(Share × 3) +
(Watch Time × 2)

Higher score posts will appear in:
- Explore page
- Trending section
- Recommended feed

## 4. User Flow

User Journey:
1. User signs up
2. User uploads content
3. Other users interact
4. Algorithm calculates engagement score
5. High score posts become viral

## 5. Non Functional Requirements
- Scalable backend
- Fast video streaming
- Secure authentication
- Cloud storage for media

## 6. Technology Stack

Frontend
- React / Next.js

Backend
- Node.js / Django

Database
- PostgreSQL

Storage
- AWS S3

Cache
- Redis
