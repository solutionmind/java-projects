package thread.join.test;

public class NameRunnable implements Runnable {
	
	public void run() {
		for (int x = 1; x <= 3; x++) {
			System.out.println("Run by " + Thread.currentThread().getName()
					+ ", x is " + x);
		}
	}
} 
