package collection.stream.test;

public class Dish {
	private DISHTYPE type;
	private int calory;

	public Dish(final DISHTYPE type, final int calory) {
		this.type = type;
		this.calory = calory;

	}

	public DISHTYPE getType() {
		return type;
	}

	public int getCalory() {
		return calory;
	}

	public enum DISHTYPE {
		VEG(0), NONVEG(1);

		private int type;

		DISHTYPE(int type) {
			this.type = type;
		}

		public int GetType() {
			return type;
		}
	}

}
