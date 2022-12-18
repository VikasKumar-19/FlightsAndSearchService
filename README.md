## Role-based folder structure (NOT Feature-Based)
### In role-based all models will be present in models folder, all controllers will be present in controllers folder, same for others.
  - src/
    - index.js  //server
    - models/ -> how the rows in table look like in db
    - controllers/
    - middlewares/
    - services/
    - utils/
    - config/
    - repository -> give methods through which we can access 
    the models
  - tests/ [later]
  - static/
  - temp/