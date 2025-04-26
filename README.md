# Hero Section Creator

A React + TypeScript project that dynamically generates different **hero sections** using multiple templates.  
Built with **React**, **TypeScript**, and **TailwindCSS**.

---

## Deployment :

---

## 🛠 Technologies Used

- React.js
- TypeScript
- TailwindCSS

---

## 📁 Project Structure

- **`App.tsx`**  
  Main app file that controls dynamic section switching and rendering.

- **Folders:**

  - **`types/`**  
    Contains all TypeScript types used across the project.

  - **`components/`**  
    Reusable UI components like:

    - `Headline`
    - `SubHeadline`
    - `EditableInputText`
    - `Button`
    - `Error`
    - `Loader`
    - `NavBar`

  - **`templates/`**  
    Contains the three different **hero section templates**:

    - `template1.tsx`
    - `template2.tsx`
    - `template3.tsx`

  - **`sections/`**  
    Contains predefined section schemas:
    - `section1.ts`
    - `section2.ts`
    - `section3.ts`  
      Each file describes a full hero section (background, colors, headlines, and template type).

---

## ⚙️ App Logic (Dynamic Template Importing)

- The app uses a `currentSectionNum` state to determine which section to load.
- Clicking the "Regenerate with AI" button increments the section number.
- Based on the loaded section's `templateType`, the correct template is **lazy-loaded** dynamically.
- If an error occurs, an `Error` component is displayed instead.

---

## 🚀 How It Works

- Start from `App.tsx`.
- Based on the current section number, dynamically load:
  - The proper **section data** (headlines, colors, background).
  - The corresponding **template component**.
- Render the hero section dynamically.
- Switch between sections with one click.

---

## 📋 Notes

- Fully **type-safe** using TypeScript.
- **Reusable** templates and components for easy scalability.
- **Dynamic import** and **lazy loading** to optimize performance.
