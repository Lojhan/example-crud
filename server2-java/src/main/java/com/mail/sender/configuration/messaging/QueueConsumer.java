package com.mail.sender.configuration.messaging;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mail.sender.models.dto.MessageDTO;
import com.mail.sender.models.dto.calculatedDataDTO;
import com.mail.sender.service.PayrollService;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Component;


@Component
public class QueueConsumer {
    
    @Autowired
    private PayrollService payrollService;

    @RabbitListener(queues = {"${queue.name.userTicket}"})
    public void userTicketMailQueueConsume(@Payload String params) {
        try {
            ObjectMapper mapper = new ObjectMapper();
            calculatedDataDTO map = mapper.readValue(params, calculatedDataDTO.class);
            payrollService.addMessage(map.getCalculatedData());
            System.out.println("Received message: " + map.getCalculatedData().getBrute());
        } catch (Exception e) {
            e.printStackTrace();
        } catch (Throwable throwable) {
            throwable.printStackTrace();
        }
    }
}