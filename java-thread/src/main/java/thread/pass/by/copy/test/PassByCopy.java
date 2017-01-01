package thread.pass.by.copy.test;

public class PassByCopy implements Runnable {
	private volatile int copyInt;

	public PassByCopy(int anInteger) {
		this.copyInt = anInteger;
	}
	
	public int getCopyInt(){
		return copyInt;
	}

	@Override
	public void run() {
		copyInt = copyInt + 1;
		Test.mainInt = copyInt;
		System.out.println("int local value in child thread :" + copyInt);

	}

}
