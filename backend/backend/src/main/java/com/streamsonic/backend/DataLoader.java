package com.streamsonic.backend;

import com.streamsonic.backend.models.Stream;
import com.streamsonic.backend.repositories.StreamRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Autowired;

@Component
public class DataLoader implements CommandLineRunner {

    @Autowired
    private StreamRepository streamRepository;

    @Override
    public void run(String... args) throws Exception {
        // Sample data
        streamRepository.save(new Stream("Music Stream", "Stream music online"));
        streamRepository.save(new Stream("Video Stream", "Stream videos online"));
        streamRepository.save(new Stream("Podcast Stream", "Stream podcasts online"));

        System.out.println("Sample data inserted successfully!");
    }
}
