package com.streamsonic.backend.controllers;

import com.streamsonic.backend.models.Stream;
import com.streamsonic.backend.repositories.StreamRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class StreamController {

    private final StreamRepository streamRepository;

    public StreamController(StreamRepository streamRepository) {
        this.streamRepository = streamRepository;
    }

    @GetMapping("/api/streams")
    public List<Stream> getStreams() {
        return streamRepository.findAll();
    }
}
