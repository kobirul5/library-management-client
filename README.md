
  <h1> Minimal Library Management System (Frontend)</h1>
  <p>
    This is the <strong>frontend client</strong> for the Minimal Library Management System.<br>
    Built with <strong>React, TypeScript, Redux Toolkit Query (RTK Query), and Tailwind CSS</strong>.<br>
    It allows users to <em>view, add, edit, delete, and borrow books</em> as well as see a borrow summary.
  </p>

  <h2> Features</h2>
  <ul>
    <li>Public access (no authentication required)</li>
    <li>Book Management:
      <ul>
        <li>View all books in a table</li>
        <li>Add, Edit, Delete books</li>
        <li>Borrow books with quantity &amp; due date</li>
      </ul>
    </li>
    <li>Borrow Summary: Aggregated list of all borrowed books</li>
    <li>Responsive UI with TailwindCSS</li>
  </ul>


  <h2>🛠️ Tech Stack</h2>
  <ul>
    <li>React + TypeScript</li>
    <li>Redux Toolkit Query (RTK Query) for API calls &amp; caching</li>
    <li>React Router DOM for navigation</li>
    <li>Tailwind CSS for UI</li>
    <li>Vite as bundler</li>
  </ul>

  <h2>⚙️ Installation &amp; Setup</h2>
  <ol>
    <li>
      Clone the repository:
      <pre><code>git clone https://github.com/kobirul5/library-management-client
cd library-management-client</code></pre>
    </li>
    <li>
      Install dependencies:
      <pre><code>npm install</code></pre>
    </li>
    <li>
      Set API base URL:
      <p>Create a <code>.env</code> file in the root directory and add:</p>
      <pre><code>VITE_API_BASE_URL=https://library-management-two-gold.vercel.app/api</code></pre>
    </li>
    <li>
      Run the development server:
      <pre><code>npm run dev</code></pre>
    </li>
  </ol>

  <h2>🌐 Available Routes</h2>
  <ul>
    <li><code>/books</code> – View all books</li>
    <li><code>/create-book</code> – Add a new book</li>
    <li><code>/books/:id</code> – View single book details</li>
    <li><code>/edit-book/:id</code> – Edit book</li>
    <li><code>/borrow/:bookId</code> – Borrow a book</li>
    <li><code>/borrow-summary</code> – Borrow summary</li>
  </ul>

  <hr>