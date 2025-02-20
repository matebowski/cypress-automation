# Cypress Test Automation Project

## Project Overview

This is an automation testing project for an e-commerce-like store. It uses Cypress with TypeScript to provide end-to-end test coverage for key user flows such as login, product sorting, and cart functionality.

## Installation and Setup

### Prerequisites

- **Node.js** (version 14 or higher)
- **npm** (or yarn)

### How to Run the Project

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run Cypress in Interactive Mode**

To open the Cypress Test Runner, execute:

  ```bash
  npx cypress open
  ```

## CI/CD
GitHub Actions automatically runs tests on every push to main and can be manually triggered. The workflow file is located in .github/workflows/cypress.yml.
