package thread.threadLocal.test;

public class ThreadLocalPersonContainer implements Runnable  {
	
	Person p;

	public ThreadLocalPersonContainer(Person p) {
		this.p = p;
	}

	private ThreadLocal<Person> myThreadLocalPerson = new ThreadLocal<Person>() {
	    @Override protected Person initialValue() {
	        return p;
	    }
	};
	
	@Override
	public void run() {
		myThreadLocalPerson.get().setName("it is new name");
		System.out.println(myThreadLocalPerson.get().getName());
		
	}

}
