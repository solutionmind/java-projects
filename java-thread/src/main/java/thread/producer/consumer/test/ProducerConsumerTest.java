package thread.producer.consumer.test;

public class ProducerConsumerTest {

	public static void main(String[] args) {
		 Resource resource = new Resource();
		 
		 Producer producer = new Producer(resource);
		 Consumer consumer = new Consumer(resource);
		 
		 Thread producerThread = new Thread(producer);
		 Thread consumerThread = new Thread(consumer);
		 
		 producerThread.start();
		 consumerThread.start();

	}

}
