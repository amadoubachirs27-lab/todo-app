# Task Management Web App

## Author
Amadou Bachir

## Overview
Task Management Web App is a fully functional React application for managing to-do lists. Users can create, read, update, and delete tasks with ease. The application features a clean, modern interface with side-by-side layout for task display and task creation. Additionally, users can filter tasks by status (All, Active, Completed) and submit feedback through a contact form.

## Features
- **Add Tasks**: Create new tasks with a simple form
- **Mark Complete**: Check off tasks as completed with visual strikethrough effect
- **Delete Tasks**: Remove tasks from the list
- **Filter Tasks**: View all tasks, only active tasks, or only completed tasks
- **Contact Form**: Send messages through a fully functional contact form with form validation
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Clean, professional styling with hover effects and transitions

## Technologies Used
- **React**: JavaScript library for building user interfaces
- **React Router DOM**: Navigation between different pages (/todos and /contact)
- **CSS3**: Custom styling with flexbox for responsive layouts
- **JavaScript ES6+**: Modern JavaScript features (arrow functions, destructuring, hooks)

## How to Use

### Installation
1. Clone the repository:
```bash
git clone https://github.com/amadoubachirs27-lab/todo-app.git
cd todo-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

### Using the App

#### Todos Page (/todos)
1. **Add a Task**: Type your task in the input field on the right side and click "Add Task"
2. **Mark as Complete**: Click the checkbox next to a task to mark it as completed (the text will have a strikethrough)
3. **Delete a Task**: Click the red "Delete" button to remove a task
4. **Filter Tasks**:
   - Click "All" to see all tasks
   - Click "Active" to see only incomplete tasks
   - Click "Completed" to see only completed tasks

#### Contact Page (/contact)
1. Navigate to the Contact page using the navbar
2. Fill in the form fields:
   - First Name (required)
   - Last Name (required)
   - Email (required)
   - Comments (required)
3. Click "Send Message" to submit the form
4. A confirmation message will appear with your first name

## Project Structure
```
src/
├── components/
│   ├── Navigation.js          # Navbar component
│   ├── TodoContainer.js       # Main container for todos page
│   ├── TodoList.js            # List of todo items
│   ├── TodoItem.js            # Individual todo item component
│   ├── AddTodoForm.js         # Form to add new todos
│   ├── FilterButtons.js       # Filter buttons for todos
│   ├── ContactContainer.js    # Container for contact page
│   └── ContactForm.js         # Contact form component
├── App.js                     # Main app component with routing and state management
├── App.css                    # All application styles
└── index.js                   # Entry point
```

## State Management
The application uses React hooks (useState) for state management:
- `todos`: Array of todo objects containing id, text, completed status, and creation date
- `filter`: Current filter setting (all, completed, incomplete)

The contact form manages its own local state for form fields (firstName, lastName, email, comments).

## CSS Features
The application includes 10+ custom CSS rules covering:
- Navbar styling with hover effects
- Flexbox layout for side-by-side content
- Card-based design for sections
- Button styling with transitions
- Input field focus states
- Responsive design for mobile devices
- Strikethrough effect for completed tasks
- Box shadows and border styling
- Color-coded elements (blue for active, green for success, red for delete)

## Responsive Design
The app is fully responsive and works on:
- Desktop (1200px and above)
- Tablet (768px to 1199px)
- Mobile (below 768px)

On mobile devices, the layout switches from side-by-side to stacked for better usability.

## Ideas for Future Improvement

### 1. **Local Storage Persistence**
   - Save todos to browser's local storage so tasks persist after page refresh
   - Implementation: Use `localStorage.setItem()` and `localStorage.getItem()` in useEffect hooks
   - Benefit: Users won't lose their tasks when closing the browser

### 2. **Backend Integration with API**
   - Connect to a backend server (Node.js/Express or similar)
   - Store todos in a database instead of just in component state
   - Implement user authentication and login system
   - Allow multiple users to manage their own separate task lists
   - Benefit: Persistent data across devices and multi-user support

### 3. **Task Details and Due Dates**
   - Add due dates to tasks with a date picker
   - Include priority levels (High, Medium, Low)
   - Add detailed descriptions for each task
   - Show notifications for overdue tasks
   - Benefit: Better task organization and time management

### 4. **Search and Sort Functionality**
   - Add a search bar to find tasks by keyword
   - Sort tasks by date created, completion date, or alphabetically
   - Save user's preferred sort order
   - Benefit: Easier navigation for users with many tasks

### 5. **Dark Mode**
   - Toggle between light and dark theme
   - Store user's theme preference in local storage
   - Update all CSS to support both themes
   - Benefit: Better user experience in low-light environments

### 6. **Task Categories/Tags**
   - Organize tasks into categories (Work, Personal, Shopping, etc.)
   - Add color-coded tags to tasks
   - Filter by category or multiple tags
   - Benefit: Better organization for users managing different types of tasks

### 7. **Drag and Drop Functionality**
   - Reorder tasks by dragging and dropping
   - Use libraries like react-beautiful-dnd or react-dnd
   - Persist order in local storage or database
   - Benefit: More intuitive user interface

### 8. **Email Notifications for Contact Form**
   - Send an email confirmation to users who submit the contact form
   - Send admin notification email to app owner
   - Use services like SendGrid or Nodemailer
   - Benefit: Real feedback system with email confirmation

### 9. **Task Statistics Dashboard**
   - Show charts/graphs of task completion rates
   - Display total tasks, completed tasks, pending tasks
   - Show completion trends over time
   - Benefit: Motivating visualization of productivity

### 10. **Recurring Tasks**
   - Allow users to set tasks as recurring (daily, weekly, monthly)
   - Automatically create new instances of recurring tasks
   - Skip or modify specific occurrences
   - Benefit: Less repetitive task management

## Testing
To run tests:
```bash
npm test
```

## Deployment
The app is deployed on GitHub Pages. To deploy your own version:

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
"homepage": "https://yourusername.github.io/todo-app",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Deploy:
```bash
npm run deploy
```

## Contributing
Feel free to fork this project and submit pull requests for any improvements.

## License
This project is open source and available under the MIT License.

## Contact
For questions or feedback about this project, please use the Contact form in the app or reach out via GitHub.

---

**Happy Task Managing!** 🚀