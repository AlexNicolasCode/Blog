A personal blog built with Next.js, showcasing my thoughts, tutorials, and projects.

## Features

* **Next.js Framework**: Utilizes the React-based Next.js framework for server-side rendering and static site generation.
* **Responsive Design**: Ensures a seamless reading experience across all devices.
* **Markdown Support**: Write and manage posts in Markdown format.
* **SEO Optimized**: Implements best practices for search engine optimization.
* **Dark Mode**: Toggle between light and dark themes for user preference.

## Technologies Used

* **Next.js**: React framework for building the application.
* **React**: JavaScript library for building user interfaces.
* **Markdown**: Lightweight markup language for writing posts.
* **Tailwind CSS**: Utility-first CSS framework for styling.
* **Vercel**: Platform for deploying the application.

## Getting Started

### Prerequisites

* Node.js (>=14.0.0)
* npm or yarn

### Installation

Clone the repository:

```bash
git clone https://github.com/AlexNicolasCode/Blog.git
cd Blog
```

Install dependencies:

```bash
npm install
# or
yarn install
```

### Running the Development Server

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the blog.

### Building for Production

Build the application for production:

```bash
npm run build
# or
yarn build
```

Start the production server:

```bash
npm start
# or
yarn start
```

## Usage

* **Creating Posts**: Add new Markdown files in the `posts` directory. Each file should have a frontmatter section for metadata like title, date, and tags.
* **Editing Content**: Modify the content within the Markdown files using standard Markdown syntax.
* **Styling**: Customize the appearance by editing the `styles` directory and modifying Tailwind CSS configurations.

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.

2. Create a new branch (`git checkout -b feature-branch`).

3. Make your changes.

4. Commit your changes using **Conventional Commits**:

   * **feat**: for new features
   * **fix**: for bug fixes
   * **docs**: for documentation changes
   * **style**: for code formatting or style changes
   * **refactor**: for code refactoring
   * **test**: for adding or updating tests
   * **chore**: for maintenance tasks

   Example: `git commit -m "feat: add dark mode toggle"`

5. Push to the branch (`git push origin feature-branch`).

6. Create a new Pull Request.
