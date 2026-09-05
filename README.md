# 🎫 Permit Tracker - Micro SaaS Demo

A modern web application to help small businesses track and manage their permits and licenses, ensuring no deadline is missed.

## 🎯 Problem Solved

**Challenge:** Small business owners (contractors, healthcare providers, food businesses) struggle to track permit and license expiry dates. Missing deadlines results in:
- Fines and penalties
- Loss of business licenses
- Operational disruptions
- Manual tracking across spreadsheets

**Solution:** Permit Tracker automates permit monitoring and sends automatic reminders before expiry.

---

## ✨ Features

### Core Features
- ✅ **Add & Manage Permits** - Store all permits with issue and expiry dates
- ✅ **Automatic Status Tracking** - Auto-calculates days until expiry
- ✅ **Expiry Alerts** - Highlights permits expiring in 30 days
- ✅ **Email Notifications** - Sends reminders to users (configurable)
- ✅ **Dashboard Overview** - See all permits at a glance
- ✅ **Permit History** - Track renewal dates and document uploads

### Advanced Features
- 📧 Email reminders (customizable reminder days)
- 📊 Analytics dashboard (expired vs active permits)
- 🔔 SMS notifications (Pro plan)
- 🔗 Integration with calendars
- 📄 Document storage and backup
- 👥 Team collaboration features (Pro plan)

---

## 🏗️ Tech Stack

### Backend
- **Node.js + Express** - REST API server
- **MongoDB** - Database for storing permits and users
- **Nodemailer** - Email notification service
- **Mongoose** - ODM for MongoDB

### Frontend
- **HTML5 + CSS3 + JavaScript** - Responsive UI
- **Vanilla JavaScript** - No framework dependencies (lightweight)

---

## 📋 Project Structure

```
permit-tracker-saas/
├── models/
│   ├── Permit.js        # Permit schema
│   └── User.js          # User schema
├── routes/
│   ├── permits.js       # Permit CRUD operations
│   ├── users.js         # User management
│   └── notifications.js # Email notifications
├── public/
│   ├── index.html       # Main UI
│   ├── style.css        # Styling
│   └── script.js        # Frontend logic
├── server.js            # Express server
├── package.json         # Dependencies
├── .env.example         # Environment variables template
└── README.md            # This file
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- MongoDB (local or Atlas)
- npm/yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/darshitthakkar/permit-tracker-saas.git
   cd permit-tracker-saas
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your MongoDB URI and email credentials
   ```

4. **Start the server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:5000
   ```

---

## 📊 API Endpoints

### Permits
- `GET /api/permits/:userId` - Get all permits for a user
- `POST /api/permits` - Create a new permit
- `PUT /api/permits/:id` - Update a permit
- `DELETE /api/permits/:id` - Delete a permit
- `GET /api/permits/:userId/expiring-soon` - Get expiring permits

### Users
- `POST /api/users/signup` - User registration
- `GET /api/users/:id` - Get user details
- `PUT /api/users/:id` - Update user profile

### Notifications
- `POST /api/notifications/send-reminders` - Send expiry reminder emails
- `GET /api/notifications/status/:permitId` - Check notification status

---

## 💡 Use Cases

### Construction Companies
- Track building permits across multiple projects
- Get notified before permit expiry to avoid work stoppages

### Healthcare Providers
- Monitor professional licenses and certifications
- Ensure compliance with state regulations

### Food & Beverage Businesses
- Track health certificates and food licenses
- Maintain compliance with local health departments

### Real Estate Agencies
- Manage broker licenses and certifications
- Track lease renewal dates

---

## 💰 Pricing Model

### Free Plan
- Up to 5 permits
- Email reminders only
- Basic dashboard

### Basic Plan ($19/month)
- Up to 50 permits
- Email reminders (customizable)
- Team collaboration (3 members)
- Document storage (1GB)

### Pro Plan ($49/month)
- Unlimited permits
- Email + SMS notifications
- Team collaboration (unlimited)
- Document storage (10GB)
- API access
- Custom integrations

---

## 🎯 Revenue Model

1. **Subscription Revenue** - Monthly recurring revenue (MRR) from users
2. **Enterprise Licenses** - Custom solutions for large organizations
3. **API Access** - Premium API access for integrations

**Target Revenue:** $5K-$50K MRR (100-1000 paying customers)

---

## 📈 Market Opportunity

- **Total Addressable Market (TAM):** ~2.5M small businesses in US
- **Serviceable Market (SAM):** ~500K businesses needing permit tracking
- **Target Customer:** Contractors, healthcare providers, food businesses ($50K-$5M revenue)

---

## 🔄 Development Roadmap

### Phase 1 (MVP) ✅
- Basic CRUD for permits
- Email notifications
- Simple dashboard

### Phase 2 (Q1 2025)
- User authentication & sign-up flow
- Advanced filtering and search
- Analytics dashboard
- SMS notifications

### Phase 3 (Q2 2025)
- Mobile app (iOS/Android)
- Calendar integrations
- Document management
- Payment processing (Stripe)

### Phase 4 (Q3 2025)
- Team collaboration features
- API for partners
- Compliance reporting
- AI-powered compliance suggestions

---

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 💬 Support

For questions or support, please open an issue on GitHub or contact: support@permittracker.dev

---

## 👨‍💼 About

Permit Tracker is a micro SaaS example built to demonstrate how to solve real business problems with focused, niche software.

**Demo Version:** This is a fully functional demo with sample data. For production use, connect to a real MongoDB database and configure email settings.
