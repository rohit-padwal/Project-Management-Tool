package com.uta.streamline.enums;

public enum NotificationType {
    DEADLINE("Deadline"), ASSIGNED("Assigned"), COMMENT("Comment");

    private String value;

    private NotificationType(String value) {
        this.value = value;
    }

    private String getValue() {
        return this.value;
    }
}
