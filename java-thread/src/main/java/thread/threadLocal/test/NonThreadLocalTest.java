package thread.threadLocal.test;

public class NonThreadLocalTest {

	public static void main(String[] args) {
		Person p = new Person(); //this person is in main thread
		
		NonThreadLocalPersonContainer cont = new NonThreadLocalPersonContainer(p); // passing the person to child thread
		Thread t = new Thread(cont);
		t.start();
		
		/*now same person object is being pointed by both main and child thread.so change done to person object 
		 * by child thread will be reflected in main thread person object.
		 * So person object is not thread local in this case*/
		
		try{
			Thread.sleep(1000);
		}catch(InterruptedException e){
			
		}
		
		System.out.println("person name in main thread :" + p.getName());

	}

}
