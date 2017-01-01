package collection.unidirectional.node.test;

import java.util.Collection;
import java.util.ConcurrentModificationException;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;

public class UniLinkedList<E> implements List<E> {
	
	transient int size = 0;
	
	transient Node<E> first;
	
	transient Node<E> last;
	
	 private static class Node<E> {
	        E item;
	        Node<E> next;

	        Node(E element, Node<E> next) {
	            this.item = element;
	            this.next = next;
	        }
	    }
	 
	 public UniLinkedList(){
		 
	 }

	@Override
	public int size() {
		return size;
	}

	@Override
	public boolean isEmpty() {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean contains(Object o) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public Iterator<E> iterator() {
		return new UniLinkedListIterator();
	}
	
	/*UniLinkedListIterator is fail fast*/
	private class UniLinkedListIterator implements  Iterator<E>{
		int cursor = 0;
		int modCount = size;
		int currentIndex = 0;
		Node<E> next = null;
 
		@Override
		public boolean hasNext() {
			return cursor < size;
		}

		@Override
		public E next() {
			if(modCount != size){
				throw new ConcurrentModificationException();
			}
			
			cursor++;
			next = getNode(currentIndex);
			currentIndex++;
			
			return next.item;
		}

		@Override
		public void remove() {
			// TODO Auto-generated method stub
			
		}
		
	}
	
	Node<E> getNode(int index){
		Node<E> next = first;
		
		if(index == 0){
			next = first;
		}else{
			for(int i=0;i<index;i++){
				next = next.next;
			}
		}
		return next;
	}

	@Override
	public Object[] toArray() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public <T> T[] toArray(T[] a) {
		// TODO Auto-generated method stub
		return null;
	}
	
	private void addLast(E e){
		Node<E> l = last;
		Node<E> newNode = new Node(e,null);
		last = newNode;
		
		if(l == null){
		 first = newNode;	
		}else{
			l.next = newNode;
		}
		size++;
	}

   /*can contain duplicate element*/
	@Override
	public boolean add(E e) {
		addLast(e);
		return true;
	}
	
	/*unlink can be done at three position - first or middle or last*/
	 E unlink(Node<E> x) {
		 Node<E> previous =  previousOf(x);
		 Node<E> next =  x.next;
		 
		 //at first position
		 if(previous == null){
			first = x.next; 
		 }
		//at last position
		 if(next == null){
			 last = previous;
			 
		 }else{ // middle position
			 previous.next = x.next;
		 }
		 
		 size--;
		 return x.item;
	 }
	 
	 Node<E> previousOf(Node<E> y){
		 int previousNodeIndex = indexOf(y) - 1;
		 int currentIndex = 0;
		 Node<E> previousNode = null;
		 
		 if(previousNodeIndex != -1){
			 for (Node<E> x = first; x != null; x = x.next) {
		            if (currentIndex == previousNodeIndex) {
		            	previousNode = x;
		            	break;
		            }
		            currentIndex = currentIndex + 1;
		        }
		 }
		
		return previousNode;
		
	 }

	@Override
	public boolean remove(Object o) {
		if (o == null) {
            for (Node<E> x = first; x != null; x = x.next) {
                if (x.item == null) {
                    unlink(x);
                    return true;
                }
            }
        } else {
            for (Node<E> x = first; x != null; x = x.next) {
                if (o.equals(x.item)) {
                    unlink(x);
                    return true;
                }
            }
        }
        return false;
	}

	@Override
	public boolean containsAll(Collection<?> c) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean addAll(Collection<? extends E> c) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean addAll(int index, Collection<? extends E> c) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean removeAll(Collection<?> c) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean retainAll(Collection<?> c) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public void clear() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public E get(int index) {
		
		return null;
	}

	@Override
	public E set(int index, E element) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void add(int index, E element) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public E remove(int index) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int indexOf(Object o) {
		int index = 0;
		
		if(o == null){
			for (Node<E> x = first; x != null; x = x.next) {
	            if (x.next == null) {
	            	return index;
	            }
	            index = index + 1;
	        }
		}else{
			for (Node<E> x = first; x != null; x = x.next) {
	            if (o.equals(x.item)) {
	            	return index;
	            }
	            index = index + 1;
	        }
		}
		
		return index;
	}

	@Override
	public int lastIndexOf(Object o) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public ListIterator<E> listIterator() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ListIterator<E> listIterator(int index) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<E> subList(int fromIndex, int toIndex) {
		// TODO Auto-generated method stub
		return null;
	}

}
