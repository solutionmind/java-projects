package thread.synchronization.test;

public class CommonResource {
	
	public static synchronized void printNameAtClassLevel(String name){ //lock at class level
		for(int i=0;i<4;i++){
			System.out.println("at class level lock :" + name);
			try {
				Thread.sleep(2000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
	
	public synchronized void printNameAtInstanceLevel(String name){ //lock at instance level
		for(int i=0;i<4;i++){
			System.out.println("at instance level lock :" + name);
			try {
				Thread.sleep(2000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}

}
