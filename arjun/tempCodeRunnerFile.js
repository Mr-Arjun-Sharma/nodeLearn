eturn console.error(err);
        res.end(data.toString());
    });
});

server.listen(8000, "127.0.0.1");