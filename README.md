# Hack-or-Snooze
Hack-or-Snooze is a simple, user-friendly web app that connects to the [hack-or-snooze](https://hackorsnoozev3.docs.apiary.io/) API. It allows users to sign up, post links to websites, view posts from other users, and favorite the posts they like. The frontend is built using vanilla JavaScript, Axios, and jQuery.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- Structure

## Features
- User authentication (Sign Up, Log In, and Log Out)
- Create and manage posts
- View posts from other users
- Favorite and unfavorite posts
- Responsive design

## Installation
You can use the live demo at: [https://alec-dieken.github.io/hack-or-snooze/](https://alec-dieken.github.io/hack-or-snooze/)
<br/><br/>
Or:
<br/>
1. Clone the repository:
```
git clone https://github.com/your-username/hack-or-snooze.git
```
2. Navigate to the project folder:
```
cd hack-or-snooze
```
3. Open the `index.html` file in your preferred browser.

## Usage
1. Sign up for a new account or log in using an existing account.
2. Add a new post by clicking the "Post Story" link and entering the required information (author, title, and URL).
3. Browse through posts submitted by other users on the home page.
4. Click on a post's title to visit the linked website.
5. To delete your own posts, click on the "My Stories" link, where you'll see a list of your submitted posts. Click on the 'trashcan' icon next to the post you would like to delete.
6. To favorite a post, click the 'star' icon next to the post title. To view your favorite posts, go to the "My Favorites" tab.
7. To unfavorite a post, click the 'star' icon again.

## Structure
```
hack-or-snooze/
│
├── css/
│   ├── site.css
│   ├── nav.css
│   ├── stories.css
│   ├── user.css
│   └── fonts/
│       ├── RobotoMono-Regular.ttf
│       ├── RobotoMono-SemiBold.ttf
│       └── VT323-Regular.ttf
│
├── js/
│   ├── main.js
│   ├── models.js
│   ├── favorites.js
│   ├── mystories.js
│   ├── nav.js
│   ├── stories.js
│   ├── ui.js
│   └── user.js
│
├── index.html
└── README.md
```
