package thread.deadlock.test;

public class Resource2 {
	
	public synchronized void printResource(){
		System.out.println("Hey I am Resource 2 ");
	}
	
	public synchronized void doSomething( Resource1 resource1){
		for(int i=0;i<2;i++)
		{
			
		}
		
		System.out.println("resource 2 doing something");
		resource1.doSomething();
		 
	}
	
}
