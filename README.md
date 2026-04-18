# Rack Your Mind (RYM) — National Literacy & Numeracy Quiz Platform

A comprehensive web platform for Ghana's premier educational competition, built for the Omnicare Foundation.

## 🌟 Features

### Public Features
- **School Registration** — Multi-student registration with file upload support
- **Photo & Video Gallery** — Showcase competition highlights
- **Sponsorship Information** — Tiered sponsorship packages (Gold, Silver, Bronze)
- **Donation System** — Accept donations to support the program
- **Contact Form** — Direct communication with the organization
- **Guidebook Download** — Access competition rules and guidelines
- **Ways to Help** — Volunteer and support opportunities

### Admin Features
- **Secure Dashboard** — Protected admin area with authentication
- **School Management** — View and manage registered schools
- **Donation Tracking** — Monitor donation submissions
- **Contact Management** — Review contact form submissions
- **Partner Inquiries** — Track sponsorship interest

## 🚀 Demo Credentials

### Admin Access
- **URL**: `/admin-login`
- **Email**: `admin@rackyourmind.org`
- **Password**: `admin123`

## 📂 Key Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with full information |
| `/register` | School registration form |
| `/schools` | List of registered schools |
| `/gallery` | Photo and video gallery |
| `/about` | About the organization |
| `/contact` | Contact form |
| `/donate` | Donation form |
| `/sponsor/:tier` | Sponsorship tier details |
| `/become-partner` | Partnership inquiry form |
| `/sponsorship-pack` | Download sponsorship package |
| `/ways-to-help` | Support opportunities |
| `/download-form` | Guidebook download |
| `/admin-login` | Admin login page |
| `/admin` | Admin dashboard (protected) |

## 🎨 Design System

### Colors
- **Teal Dark**: `#0d5a5a` - Primary brand color
- **Gold**: `#fbbf24` - Accent color for CTAs

### Typography
- Clean, modern font system
- Responsive sizing across all devices

## 🛠️ Technology Stack

- **Framework**: React 18 with TypeScript
- **Routing**: React Router v7
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Notifications**: Sonner
- **Build Tool**: Vite

## 📱 Responsive Design

The platform is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🔒 Security Note

This is a frontend demonstration. In a production environment, this would be connected to:
- Supabase for backend persistence
- File storage for document uploads
- Email service for notifications
- Payment gateway for donations

## 📝 Mock Data

The application uses mock data for demonstration purposes:
- Sample registered schools
- Demonstration donation records
- Example contact submissions
- Simulated admin authentication

## 🌍 Ghana Regions Supported

All 16 regions of Ghana are included in the registration form:
- Greater Accra
- Ashanti
- Western & Western North
- Central
- Eastern
- Northern, Upper East, Upper West
- Volta & Oti
- Bono, Bono East, Ahafo
- Savannah
- North East

## 📞 Contact Information

- **Email**: info@rackyourmind.org
- **Phone**: +233 XX XXX XXXX
- **Location**: Accra, Ghana

---

**Built with ❤️ for the Omnicare Foundation**
