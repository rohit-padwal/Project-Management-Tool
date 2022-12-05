package com.uta.streamline.enums;

public enum Priority {
    LOW("Low"), MEDIUM("Medium"), HIGH("High");

    private String value;

    private Priority(String value) {
        this.value = value;
    }

    private String getValue() {
        return this.value;
    }
}
