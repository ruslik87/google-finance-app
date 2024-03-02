# google-finance-app
This application displays price ticker data in the user interface in real time. It uses a WebSocket connection for this purpose

# main stack
- React
- TypeScript
- Redux (with Redux-Thunk and Toolkit)
- Material UI
- Socket.io - to connect to the service
- Testing Library Jest

## Running the local service
1. Open a new bash shell
2. ```cd server```
3. ```npm install``` or ```yarn install```
4. ```npm run start``` or ```yarn start```
5. You can visit [http://localhost:4000](http://localhost:4000) to check that the service is working correctly and inspect the data it produces.

## Run your application
1. Open a new bash shell
2. ```cd client```
3. ```npm install``` or ```yarn install```
4. ```npm run start``` or ```yarn start```

## Run the tests
1. Open a new bash shell
2. ```cd client```
3. ```npm run test``` or ```yarn test```