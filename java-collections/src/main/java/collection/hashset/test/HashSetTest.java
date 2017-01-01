package collection.hashset.test;

import java.util.HashSet;
import java.util.Set;

public class HashSetTest {

	public static void main(String[] args) {
	 Set<Person> sets = new HashSet<Person>();
	 
	 Person p1 = new Person("rajesh",1);
	 Person p2 = new Person("ajay",1);
	 
	 sets.add(p1);
	 sets.add(p2);
	 
	 //System.out.println(sets.size());
	 
	 for(Person p : sets){
		 System.out.println(p.getName());
	 }

	}

}
