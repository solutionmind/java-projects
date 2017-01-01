package thread.pass.by.copy.test;


public class Test {
	
	public static volatile int mainInt = 10; // main memory

	public static void main(String[] args) {
		
		PassByCopy p = new PassByCopy(Test.mainInt);
		Thread t = new Thread(p);
		t.start();
		
		 //new ChangeMaker().start();
		
		try{
			Thread.sleep(1000);
		}catch(InterruptedException e){
			
		}
		
		System.out.println("int value in main thread :" + mainInt);
		
	}
	
	  /*static class ChangeMaker extends Thread{
	        @Override
	        public void run() {
	            int local_value = mainInt;
	            local_value = local_value + 1;
	            mainInt = local_value;
	        }
	    }*/

}
