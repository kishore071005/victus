# LocalWorks - MSME Skill Map

LocalWorks is a comprehensive platform designed to connect small and medium enterprises (MSMEs) with skilled local workers. The platform features an integrated Django backend and a modern React frontend, with support for real-time chat, worker mapping, and enterprise dashboards.

## 🚀 Features
- **Enterprise Dashboard**: Manage workers, hire requests, and messages.
- **Worker Dashboard**: Complete profile, manage availability, and respond to hire requests.
- **Real-time Chat**: In-app communication between enterprises and workers.
- **Interactive Map**: Visualize worker locations and skills.
- **Unified Architecture**: Django serving the React frontend for seamless deployment.

## 🛠️ Tech Stack
- **Frontend**: React, Vite, Tailwind CSS, Lucide Icons.
- **Backend**: Django, Django REST Framework, SQLite (Local) / PostgreSQL (Supabase).
- **Deployment**: Vercel (Frontend & Backend).

## 💻 Local Setup

### Prerequisites
- Python 3.9+
- Node.js & npm

### Backend Setup
1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run migrations:
   ```bash
   python manage.py migrate
   ```
5. Start the server:
   ```bash
   python manage.py runserver
   ```

### Frontend Setup
1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the frontend:
   ```bash
   npm run build
   ```

## 🌐 Deployment
The project is configured for **Vercel** with **Supabase**.
1. Create a Vercel project and connect your repository.
2. Set up a PostgreSQL database on Supabase.
3. Configure `DATABASE_URL`, `DEBUG=False`, and `SECRET_KEY` in Vercel environment variables.

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
