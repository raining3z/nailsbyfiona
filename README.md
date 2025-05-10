# Family Todo App (Next.js + MongoDB)

This project is a simple family todo tracker built with:

- Next.js 15 (App Router)
- MongoDB (with Mongoose)
- Server Actions and API Routes

---

## 📂 Project Structure

| Folder | Purpose |
|:---|:---|
| `/models/` | Mongoose schemas and models for MongoDB collections. |
| `/lib/` | Reusable utilities (MongoDB connection helpers, etc). |
| `/dtos/` | TypeScript interfaces for shared data types across server and client. |
| `/app/api/` | API Routes that handle server-side fetching and writing to MongoDB. |
| `/app/todos/` | Pages and Server Actions related to the Todo feature. |
| `.env.local` | Environment variables (MongoDB URI, Base URL, etc). |

---

## 🔗 How Everything Connects

1. **User fills out a Todo form** (title, description, date, etc.) on the `/todos` page.

2. **Form submits** to a **Server Action** (`addTodo` function).
   - `addTodo` makes a `fetch` request to the `/api/todos` API route.

3. **API Route `/api/todos`**:
   - POST request: Connects to MongoDB (`connectMongo()` from `/lib/database.ts`).
   - Creates a new Todo document using the `Todo` model from `/models/Todo.ts`.

4. **MongoDB (via Mongoose)** stores the Todo in your database.

5. After a Todo is added:
   - `revalidatePath('/todos')` is called.
   - This triggers **Next.js to re-fetch the Todos** from `/api/todos`.

6. **GET request to `/api/todos`** happens:
   - Connects to MongoDB.
   - Reads all Todo documents.
   - Returns them as JSON.

7. **Todos page re-renders** showing the updated list immediately.

✅ Full Create, Read, Revalidate cycle — clean, fast, and server-driven.

---

## 🛠 Running the App

```bash
npm install
npm run dev