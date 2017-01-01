package collection.unidirectional.node.test;

public class SingleNodeDemo {

	public static void main(String[] args) {
		SingleNodeDemo demo = new SingleNodeDemo();
		Node<String> first = demo.populateNode();
		demo.logItems(first);
	}
	
	private Node<String> populateNode(){
		Node<String> first = new Node<String>("apple",null);
		Node<String> second = new Node<String>("orrange",first);
		Node<String> third = new Node<String>("papaya",second);
		Node<String> forth = new Node<String>("pineApple",third);
		Node<String> fifth = new Node<String>("berry",forth);
		Node<String> sexth = new Node<String>("carot",fifth);
		Node<String> seventh = new Node<String>("tomatto",sexth);
		return first;
	}
	
	private void logItems(Node<String> first){
		Node<String> next;
		Node<String> current = first;
		System.out.println(current.getItem());
		next = current.getNext();
		
		while(next != null){
			System.out.println(next.getItem());
			next = next.getNext();
		}
		
	}

}
