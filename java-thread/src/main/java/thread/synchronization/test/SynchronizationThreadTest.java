package thread.synchronization.test;

public class SynchronizationThreadTest {

	public static void main(String[] args) {
		SynchronizationThread job1 = new SynchronizationThread();
		SynchronizationThread job2 = new SynchronizationThread();
		SynchronizationThread job3 = new SynchronizationThread();
	
		Thread one = new Thread(job1);
		Thread two = new Thread(job2);
		Thread three = new Thread(job3);
		
		one.setName("Fred");
		two.setName("Lucy");
		three.setName("Ricky");
		
		one.start();
		two.start();
		three.start();
		
	}

}
