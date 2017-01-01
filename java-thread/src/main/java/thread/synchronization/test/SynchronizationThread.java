package thread.synchronization.test;

public class SynchronizationThread implements Runnable {

	private CommonResource resource = new CommonResource();
	
	@Override
	public void run() {
	//	CommonResource.printNameAtClassLevel(Thread.currentThread().getName());
		resource.printNameAtInstanceLevel(Thread.currentThread().getName());
		
	}

}
