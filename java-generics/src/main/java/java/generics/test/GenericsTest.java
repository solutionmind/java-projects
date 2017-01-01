package java.generics.test;

import java.util.List;

public class GenericsTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}
	
	//can be invoked by list<A> OR list<B> OR list<C>
	private void processExtendsList(List<? extends A> list){
		//can read only
		for(A a : list){
			System.out.println(a);
		}
		
		//can not put anything including A
		A a = new A();
		//list.add(a); // raise compilation error
		
		//can not put anything
		B b = new B();
		//list.add(b); // raise compilation error
	}
	
	//can be invoked by list<A> OR list<Object>
   private void processSuperList(List<? super A> list){
	    //can read only.element is casted to super of A i.e Object
		for(Object a : list){
			System.out.println(a);
		}
		
		//can put A
		A a = new A();
		list.add(a);
		
		//can put subclass of A like B OR C
		B b = new B();
		list.add(b);
	}

}
