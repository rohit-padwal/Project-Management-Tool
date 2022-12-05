package com.uta.streamline.exceptions;

public class StreamlineException extends RuntimeException {

    public StreamlineException(String exMessage, Exception exception) {
        super(exMessage, exception);
    }

    public StreamlineException(String exMessage) {
        super(exMessage);
    }

}
