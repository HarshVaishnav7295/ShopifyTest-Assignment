# Assignment Task : 

## Steps : 
- npm i
- add keys in .env file as per .env.example
- node app.js -name {product_name}

## TestCases : 

### TestCase-0 : 
- Input : 
``` node app.js -name Assignment Product ```
- Outputs : 
```
Assignment Product 1 - 2 / black - price $10 
Assignment Product 1 - 2 / white - price $10 
Assignment Product 1 - 2 / red - price $10 
Assignment Product 1 - 2 / blue - price $10 
Assignment Product 1 - 3 / black - price $15 
Assignment Product 1 - 3 / white - price $15 
Assignment Product 1 - 3 / red - price $15 
Assignment Product 1 - 3 / blue - price $15 
Assignment Product 2 - 3 / black - price $15 
Assignment Product 2 - 3 / white - price $15 
Assignment Product 2 - 3 / red - price $15 
Assignment Product 2 - 3 / blue - price $15 
Assignment Product 1 - 4 / black - price $20 
Assignment Product 1 - 4 / white - price $20 
Assignment Product 2 - 4 / black - price $20 
Assignment Product 2 - 4 / white - price $20 
Assignment Product 2 - 2 / black - price $25 
Assignment Product 2 - 2 / white - price $25 
Assignment Product 2 - 2 / red - price $25 
Assignment Product 2 - 2 / blue - price $25 
```

### TestCase-1 : 
- Input : 
``` node app.js -name A shirt ```
- Outputs : 
```
A shirt - 3 / black - price $15 
A shirt - 3 / white - price $15 
A shirt - 3 / red - price $15 
A shirt - 3 / blue - price $15 
A shirt - 2 / black - price $25 
A shirt - 2 / white - price $25 
A shirt - 2 / red - price $25 
A shirt - 2 / blue - price $25 
A shirt - 4 / black - price $35 
A shirt - 4 / white - price $35 
```

### TestCase-2 : 
- Input : 
``` node app.js -name Test ```
- Outputs : 
```
Test - Default Title - price $100 
```