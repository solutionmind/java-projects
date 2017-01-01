package thread.deadlock.test;

public class DeadlockTest {

	public static void main(String[] args) {
		
		 Resource1 resource1 = new Resource1();
		 Resource2 resource2 = new Resource2();
		
		Resource1HolderThread thrd1 = new Resource1HolderThread(resource1,resource2);
		Resource2HolderThread thrd2 = new Resource2HolderThread(resource1,resource2);
		
		Thread one = new Thread(thrd1);
		Thread two = new Thread(thrd2);
		
		one.setName("Resource1Holder");
		two.setName("Resource2Holder");
	
		one.start();
		two.start();
	

	}

}
