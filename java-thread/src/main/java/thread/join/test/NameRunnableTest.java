package thread.join.test;

public class NameRunnableTest {

	public static void main(String[] args) throws InterruptedException {
		NameRunnable nr = new NameRunnable();
		Thread one = new Thread(nr);
		Thread two = new Thread(nr);
		Thread three = new Thread(nr);
		
		one.setName("Fred");
		two.setName("Lucy");
		three.setName("Ricky");
		
		one.setPriority(Thread.MIN_PRIORITY);
		two.setPriority(Thread.NORM_PRIORITY);
		three.setPriority(Thread.MAX_PRIORITY);
		
		one.start();
		one.join();
		
		two.start();
		two.join();
		
		three.start();
		three.join();

	}

}
