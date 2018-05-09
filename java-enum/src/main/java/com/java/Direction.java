package com.java;

public enum Direction {

	NORTH(1), SOUTTH(2), EAST(3), WEST(4);

	private int value;

	private Direction(int val) {
		this.value = val;
	}

}
