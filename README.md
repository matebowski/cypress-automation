[![GitHub Actions](https://github.com/matebowski/cypress-automation/actions/workflows/cypress.yml/badge.svg)](https://github.com/matebowski/cypress-automation/actions)
# Cypress Test Automation Project

## Project Overview

This is an automation testing project for an e-commerce-like store. It uses Cypress with TypeScript to provide end-to-end test coverage for key user flows such as login, product sorting, and cart functionality.

## Installation and Setup

### Prerequisites
- **Node.js** (version 14 or higher)
- **npm** (or yarn)

### Installation Steps
Clone the repository:
```bash
git clone https://github.com/matebowski/cypress-automation.git
```
Navigate to the project directory:
```bash
cd cypress-automation
```
Install dependencies:
```bash
npm install
```

### How to Run the Project
Running Tests
Cypress Test Runner (Interactive Mode):
```bash
npx cypress open
```
Headless Mode:
```bash
npx cypress run

```
## CI/CD
GitHub Actions automatically runs tests on every push to main and can be manually triggered. The workflow file is located in .github/workflows/cypress.yml.
