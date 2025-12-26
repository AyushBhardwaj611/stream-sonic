package com.streamsonic.backend.controllers;
import com.streamsonic.backend.models.Stream;
import com.streamsonic.backend.services.StreamService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/streams")
public class StreamController {

    private final StreamService streamService;

    public StreamController(StreamService streamService) {
        this.streamService = streamService;
    }

    @PostMapping
    public ResponseEntity<Stream> createStream(@RequestBody Stream stream) {
        return ResponseEntity.ok(streamService.createStream(stream));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Stream> getStream(@PathVariable Long id) {
        return streamService.getStream(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping
    public ResponseEntity<List<Stream>> getAllStreams() {
        return ResponseEntity.ok(streamService.getAllStreams());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Stream> updateStream(@PathVariable Long id, @RequestBody Stream stream) {
        stream.setId(id);
        return ResponseEntity.ok(streamService.updateStream(stream));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteStream(@PathVariable Long id) {
        streamService.deleteStream(id);
        return ResponseEntity.noContent().build();
    }
}
