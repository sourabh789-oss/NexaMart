# NexaMart - E-commerce Platform

A modern e-commerce platform built with React, offering a seamless shopping experience with secure payments and user authentication.

## 🌟 Features

- 🔐 User Authentication (Login/Register)
- 🌙 Dark/Light Theme Toggle
- 💳 Secure Payment Integration (Stripe)
- 🛍️ Product Catalog
- 📱 Responsive Design
- 🎨 Modern UI with Tailwind CSS
- 🔄 Animated Components
- 👤 User Profile Management

## 🛠️ Tech Stack

- **Frontend Framework:** React + Vite
- **Styling:**
  - Tailwind CSS
  - Shadcn UI Components
  - Framer Motion for animations
- **State Management:** React Context API
- **Routing:** React Router v7
- **Payment Processing:** Stripe
- **HTTP Client:** Axios
- **Other Libraries:**
  - next-themes
  - locomotive-scroll
  - swiper
  - remixicon

## 📦 Project Structure

src/ ├── assets/ ├── Component/ # Reusable UI components ├── components/ui/ # Shadcn UI components ├── context/ # React Context providers ├── hooks/ # Custom React hooks ├── lib/ # Utility functions ├── Pages/ # Route components └── Scrollbehaviour/ # Scroll animation logic

## 🚀 Getting Started

1. **Clone the repository:**

```bash
git clone <repository-url>
cd Frontend

2. Install dependencies:
npm install

3. Set up environment variables: Create a .env file in the root directory:

VITE_BASE_URL=<your-api-url>
VITE_PRODUCTS_DATA=<products-api-url>
VITE_PUBLISHABLE_KEY=<stripe-publishable-key>


4. Start development server:
VITE_BASE_URL=<your-api-url>
VITE_PRODUCTS_DATA=<products-api-url>
VITE_PUBLISHABLE_KEY=<stripe-publishable-key>

🔒 Protected Routes
The following routes require authentication:

Home (/)
Products (/Product)
Payment (/payment)
🎨 Theme Customization
The app supports both light and dark themes with customizable colors through Tailwind CSS. Theme configuration can be found in:

tailwind.config.js
index.css
📱 Responsive Design
The application is fully responsive with specific styles for:

. Mobile devices (max-width: 426px)
. Desktop and larger screens

🧩 Key Components
Navbar: Navigation and theme toggle
ProfileShow: User profile management
Payment: Stripe payment integration
CardSwipe: Product showcase carousel
FAQ: Animated FAQ section
Footer: Site footer with dynamic content
🔄 State Management
The app uses React Context for state management:

UserContext: Manages user data
ProfileContext: Handles profile and authentication state
```
