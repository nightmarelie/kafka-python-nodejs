const { Kafka } = require('kafkajs');

const kafka = new Kafka({
    clientId: 'python-script',
    brokers: ['localhost:29092'],
});
const producer = kafka.producer();

const publishTimestamp = async () => {
    await producer.connect();

    setInterval(async () => {
        const currentTimestamp = new Date().toISOString();

        await producer.send({
            topic: 'current_time',
            messages: [{ value: currentTimestamp },],
        });

        console.log(`Message sent: ${currentTimestamp}`);
    }, 1000);
};

publishTimestamp().catch(console.error);
