package collection.unidirectional.node.test;

/**
 * @author r.kumar.kushwaha
 *
 * @param <T>
 * 
 * This is unidirectional node. it can be iterated in only one direction.
 */
public class Node<T> {
	private T item;
	private Node<T> next;

	public T getItem() {
		return item;
	}

	public Node<T> getNext() {
		return next;
	}

	public Node(String item, Node<T> previous) {
		this.item = (T) item;
		this.next = null;
		
		if (previous != null) {
			previous.next = this;
		}
	}
	
	public Node(Integer item, Node<T> previous) {
		this.item = (T) item;
		this.next = null;
		
		if (previous != null) {
			previous.next = this;
		}
	}

}
