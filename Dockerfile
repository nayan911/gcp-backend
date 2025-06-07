FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Set environment variables directly with hardcoded values
ENV PORT=3000
ENV DB_HOST=104.198.198.225
ENV DB_NAME=gcp
ENV DB_USER=root
ENV DB_PASSWORD=New_password123

EXPOSE 3000

CMD ["node", "server.js"]
