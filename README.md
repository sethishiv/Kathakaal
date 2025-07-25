# 📖 Kathakaal

**Kathakaal** is an AI-powered FinTech platform that:

- Provides **borrowers** easy access to loans through automated AI/ML risk analysis.
- Enables **lenders** to lend securely and earn returns with AI risk-managed decisions.

---

## 🏗️ **Project Overview**

This website includes:

- Navigation bar with links to **About, Lender, Borrower, Loans, Signup/Login**
- **Hero section** with lucrative offer and call-to-action
- Subsections to **attract lenders and borrowers**
- **AI-powered safety and risk analysis explanation**
- **Service data and offers**
- Section to **explore loan types**
- **Testimonials**
- **FAQs**
- **Easy steps** to use the platform
- **Footer** with contact and policies

---

## 🗂️ **Project File Structure**
    src/
┣ components/
┃ ┣ Navbar.jsx
┃ ┣ HeroSection.jsx
┃ ┣ LenderBorrowerSection.jsx
┃ ┣ AISafetySection.jsx
┃ ┣ OffersDataSection.jsx
┃ ┣ LoanTypesSection.jsx
┃ ┣ TestimonialsSection.jsx
┃ ┣ FAQsSection.jsx
┃ ┣ EasyStepsSection.jsx
┃ ┗ Footer.jsx
┣ App.jsx
┣ main.jsx
┣ index.css


- **components/** – Contains all React components for homepage subsections.
- **App.jsx** – Integrates all components into the main app layout.
- **main.jsx** – Entry point for React DOM rendering (used in Vite setup).
- **index.css** – Global styles and resets.

---

## 👨‍💻 **Developer Setup Guide**

### ✅ **1. Clone the repository**

```bash
git clone https://github.com/rohityadurudra/Kathakaal.git
cd Kathakaal

npm install

npm run dev

The website will be available at: http://localhost:5173

## 🔄 **Git Workflow for Developers**

### **Pulling and Pushing Changes**

Follow these steps each time you work on the project:

1. **Check your current branch**

   ```bash
   git branch
Pull the latest changes from remote

bash
Copy
Edit
git pull origin main
📝 If you see an unrelated histories error, use:

bash
Copy
Edit
git pull origin main --allow-unrelated-histories
Make your code changes

Modify components, styles, or content as per your assigned tasks.

Stage your changes

bash
Copy
Edit
git add .
Commit your changes with a clear message

bash
Copy
Edit
git commit -m "Your descriptive commit message"
Push your changes to GitHub

bash
Copy
Edit
git push origin main
⚠️ Important Notes
Always pull before starting work to avoid merge conflicts.

Write clear, descriptive commit messages explaining what you changed.

Maintain component-specific CSS Modules for clean, organised code.

If merging causes conflicts, resolve them before pushing to avoid breaking the main branch.



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
