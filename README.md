
<h1 align="center">💼 LinkedIn Clone (MERN + Tailwind)</h1>

<p align="center">
  A professional <b>LinkedIn Clone</b> built using the <b>MERN Stack</b> with a clean and responsive <b>Tailwind CSS</b> frontend.<br/>
  This project allows users to <b>sign up, log in, create posts, view the feed, and manage dynamic profiles</b> — just like the real LinkedIn.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/MERN-Fullstack-blue?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/TailwindCSS-Responsive-blueviolet?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge"/>
</p>

---

## 🚀 Features

### 🔐 **User Authentication**
- Secure Signup & Login with JWT  

### 📰 **Dynamic Feed**
- All users’ posts appear in the global feed  
- Each post shows author info, text, and time

### 💬 **Post Interactions**
- Like, Comment, and Repost (UI functional)

### 👤 **User Profile Page**
- Dynamic user info loaded from `localStorage`  
- Cover photo, profile photo, bio, location  
- Clean and modern LinkedIn-style layout  
- “Open to”, “Add section”, and “Enhance profile” buttons

### 📱 **Responsive Design**
- Fully responsive for desktop and mobile  
- Built with **Tailwind CSS**

### 🧭 **Navbar + Sidebar**
- Dynamic navbar with profile image after login  
- Fixed left sidebar with profile info  
- Right sidebar with analytics and profile viewers

### 🚪 **Sign Out Option**
- One-click sign out (clears user session)

---

## 🛠️ Tech Stack

| Layer | Technologies Used |
|--------|------------------|
| **Frontend** | React.js, Tailwind CSS, React Router DOM |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (Mongoose) |
| **Auth** | JWT (JSON Web Token) |
| **API Handling** | Axios |
| **Icons** | React Icons (Feather, FontAwesome) |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Himanshuagrawal2003/LinkedIn-clone.git
cd linkedin-clone
```

### 2️⃣ Install Dependencies

#### Backend
```bash
cd backend
npm install
```

#### Frontend
```bash
cd ../frontend
npm install
```

### 3️⃣ Environment Variables
Create a `.env` file inside the **backend** folder:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

---

## ▶️ Run the Project

### Run Backend
```bash
cd backend
npm run dev
```

### Run Frontend
```bash
cd frontend
npm run dev
```

Visit 👉 **http://localhost:5173**

---

## 🧠 How It Works

1. **Signup / Login:**  
   Users register or log in — JWT tokens are stored in `localStorage`.

2. **Feed Page:**  
   All posts from all users are displayed with author info.

3. **Create Post:**  
   Authenticated users can create new posts (instant reload in feed).

4. **Profile Page:**  
   Displays user details dynamically from stored data.

5. **Sign Out:**  
   Clears token and user data → redirects to login.

---

## 🖼️ Screenshots
| Login Page | SignUp Page | Feed Page |
|-------------|------------|--------------|
| ![Login](https://drive.google.com/uc?export=view&id=1tSZTXxN6o30cL23OwvCyubSOe-Q3xwye) | ![SignUp](https://drive.google.com/uc?export=view&id=1C800aegTyxS4TwLgyRZ_BKVTzzjTc-qg) | ![Feed Page](https://drive.google.com/uc?export=view&id=1xaId16_cQPLLNBIMuQeKSF2KUDF-oLGp) |


---

## 📦 Deployment

You can deploy this project easily:

- **Frontend:** Vercel
- **Backend:** Render 
- **Database:** MongoDB Atlas  

---

## 👨‍💻 Author

**Developed by:** Himanshu Agrawal  
📧 Email: [himanshuagrawal7766@gmail.com](mailto:himanshuagrawal7766@gmail.com)  
💼 GitHub: [@Himanshuagrawal2003](https://github.com/Himanshuagrawal2003)  

---

## 📜 License

This project is licensed under the **MIT License** — free to use and modify.

---

⭐ If you like this project, consider giving it a **star** on GitHub!
