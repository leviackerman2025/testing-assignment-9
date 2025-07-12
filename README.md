# Cypress OrangeHRM Automation

## Folder Structure
```
cypress/
  e2e/
    features/           # .feature files (BDD scenarios)
    pages/              # Page Object Model (POM) classes
  fixtures/             # Sensitive data (e.g. users.json)
  support/
    step_definitions/   # Step definitions for each feature
    e2e.js              # Support file
mochawesome-report/     # Mochawesome json report output
```

## How to Run the Tests

1. **Install dependencies**
   ```
   npm install
   ```

2. **Run tests headlessly with Mochawesome HTML report**
   ```
   npx cypress run --reporter cypress-mochawesome-reporter --reporter-options "reportDir=mochawesome-report,overwrite=false,html=true,json=false"
   ```

3. **View the report**
   - Open `mochawesome-report/mochawesome_017.json` 

4. **Screenshots**
   - Screenshots are automatically saved in the `cypress/screenshots/` folder.

## Tested Features
- Login (valid & invalid)
- Add Admin User (Admin Management)
- View My Info
- Logout

## Notes
- Username & password data are stored in `cypress/fixtures/users.json`
- Uses Cypress Cucumber Preprocessor and Page Object Model (POM)
- The structure is modular and scalable

---
