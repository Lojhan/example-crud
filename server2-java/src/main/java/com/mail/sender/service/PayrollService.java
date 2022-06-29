package com.mail.sender.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.mail.sender.models.dto.MessageDTO;

@Service
public class PayrollService {

    List<MessageDTO> messages = new ArrayList<MessageDTO>();

    public  PayrollService() {
    }
    public void addMessage(MessageDTO message) {
        this.messages.add(message);
    }

    public List<MessageDTO> getMessages() {
        return messages;
    }

    public Float getAverage() {
        Float average = 0f;
        for (MessageDTO message : messages) {
            average += message.getBrute();
        }
        return average / messages.size();
    }

    public int getCount() {
        return messages.size();
    }
    
}