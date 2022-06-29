package com.mail.sender.models.dto;

import java.io.Serializable;

public class MessageDTO implements Serializable {

    private int month;
    private int year;
    private int hours;
    private float value;
    private float brute;
    private float irrf;
    private float inss;
    private float fgts;
    private float liquid;
    private EmployeeDTO employee;
    private boolean processed;

    public MessageDTO(int month, int year, int hours, float value, float brute, float irrf, float inss, float fgts,
            float liquid, EmployeeDTO employee, boolean processed) {
        this.month = month;
        this.year = year;
        this.hours = hours;
        this.value = value;
        this.brute = brute;
        this.irrf = irrf;
        this.inss = inss;
        this.fgts = fgts;
        this.liquid = liquid;
        this.employee = employee;
        this.processed = processed;
    }

    public MessageDTO() {
    }

    public int getMonth() {
        return month;
    }

    public void setMonth(int month) {
        this.month = month;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public int getHours() {
        return hours;
    }

    public void setHours(int hours) {
        this.hours = hours;
    }

    public float getValue() {
        return value;
    }

    public void setValue(float value) {
        this.value = value;
    }

    public float getBrute() {
        return brute;
    }

    public void setBrute(float brute) {
        this.brute = brute;
    }

    public float getIrrf() {
        return irrf;
    }

    public void setIrrf(float irrf) {
        this.irrf = irrf;
    }

    public float getInss() {
        return inss;
    }

    public void setInss(float inss) {
        this.inss = inss;
    }

    public float getFgts() {
        return fgts;
    }

    public void setFgts(float fgts) {
        this.fgts = fgts;
    }

    public float getLiquid() {
        return liquid;
    }

    public void setLiquid(float liquid) {
        this.liquid = liquid;
    }

    public EmployeeDTO getEmployee() {
        return employee;
    }

    public void setEmployee(EmployeeDTO employee) {
        this.employee = employee;
    }

    public boolean isProcessed() {
        return processed;
    }

    public void setProcessed(boolean processed) {
        this.processed = processed;
    }

    
}
