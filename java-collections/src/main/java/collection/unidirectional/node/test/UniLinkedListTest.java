package collection.unidirectional.node.test;

import java.util.Iterator;

public class UniLinkedListTest {

	public static void main(String[] args) {
		
		UniLinkedList<Integer> list = new UniLinkedList<>();
		list.add(2);
		list.add(3);
		list.add(4);
		list.add(5);
		
		Iterator<Integer> itr = list.iterator();
		
		while(itr.hasNext()){
			System.out.println(itr.next());
		}

	}

}
