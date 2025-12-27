package com.streamsonic.backend;

import com.streamsonic.backend.models.Stream;
import com.streamsonic.backend.repositories.StreamRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {

    private final StreamRepository streamRepository;

    public DataLoader(StreamRepository streamRepository) {
        this.streamRepository = streamRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        streamRepository.save(new Stream("Live Stream 1", "Music Concert", "http://example.com/stream1"));
        streamRepository.save(new Stream("Live Stream 2", "Gaming Live", "http://example.com/stream2"));
        streamRepository.save(new Stream("Live Stream 3", "Tech Talk", "http://example.com/stream3"));
    }
}
