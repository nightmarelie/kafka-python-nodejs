from confluent_kafka import Consumer

conf = {
    'bootstrap.servers': 'localhost:29092',
    'group.id': 'my-kafka-app',
    'auto.offset.reset': 'latest'
}

consumer = Consumer(conf)

def consume_messages():
    consumer.subscribe(['current_time'])

    while True:
        msg = consumer.poll(1.0)
        if not msg:
            continue

        print('Received message: {}'.format(msg.value().decode('utf-8')))

if __name__ == '__main__':
    consume_messages()
