use todoapp;

DROP TABLE IF EXISTS todoItem;
DROP TABLE IF EXISTS todoList;
DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
	id INTEGER NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
    name TEXT
);

CREATE TABLE IF NOT EXISTS todoList (
	id INTEGER NOT NULL AUTO_INCREMENT,
    uid INTEGER,
	PRIMARY KEY (id),
    FOREIGN KEY (uid) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS todoItem (
	id INTEGER AUTO_INCREMENT,
    tid INTEGER NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (tid) REFERENCES todoList(id),
    content TEXT
);

INSERT INTO users (name) VALUES ("Amélie"), ("Arthor"), ("Earvin"); 
INSERT INTO todoList (uid) VALUES (1); 
INSERT INTO todoItem (tid, content) VALUES (1, "finish exercises"); 

SELECT * FROM users;
SELECT * FROM todoList;
SELECT * FROM todoItem;
SELECT u.id as userId, name, l.id as todoListId, i.id as todoItemId, content FROM users as u, todoList as l, todoItem as i WHERE u.id = l.uid AND l.id = i.tid;