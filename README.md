# Portfolio Project

![Portfolio Banner](./screenshots/banner.png)

[![GitHub Repo](https://img.shields.io/badge/GitHub-Portfolio-blue?logo=github)](https://github.com/your-github)
[![React](https://img.shields.io/badge/React-17.0.2-blue?logo=react)](https://reactjs.org/)
[![Django](https://img.shields.io/badge/Django-4.2-green?logo=django)](https://www.djangoproject.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

---

## 🌟 Overview
This is a **personal portfolio website** built with **Django** for the backend and **React** for the frontend. It showcases my projects, skills, and professional experience in a clean, interactive, and responsive interface.  

The backend uses **Django REST Framework** to provide a RESTful API, which the React frontend consumes to dynamically render projects, skills, and other portfolio data.  

---

## ⚡ Features
- **Dynamic Projects Section:** Manage projects through Django admin panel.  
- **Skills & Experience:** Display skills dynamically.  
- **Responsive Design:** Fully mobile-friendly.  
- **Contact Form:** Functional contact form integrated with backend.  
- **Modern UI/UX:** Clean and interactive interface.  
- **API Driven:** Frontend fetches content dynamically from backend API.  

---

## 🛠 Technology Stack
- **Frontend:** React, React Router, Axios, Tailwind CSS  
- **Backend:** Django, Django REST Framework  
- **Database:** SQLite (default) / can be configured for PostgreSQL  
- **Tools:** Python 3.10+, Node.js, npm/yarn, Git  

---

## 🗂 Folder Structure
myportfolio/
├── backend/
│   ├── about/
│   ├── api/
│   ├── certficates/
│   ├── contact/
│   ├── home/
│   ├── portfolio_core/
│   ├── projects/
│   ├── db.sqlite3
│   └── manage.py
│   └── requirements.txt
│
├── frontend/
│   └── (React app files...)
├── venv/
│   └── (Python packages...)
├── .gitignore
└── README.md
---

## 🚀 Installation

### 1️⃣ Clone the Repository
```bash
git clone <your-repo-url>
cd portfolio

### 2️⃣ Setup Virtual Environment (Root)
# Create venv if not already created
python -m venv venv

# Activate venv
# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate

### 3️⃣ Install Backend Dependencies
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

### 4️⃣ Setup Frontend
cd ../frontend
npm install      # or yarn install
npm start        # or yarn start

```

## 📷 Screenshots

## 🌐 Live Demo
Live Demo Link

## 🔮 Future Improvements

Add admin authentication for security.

Enable email notifications from contact form.

Add animations and transitions for better UI/UX.

Deploy on cloud hosting with CI/CD pipeline.

## 👤 Author

Mahesh das

Portfolio: [your-portfolio-link]

Email: mahesh.das2205@gmail.com

GitHub: https://github.com/MaheshDas2004

LinkedIn: https://www.linkedin.com/in/maheshii/

📝 License

This project is licensed under the MIT License.
