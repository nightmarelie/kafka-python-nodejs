## Initial setup
1. Start the docker container
```bash
docker-compose up -d
```

2. Create the topic
```bash
docker exec -it 75 kafka-topics --create --bootstrap-server localhost:9092 --replication-factor 1 --partitions 3 --topic current_time
```
