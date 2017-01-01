package thread.deadlock.test;

public class Resource1HolderThread implements Runnable {
	
	private Resource1 resource1;
	private Resource2 resource2;
	 
	 public Resource1HolderThread( Resource1 resource1 , Resource2 resource2 ){
		 this.resource1 = resource1;
		 this.resource2 = resource2;
	 }
	
	@Override
	public void run() {
		resource1.printResource(resource2);
		
	}

}
