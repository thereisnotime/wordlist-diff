# Wordlist-diff

### Description ###
A simple tool to complement wordlist work.
Let's say you have two files - small.txt and large.txt.

small.txt
```text
apple
pineapple
pen
``` 
large.txt
```text
apple
test
something
pineapple
melon
pen
``` 
After you run index.js, you will have difference.txt containing:
```text
test
something
melon
```

### Requirements ###
Built-in modules: fs

### Usage ###
Place your remove list in the project directory as small.txt and the list from you will remove - large.txt. Then run:
```sh
node index.js
``` 
* Use Unix (LF) line endings.
