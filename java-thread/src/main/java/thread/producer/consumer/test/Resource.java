package thread.producer.consumer.test;

public class Resource {
	
	private int content;
	boolean isContentFull = false;
	
	public synchronized void put(int content){
		if(isContentFull){
			try {
				wait();
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
		this.content = content;
		System.out.println("value produced is : " + this.content);
		isContentFull = true;
		notifyAll();
	}
	
	public synchronized void get(){
		if(!isContentFull){
			try {
				wait();
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
		System.out.println("value consumed is : " + this.content);
		isContentFull = false;
		notifyAll();
	}
	

}
