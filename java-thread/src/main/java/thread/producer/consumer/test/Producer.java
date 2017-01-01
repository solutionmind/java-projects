package thread.producer.consumer.test;

public class Producer implements Runnable {

	 private Resource resource;
	 
	 public Producer(Resource resource){
		  this.resource = resource;
	  }
	 
	@Override
	public void run() {
		
		for(int i=0;i<10;i++){
			resource.put(i);
		}
		
	}

}
