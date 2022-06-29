import * as amqplib from 'amqplib';


export default class RabbitMQService {
    
        private connection: amqplib.Connection;
        private channel: amqplib.Channel;
        static instance: RabbitMQService;
    
        constructor() {
            this.connect();
        }

        public static getInstance(): RabbitMQService {
            if (!RabbitMQService.instance) {
                RabbitMQService.instance = new RabbitMQService();
            }
            return RabbitMQService.instance;
        }
    
        private async connect() {
            this.connection = await amqplib.connect(`amqp://guest:guest@rabbitmq-server-deconto:5672`);
            this.channel = await this.connection.createChannel();
        }
    
        public async publish(queue: string, message: string) {
            await this.channel.assertQueue(queue);
            this.channel.sendToQueue(queue, Buffer.from(message));
        }

        public async consume(queue: string, callback: (message: string) => void) {
            await this.channel.assertQueue(queue);
            this.channel.consume(queue, (message) => {
                if (message) {
                    callback(message.content.toString());
                }
            });
        }
}