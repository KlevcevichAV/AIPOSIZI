package com.iit.lab2.persist.response;
// сделать дату стринг, или обжект, посмотрим, ну и если строка то просто ещё раз конвертировать :)))) если обжект, то тоже можно будет ччекнуть, хыыыыыыыыыыыыыыыыыыыыыыы
public class Response {
    private final int status;
    private final String detailMessage;
    private String type;
    private Object data;

    public Response(int status, String detailMessage, Object data) {
        this.status = status;
        this.detailMessage = detailMessage;
        this.data = data;
    }

    public Response(int status, String detailMessage, String type) {
        this.status = status;
        this.detailMessage = detailMessage;
        this.type = type;
    }

    public int getStatus() {
        return status;
    }

    public String getDetailMessage() {
        return detailMessage;
    }

    public Object getData() {
        return data;
    }

    public String getType() {
        return type;
    }
}
