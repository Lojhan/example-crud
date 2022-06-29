package com.mail.sender.models.dto;

import java.io.Serializable;

public class EmployeeDTO implements Serializable {
    private String name;
    private String document;

    public EmployeeDTO(String name, String document) {
        this.name = name;
        this.document = document;
    }

    public EmployeeDTO() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDocument() {
        return document;
    }

    public void setDocument(String document) {
        this.document = document;
    }
}
