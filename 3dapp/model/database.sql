CREATE TABLE models (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL
);

INSERT INTO models (name, title, description) VALUES ('coke', 'Coke', 'Classic Coca Cola can with a refreshing taste.');
INSERT INTO models (name, title, description) VALUES ('fanta', 'Fanta', 'Bright, bubbly and instantly refreshing Fanta Orange.');
INSERT INTO models (name, title, description) VALUES ('sprite', 'Sprite', 'Crisp, refreshing and clean-tasting Sprite.');
