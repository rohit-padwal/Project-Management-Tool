package com.uta.streamline.enums;

public enum Status {
    OPEN("Open"), IN_PROGRESS("InProgress"), TEST("Test"), COMPLETE("Complete");

    private String value;

    private Status(String value) {
        this.value = value;
    }

    private String getValue() {
        return this.value;
    }
}
