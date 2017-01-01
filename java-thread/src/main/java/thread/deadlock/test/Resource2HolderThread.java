package thread.deadlock.test;

public class Resource2HolderThread implements Runnable {

	private Resource1 resource1;
	private Resource2 resource2;
	 
	 public Resource2HolderThread( Resource1 resource1 , Resource2 resource2 ){
		 this.resource1 = resource1;
		 this.resource2 = resource2;
	 }
	
	@Override
	public void run() {
		resource2.doSomething(resource1);
		//resource1.printResource();
		
	}

}
