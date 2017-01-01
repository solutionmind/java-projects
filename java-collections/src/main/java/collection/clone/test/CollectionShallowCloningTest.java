package collection.clone.test;

import java.util.Collection;
import java.util.HashSet;
import java.util.Iterator;

public class CollectionShallowCloningTest {

	public static void main(String[] args) {
		Collection<Employee> orginal = new HashSet<Employee>();
		orginal.add(new Employee("Joe", "Manager"));
		orginal.add(new Employee("Tim", "Developer"));
		orginal.add(new Employee("Frank", "Developer"));
		
		//creating copy of Collection using copy constructor -  which always gives shallow copy
		Collection<Employee> copy = new HashSet<>(orginal);
		
		System.out.println("original before modification {} " + orginal );
		System.out.println("copy before modification {} " + copy );

		Iterator<Employee> itr = orginal.iterator();
		while (itr.hasNext()) {
			itr.next().setDesignation("staff");
		}
		
		System.out.println("original after modification {} " + orginal );
		System.out.println("copy afetr modification {} " + copy );

	}

}
