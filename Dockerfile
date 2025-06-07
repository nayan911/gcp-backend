FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Define build arguments for database credentials
ARG DB_HOST
ARG DB_NAME
ARG DB_USER
ARG DB_PASSWORD

# Set environment variables using the build arguments
ENV PORT=3000
ENV DB_HOST=${DB_HOST}
ENV DB_NAME=${DB_NAME}
ENV DB_USER=${DB_USER}
ENV DB_PASSWORD=${DB_PASSWORD}

EXPOSE 3000

CMD ["node", "server.js"]
