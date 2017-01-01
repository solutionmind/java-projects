package thread.producer.consumer.test;

public class Consumer implements Runnable {
	
  private Resource resource;
  
  public Consumer(Resource resource){
	  this.resource = resource;
  }
  
	@Override
	public void run() {
		// TODO Auto-generated method stub
		
		for(int i=0;i<10;i++){
			resource.get();
		}
		
	}

}
