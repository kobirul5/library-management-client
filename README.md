<h1>Minimal Library Management System</h1>
</code></pre>



<h2>UI/UX</h2>
<ul>
<li>Minimalist and clean pages. Plain navigation between key routes.</li>
<li>Responsive layout (mobile → desktop).</li>
<li>Clear labels and simple forms.</li>
</ul>


<h2>Suggested Pages &amp; Components</h2>
<ul>
<li><strong>Navbar</strong>: links to <code>/books</code>, <code>/create-book</code>, <code>/borrow-summary</code></li>
<li><strong>Books Grid</strong>:card with actions</li>
<li><strong>BookForm</strong>: create/edit form</li>
<li><strong>BorrowForm</strong>: quantity + due date</li>
<li><strong>BorrowSummary Grid</strong></li>
<li><strong>Footer</strong></li>
</ul>


<h2>RTK Query Slices (Example)</h2>
<pre><code>// booksApi
GET /api/books
GET /api/books/:id
POST /api/books
PUT /api/books/:id
DELETE api/books/:id


// borrowApi
POST /api/borrow
GET /api/borrow/summary
</code></pre>


<h2>Edge Cases</h2>
<ul>
<li>Prevent quantity &lt; 1 or non-integer in borrow form.</li>
<li>Block borrow when copies = 0 (disable button).</li>
<li>Keep UI in sync on mutation success (optimistic update or refetch).</li>
<li>Handle network errors with user-friendly messages.</li>
</ul>

