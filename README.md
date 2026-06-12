# My First Notes App CLI Backend 🚀

This is my very first backend project built using Node.js, Express, and MongoDB. It's a fully functional REST API that supports full CRUD (Create, Read, Update, Delete) operations for managing personal notes, fully tested using Postman.

---

## 📁 Project Folder Structure

Backend/
├── node_modules/
├── src/
│   ├── db
│   │   └── db.js            # MongoDB Connection Setup
│   ├── models/
│   │   └── note.model.js    # Mongoose Schema & Model for Notes
│   └── app.js               # Express Routes (GET, POST, PATCH, DELETE
├── .gitignore               # Ignored files (node_modules, secrets)
├── package.json             # Project dependencies & scripts
└── server.js                # Server entry point listening on Port 3000


## 🛠️ Features & Tech Sta


- **Backend:** Node.js & Express.js
- **Database:** MongoDB Atlas via Mongoose ODM
- **Development Tool:** Nodemon (for auto-restarting server)
- **API Testing:** Tested extensively using **Postman**

### API Endpoints Supported:
- `POST /notes` - Create a new note with a title and description
- `GET /notes` - Fetch all notes saved inside MongoDB
- `PATCH /notes/:id` - Update a specific note's description dynamically using its ID
- `DELETE /notes/:id` - Permanently delete a note from the cluster

---
