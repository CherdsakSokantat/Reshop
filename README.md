# Reshop discounted food app

# About 🧪

This project was created for EN814710 Cloud applications and networking.
Within repository contains both front-end and back-end folder.
Within each folder contains dockerfile declaring the environment.
Docker-Compose was used to create the container containing services for application.

# Installation 📁
## Front-end

Run the project locally via npm
```bash
cd client
npm install
npm run dev
```

## Back-end

Run the project locally via npm
```bash
cd server
npm install
npm run server
```

to connect to mongoDB service locally, change the following line in server/server.js
```bash
const connection = 'mongodb://mongo:27017' ==> const connection = 'mongodb://127.0.0.1:27017'
```

## Run Docker Compose

using local build

```bash
docker-compose up -d --build 
```

using docker image from cloud
```bash
docker-compose up -d
```

### Ports 
```bash
5173: Front-end
4000: Back-end
```
Shut down ports
```bash
docker-compose down
```
## Run Kubernetes cluster
Make sure that ingress has been installed in your device. if not, please install ingress using the following command
```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.0.0/deploy/static/provider/cloud/deploy.yaml
```

Also, makes sure that 127.0.0.1 mern.com has been added to your host file in system32/driver/etc

### Running kubernetes cluster
```bash
cd eks
kubectl apply -f .
```

Deployments, services, and pods can be checked using the following commands
```bash
kubectl get deployment
kubectl get service
kubectl get pods
```

The website can be accessed via the following link

```bash
http://mern.com/
```

### Shutting down kubernetes cluster
```bash
kubectl delete all --all
```
