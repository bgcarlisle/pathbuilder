# PATH builder

PATH builder is proudly 100% artificial intelligence-free. It does not
include AI, does not require AI integration, and none of the code or
documentation was written using AI.

## Requirements

### Pandoc (make Word document)

Download pandoc from https://github.com/jgm/pandoc/releases/

Get the one that ends with `amd64.tar.gz`

Unzip the `bin` folder and send its contents to `~/bin` on your server

Make `pandoc` executable

```
$ chmod +x ~/bin/pandoc
```

Put it in your path

```
$ echo 'export PATH="$HOME/bin:$PATH"' >> ~/.bash_profile
$ source ~/.bash_profile
```

Now pandoc should work

Put the absolute path in `config.php`
