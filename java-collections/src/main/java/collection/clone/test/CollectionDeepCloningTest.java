package collection.clone.test;

import java.util.Collection;
import java.util.HashSet;
import java.util.Iterator;

public class CollectionDeepCloningTest {

	public static void main(String[] args) {
		Collection<Employee> orginal = new HashSet<Employee>();
		orginal.add(new Employee("Joe", "Manager"));
		orginal.add(new Employee("Tim", "Developer"));
		orginal.add(new Employee("Frank", "Developer"));
		
		//Instead of using Copy constructor,use this code to return deep copy of collection
		Collection<Employee> copy = new HashSet<Employee>(orginal.size());
		for(Employee emp : orginal){
			Employee newEmp = new Employee(emp.getName(),emp.getDesignation());
			copy.add(newEmp);
		}
		
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

