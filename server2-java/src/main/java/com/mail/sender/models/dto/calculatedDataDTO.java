package com.mail.sender.models.dto;

public class calculatedDataDTO {
    private MessageDTO calculatedData;

    public MessageDTO getCalculatedData() {
        return calculatedData;
    }

    public void setCalculatedData(MessageDTO calculatedData) {
        this.calculatedData = calculatedData;
    }

    public calculatedDataDTO(MessageDTO calculatedData) {
        this.calculatedData = calculatedData;
    }

    public calculatedDataDTO() {
    }
}
