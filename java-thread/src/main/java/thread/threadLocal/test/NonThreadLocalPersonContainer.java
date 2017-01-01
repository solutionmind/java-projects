package thread.threadLocal.test;

public class NonThreadLocalPersonContainer implements Runnable {
	Person p;

	public NonThreadLocalPersonContainer(Person p) {
		this.p = p;
	}

	@Override
	public void run() {
		p.setName("changed name");

	}

}
