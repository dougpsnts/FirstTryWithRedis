# Node.js & Redis Containerization Project

![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Redis](https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white)

## 🎓 Academic Context

This project was developed within the scope of an **Information Systems** course to demonstrate the practical application of **In-Memory Data Structures**.

The primary objective is to illustrate how **Redis** operates as a high-performance key-value store alongside a Node.js backend. Instead of using a traditional relational database (SQL), this project utilizes Redis to handle **atomic operations** and state management efficiently.

### 🔑 Key Concepts Covered
* **NoSQL Databases:** Understanding key-value storage paradigms.
* **Atomic Increments:** Using the Redis `INCR` command to handle concurrency safely.
* **Persistence:** Managing data lifespan outside the application process.
* **Container Networking:** Connecting an application service to a database service via Docker Compose.

## 🛠️ Technologies

* **Runtime:** Node.js (v20)
* **Framework:** Express.js
* **Database:** Redis (Alpine image)
* **Containerization:** Docker & Docker Compose

## 🚀 How to Run

Since the project is fully containerized, you do not need to install Node.js or Redis locally. You only need Docker installed on your machine.

### Prerequisites

* [Docker Engine](https://docs.docker.com/engine/install/)
* [Docker Compose](https://docs.docker.com/compose/install/)

### Installation Steps

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/my-redis-project.git](https://github.com/your-username/my-redis-project.git)
    cd my-redis-project
    ```

2.  **Build and run the environment:**
    Run the following command to download the images, build the application container, and start the services:
    ```bash
    docker-compose up --build
    ```

3.  **Access the application:**
    Once the container is running, open your browser and navigate to:
    
    [http://localhost:3000](http://localhost:3000)

    You should see the message: *"Hi there! This page has been visited X times."*

4.  **Stop the services:**
    To stop the containers, press `Ctrl + C` in the terminal or run:
    ```bash
    docker-compose down
    ```

## 📂 Project Structure

```text
.
├── Dockerfile             # Configuration to build the Node.js image
├── docker-compose.yml     # Orchestration of App + Redis services
├── index.js               # Main server logic and Redis connection
├── package.json           # Project dependencies
└── README.md              # Documentation