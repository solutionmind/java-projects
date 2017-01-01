package thread.deadlock.test;

public class Resource1 {
	
	public synchronized void printResource(Resource2 resource2){
		System.out.println("Hey I am Resource 1");
		resource2.printResource();
	}
	
	public synchronized void doSomething(){
		for(int i=0;i<2;i++)
		{
			
		}
		
		System.out.println("resource 1 doing something");
	}

}
