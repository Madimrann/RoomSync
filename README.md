# RoomSync 🏠

> [!NOTE]
> **Status: Personal Project**
> This is a personal project created for experimentation and learning.

RoomSync is a mobile application designed to simplify shared living by providing a centralized platform for roommates to manage chores, split bills, and communicate effectively. Built with **React Native** and **Expo**, it aims to foster transparency and harmony in shared households.

## 🚀 Overview

This is a **personal project** exploring modern mobile development patterns, focusing on:
- **Community-First Design**: A UI centered around the "House" concept.
- **Task Management**: Flexible chore assignment and tracking.
- **Financial Clarity**: Transparent bill splitting and payment status tracking.

## ✨ Key Features

- **House Hub**: Easily create or join houses using unique 6-digit invite codes.
- **Smart Chores**: Create chores with priority levels (Low, Medium, High), due dates, and assignees.
- **Bill Splitter**: Log shared expenses (Rent, Utilities) and automatically calculate individual shares.
- **Announcements Feed**: Pin important updates (e.g., "Landlord visiting") and discuss via comments.
- **Design System**: A custom-built UI library including `AppCard`, `AppButton`, and `StatusChip` for a consistent premium look.

## 📱 System Workflow

The RoomSync system establishes a digital "House" for roommates to collaborate:

1.  **House Initialization**: A user creates a House (e.g., "The Chill Pad") and generates an Invite Code.
2.  **Team Assembly**: Roommates join via the code and set up their profiles.
3.  **Responsibility Distribution**:
    - **Chores**: Assigned to specific members with due dates.
    - **Bills**: Added by a payer, with costs split among selected members.
4.  **Tracking & Settlement**:
    - Members mark chores as "Done".
    - Members mark their bill shares as "Paid".
5.  **House Pulse**: The dashboard updates in real-time to show the number of completed chores and outstanding bills.

## 🛠️ Tech Stack

- **Framework**: React Native (Expo)
- **Language**: TypeScript
- **Navigation**: React Navigation (Native Stack + Bottom Tabs)
- **Styling**: Custom Design System (StyleSheet + Theme Tokens)
- **Icons**: Lucide React Native

## 📸 Screenshots

<div style="display: flex; gap: 10px; overflow-x: auto; padding-bottom: 20px;">
  <img src="docs/screenshots/welcome.png" alt="Welcome" width="200" />
  <img src="docs/screenshots/home.png" alt="Home Dashboard" width="200" />
  <img src="docs/screenshots/chores.png" alt="Chores List" width="200" />
  <img src="docs/screenshots/bills.png" alt="Bills Overview" width="200" />
  <img src="docs/screenshots/announcements.png" alt="Announcements" width="200" />
  <img src="docs/screenshots/more.png" alt="More Menu" width="200" />
</div>

## 🏁 Getting Started

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Madimrann/RoomSync.git
    cd RoomSync
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the app**
    ```bash
    npx expo start
    ```

## 📝 License

This project is for educational and portfolio purposes.
