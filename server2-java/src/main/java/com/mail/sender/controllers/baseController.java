package com.mail.sender.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mail.sender.models.dto.MessageDTO;
import com.mail.sender.service.PayrollService;

@RequestMapping("/")
@RestController
public class baseController {
    
    @Autowired 
    PayrollService service;

    @GetMapping("/folha/listar")
    public List<MessageDTO> listar() {
        return service.getMessages();
    }

    @GetMapping("/folha/media")
    public Float media() {
        return service.getAverage();
    }

    @GetMapping("/folha/total")
    public int count() {
        return service.getCount();
    }
}
