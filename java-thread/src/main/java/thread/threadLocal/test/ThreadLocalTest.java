package thread.threadLocal.test;

public class ThreadLocalTest {

	public static void main(String[] args) {
     Person p = new Person(); //this person is in main thread
		
     ThreadLocalPersonContainer cont = new ThreadLocalPersonContainer(p); // passing the person to child thread
		Thread t = new Thread(cont);
		t.start();
		
		/*here change done to person object by child thread will not be reflected in main thread person object.
		 * So person object is in thread local in this case*/
		
		try{
			Thread.sleep(1000);
		}catch(InterruptedException e){
			
		}
		
		System.out.println("person name in main thread :" + p.getName());

	}

}
