package com.streamsonic.backend.services;

import com.streamsonic.backend.models.Stream;
import com.streamsonic.backend.repositories.StreamRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StreamService {

    private final StreamRepository streamRepository;

    public StreamService(StreamRepository streamRepository) {
        this.streamRepository = streamRepository;
    }

    public Stream createStream(Stream stream) {
        return streamRepository.save(stream);
    }

    public Optional<Stream> getStream(Long id) {
        return streamRepository.findById(id);
    }

    public List<Stream> getAllStreams() {
        return streamRepository.findAll();
    }

    public Stream updateStream(Stream stream) {
        return streamRepository.save(stream);
    }

    public void deleteStream(Long id) {
        streamRepository.deleteById(id);
    }
}
