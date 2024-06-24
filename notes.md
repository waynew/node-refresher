# On This File

Just a list of notes on things that I'm learning while I'm learning them, more
or less.

# Quickstart

The node:http quickstart docs were relatively straightforward, and after I
played around I realize that it was telling me most of what I had already
learned by introspection/playing around.


2024-06-24 09:24:41
===================

es6 and beyond has some interesting bits,`--v8-options` piped into `less` sure
has a lot of information. `maglev` is an interesting moniker, probably is
something that goes fast man? There's some allocation flags that look like they
might be interesting. Also some heap & trace flags.


2024-06-24 09:30:09
===================

Some wasm flags; also pretty interesting, mainly because I know of a lot of
things that can (right or wrong) live in the browser's Javascript.

    node -p process.versions.v8  # shows us the version of v8 that ships with this node


2024-06-24 09:43:28
===================

Looks like `NODE_ENV=production` is required for a lot of libs.

    if (process.env.NODE_ENV === 'development') { }

is a pretty popular pattern. Or `s/devevelopment/production. Or

    if (['production', 'staging'].includes(process.env.NODE_ENV)){}
    
I guess another popular one for Express (web server?) is:

    if (process.env.NODE_ENV === 'devlopment') {
        app.use(express.errorHandler({ dumpExceptions: true, showStack:
        true}));
    }

    if (process.env.NODE_ENV === 'production') {
        app.use(express.errorHandler());
    }




2024-06-24 09:48:11
===================

Ah, TypeScript; a very good Javascript? My favorite besides vanilla.js

Let's give that a shot in ts.ts


2024-06-24 11:24:14
===================

That mostly worked, but there was a blerp with my machine, had to reboot.


2024-06-24 11:44:30
===================

    npx tsc ts.ts && node ts.js

This is a good command for compiling and running. There's probably a better way
I don't know about yet. Could put something in the npm run, but not sure?

