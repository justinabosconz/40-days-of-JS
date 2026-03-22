✅ 10‑Minute Presentation Script (Word‑for‑Word)
0:00–0:30 — Slide 1: Title
“Hi everyone, my name is Justina Bosco, and this is my capstone project called DONaid.
DONaid is a web-based donation marketplace where people can list unwanted items for donation, browse items that are available, and communicate through in‑app messaging to arrange pickup.
In this presentation, I’ll quickly cover the problem, the solution, the technical design, database schema, key features, security, testing, challenges, and a short live demo checklist.” 1

0:30–1:30 — Slide 2: Problem & Opportunity
“The problem I focused on is that usable household items are often discarded because donating can be inconvenient or hard to coordinate.
A lot of donation activity happens through informal channels like social media or messaging apps, which makes the process fragmented and unstructured.
As a result, it can be hard for people to find items, and communication about a specific item becomes messy.
The opportunity is to provide a single platform that makes donation coordination simple: list an item, add a photo, allow others to browse and filter, and then message the donor directly within the app.” 1

1:30–2:20 — Slide 3: Objectives
“My objectives for DONaid were:
First, allow users to register and log in securely.
Second, provide a structured way to upload donation listings with images.
Third, enable browsing, searching, and filtering so items are easy to discover.
Fourth, enable real-time, item-specific messaging so people can coordinate quickly.
And finally, enforce authorization rules so only the owner of an item can update or delete that listing.” 1

2:20–3:00 — Slide 4: Stakeholders & Value
“The main stakeholders are:
Donors, who want a fast way to list items and arrange pickup.
Recipients, who want to browse and request items easily.
And potentially community organisations as a future use case, who may benefit from streamlined donation workflows.
The value of this solution is that it supports reuse and waste reduction, improves access to free items, and provides a clear communication channel tied to each listing.” 1

3:00–4:00 — Slide 5: System Architecture
“Now I’ll explain the system architecture.
DONaid uses a client–server architecture. The frontend is built in React with Material UI, and it uses context for state such as authentication and items.
The backend is Node.js with Express, structured using an MVC approach with routes and controllers.
The application stores data in MySQL, using Sequelize ORM for models and relationships.
And for real-time messaging, I used Socket.IO, so chat messages can appear instantly without refreshing the page.” 1

4:00–4:30 — Slide 6: Wireframe / Design Progression
“This slide shows the early planning stage. I started with low‑fidelity wireframes to confirm layout and user flow.
After validating the flow, I implemented the final UI using Material UI, including an AppBar, a filter sidebar, item cards, and dialogs for editing items.” 1

4:30–5:15 — Slide 7: Authentication – Login
“Authentication is implemented with registration and login.
When the user logs in, the backend returns a session token.
The frontend stores this token and attaches it to protected API requests using an Authorization header in the format ‘Bearer token’.
This allows the backend to confirm that requests like creating an item or sending a message are coming from an authenticated user.” 1

5:15–5:35 — Slide 8: Authentication – Register
“Registration creates a user record with an email, display name, and a securely stored password hash.
After registration, the user can log in and begin creating or browsing donation listings.” 1

5:35–6:25 — Slide 9: Database Schema
“This slide shows the database schema.
There are four main entities: Users, Sessions, Items, and ChatMessages.
Users represent account identity.
Sessions store login tokens and expiry information.
Items store the donation listings, including title, description, category, condition, and an image path, and each item is linked to an owner.
ChatMessages store messages linked to both a specific item and a sender user, so conversations are item-based and traceable.” 1

6:25–7:05 — Slide 10: Core Features
“Here are the core features of DONaid.
Users can register and log in.
They can create a donation listing with details and a photo.
They can browse items on the main Items page and filter using a sidebar that includes category filtering and keyword searching.
When users open an item, they see a detailed view with the photo, description, and owner details.
They can chat about that item in real time.
And if the user is the owner, they can edit the item or delete it — and these actions are restricted by authorization rules.” 1

7:05–7:45 — Slide 11: Testing & Coverage
“Testing was done using Jest and Supertest to validate backend functionality and business rules.
I used a separate test database so test runs are isolated from development data.
The tests cover authentication such as register and login, item CRUD operations, and authorization rules like owner versus non-owner actions.
A coverage report is generated to provide evidence of test execution and help identify areas for improvement.” 1

7:45–8:10 — Slide 12: Git Branching
“This slide shows version control.
I used Git branches to organise development and reduce risk when making changes.
Working in branches made it easier to isolate features, troubleshoot issues, and keep the main branch stable.” 1

8:10–9:05 — Slide 13: Challenges & Learnings
“I want to briefly highlight a few challenges and what I learned.
One challenge was token and session handling — ensuring the Authorization header is attached consistently so protected requests work correctly.
Another challenge was multi-user behaviour, especially with real-time messaging, where the socket connection must always align with the current user session.
A UI challenge was controlling scroll behaviour with a sticky AppBar so the item detail page always opens with key controls visible.
And a testing challenge was making test runs stable, with isolation using a test database and clean resets between tests.
Overall, these challenges improved my debugging skills and helped me build a more robust application.” 1

9:05–9:40 — Slide 14: Live Demo Checklist
“Now, here is the live demo flow I will follow.
First, I will log in — or register a new user if needed.
Second, I will browse items and demonstrate the category filter and keyword search.
Third, I will add a new item with an image.
Fourth, I will open the item detail page and send a chat message.
Fifth, I will show owner-only editing by changing the item status, and optionally delete the item.
And finally, I will briefly show the automated testing coverage report as evidence of quality assurance.”

9:40–10:00 — Slide 15: Conclusion
“To conclude, DONaid successfully delivers a functional donation marketplace MVP.
It supports secure authentication, item listings with images, browsing with filtering and searching, and real-time messaging tied to each item.
It also enforces ownership rules for editing and deleting items, and includes automated testing to support reliability.
In the future, the app could be extended with admin moderation tools, enhanced privacy for chat, and production deployment.
Thank you — I’m happy to take any questions.” 1
